import './global.css';
import './Calculator.css';
import { PageHead, PageFoot } from './App';
import React, { useRef, useState } from 'react';
import { MunicipalDropdown } from './MunicipalDropdown';
import { SolarPanelScrollList } from './SolarPanelReader';
import * as SolarData from './SolarIrradiationReader';
import Plot from 'react-plotly.js';

import English from './English';
import Albanian from './Albanian';
import { settings } from './Settings';
import Tooltip from './Tooltip';

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
    const ref = useRef();
    const [muniPanelVisibility, setMuniPanelVisibility] = useState(false);

    //Number of Panels calculator state variables
    const [numPanels, setNumPanels] = useState("");

    //Payback Period calculator state variables
    const [paybackPeriod, setPaybackPeriod] = useState("");
    const [totalSavings, setTotalSavings] = useState("");
    const [totalCost, setTotalCost] = useState("");
    const [energyGenerated, setEnergyGenerated] = useState("");
    const [emissionsSavings, setEmissionsSavings] = useState("");

    const [prefecture, setPrefecture] = useState("");
    const [municipality, setMunicipality] = useState("");

    const [solarName, setSolarName] = useState("Unnamed");
    const [solarManufacturer, setSolarManufacturer] = useState("Unnamed");
    const [solarCost, setSolarCost] = useState(0);
    const [solarArea, setSolarArea] = useState(0);
    const [solarCapacity, setSolarCapacity] = useState(0);
    const [solarEfficiency, setSolarEfficiency] = useState(0);
    const [shouldUseName, setShouldUseName] = useState(false);

    const [monthlyProduction, setMonthlyProduction] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

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

    return (
        <div className="Calculator">
            <PageHead></PageHead>
            <div className="title-box Vert-flex" style={{ backgroundImage: `linear-gradient(to bottom, rgba(204,208,209,0) 0%, rgba(220,224,225,0.75) 75%, rgba(236,240,241,1) 100%), url(${process.env.PUBLIC_URL}/calculator-background.jpg)` }}>
                <English><h2 className="page-title">Solar Calculator</h2></English>
                <Albanian><h2 className="page-title">Llogaritësi diellor</h2></Albanian>
                <English><h3 className="page-subtitle">Find an estimate for your business</h3></English>
                <Albanian><h3 className="page-subtitle">Gjeni një vlerësim për biznesin tuaj</h3></Albanian>
            </div>
            <div className="content">
                <div id="modal-img" ref={ref} className={muniPanelVisibility ? "" : " invisible"}>
                    <span className="close-modal" onClick={() => {
                        ref.current.scrollTo(0, 0);
                        setMuniPanelVisibility(false);
                        document.body.style.overflowY = "scroll";
                    }}>&times;</span>
                    <div className="modal-content">
                        <div className="detail-content">
                            <div>
                                <English><b>Municipality and Solar Photovoltaic Info</b>: Input the municipality of your building. Then input information about the solar photovoltaics you will use, or select a solar photovoltaic system from the table</English>
                                <Albanian><b>Informacion komunal dhe fotovoltaik diellor</b>: Futni bashkinë e ndërtesës suaj. Më pas futni informacione rreth fotovoltaikëve diellorë që do të përdorni, ose zgjidhni një sistem fotovoltaik diellor nga tabela</Albanian>
                            </div>
                            <br />
                            <MunicipalDropdown changeEvent={(e) => {setPrefecture(e.target.value); setMunicipality(e.target.options[e.target.selectedIndex].text);}}></MunicipalDropdown>
                            <SolarPanelScrollList onSelection={e => setSolarData(e)} checkIsCustomData={b => setShouldUseName(!b)}></SolarPanelScrollList>
                        </div>
                    </div>
                </div>
                <details open> {/* place "open" next to "details" to make it open on load */}
                    <summary>
                        <English><b>Number of photovoltaics</b>: The number of photovoltaics required to cover 100% of your electricity consumption</English>
                        <Albanian><b>Numri i fotovoltaikëve</b>: Numri i fotovoltaikëve të nevojshme për të mbuluar 100% të konsumit të energjisë elektrike</Albanian>
                    </summary>
                    <div className="detail-content">
                        <form onSubmit={e => {
                            e.preventDefault();
                            if (prefecture === "") {
                                return;
                            }
                            setNumPanels(calcNumPanels(prefecture, solarArea, solarCapacity, solarEfficiency));
                        }}>
                            <MuniDataDashboard visibleToggle={setMuniPanelVisibility} municipalName={municipality} pvStatus={shouldUseName ? solarName : !!(solarArea && solarCost && solarCapacity && solarEfficiency)}></MuniDataDashboard>
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
                                <Tooltip>
                                    <English>Enter the amount of electricity your business uses on average per month. This information should be on your electricity bill, or can be easily calculated by taking the average of the last 12 months of electrictiy usage for your business.</English>
                                    <Albanian>Shkruani sasinë e energjisë elektrike që biznesi juaj përdor mesatarisht në muaj. Ky informacion duhet të jetë në faturën tuaj të energjisë elektrike, ose mund të llogaritet lehtësisht duke marrë mesataren e 12 muajve të fundit të përdorimit të energjisë elektrike për biznesin tuaj.</Albanian>
                                </Tooltip>
                            </div>
                            <button type="submit" className="submit-button">Calculate</button>
                            <English>{numPanels ? `Panels required: ${numPanels} panels` : ""}</English>
                            <Albanian>{numPanels ? `Kërkohen panele: ${numPanels} panele` : ""}</Albanian>
                        </form>
                    </div>
                </details>
                <details open>
                    <summary>
                        <English><b>Payback Period:</b> Time for return on investment, total cost, savings, and solar energy generated for a solar photovoltaic system</English>
                        <Albanian><b>Periudha e kthimit:</b> Sa kohë do të duhet për të prishur edhe blerjen fillestare të sistemit të fotovoltaikëve diellor</Albanian>
                    </summary>
                    <div className="detail-content">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            setMonthlyProduction(calcMonthlyProduction(prefecture, solarArea, solarCapacity, solarEfficiency));
                            const results = getSystemData(prefecture, solarCost * 100, solarArea, solarCapacity, solarEfficiency);
                            setEnergyGenerated(results.AverageMonthlyGeneration);
                            setTotalSavings(results.TotalSavings);
                            setTotalCost(results.TotalCost);
                            setPaybackPeriod(results.ReturnOnInvestment);
                            setEmissionsSavings(results.EmissionsSavings);
                            document.getElementById("production-graph").style.display = "block";
                        }}>
                            <MuniDataDashboard visibleToggle={setMuniPanelVisibility} municipalName={municipality} pvStatus={shouldUseName ? solarName : !!(solarArea && solarCost && solarCapacity && solarEfficiency)}></MuniDataDashboard>
                            <div className="Hor-flex">
                                <label htmlFor="roof-space">
                                    <English>Flat roof space available for solar</English>
                                    <Albanian>Hapësirë ​​me çati të sheshtë e disponueshme për diell</Albanian>
                                </label>
                                <input id="roof-space" type="number" placeholder={"m\u00B2"}></input>
                                <Tooltip>
                                    <English>Enter the amount of flat open space you have on your business' roof for solar photovoltaics. If you don't know the exact amount, provide a rough estimate. Keep in mind that the roof space must recieve sunlight for solar photovoltaics to work there.</English>
                                    <Albanian>Futni sasinë e hapësirës së hapur të sheshtë që keni në çatinë e biznesit tuaj për fotovoltaikë diellorë. Nëse nuk e dini shumën e saktë, jepni një vlerësim të përafërt. Mbani në mend se hapësira e çatisë duhet të marrë dritën e diellit që fotovoltaikët diellorë të punojnë atje.</Albanian>
                                </Tooltip>
                            </div>
                            <div className="Hor-flex">
                                <label htmlFor="percent-solar">
                                    <English>Percent of electricity consumption for solar</English>
                                    <Albanian>Përqindja e konsumit të energjisë elektrike për energjinë diellore</Albanian>
                                </label>
                                <input id="percent-solar" type="number" placeholder="%"></input>
                                <Tooltip>
                                    <English>Enter how much of your total energy usage you want to replace with solar photovoltaic generation.</English>
                                    <Albanian>Futni se sa nga konsumi total i energjisë dëshironi të zëvendësoni me gjenerimin e fotovoltaikëve diellorë.</Albanian>
                                    <br />
                                    <English>For example, if you enter 50, then 50% of your current electricity usage will be generated by solar photovoltaics, and the other 50% will come from the grid.</English>
                                    <Albanian>Për shembull, nëse futni 50, atëherë 50% e përdorimit aktual të energjisë elektrike do të gjenerohet nga fotovoltaikët diellorë, dhe 50% e tjera do të vijnë nga rrjeti.</Albanian>
                                </Tooltip>
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
                                <Tooltip>
                                    <English>Enter the amount of money your businesses spends on electricity on average per month. This information should be on your electricity bill, or can be easily calculated by taking the average of the cost of electricity for your business for the last 12 months.</English>
                                    <Albanian>Shkruani shumën e parave që bizneset tuaja shpenzojnë për energji elektrike mesatarisht në muaj. Ky informacion duhet të jetë në faturën tuaj të energjisë elektrike, ose mund të llogaritet lehtësisht duke marrë mesataren e kostos së energjisë elektrike për biznesin tuaj për 12 muajt e fundit.</Albanian>
                                </Tooltip>
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
                            <div className={emissionsSavings ? "spaced-result" : ""}>
                                <English>{emissionsSavings ? `Carbon dioxide saved: ${Number(emissionsSavings).toFixed(3)} tonnes of CO2` : ""}</English>
                                <Albanian>{emissionsSavings ? `Dioksidi i karbonit kursehet: ${Number(emissionsSavings).toFixed(3)} ton CO2` : ""}</Albanian>
                            </div>
                        </div>
                        <div id="production-graph" style={{ display: 'none' }}>
                            <div id="bottom-margin">
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
                                    layout={{
                                        width: 700, height: 400, title: 'Monthly Production of the Calculated System',
                                        xaxis: { title: "Month" }, yaxis: { title: "Production in kWh" }
                                    }}
                                    config={{ responsive: true }}
                                />
                            </div>
                        </div>
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
    if (document.getElementById("electricity-paid-period").value === "year") {
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
    let electricityPrice = 18; // Cost of electricity (Lekë per kWh)
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
        EmissionsSavings: emissionsSaved
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
    if (years === Infinity) {
        if (isAlbanian)
            return "Ju lutemi futni numra të vlefshëm";
        else
            return "Please input valid numbers";
    }

    let yearText, monthText;
    switch (years) {
        case 0:
            yearText = "";
            break;
        case 1:
            if (isAlbanian)
                yearText = "1 Vit";
            else
                yearText = "1 Year";
            break;
        default:
            if (isAlbanian)
                yearText = `${years} Vjet`;
            else
                yearText = `${years} Years`;
            break;
    }

    //Adds line break when displaying both month and year counts
    if (years !== 0 && months !== 0)
        yearText += "\n";

    switch (months) {
        case 0:
            if (years === 0) {
                if (isAlbanian)
                    monthText = "Më pak se 1 muaj!";
                else
                    monthText = "Less than 1 month!";
            }
            else
                monthText = "";
            break;
        case 1:
            if (isAlbanian)
                monthText = "1 muaj";
            else
                monthText = "1 month";
            break;
        case 12:
            years++;
            if (isAlbanian)
                yearText = `${years} Vit`;
            else {
                yearText = `${years} Years`;
            }
            if (years > 1) {
                if (isAlbanian)
                    yearText = `${years} Vjet`;
                else
                    yearText = `${years} Years`;
            }
            monthText = "";
            break;
        default:
            if (isAlbanian)
                monthText = `${months} Muaj`;
            else
                monthText = `${months} Months`;
            break;
    }

    return yearText + monthText;
}

