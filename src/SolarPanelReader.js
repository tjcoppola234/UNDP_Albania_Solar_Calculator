import { useState, useEffect } from 'react';
import { readString } from 'react-papaparse';
import English from './English';
import Albanian from './Albanian';
import { settings } from './Settings';

/**
 * A collection of data about a specific solar PV example.
 * @typedef SolarPVEntry
 * @property {string} NameOrModel
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
    const [useLek, setUseLek] = useState(false);

    useEffect(() => {
        fetch("data/SolarPanelData.csv", {
            headers: {
                'Content-Type': 'application/csv',
                'Accept': 'application/csv'
            }
        }).then(response => response.arrayBuffer()).then(function (buffer) {
            const decoder = new TextDecoder('utf-8');
            return decoder.decode(buffer).replace(new RegExp("(\\r|\\n)+$"), "");
        })
            .then(function (csvData) {
                //Converting string into list of solar panel options
                readString(csvData, {
                    header: true,
                    transformHeader: function (header, index) {
                        switch (header) {
                            case "Name/Model":
                                return "NameOrModel";
                            case "Manufacturer":
                                return "Manufacturer";
                            case "Cost per Panel (Euro)":
                                return "CostPerPanel";
                            case "Area per Panel (m^2)":
                                return "AreaPerPanel";
                            case "Capacity per Panel (W)":
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
                    complete: function (results, file) {
                        //console.log(results.data);
                        setPVList(results.data);
                    },
                    error: function (error, file) {
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
                        <tr>
                            <th colSpan="7" id="solar-pv-title">
                                <English>Example Solar Photovoltaics</English>
                                <Albanian>Shembull Fotovoltaike Diellore</Albanian>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <English>Panel Selection</English>
                                <Albanian>P??rzgjedhja e panelit</Albanian>
                            </th>
                            <th className="capped-th-width">
                                <English>Name/Model</English>
                                <Albanian>Emri/Modeli</Albanian>
                            </th>
                            <th className="capped-th-width">
                                <English>Manufacturer</English>
                                <Albanian>Prodhuesi</Albanian>
                            </th>
                            <th>
                                <div id="vertical-align-check">
                                    <English>Cost per kW</English>
                                    <Albanian>Kostoja p??r kW</Albanian>
                                    <label className="switch btn-color-mode-small-switch">
                                        <input type="checkbox" name="currency-type" label="Currency Display Toggle" id="currency-type" placeholder="1" onChange={() => setUseLek(!useLek)} />
                                        <label htmlFor="currency-type" data-on="L" data-off="???" className="btn-color-mode-small-switch-inner"></label>
                                    </label>
                                </div>
                            </th>
                            <th>
                                <English>Area per Panel (m<sup>2</sup>)</English>
                                <Albanian>Zona p??r panel (m<sup>2</sup>)</Albanian>
                            </th>
                            <th>
                                <English>Peak Capacity per Panel (Wp)</English>
                                <Albanian>Kapaciteti maksimal p??r panel (Wp)</Albanian>
                            </th>
                            <th>
                                <English>Efficiency (%)</English>
                                <Albanian>Efikasiteti (%)</Albanian>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {pvList.map((pv, index) => (
                            <tr className="data-row" key={index} style={(props.isSelected(pv.NameOrModel, pv.Manufacturer) ? {backgroundColor: "#faffd9"} : {})} onClick={() => {
                                fillPanelFields(pv);
                                props.onSelection(pv);
                                props.checkIsCustomData(false);
                            }}>
                                <td id="panel-selection"><button type="button">
                                    <English>Use this panel</English>
                                    <Albanian>P??rdorni k??t?? panel</Albanian>
                                </button></td>
                                <td className="capped-th-width">{pv.NameOrModel}</td>
                                <td className="capped-th-width">
                                    {pv.ManufacturerLink ? <a href={pv.ManufacturerLink} target="_blank" rel="noreferrer">{pv.Manufacturer}</a> : pv.Manufacturer}
                                </td>
                                <td className="spr-table-cost-per-panel">{useLek ? Math.round(settings.lekPerEuro.getState() * pv.CostPerPanel) : pv.CostPerPanel}</td>
                                <td>{pv.AreaPerPanel}</td>
                                <td>{pv.CapacityPerPanel}</td>
                                <td>{pv.Efficiency}</td>
                            </tr>))}
                    </tbody>
                </table>
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