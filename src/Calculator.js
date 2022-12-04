import './global.css';
import './Calculator.css';
import { PageHead, PageFoot } from './App';
import React, {useState} from 'react';
import { MunicipalDropdown } from './MunicipalDropdown';
import {SolarPanelScrollList} from './SolarPanelReader';
import * as SolarData from './SolarIrradiationReader';
import Plot from 'react-plotly.js';

import English from './English';
import Albanian from './Albanian';
import { settings } from './Settings';

/**
 * @typedef {import('./SolarPanelReader').SolarPVEntry} SolarPVEntry A collection of data about a specific solar PV example.
 * 
 * @typedef Calculations A collection of calculations based on the entered location and solar PV data.
 * @property {number} AverageMonthlyGeneration
 * @property {number} TotalSavings
 * @property {number} TotalCost
 * @property {number} ReturnOnInvestment
 * @property {number} EmissionsSavings
 */

/**
 * The HTML for the calculator.
 * @returns An HTMLElement representing the calculator, with class "Calculator".
 */
function Calculator() {
    SolarData.loadData();

    SolarData.loadData();

    //Number of Panels calculator state variables
    const [numPanels, setNumPanels] = useState("");

    //Payback Period calculator state variables
    const [paybackPeriod, setPaybackPeriod] = useState("");
    const [totalSavings, setTotalSavings] = useState("");
    const [totalCost, setTotalCost] = useState("");
    const [energyGenerated, setEnergyGenerated] = useState("");
    const [emissionsSavings, setEmissionsSavings] = useState("");

    const [prefecture, setPrefecture] = useState("");

    const [solarName, setSolarName] = useState("Unnamed");
    const [solarManufacturer, setSolarManufacturer] = useState("Unnamed");
    const [solarCost, setSolarCost] = useState(0);
    const [solarArea, setSolarArea] = useState(0);
    const [solarCapacity, setSolarCapacity] = useState(0);
    const [solarEfficiency, setSolarEfficiency] = useState(0);
    const [shouldUseName, setShouldUseName] = useState(false);

    const [monthlyProduction, setMonthlyProduction] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);

    const [albanian, setAlbanian] = useState(settings.albanianVisible.getState());
    settings.albanianVisible.addListener(visible => {
        setAlbanian(visible);
    });

    /**
     * Updates all relevant react functional hooks with the selected solar PV data.
     * @param {SolarPVEntry} pvSelection The selected solar PV to update the hooks with.
     */
    function setSolarData(pvSelection) {
        setSolarName(pvSelection.NameOrModel);
        setSolarManufacturer(pvSelection.Manufacturer);
        setSolarCost(pvSelection.CostPerPanel);
        setSolarArea(pvSelection.AreaPerPanel);
        setSolarCapacity(pvSelection.CapacityPerPanel);
        setSolarEfficiency(pvSelection.Efficiency.replace("%", ""));
    }

    /**
     * Opens the data entry for solar PV selection and municipality selection while bringing the page there
     * @param {React.MouseEvent} e Event data based on click information
     */
    function openMuniPanel(e) {
        e.preventDefault();
        const muniPanel = document.getElementById("muni-panel-choice");
        muniPanel.open = true;
        window.scrollTo(0, muniPanel.offsetTop - 85);
    }

    return (
        <div className="Calculator">
            <PageHead></PageHead>
            <div className="title-box Vert-flex" style={{backgroundImage: `linear-gradient(to bottom, rgba(204,208,209,0) 0%, rgba(220,224,225,0.75) 75%, rgba(236,240,241,1) 100%), url(${process.env.PUBLIC_URL}/calculator-background.jpg)`}}>  
                <English><h2 className="page-title">Solar Calculator</h2></English>
                <Albanian><h2 className="page-title">Llogaritësi diellor</h2></Albanian>
                <English><h3 className="page-subtitle">Find an estimate for your business</h3></English>
                <Albanian><h3 className="page-subtitle">Gjeni një vlerësim për biznesin tuaj</h3></Albanian>
            </div>
            <div className="content">
                <details open> {/* place "open" next to "details" to make it open on load */}
                    <summary>
                        <English><b>Number of panels</b>: The number of panels required to cover 100% of your electricity consumption</English>
                        <Albanian><b>Numri i paneleve</b>: Numri i paneleve të nevojshme për të mbuluar 100% të konsumit të energjisë elektrike</Albanian>
                    </summary>
                    <div className="detail-content">
                        <form onSubmit={e => {
                            e.preventDefault();
                            if(prefecture === "") {
                                return;
                            }
                            setNumPanels(calcNumPanels(prefecture, solarArea, solarCapacity, solarEfficiency));
                        }}>
                            <English>Enter municipality and solar panel info <a href="#muni-panel-choice" onClick={openMuniPanel}>here</a></English>
                            <Albanian>Shkruani informacionin e bashkisë dhe panelit diellor <a href="#muni-panel-choice" onClick={openMuniPanel}>këtu</a></Albanian>
                            <div className="Hor-flex">
                                <label htmlFor="nop-electricity-usage">
                                    <div className="Hor-flex">
                                        <English>Electricity usage per&nbsp;</English>
                                        <Albanian>Shfrytëzimi i energjisë elektrike në &nbsp;</Albanian>
                                        <select id="nop-electricity-usage-period">
                                            <option value="month">
                                                {albanian ? "muaj" : "month"}
                                            </option>
                                            <option value="year">
                                                {albanian ? "vit" : "year"}
                                            </option>
                                        </select>
                                    </div>
                                </label>
                                <input id="nop-electricity-usage" type="number" placeholder="kWh"></input>
                            </div>
                            <button type="submit" className="submit-button">Calculate</button>
                            <English>{numPanels ? `Panels required: ${numPanels} panels` : ""}</English>
                            <Albanian>{numPanels ? `Kërkohen panele: ${numPanels} panele` : ""}</Albanian>
                        </form>
                    </div>
                </details>
                <details open>
                    <summary>
                        <English><b>Payback Period:</b> Time for return on investment, total cost, savings, and solar energy generated for a solar panel system</English>
                        <Albanian><b>Periudha e kthimit:</b> Sa kohë do të duhet për të prishur edhe blerjen fillestare të sistemit të panelit diellor</Albanian>
                    </summary>
                    <div className="detail-content">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            setMonthlyProduction(calcMonthlyProduction(prefecture, solarArea, solarCapacity, solarEfficiency).monthlyProd);
                            const results = getSystemData(prefecture, solarCost * 100, solarArea, solarCapacity, solarEfficiency);
                            setEnergyGenerated(results.AverageMonthlyGeneration);
                            setTotalSavings(results.TotalSavings);
                            setTotalCost(results.TotalCost);
                            setPaybackPeriod(results.ReturnOnInvestment);
                            setEmissionsSavings(results.EmissionsSavings);
                            document.getElementById("production-graph").style.display = "block";
                        }}>
                            <English>Enter municipality and solar panel info <a href="#muni-panel-choice" onClick={openMuniPanel}>here</a></English>
                            <Albanian>Shkruani informacionin e bashkisë dhe panelit diellor <a href="#muni-panel-choice" onClick={openMuniPanel}>këtu</a></Albanian>
                            <div className="Hor-flex">
                                <label htmlFor="roof-space">
                                    <English>Flat roof space available for solar</English>
                                    <Albanian>Hapësirë ​​me çati të sheshtë e disponueshme për diell</Albanian>
                                </label>
                                <input id="roof-space" type="number" placeholder={"m\u00B2"}></input>
                            </div>
                            <div className="Hor-flex">
                                <label htmlFor="percent-solar">
                                    <English>Percent of electricity consumption for solar</English>
                                    <Albanian>Përqindja e konsumit të energjisë elektrike për energjinë diellore</Albanian>
                                </label>
                                <input id="percent-solar" type="number" placeholder="%"></input>
                            </div>
                            <div className="Hor-flex">
                                <label htmlFor="electricity-paid">
                                    <div className="Hor-flex">
                                        <English>Current amount paid for electricity per</English>
                                        <Albanian>Shuma aktuale e paguar për energjinë elektrike në</Albanian>
                                        <select id="electricity-paid-period">
                                            <option value="month">
                                                {albanian ? "muaj" : "month"}
                                            </option>
                                            <option value="year">
                                                {albanian ? "vit" : "year"}
                                            </option>
                                        </select>
                                    </div>
                                </label>
                                <input id="electricity-paid" type="number" placeholder="Lekë"></input>
                            </div>
                            <button type="submit" className="submit-button">
                                <English>Calculate</English>
                                <Albanian>Llogaritni</Albanian>
                            </button>
                        </form>
                        <div>
                            <English><b>Disclaimer:</b> These numbers are based on your current energy bills</English>
                            <Albanian><b>Mohim përgjegjësie:</b> Këta numra bazohen në faturat tuaja të energjisë dhe nuk janë të sakta</Albanian>
                        </div>
                        <hr className={"result-spacer" + (energyGenerated || totalCost || totalSavings || paybackPeriod ? "" : " invisible")} />
                        <div className="Vert-flex">
                            <div className={energyGenerated ? "spaced-result" : ""}>
                                <English>{energyGenerated ? `Energy generated by solar sytem: ${Math.round(energyGenerated)} kWh per month` : ""}</English>
                                <Albanian>{energyGenerated ? `Energjia e gjeneruar nga sistemi diellor: ${Math.round(energyGenerated)} kWh në muaj` : ""}</Albanian>
                            </div>
                            <div className={totalSavings ? "spaced-result" : ""}>
                                <English>{totalSavings ? `Total amount saved by solar panel system purchase: ${Math.round(totalSavings)} Lekë` : ""}</English>
                                <Albanian>{totalSavings ? `Shuma totale e kursyer nga blerja e sistemit të paneleve diellore: ${Math.round(totalSavings)} Lekë` : ""}</Albanian>
                            </div>
                            <div className={totalCost ? "spaced-result" : ""}>
                                <English>{totalCost ? `Total cost of solar panel system: ${Math.round(totalCost)} Lekë` : ""}</English>
                                <Albanian>{totalCost ? `Kostoja totale e sistemit të paneleve diellore: ${Math.round(totalCost)} Lekë` : ""}</Albanian>
                            </div>
                            <div className={paybackPeriod ? "spaced-result" : ""}>
                                <English>{paybackPeriod ? `Time to make a return on investment: ${formatMonths(paybackPeriod)}` : ""}</English>
                                <Albanian>{paybackPeriod ? `Koha për të bërë një kthim nga investimi: ${formatMonths(paybackPeriod, true)}` : ""}</Albanian>
                            </div>
                        </div>
                        <div>
                            <English>{emissionsSavings ? `Carbon dioxide saved: ${Number(emissionsSavings).toFixed(3)} tonnes of CO2` : ""}</English>
                            <Albanian>{emissionsSavings ? `Dioksidi i karbonit kursehet: ${Number(emissionsSavings).toFixed(3)} ton CO2` : ""}</Albanian>
                        </div>
                        <div id="production-graph" style={{display: 'none'}}>
                            <div id = "bottom-margin">
                                <English><b>See the production of a solar photovoltaic system by month</b></English>
                                <Albanian><b>Shihni prodhimin e një sistemi fotovoltaik diellor sipas muajve</b></Albanian>
                            </div>
                            <div id="production-graph-plot">
                                <Plot
                                    data={[
                                        {
                                        x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                        y: monthlyProduction,
                                        type: 'bar',
                                        },
                                    ]}
                                    layout={ {width: 700, height: 400, title: 'Monthly Production of the Calculated System', 
                                    xaxis: {title: "Month"}, yaxis: {title: "Production in kWh"}} }
                                    config={{responsive: true}}
                                />
                            </div>
                        </div>
                    </div>
                </details>
                <details id="muni-panel-choice">
                    <summary>
                        <English><b>Municipality and Solar Panel Info</b>: Input the municipality of your building. Then input information about the solar panels you will use, or select a solar panel from the table</English>
                        <Albanian><b>Informacionet e bashkisë dhe panelit diellor</b>: Futni komunën e ndërtesës suaj. Më pas futni informacione për panelet diellore që do të përdorni, ose zgjidhni një panel diellor nga tabela</Albanian>
                    </summary>
                    <div className="detail-content">
                        <MunicipalDropdown changeEvent={(e) => setPrefecture(e.target.value)}></MunicipalDropdown>
                        <SolarPanelScrollList onSelection={e => setSolarData(e)} checkIsCustomData={b => setShouldUseName(!b)}></SolarPanelScrollList>
                    </div>
                </details>
            </div>
            <PageFoot></PageFoot>
        </div>
    )
}

