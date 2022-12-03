import { useState, useEffect } from 'react';
import { readString } from 'react-papaparse';
import English from './English';
import Albanian from './Albanian';
import { settings } from './Settings';

/**
 * A collection of data about a specific solar PV example.
 * @typedef SolarPVEntry
 * @property {string} Manufacturer
 * @property {number} CostPerPanel
 * @property {number} AreaPerPanel
 * @property {number} CapacityPerPanel
 * @property {number} Efficiency
 * @property {string} ManufacturerLink
 * 
 * @callback selectTableItemCallback A function to update external code when a table item is selected.
 * @param {SolarPVEntry} selectedEntry The entry from the table selected.
 * 
 * @callback isCustomPVCallback A function to update external components which depend on whether data has been entered manually or automatically loaded from the table. Mainly important for the name/model and manufacturer.
 * @param {boolean} isManual True when the data has been updated manually.
 */

/**
 * The HTML for the table displaying example solar photovoltaic systems, which are obtained from "data/SolarPanelData.csv".
 * Table items are saved as {@link SolarPVEntry} items.
 * @param {*} props A list of properties related to the table.
 * @param {selectTableItemCallback} props.onSelection A {@link selectTableItemCallback} function to be called when selecting a specific panel from the table in order to update external react components.
 * @param {isCustomPVCallback} props.checkIsCustomData A {@link isCustomPVCallback} function to be called when checking if the manual entries have been used, or if data is straight from the table.
 * @returns {HTMLElement} An HTMLElement representing the table, with class "solar-pv-list" for the table, and "solar-pv-scroll" for the div which allows the table to be scrolled.
 */