/**
 * Calculates the electricity production for a given month.
 * @param {string} prefecture The prefecture to gather solar data from
 * @param {number} [panelSize] Size of a single solar panel (m^2)
 * @param {number} [panelCapacity] Capacity of a single solar panel (kW)
 * @param {number} [panelEfficiency] Efficiency of solar panels (%)
 * @returns {number[]} The production for each month of the year.
 */
function calcMonthlyProduction(prefecture, panelSize = 1.66, panelCapacity = .150, panelEfficiency = 15) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; //Months, x-axis
    let electricityPrice = 18;
    let monthlyProd = [];

    const roofSpace = document.getElementById("roof-space").value;
    const percentSolar = document.getElementById("percent-solar").value;
    const costPerMonth = document.getElementById("electricity-paid").value;

    for (let i in months) {
        // Amount of solar irradiation for the specified municipality (kWh/month)/kW
        const solarIrradiation = SolarData.getData(prefecture, months[i], panelCapacity / panelSize, false);
        // Ideal amount of energy generated per month for a system (kWh/month)
        const desiredMonthlyGen = ((percentSolar / 100) * costPerMonth) / electricityPrice;
        // Number of solar panels needed
        const solarPanelAmt = Math.min(Math.floor(roofSpace / panelSize), Math.ceil(desiredMonthlyGen / (panelEfficiency / 100) / solarIrradiation / panelCapacity / 1.15 / .99)); //1.15 is efficiency multiplier of panel angle, .99 is efficiency mutliplier of cables
        // Amount of energy generated per month for a system (kWh per month)
        const actualMonthlyGen = panelCapacity * solarPanelAmt * solarIrradiation * (panelEfficiency / 100) * 1.15 * .99; //1.15 is efficiency multiplier of panel angle, .99 is efficiency mutliplier of cables

        // console.log({
        //     irradiation: solarIrradiation,
        //     desiredMonthlyGen: desiredMonthlyGen,
        //     solarPanelAmt: solarPanelAmt,
        //     actualMonthlyGen : actualMonthlyGen,
        // });

        monthlyProd.push(actualMonthlyGen);
    }

    return monthlyProd;
}

