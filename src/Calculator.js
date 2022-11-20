import './global.css';
import './Calculator.css';
import { PageHead } from './App';
import {useState} from 'react';
import { MunicipalDropdown } from './Dropdown';
import * as SolarData from './SolarIrradiationReader';

function Calculator() {
    const [buybackTime, setBuybackTime] = useState("");

    const [paybackPeriod, setPaybackPeriod] = useState("");
    const [energyGenerated, setEnergyGenerated] = useState("");

    const [peuPeriod, setPeuPeriod] = useState("Month");
    const [peuMetric, setPeuMetric] = useState("kWh");
    const [prefecture, setPrefecture] = useState("");
    const [pecDisabled, setPecDisabled] = useState(false);

    SolarData.loadData();

    return (
        <div className="Calculator">
            <PageHead></PageHead>
            <header>
                <h2>Calculator</h2>
            </header>
            <details> {/* place "open" next to "details" to make it open on load */}
                <summary><b>Payback Period:</b> How long it will take to break even on your initial solar panel system purchase</summary>
                <form id="calc-payback" onSubmit={(e) => {
                        e.preventDefault(); 
                        setBuybackTime(calculateBuyback());
                    }}>
                    <div className="Hor-flex">
                        <label htmlFor="payback-sys-cost">Upfront cost of solar panel system:</label>
                        <input id="payback-sys-cost" type="number" min="0" max="1000000000000000" step="0.01" placeholder="Lek"></input>
                    </div>
                    <div className="Hor-flex">
                        <label htmlFor="payback-energy-usage">
                            Electricity consumption in&nbsp;
                            <select id="payback-energy-usage-metric" onChange={(e) => {
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
                            <select id="payback-energy-usage-period" onChange={(e) => {setPeuPeriod(e.target.value)}}>
                                <option value="Month">Month</option>
                                <option value="Year">Year</option>
                            </select>
                            :
                        </label>
                        <input id="payback-energy-usage" type="number" min="0" max="1000000000000000" step="0.01" placeholder={peuMetric + "/" + peuPeriod}></input>
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
                <summary><b>Payback Period Starting over:</b></summary>
                <form onSubmit={(e) => {
                        e.preventDefault();
                        const results = formatGenAndROI(prefecture);
                        setEnergyGenerated(results.genText);
                        setPaybackPeriod(results.ROIText);
                    }}>
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
                        <label htmlFor="electricity-paid">Current amount paid for electricity per month</label>
                        {/* Placeholder should work like it does in the original calculator*/}
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

function formatGenAndROI(prefecture) {
    const roofSpace = document.getElementById("roof-space");
    const percentSolar = document.getElementById("percent-solar");
    const electricityPaid = document.getElementById("electricity-paid");
    const systemData = calcROI(roofSpace.value, percentSolar.value, electricityPaid.value, prefecture);

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
 * @returns An object where: "monthlyGeneration" is the amount of energy a solar panel system would produce in a month, and "ROI" is the length of the payback period for a solar system purchase.
 */
function calcROI(roofArea, percentEnergyForSolar, costPerMonth, prefecture) {
    let electricityPrice = 14; // Cost of electricity (Lekë per kWh)
    let panelSize = 1.66; /*AVG val*/ // Size of a single solar panel (m^2)
    let panelCost = 130000; /*AVG val*/ // Cost of panels per kW (Lekë per kW)
    let panelCapacity = .150; /*AVG val*/ // Capacity of panels (kW)
    let panelEfficiency = 0.15;
    let expenses = 0; // Initial costs apart from the panels themselves (Ex: batteries, installation costs, replacing grid cables, etc.) (Lekë)
    let interest = 0; // Monthly interest in the case of payment by loan (Lekë per month) 

    // Amount of solar irradiation for the specified municipality (kWh/month)/kW
    const solarIrradiation = SolarData.getData(prefecture, "AVG", panelCapacity, false);
    // Ideal amount of energy generated per month for a system (kWh/month)
    const desiredMonthlyGen = ((percentEnergyForSolar / 100) * costPerMonth) / electricityPrice;
    // Number of solar panels needed
    const solarPanelAmt = Math.min(Math.floor(roofArea / panelSize), Math.ceil(desiredMonthlyGen / panelEfficiency / solarIrradiation / panelCapacity));
    // Amount of energy generated per month for a system (kWh per month)
    const actualMonthlyGen = panelCapacity * solarPanelAmt * solarIrradiation * panelEfficiency;
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