/**
 * Use the provided location and solar PV data to calculate {@link Calculations} values.
 * @param {string} prefecture The prefecture to use for irradiation data
 * @param {number} solarCost The cost of a single solar PV unit
 * @param {number} solarArea The dimensions of a single solar PV unit
 * @param {number} solarCapacity The capacity of a single solar PV unit
 * @param {number} solarEfficiency The efficiency of the selected solar PV unit
 * @returns {Calculations} A collection of calculations represented by a {@link Calculations} object.
 */
function getSystemData(prefecture, solarCost, solarArea, solarCapacity, solarEfficiency) {
    const roofSpace = document.getElementById("roof-space");
    const percentSolar = document.getElementById("percent-solar");
    const electricityPaid = document.getElementById("electricity-paid");
    const percentLoan = document.getElementById("loan-percent");
    const interest = document.getElementById("loan-interest");

    let electricityPaidVal = electricityPaid.value;
    if(document.getElementById("electricity-paid-period").value === "year") {
        electricityPaidVal /= 12;
    }
    const systemData = calcROI(roofSpace.value, percentSolar.value, electricityPaidVal, prefecture, solarCost, solarArea, solarCapacity, solarEfficiency);

    return systemData;
}

/**
 * Calculates the return on investment.
 * @param {number} roofArea Amount of roof space to be used for solar panels (m^2)
 * @param {number} percentEnergyForSolar Amount of total energy consumption dedicated to solar (between 0 and 100) (%)
 * @param {number} costPerMonth Total amount paid for electricity per month (Lekë per month)
 * @param {string} prefecture The prefecture to gather solar data from
 * @param {number} singlePanelCost Cost of a single solar panel (Lekë)
 * @param {number} [panelSize] Size of a single solar panel (m^2)
 * @param {number} [panelCapacity] Capacity of a single solar panel (kW)
 * @param {number} [panelEfficiency] Efficiency of solar panels (%)
 * @param {number} [percentLoan] Percentage of payment to be covered by loan
 * @param {number} [interest] Monthly interest in the case of payment by loan (Lekë per month)
 * @returns {Calculations} A collection of calculations represented by a {@link Calculations} object.
 */