/**
 * Calculates the amount of solar PV units required to produce 100% of electricity consumption
 * @param {number} roofArea Amount of roof space to be used for solar panels (m^2)
 * @param {string} prefecture The prefecture to gather solar data from
 * @param {number} [panelCapacity] Capacity of a single solar panel (kW)
 * @param {number} [panelEfficiency] Efficiency of solar panels (%)
 * @returns {number} The number of PV units required to replace electricity consumption
 */
function calcNumPanels(prefecture, solarArea = 1, solarCapacity = .21, solarEfficiency = .15) {
    const electricityUsage = document.getElementById("nop-electricity-usage");
    const electricityUsagePeriod = document.getElementById("nop-electricity-usage-period");

    const solarIrradiation = SolarData.getData(prefecture, "AVG", solarCapacity / solarArea, false);

    if (electricityUsagePeriod.value === "year") {
        return Math.ceil(electricityUsage.value / 12 / (solarEfficiency / 100) / solarIrradiation / solarCapacity / 1.15 / .99); //1.15 is efficiency multiplier of panel angle, .99 is efficiency mutliplier of cables
    }
    return Math.ceil(electricityUsage.value / (solarEfficiency / 100) / solarIrradiation / solarCapacity / 1.15 / .99); //1.15 is efficiency multiplier of panel angle, .99 is efficiency mutliplier of cables
}



