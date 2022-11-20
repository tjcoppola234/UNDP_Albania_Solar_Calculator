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
                <form onSubmit={(e) => e.preventDefault()}>
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
                        <label htmlFor="electricity-paid">Current amount paid for electricity</label>
                        {/* Placeholder should work like it does in the original calculator*/}
                        <input id="electricity-paid" type="number" placeholder="Lekë/Month"></input>
                    </div>
                    <button type="submit">Calculate</button>
                </form>
                {paybackPeriod}
                {energyGenerated}
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

function calcPayback() {
    let roofArea; // Amount of roof space to be used for solar panels (m^2)
    let percentEnergyForSolar = 100; // The amount of total energy consumption dedicated to solar (%)
    let costPerMonth; // The total amount paid for electricity per month (Lekë per month)
    let electricityPrice = 14; // The cost of electricity (Lekë per kWh)
    let panelSize; // The size of a single solar panel (m^2)
    let panelCost = 1300; // The cost of panels per kW (Lekë per kW)
    let panelCapacity = .15; // The capacity of panels (kW per m^2)
    let expenses = 0; // initial costs apart from the panels themselves (Ex: batteries, installation costs, replacing grid cables, etc.) (Lekë)
    let interest = 0; // monthly interest in the case of payment by loan (Lekë per month) 

    // Amount of solar irradiation for the specified municipality
    const solarIrradiation = SolarData.getData("Berat", "AVG", panelCapacity, false);
    // Ideal amount of energy generated per month for a system
    const desiredMonthlyGen = (percentEnergyForSolar * costPerMonth) / electricityPrice;
    // Area to be used for solar generation
    const solarArea = Math.min(roofArea, Math.ceil(((desiredMonthlyGen / solarIrradiation) / panelCapacity) / panelSize) * panelSize);
    // Amount of energy generated per month for a system
    const actualMonthlyGen = (panelCapacity * solarArea) * solarIrradiation;
    // Total cost of the system in Lekë
    const totalCost = (panelCost * panelCapacity * solarArea) + expenses;
    // Amount of Lekë saved per month
    const savings = (electricityPrice * actualMonthlyGen) - interest;
    // Total time to return on investment in months
    const roi = totalCost / savings;

    return roi;
}

export default Calculator;