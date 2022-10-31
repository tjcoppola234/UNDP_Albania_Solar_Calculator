import './global.css';
import { PageHead } from './App';
import {useState} from 'react';

function Calculator() {
    const [buybackTime, setBuybackTime] = useState("");

    return (
        <div className="Calculator">
            <PageHead></PageHead>
            <header>
                <h2>Calculator</h2>
                <p>Calculate how long it will take to break even on your solar panel system purchase</p>
            </header>
            <form id="calc-buyback" onSubmit={(e) => {
                    e.preventDefault(); 
                    setBuybackTime(calculateBuyback());
                }}>
                <div className="Hor-flex">
                    <label htmlFor="sys-cost">Upfront cost of solar panel system (Lek):</label>
                    <input id="sys-cost" type="text"></input>
                </div>
                <div className="Hor-flex">
                    <label htmlFor="energy-cost">Cost of electricity (Lek/kWh):</label>
                    <input id="energy-cost" type="text"></input>
                </div>
                <div className="Hor-flex">
                    <label htmlFor="energy-usage">Monthly electricity usage (kWh/Month):</label>
                    <input id="energy-usage" type="text"></input>
                </div>
                <button type="submit">Calculate</button>
            </form>
            {buybackTime}
        </div>
    )
}

function calculateBuyback() {
    const sysCost = document.getElementById("sys-cost");
    const energyCost = document.getElementById("energy-cost");
    const energyUsage = document.getElementById("energy-usage");

    //Return an empty string if the fields are not correctly filled
    let badInput = false;
    if(isNaN(Number(sysCost.value)) || sysCost.value === "") {
        sysCost.placeholder = "Must enter a number";
        sysCost.value = "";
        badInput = true;
        
    }
    if(isNaN(Number(energyCost.value)) || energyCost.value === "") {
        energyCost.placeholder = "Must enter a number";
        energyCost.value = "";
        badInput = true;
    }
    if(isNaN(Number(energyUsage.value)) || energyUsage.value === "") {
        energyUsage.placeholder = "Must enter a number";
        energyUsage.value = "";
        badInput = true;
    }
    if(badInput) {
        return "";
    }

    //Calculate the buyback period in total months
    const totalMonths = sysCost.value / (energyCost.value * energyUsage.value);

    //Break that down to years and months
    let years = totalMonths / 12;
    const months = Math.round(totalMonths % 12);
    if(years < 1) {
        return `${months} Months`;
    } else if(months === 0) {
        return `${Math.floor(years)} Years`;
    }
    return `${Math.floor(years)} Years\n${months} Months` 
}

export default Calculator;