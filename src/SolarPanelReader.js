import { useState, useEffect } from 'react';
import { readString } from 'react-papaparse';
import English from './English';
import Albanian from './Albanian';
import { settings } from './Settings';

export function SolarPanelScrollList({onSelection, getIsCustomData}) {
    const [pvList, setPVList] = useState([]);
    const [english, setEnglish] = useState(settings.englishVisible.getState());
    settings.englishVisible.addListener((visible) => {
        setEnglish(visible);
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
                    return header.replace(new RegExp("\\(.+\\)"), "").trim();
                },
                complete: function(results, file) {
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
                            <th>
                                <English>Name/Model</English>
                                <Albanian>Emri/Modeli</Albanian>
                            </th>
                            <th>
                                <English>Manufacturer</English>
                                <Albanian>Prodhuesi</Albanian>
                            </th>
                            <th>
                                <English>Cost per Panel (€)</English>
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
                                <td id="panel-selection"><button onClick={() => {fillPanelFields(pv); onSelection(pv); getIsCustomData(false);}} type="button">
                                    <English>Use this panel</English>
                                    <Albanian>Përdorni këtë panel</Albanian>
                                </button></td>
                                <td>{pv["Name/Model"]}</td>
                                <td>{pv["Manufacturer"]}</td>
                                <td>{pv["Cost per Panel"]}</td>
                                <td>{pv["Area per Panel"]}</td>
                                <td>{pv["Capacity per Panel"]}</td>
                                <td>{pv["Efficiency"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div id="solar-panel-info" className="Vert-flex">
                <div>
                    <English>Solar Panel Statistics</English>
                    <Albanian>Statistikat e paneleve diellore</Albanian>
                </div>
                <div className="Hor-flex">
                    <label htmlFor="solar-cost">
                        <English>Cost of one solar panel (€):</English>
                        <Albanian>Kostoja e një paneli diellor (€):</Albanian>
                    </label>
                    <input type="number" min="0" max="100000" step="0.001" placeholder={english ? "Fut koston për panel (€)" : "Enter cost per panel (€)"} id="solar-cost" onInput={() => getIsCustomData(true)}></input>
                </div>
                <div className="Hor-flex">
                    <label htmlFor="solar-area">
                        <English>Area of one solar panel (m²):</English>
                        <Albanian>Sipërfaqja e një paneli diellor (m²):</Albanian>
                    </label>
                    <input type="number" min="0" max="100" step="0.01" placeholder={english ? "Fut zonën për panel (m²)" : "Enter area per panel (m²)"} id="solar-area" onInput={() => getIsCustomData(true)}></input>
                </div>
                <div className="Hor-flex">
                    <label htmlFor="solar-capacity">
                        <English>Capacity of one solar panel (kW):</English>
                        <Albanian>Kapaciteti i një paneli diellor (kW):</Albanian>
                    </label>
                    <input type="number" min="0" max="1000" step="0.00001" placeholder={english ? "Fut kapacitetin për panel (kW)" : "Enter capacity per panel (kW)"} id="solar-capacity" onInput={() => getIsCustomData(true)}></input>
                </div>
                <div className="Hor-flex">
                    <label htmlFor="solar-efficiency">
                        <English>Efficiency of solar panels (%):</English>
                        <Albanian>Efikasiteti i paneleve diellore (%):</Albanian>
                    </label>
                    <input type="number" min="0" max="100" step="0.001" placeholder={english ? "Fut efikasitetin (%)" : "Enter efficiency (%)"} id="solar-efficiency" onInput={() => getIsCustomData(true)}></input>
                </div>
            </div>
        </div>
    );
}

function fillPanelFields(pvSelection) {
    document.getElementById("solar-cost").value = pvSelection["Cost per Panel"];
    document.getElementById("solar-area").value = pvSelection["Area per Panel"];
    document.getElementById("solar-capacity").value = pvSelection["Capacity per Panel"];
    document.getElementById("solar-efficiency").value = pvSelection["Efficiency"].replace("%", "");
}