import './global.css';
import './Calculator.css';
import { PageHead } from './App';
import {useState} from 'react';
import { MunicipalDropdown } from './Dropdown';
import {SolarPanelScrollList} from './SolarPanelReader';
import * as SolarData from './SolarIrradiationReader';

function Calculator() {
    const [buybackTime, setBuybackTime] = useState("");

    const [paybackPeriod, setPaybackPeriod] = useState("");
    const [energyGenerated, setEnergyGenerated] = useState("");

    const [peuPeriod, setPeuPeriod] = useState("Month");
    const [peuMetric, setPeuMetric] = useState("kWh");
    const [prefecture, setPrefecture] = useState("");
    const [pecDisabled, setPecDisabled] = useState(false);

    const [solarName, setSolarName] = useState("Unnamed");
    const [solarManufacturer, setSolarManufacturer] = useState("Unnamed");
    const [solarCost, setSolarCost] = useState(0);
    const [solarArea, setSolarArea] = useState(0);
    const [solarCapacity, setSolarCapacity] = useState(0);
    const [solarEfficiency, setSolarEfficiency] = useState(0);
    const [shouldUseName, setShouldUseName] = useState(false);

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
            <header>
                <h2>Calculator</h2>
            </header>
            <details>
                <summary><b>Old Payback Period:</b></summary>
                <form id="calc-payback" onSubmit={e => {
                        e.preventDefault(); 
                        setBuybackTime(calculateBuyback());
                    }}>
                    <div className="Hor-flex">
                        <label htmlFor="payback-sys-cost">Upfront cost of solar panel system:</label>
                        <input id="payback-sys-cost" type="number" min="0" max="10000000000" step="0.01" placeholder="Lek"></input>
                    </div>
                    <div className="Hor-flex">
                        <label htmlFor="payback-energy-usage">
                            Electricity consumption in&nbsp;
                            <select id="payback-energy-usage-metric" onChange={e => {
                                    setPeuMetric(e.target.value);
                                    if(e.target.value === "Lek") {
                                        setPecDisabled(true);
                                    } else {
                                        setPecDisabled(false);
                                    }
                                }}>
                                <option value="kWh">kWh</option>
                                <option value="Lek">Lek</option>
                                {/* <option value="Euros">Euros</option> */}
                            </select>
                            /
                            <select id="payback-energy-usage-period" onChange={e => {setPeuPeriod(e.target.value)}}>
                                <option value="Month">Month</option>
                                <option value="Year">Year</option>
                            </select>
                            :
                        </label>
                        <input id="payback-energy-usage" type="number" min="0" max="10000000000" step="0.01" placeholder={peuMetric + "/" + peuPeriod}></input>
                    </div>
                    <div className="Hor-flex">
                        <label htmlFor="payback-energy-cost">Cost of electricity:</label>
                        <input id="payback-energy-cost" type="number" min="0" max="10000" step="0.01" placeholder="Lek/kWh" disabled={pecDisabled}></input>
                    </div>
                    <button type="submit">Calculate</button>
                </form>
                {buybackTime}
            </details>
            <details open>
                <summary><b>Payback Period:</b> How long it will take to break even on your initial solar panel system purchase</summary>
                <form onSubmit={(e) => {
                        e.preventDefault();
                        const results = formatGenAndROI(prefecture, solarCost * 100, solarArea, solarCapacity, solarEfficiency);
                        setEnergyGenerated(results.genText);
                        setPaybackPeriod(results.ROIText);
                    }}>
                    <br/>
                    <SolarPanelScrollList onSelection={e => setSolarData(e)} getIsCustomData={b => setShouldUseName(!b)}></SolarPanelScrollList>
                    <br/>
                    <div className="Vert-flex">
                        <MunicipalDropdown changeEvent={(e) => {setPrefecture(e.target.value)}}></MunicipalDropdown>
                        <p>Your municipality is used to determine how much sunlight is expected</p>
                    </div>
                    <div className="Hor-flex">
                        <label htmlFor="roof-space">Roof space available for solar</label>
                        <input id="roof-space" type="number" placeholder={"m\u00B2"}></input>
                    </div>
                    <div className="Hor-flex">
                        <label htmlFor="percent-solar">Percent of total energy consumption for solar</label>
                        <input id="percent-solar" type="number" placeholder="%"></input>
                    </div>
                    <div className="Hor-flex">
                        <label htmlFor="electricity-paid">Current amount paid for electricity per&nbsp;
                            <select id="electricity-paid-period">
                                <option value="month">month</option>
                                <option value="year">year</option>
                            </select>
                        </label>
                        <input id="electricity-paid" type="number" placeholder="Lekë"></input>
                    </div>
                    <button type="submit">Calculate</button>
                </form>
                <div className="Vert-flex">
                    <div>{energyGenerated}</div>
                    <div>{paybackPeriod}</div>
                </div>
            </details>
        </div>
    )
}