function MuniDataDashboard(props) {
    /**
     * Opens the municipality and pv selection modal
     */
    function loadMuniPV(e) {
        e.preventDefault();
        document.body.style.overflow = "hidden";
        props.visibleToggle(true);
    }

    return (
        <div className="Hor-flex">
            <div className="muni-data-view">
                <button type="button" onClick={loadMuniPV} className="muni-data-button">
                    <English>Enter municipality and solar photovoltaics info</English>
                    <Albanian>Shkruani informacionin e bashkisë dhe fotovoltaikëve diellor</Albanian>
                </button>
                <ul className="selected-data-display">
                    <li style={{
                        backgroundColor: `${props.municipalName ? "#d3f5b3" : "#f5bfb3"}`
                    }}>{props.municipalName ? (props.municipalName + " selected!") : "No municipality selected!"}</li>
                    <li style={{
                        backgroundColor: `${props.pvStatus ? "#d3f5b3" : "#f5bfb3"}`
                    }}>{typeof(props.pvStatus) === 'string' ? props.pvStatus + " entered!": (props.pvStatus ? "Custom PV entered!" : "PV module information missing!")}</li>
                </ul>
            </div>
            <Tooltip>
                <English>Your municipality is the city or town you live in, and is used to find the amount of solar irradiation businesses in your area recieve.</English>
                <Albanian>Komuna juaj është qyteti ose qyteti ku jetoni dhe përdoret për të gjetur sasinë e rrezatimit diellor që marrin bizneset në zonën tuaj.</Albanian>
                <br />
                <English>For solar photovoltaics, either choose an example from our list, or enter photovoltaic information yourself!</English>
                <Albanian>Për fotovoltaikëve diellore, ose zgjidhni një shembull nga lista jonë, ose vendosni vetë informacionin e fotovoltaikëve!</Albanian>
            </Tooltip>
        </div>
    );
}

export default Calculator;