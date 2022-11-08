import './global.css';
import './Calculator.css';
import { PageHead } from './App';
import {useState} from 'react';

function Calculator() {
    const [buybackTime, setBuybackTime] = useState("");

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
                        <label htmlFor="payback-energy-cost">Cost of electricity:</label>
                        <input id="payback-energy-cost" type="number" min="0" max="10000" step="0.01" placeholder="Lek/kWh"></input>
                    </div>
                    <div className="Hor-flex">
                        <label htmlFor="payback-energy-usage">
                            <select id="payback-energy-usage-select"><option value="m">Monthly</option><option value="y">Yearly</option></select> electricity consumption:
                        </label>
                        <input id="payback-energy-usage" type="number" min="0" max="1000000000000000" step="0.01" placeholder="kWh/Month"></input>
                    </div>
                    <button type="submit">Calculate</button>
                </form>
                {buybackTime}
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
    if(document.getElementById("payback-energy-usage-select").value === "y") {
        energyUsageVal = energyUsage.value / 12;
    }

    //Calculate the buyback period in total months
    const totalMonths = sysCost.value / (energyCost.value * energyUsageVal);

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

export default Calculator;