function calculateBuyback() {
    const sysCost = document.getElementById("payback-sys-cost");
    const energyCost = document.getElementById("payback-energy-cost");
    const energyUsage = document.getElementById("payback-energy-usage");
    
    //If "yearly" option is selected, convert to monthly for calculation purposes
    let energyUsageVal = energyUsage.value;
    if(document.getElementById("payback-energy-usage-period").value === "Year") {
        energyUsageVal = energyUsage.value / 12;
    }

    let totalMonths;
    //If "Lek" option is selected, ignore energyCost
    if(document.getElementById("payback-energy-usage-metric").value === "Lek") {
        totalMonths = sysCost.value / energyUsageVal;
    } else {
        //Calculate the buyback period in total months
        totalMonths = sysCost.value / (energyCost.value * energyUsageVal);
    }

    //Break that down to years and months
    return formatMonths(totalMonths);
}

function formatGenAndROI(prefecture, solarCost, solarArea, solarCapacity, solarEfficiency) {
    const roofSpace = document.getElementById("roof-space");
    const percentSolar = document.getElementById("percent-solar");
    const electricityPaid = document.getElementById("electricity-paid");
    let electricityPaidVal = electricityPaid.value;
    if(document.getElementById("electricity-paid-period").value == "year") {
        electricityPaidVal /= 12;
    }
    const systemData = calcROI(roofSpace.value, percentSolar.value, electricityPaidVal, prefecture, solarCost, solarArea, solarCapacity, solarEfficiency);

    return {
        genText: `Energy generated by solar sytem: ${systemData.monthlyGeneration} kWh per month`,
        ROIText: `Time to make a return on investment: ${formatMonths(systemData.ROI)}`,
    };
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
 * @returns An object where: "monthlyGeneration" is the amount of energy a solar panel system would produce in a month, and "ROI" is the length of the payback period for a solar system purchase. 
 */
function calcROI(roofArea, percentEnergyForSolar, costPerMonth, prefecture, singlePanelCost, panelSize = 1.66, panelCapacity = .150, panelEfficiency = 15) {
    let electricityPrice = 14; // Cost of electricity (Lekë per kWh)
    let panelCost = singlePanelCost / panelCapacity;
    let expenses = 0; // Initial costs apart from the panels themselves (Ex: batteries, installation costs, replacing grid cables, etc.) (Lekë)
    let interest = 0; // Monthly interest in the case of payment by loan (Lekë per month) 

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
    const savings = (electricityPrice * actualMonthlyGen) - interest;
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
        ROI: roi,
    };
}

function formatMonths(totalMonths) {
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
            yearText = "1 Year";
            break;
        default:
            yearText = `${years} Years`;
            break;
    }

    //Adds line break when displaying both month and year counts
    if(years !== 0 && months !== 0)
        yearText += "\n";

    switch(months) {
        case 0:
            if(years === 0)
                monthText = "Less than 1 month!";
            else
                monthText = "";
            break;
        case 1:
            monthText = "1 Month";
            break;
        case 12:
            years++;
            yearText = `${years} Year`;
            if(years > 1) { yearText += "s"; }
            monthText = "";
            break;
        default:
            monthText = `${months} Months`;
    }
    
    return yearText + monthText;
}

export default Calculator;