function calcROI(roofArea, percentEnergyForSolar, costPerMonth, prefecture, singlePanelCost, panelSize = 1.66, panelCapacity = .150, panelEfficiency = 15, percentLoan = 0, interest = 0) {
    let electricityPrice = 14; // Cost of electricity (Lekë per kWh)
    let panelCost = singlePanelCost / panelCapacity;
    let expenses = 200000; // Initial costs apart from the panels themselves (Ex: batteries, installation costs, replacing grid cables, etc.) (Lekë)

    // Amount of solar irradiation for the specified municipality (kWh/month)/kW
    const solarIrradiation = SolarData.getData(prefecture, "AVG", panelCapacity / panelSize, false);
    // Ideal amount of energy generated per month for a system (kWh/month)
    const desiredMonthlyGen = ((percentEnergyForSolar / 100) * costPerMonth) / electricityPrice;
    // Number of solar panels needed
    const solarPanelAmt = Math.min(Math.floor(roofArea / panelSize), Math.ceil(desiredMonthlyGen / (panelEfficiency / 100) / solarIrradiation / panelCapacity / 1.15 / .99)); //1.15 is efficiency multiplier of panel angle, .99 is efficiency mutliplier of cables
    // Amount of energy generated per month for a system (kWh per month)
    const actualMonthlyGen = panelCapacity * solarPanelAmt * solarIrradiation * (panelEfficiency / 100) * 1.15 * .99; //1.15 is efficiency multiplier of panel angle, .99 is efficiency mutliplier of cables
    // Total cost of the system in Lekë
    const totalCost = (panelCost * panelCapacity * solarPanelAmt) + expenses;
    // Amount of Lekë saved per month
    const savings = (electricityPrice * actualMonthlyGen) - (percentLoan * interest * totalCost / 10000);
    // Total time to return on investment in months
    const roi = totalCost / savings;
    //energy in kwh * 0.38 MWh per toe (tonnes of crude oil burned) / 1000 = tonnes of CO2
    const emissionsSaved = (actualMonthlyGen * 0.38) / 1000; 

    return {
        AverageMonthlyGeneration: actualMonthlyGen, 
        TotalSavings: savings,
        TotalCost: totalCost,
        ReturnOnInvestment: roi,
        EmissionSavings: emissionsSaved
    };
}