export function SolarPanelScrollList(props) {
    const [pvList, setPVList] = useState([]);
    const [albanian, setAlbanian] = useState(settings.albanianVisible.getState());
    settings.albanianVisible.addListener(visible => {
        setAlbanian(visible);
    });

    useEffect(() => {
        fetch("data/SolarPanelData.csv", {
            headers : { 
                'Content-Type': 'application/csv',
                'Accept': 'application/csv'
            }
        }).then(response => response.arrayBuffer()).then(function(buffer){
            const decoder = new TextDecoder('utf-8');
            return decoder.decode(buffer).replace(new RegExp("\\r\\n$"), "");
        })
        .then(function(csvData) {
            //Converting string into list of solar panel options
            readString(csvData, {
                header: true,
                transformHeader: function(header, index) {
                    switch(header) {
                        case "Name/Model":
                            return "NameOrModel";
                        case "Manufacturer":
                            return "Manufacturer";
                        case "Cost per Panel (Euro)":
                            return "CostPerPanel";
                        case "Area per Panel (m^2)":
                            return "AreaPerPanel";
                        case "Capacity per Panel (kW)":
                            return "CapacityPerPanel";
                        case "Efficiency (%)":
                            return "Efficiency";
                        case "Manufacturer Link":
                            return "ManufacturerLink";
                        default:
                            console.error("Undefined header found in SolarPanelData.csv: " + header);
                            return "UndefinedHeader";
                    }
                },
                complete: function(results, file) {
                    //console.log(results.data);
                    setPVList(results.data);
                },
                error: function(error, file) {
                    console.log(error);
                }
            });
        });
    }, []);

    return (
        <div>
            <div id="solar-pv-scroll">
                <table id="solar-pv-list">
                    <thead>
                        <tr><th colSpan="7" id="solar-pv-title">
                            <English>Solar Panel Info</English>
                            <Albanian>Informacion mbi panelin diellor</Albanian>
                        </th></tr>
                        <tr>
                            <th>
                                <English>Panel Selection</English>
                                <Albanian>Përzgjedhja e panelit</Albanian>
                            </th>
                            <th className="capped-th-width">
                                <English>Name/Model</English>
                                <Albanian>Emri/Modeli</Albanian>
                            </th>
                            <th className="capped-th-width">
                                <English>Manufacturer</English>
                                <Albanian>Prodhuesi</Albanian>
                            </th>
                            {/* apr key: https://api.exchangerate-api.com/v4/latest/EUR */}
                            <th>
                                <English>Cost per Panel (
                                    <select id="spr-cost-per-panel-select" title="Select Currency Type" onChange={(e) => {
                                        e.preventDefault();
                                        const cppEntries = document.getElementsByClassName("spr-table-cost-per-panel");
                                        fetch("https://api.exchangerate-api.com/v4/latest/EUR")
                                        .then(response => response.json())
                                        .then(json => {
                                            debugger;
                                            const lekPerEuro = json.rates.ALL;
                                            if(document.getElementById("spr-cost-per-panel-select").value === "ALL") {
                                                for (let i = 0; i < cppEntries.length; i++) {
                                                    cppEntries.item(i).innerHTML = Math.round(parseFloat(cppEntries.item(i).innerHTML) * lekPerEuro);
                                                }
                                            } else {
                                                for (let i = 0; i < cppEntries.length; i++) {
                                                    cppEntries.item(i).innerHTML = Math.round(parseFloat(cppEntries.item(i).innerHTML) / lekPerEuro);
                                                }
                                            }
                                        })   
                                    }}>
                                        <option id="spr-cost-per-panel-select-EUR" value="EUR">€</option>
                                        <option id="spr-cost-per-panel-select-ALL" value="ALL">L</option>
                                    </select>
                                )</English>
                                <Albanian>Kostoja për panel (€)</Albanian>
                            </th>
                            <th>
                                <English>Area per Panel (m<sup>2</sup>)</English>
                                <Albanian>Zona për panel (m<sup>2</sup>)</Albanian>
                            </th>
                            <th>
                                <English>Capacity per Panel (kW)</English>
                                <Albanian>Kapaciteti për panel (kW)</Albanian>
                            </th>
                            <th>
                                <English>Efficiency (%)</English>
                                <Albanian>Efikasiteti (%)</Albanian>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {pvList.map((pv, index) => (
                            <tr key={index}>
                                <td id="panel-selection"><button onClick={() => {fillPanelFields(pv); props.onSelection(pv); props.checkIsCustomData(false);}} type="button">
                                    <English>Use this panel</English>
                                    <Albanian>Përdorni këtë panel</Albanian>
                                </button></td>
                                <td className="capped-th-width">{pv.NameOrModel}</td>
                                <td className="capped-th-width"><a href={pv.ManufacturerLink} target="_blank" rel="noreferrer">{pv.Manufacturer}</a></td>
                                <td className="spr-table-cost-per-panel">{pv.CostPerPanel}</td>
                                <td>{pv.AreaPerPanel}</td>
                                <td>{pv.CapacityPerPanel}</td>
                                <td>{pv.Efficiency}</td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
            <div id="solar-panel-info">
                <div>
                    <English><b>Disclaimer:</b> Data as of November 2022</English>
                </div>
                <div>
                    <English>Select a solar panel from the table above or enter custom information below</English>
                    <Albanian>Zgjidhni një panel diellor nga tabela e mësipërme ose futni informacione të personalizuara më poshtë</Albanian>
                </div>
                <div className="Hor-flex">
                    <label htmlFor="solar-cost">
                        <English>Cost of one solar panel (€):</English>
                        <Albanian>Kostoja e një paneli diellor (€):</Albanian>
                    </label>
                    <input type="number" min="0" max="100000" step="0.001" placeholder={albanian ? "Fut koston për panel (€)" : "Enter cost per panel (€)"} id="solar-cost" onInput={() => props.checkIsCustomData(true)}></input>
                </div>
                <div className="Hor-flex">
                    <label htmlFor="solar-area">
                        <English>Area of one solar panel (m²):</English>
                        <Albanian>Sipërfaqja e një paneli diellor (m²):</Albanian>
                    </label>
                    <input type="number" min="0" max="100" step="0.01" placeholder={albanian ? "Fut zonën për panel (m²)" : "Enter area per panel (m²)"} id="solar-area" onInput={() => props.checkIsCustomData(true)}></input>
                </div>
                <div className="Hor-flex">
                    <label htmlFor="solar-capacity">
                        <English>Capacity of one solar panel (kW):</English>
                        <Albanian>Kapaciteti i një paneli diellor (kW):</Albanian>
                    </label>
                    <input type="number" min="0" max="1000" step="0.00001" placeholder={albanian ? "Fut kapacitetin për panel (kW)" : "Enter capacity per panel (kW)"} id="solar-capacity" onInput={() => props.checkIsCustomData(true)}></input>
                </div>
                <div className="Hor-flex">
                    <label htmlFor="solar-efficiency">
                        <English>Efficiency of solar panels (%):</English>
                        <Albanian>Efikasiteti i paneleve diellore (%):</Albanian>
                    </label>
                    <input type="number" min="0" max="100" step="0.001" placeholder={albanian ? "Fut efikasitetin (%)" : "Enter efficiency (%)"} id="solar-efficiency" onInput={() => props.checkIsCustomData(true)}></input>
                </div>
            </div>
        </div>
    );
}

/**
 * Fills the input elements of the document with the selected table item.
 * @param {SolarPVEntry} pvSelection The {@link SolarPVEntry} of the table that has been selected.
 */
function fillPanelFields(pvSelection) {
    document.getElementById("solar-cost").value = pvSelection.CostPerPanel;
    document.getElementById("solar-area").value = pvSelection.AreaPerPanel;
    document.getElementById("solar-capacity").value = pvSelection.CapacityPerPanel;
    document.getElementById("solar-efficiency").value = pvSelection.Efficiency.replace("%", "");
}