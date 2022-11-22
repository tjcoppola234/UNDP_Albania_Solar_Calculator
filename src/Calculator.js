import './global.css';
import './Calculator.css';
import { PageHead, PageFoot } from './App';
import {useState} from 'react';
import { MunicipalDropdown } from './Dropdown';
import {SolarPanelScrollList} from './SolarPanelReader';
import * as SolarData from './SolarIrradiationReader';

import English from './English';
import Albanian from './Albanian';
import { settings } from './Settings';

function Calculator() {
    const [paybackPeriod, setPaybackPeriod] = useState("");
    const [totalSavings, setTotalSavings] = useState("");
    const [totalCost, setTotalCost] = useState("");
    const [energyGenerated, setEnergyGenerated] = useState("");

    const [prefecture, setPrefecture] = useState("");

    const [solarName, setSolarName] = useState("Unnamed");
    const [solarManufacturer, setSolarManufacturer] = useState("Unnamed");
    const [solarCost, setSolarCost] = useState(0);
    const [solarArea, setSolarArea] = useState(0);
    const [solarCapacity, setSolarCapacity] = useState(0);
    const [solarEfficiency, setSolarEfficiency] = useState(0);
    const [shouldUseName, setShouldUseName] = useState(false);
    
    const [albanian, setAlbanian] = useState(settings.albanianVisible.getState());
    settings.albanianVisible.addListener(visible => {
        setAlbanian(visible);
    });

    function setSolarData(pvSelection) {
        setSolarName(pvSelection["Name/Model"]);
        setSolarManufacturer(pvSelection["Manufacturer"]);
        setSolarCost(pvSelection["Cost per Panel"]);
        setSolarArea(pvSelection["Area per Panel"]);
        setSolarCapacity(pvSelection["Capacity per Panel"]);
        setSolarEfficiency(pvSelection["Efficiency"].replace("%", ""));

        document.getElementById("solar-cost").value = pvSelection["Cost per Panel"];
        document.getElementById("solar-area").value = pvSelection["Area per Panel"];
        document.getElementById("solar-capacity").value = pvSelection["Capacity per Panel"];
        document.getElementById("solar-efficiency").value = pvSelection["Efficiency"].replace("%", "");
    }

    SolarData.loadData();

    return (
        <div className="Calculator">
            <PageHead></PageHead>
            <div className="content">
                <header>
                    <div>
                        <English><h2 className="h2resources">Calculator</h2></English>
                        <Albanian><h2 className="h2resources">Llogaritësi</h2></Albanian>
                    </div>
                </header>
                <details>
                    <summary>
                        <English><b>Number of panels</b>: The number of panels required to cover 100% of your electricity consumption</English>
                        <Albanian><b>Numri i paneleve</b>: Numri i paneleve të nevojshme për të mbuluar 100% të konsumit të energjisë elektrike</Albanian>
                    </summary>
                    <form>
                        <MunicipalDropdown></MunicipalDropdown>
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
                        <button type="button" id="submit-button">Calculate</button>
                    </form>
                </details>
                <details open> {/* place "open" next to "details" to make it open on load */}
                    <summary>
                        <English><b>Payback Period:</b> Time for return on investment, total cost, savings, and solar energy generated for a solar panel system</English>
                        <Albanian><b>Periudha e kthimit:</b> Sa kohë do të duhet për të prishur edhe blerjen fillestare të sistemit të panelit diellor</Albanian>
                    </summary>
                    <form onSubmit={(e) => {
                            e.preventDefault();
                            const results = getSystemData(prefecture, solarCost * 100, solarArea, solarCapacity, solarEfficiency);
                            setEnergyGenerated(results.monthlyGeneration);
                            setTotalSavings(results.totalSavings);
                            setTotalCost(results.totalCost);
                            setPaybackPeriod(results.ROI);
                        }}>
                        <br />
                        <SolarPanelScrollList onSelection={e => setSolarData(e)} getIsCustomData={b => setShouldUseName(!b)}></SolarPanelScrollList>
                        <br />
                        <div className="Vert-flex">
                            <MunicipalDropdown changeEvent={(e) => {setPrefecture(e.target.value)}}></MunicipalDropdown>
                            <div>
                                <English>Your municipality is used to determine how much sunlight is expected</English>
                                <Albanian>Komuna juaj përdoret për të përcaktuar se sa rreze dielli pritet</Albanian>
                            </div>
                        </div>
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
                        <button type="submit" id="submit-button">
                            <English>Calculate</English>
                            <Albanian>Llogaritni</Albanian>
                        </button>
                    </form>
                    <div className="Vert-flex">
                        <br />
                        <div>
                            <English><b>Disclaimer:</b> These numbers are based on your current energy bills</English>
                            <Albanian><b>Mohim përgjegjësie:</b> Këta numra bazohen në faturat tuaja të energjisë dhe nuk janë të sakta</Albanian>
                        </div>
                        <br />
                        <div>
                            <English>{energyGenerated ? `Energy generated by solar sytem: ${Math.round(energyGenerated)} kWh per month` : ""}</English>
                            <Albanian>{energyGenerated ? `Energjia e gjeneruar nga sistemi diellor: ${Math.round(energyGenerated)} kWh në muaj` : ""}</Albanian>
                        </div>
                        <div>
                            <English>{totalSavings ? `Total amount saved by solar panel system purchase: ${Math.round(totalSavings)} Lekë` : ""}</English>
                            <Albanian>{totalSavings ? `Shuma totale e kursyer nga blerja e sistemit të paneleve diellore: ${Math.round(totalSavings)} Lekë` : ""}</Albanian>
                        </div>
                        <div>
                            <English>{totalCost ? `Total cost of solar panel system: ${Math.round(totalCost)} Lekë` : ""}</English>
                            <Albanian>{totalCost ? `Kostoja totale e sistemit të paneleve diellore: ${Math.round(totalCost)} Lekë` : ""}</Albanian>
                        </div>
                        <div>
                            <English>{paybackPeriod ? `Time to make a return on investment: ${formatMonths(paybackPeriod)}` : ""}</English>
                            <Albanian>{paybackPeriod ? `Koha për të bërë një kthim nga investimi: ${formatMonths(paybackPeriod, true)}` : ""}</Albanian>
                        </div>
                    </div>
                </details>
                <details>
                    <summary>
                        <English><b>Loan Financing</b>: The cost and payback period of a solar system when financing it with a loan</English>
                        <Albanian><b>Financimi me kredi</b>: Periudha e kostos dhe kthimit të një sistemi diellor kur financohet me një kredi</Albanian>
                    </summary>
                    <form>
                        <div className="Hor-flex">
                            <label htmlFor="loan-percent">
                                <English>Percentage of final cost to pay with loan</English>
                                <Albanian>Përqindja e kostos përfundimtare për të paguar me kredi</Albanian>
                            </label>
                            <input id="loan-percent" type="number" placeholder="%"></input>
                        </div>
                        <div className="Hor-flex">
                            <label htmlFor="loan-interest">
                                <English>Percent interest on loan</English>
                                <Albanian>Për qind e interesit në kredi</Albanian>
                            </label>
                            <input id="loan-interest" type="number" placeholder="%"></input>
                        </div>
                        <div className="Hor-flex">
                            <label htmlFor="loan-term">
                                <English>Loan term:&nbsp;</English>
                                <Albanian>Afati i kredisë:&nbsp;</Albanian>
                            </label>
                            <select id="loan-term">
                                <option>
                                    {albanian ? "Mujore" : "Monthly"}
                                </option>
                                <option>
                                    {albanian ? "Dymujore" : "Bimonthly"}
                                </option>
                                <option>
                                    {albanian ? "Tremujore" : "Quarterly"}
                                </option>
                                <option>
                                    {albanian ? "Gjysmëvjetor" : "Half-yearly"}
                                </option>
                                <option>
                                    {albanian ? "Vjetore" : "Yearly"}
                                </option>
                            </select>
                        </div>
                        <button type="button" id="submit-button">Calculate</button>
                    </form>
                </details>
            </div>
            <PageFoot></PageFoot>
        </div>
    )
}

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
 * 
 * @param {number} roofArea Amount of roof space to be used for solar panels (m^2)
 * @param {number} percentEnergyForSolar Amount of total energy consumption dedicated to solar (between 0 and 100) (%)
 * @param {number} costPerMonth Total amount paid for electricity per month (Lekë per month)
 * @param {*} prefecture The prefecture to gather solar data from
 * @param {*} panelCost Cost of a single solar panel (Lekë)
 * @param {*} panelSize Size of a single solar panel (m^2)
 * @param {*} panelCapacity Capacity of a single solar panel (kW)
 * @param {*} panelEfficiency Efficiency of solar panels (%)
 * @param {*} percentLoan Percentage of payment to be covered by loan
 * @param {*} interest Monthly interest in the case of payment by loan (Lekë per month)
 * @returns An object where: "monthlyGeneration" is the amount of energy a solar panel system would produce in a month, "totalSavings" is the amount of money saved by using a solar panel system, "totalCost" is the amount of money that a solar panel system would cost, "ROI" is the length of the payback period for a solar system purchase. 
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
    const solarPanelAmt = Math.min(Math.floor(roofArea / panelSize), Math.ceil(desiredMonthlyGen / (panelEfficiency / 100) / solarIrradiation / panelCapacity));
    // Amount of energy generated per month for a system (kWh per month)
    const actualMonthlyGen = panelCapacity * solarPanelAmt * solarIrradiation * (panelEfficiency / 100);
    // Total cost of the system in Lekë
    const totalCost = (panelCost * panelCapacity * solarPanelAmt) + expenses;
    // Amount of Lekë saved per month
    const savings = (electricityPrice * actualMonthlyGen) - (percentLoan * interest * totalCost / 10000);
    // Total time to return on investment in months
    const roi = totalCost / savings;

    // console.log({
    //     irradiation: solarIrradiation,
    //     desiredGeneration: desiredMonthlyGen,
    //     solarPanelCountNeeded: solarPanelAmt,
    //     monthlyGeneration: actualMonthlyGen,
    //     cost: totalCost,
    //     savings: savings,
    //     returnOnInterest: roi
    // });

    return {
        monthlyGeneration: actualMonthlyGen, 
        totalSavings: savings,
        totalCost: totalCost,
        ROI: roi,
    };
}

function formatMonths(totalMonths, isAlbanian = false) {
    let years = Math.floor(totalMonths / 12);
    const months = Math.round(totalMonths % 12);
    if(years === Infinity) {
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

export default Calculator;