/**
 * Converts a decimal number of months into a representation as a number of months and years (Eg. 13.11111 total months becomes 1 year and 2 months).
 * @param {number} totalMonths A decimal representing some amount of months
 * @param {boolean} isAlbanian Whether the output should use Albanian or English words for "month" and "year"
 * @returns {string} Some number of years and months
 */
function formatMonths(totalMonths, isAlbanian = false) {
    let years = Math.floor(totalMonths / 12);
    const months = Math.round(totalMonths % 12);
    if(years === Infinity) {
        if(isAlbanian)
            return "Ju lutemi futni numra të vlefshëm";
        else
            return "Please input valid numbers";
    }
    
    let yearText, monthText;
    switch(years) {
        case 0:
            yearText = "";
            break;
        case 1:
            if(isAlbanian)
                yearText = "1 Vit";
            else
                yearText = "1 Year";
            break;
        default:
            if(isAlbanian)
                yearText = `${years} Vjet`;
            else
                yearText = `${years} Years`;
            break;
    }

    //Adds line break when displaying both month and year counts
    if(years !== 0 && months !== 0)
        yearText += "\n";

    switch(months) {
        case 0:
            if(years === 0) {
                if(isAlbanian)
                    monthText = "Më pak se 1 muaj!";
                else
                    monthText = "Less than 1 month!";
            }
            else
                monthText = "";
            break;
        case 1:
            if(isAlbanian)
                monthText = "1 muaj";
            else
                monthText = "1 month";
            break;
        case 12:
            years++;
            if(isAlbanian)
                yearText = `${years} Vit`;
            else {
                yearText = `${years} Years`;
            }
            if(years > 1) {
                if(isAlbanian)
                    yearText = `${years} Vjet`;
                else
                    yearText = `${years} Years`;
            }
            monthText = "";
            break;
        default:
            if(isAlbanian)
                monthText = `${months} Muaj`;
            else
                monthText = `${months} Months`;
             break;
    }
    
    return yearText + monthText;
}

