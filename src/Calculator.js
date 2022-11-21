import './global.css';
import './Calculator.css';
import { PageHead, PageFoot } from './App';
import {useState} from 'react';
import { MunicipalDropdown } from './Dropdown';
import {SolarPanelScrollList} from './SolarPanelReader';
import * as SolarData from './SolarIrradiationReader';
import React from 'react';
import Plot from 'react-plotly.js';

import English from './English';
import Albanian from './Albanian';
import { settings } from './Settings';

function Calculator() {
    const [paybackPeriod, setPaybackPeriod] = useState("");
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
                        <English><h2>Calculator</h2></English>
                        <Albanian><h2>Llogaritësi</h2></Albanian>
                    </div>
                </header>
                <details open> {/* place "open" next to "details" to make it open on load */}
                    <div>
                        <English><summary><b>Payback Period:</b> How long it will take to break even on your initial solar panel system purchase</summary></English>
                        <Albanian> <summary><b>Periudha e kthimit:</b> Sa kohë do të duhet për të prishur edhe blerjen fillestare të sistemit të panelit diellor</summary></Albanian>
                    </div>
                    <form onSubmit={(e) => {
                            e.preventDefault();
                            const results = formatGenAndROI(prefecture, solarCost * 100, solarArea, solarCapacity, solarEfficiency);
                            setEnergyGenerated(results.genText);
                            setPaybackPeriod(results.ROIText);
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
                                <English>Roof space available for solar</English>
                                <Albanian>Hapësirë ​​çati e disponueshme për solare</Albanian>
                            </label>
                            <input id="roof-space" type="number" placeholder={"m\u00B2"}></input>
                        </div>
                        <div className="Hor-flex">
                            <label htmlFor="percent-solar">
                                <English>Percent of total energy consumption for solar</English>
                                <Albanian>Përqindja e konsumit total të energjisë për energjinë diellore</Albanian>
                            </label>
                            <input id="percent-solar" type="number" placeholder="%"></input>
                        </div>
                        <div className="Hor-flex">
                            <label htmlFor="electricity-paid">
                                <div className="Hor-flex">
                                    <English>Current amount paid for electricity per</English>
                                    <Albanian>Shuma aktuale e paguar për energjinë elektrike për</Albanian>
                                    <select id="electricity-paid-period">
                                        <option value="month">month</option>
                                        <option value="year">year</option>
                                    </select>
                                </div>
                            </label>
                            <input id="electricity-paid" type="number" placeholder="Lekë"></input>
                        </div>
                        <button type="submit">
                            <English>Calculate</English>
                            <Albanian>Llogaritni</Albanian>
                        </button>
                    </form>
                    <div className="Vert-flex">
                        <div>
                            <English>Energy generated by solar sytem: {energyGenerated} kWh per month</English>
                            <Albanian>Energjia e gjeneruar nga sistemi diellor: {energyGenerated} kWh në muaj</Albanian>
                        </div>
                        <div>
                            <English>Time to make a return on investment: {formatMonths(paybackPeriod)}</English>
                            <Albanian>Koha për të bërë një kthim nga investimi: {formatMonths(paybackPeriod, true)}</Albanian>
                        </div>
                    </div>
                </details>
                <graph id="graph">
                    <div>
                        <English><summary><b>See the cost and savings of a solar photovoltaic system over time</b></summary></English>
                        <Albanian> <summary><b>See the cost and savings of a solar photovoltaic system over time</b></summary></Albanian> {/*TODO: Translate to Albanian*/}
                    </div>
                    <br />
                    <div>
                        <Plot
                            data={[
                                {
                                x: [1, 2, 3],
                                y: [2, 6, 3],
                                type: 'scatter',
                                mode: 'lines+markers',
                                marker: {color: 'red'},
                                },
                            {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                            ]}
                            layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
                        />
                    </div>
                </graph>
            </div>
            <PageFoot></PageFoot>
        </div>
    )
}

function formatGenAndROI(prefecture, solarCost, solarArea, solarCapacity, solarEfficiency) {
    const roofSpace = document.getElementById("roof-space");
    const percentSolar = document.getElementById("percent-solar");
    const electricityPaid = document.getElementById("electricity-paid");
    let electricityPaidVal = electricityPaid.value;
    if(document.getElementById("electricity-paid-period").value === "year") {
        electricityPaidVal /= 12;
    }
    const systemData = calcROI(roofSpace.value, percentSolar.value, electricityPaidVal, prefecture, solarCost, solarArea, solarCapacity, solarEfficiency);

    return {
        genText: systemData.monthlyGeneration,
        ROIText: systemData.ROI
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