function calcMonthlyProduction(prefecture, panelSize = 1.66, panelCapacity = .150, panelEfficiency = 15) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; //Months, x-axis
    let electricityPrice = 14;
    let monthlyProd = [];

    const roofSpace = document.getElementById("roof-space").value;
    const percentSolar = document.getElementById("percent-solar").value;
    const costPerMonth = document.getElementById("electricity-paid").value;

    for(let i in months) {
        // Amount of solar irradiation for the specified municipality (kWh/month)/kW
        const solarIrradiation = SolarData.getData(prefecture, months[i], panelCapacity / panelSize, false);
        // Ideal amount of energy generated per month for a system (kWh/month)
        const desiredMonthlyGen = ((percentSolar / 100) * costPerMonth) / electricityPrice;
        // Number of solar panels needed
        const solarPanelAmt = Math.min(Math.floor(roofSpace / panelSize), Math.ceil(desiredMonthlyGen / (panelEfficiency / 100) / solarIrradiation / panelCapacity / 1.15 / .99)); //1.15 is efficiency multiplier of panel angle, .99 is efficiency mutliplier of cables
        // Amount of energy generated per month for a system (kWh per month)
        const actualMonthlyGen = panelCapacity * solarPanelAmt * solarIrradiation * (panelEfficiency / 100) * 1.15 * .99; //1.15 is efficiency multiplier of panel angle, .99 is efficiency mutliplier of cables
        
        console.log({
            irradiation: solarIrradiation,
            desiredMonthlyGen: desiredMonthlyGen,
            solarPanelAmt: solarPanelAmt,
            actualMonthlyGen : actualMonthlyGen,
        });

        monthlyProd.push(actualMonthlyGen);
    }
    
    return {
        monthlyProd: monthlyProd,
    };
}

function calcNumPanels(prefecture, solarArea = 1, solarCapacity = .21, solarEfficiency = .15) {
    const electricityUsage = document.getElementById("nop-electricity-usage");
    const electricityUsagePeriod = document.getElementById("nop-electricity-usage-period");

    const solarIrradiation = SolarData.getData(prefecture, "AVG", solarCapacity / solarArea, false);

    if(electricityUsagePeriod.value === "year") {
        return Math.ceil(electricityUsage.value / 12 / (solarEfficiency / 100) / solarIrradiation / solarCapacity / 1.15 / .99); //1.15 is efficiency multiplier of panel angle, .99 is efficiency mutliplier of cables
    }
    return Math.ceil(electricityUsage.value / (solarEfficiency / 100) / solarIrradiation / solarCapacity / 1.15 / .99); //1.15 is efficiency multiplier of panel angle, .99 is efficiency mutliplier of cables
}

export default Calculator;