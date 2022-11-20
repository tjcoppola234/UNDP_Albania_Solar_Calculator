import { useState, useEffect } from 'react';
import { readString } from 'react-papaparse';

export function SolarPanelScrollList() {
    const [pvList, setPVList] = useState([]);

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
                        <tr><th colSpan="7" id="solar-pv-title">Solar Panel Info</th></tr>
                        <tr>
                            <th>Panel Selection</th>
                            <th>Name/Model</th>
                            <th>Manufacturer</th>
                            <th>Cost per Panel (€)</th>
                            <th>Area per Panel (m<sup>2</sup>)</th>
                            <th>Capacity per Panel (mW)</th>
                            <th>Efficiency (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pvList.map((pv, index) => (
                            <tr key={index}>
                                <td id="panel-selection"><button onClick={() => fillPanelFields(pv)} type="button">Use this panel</button></td>
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
                <p>Solar panel Statistics</p>
                <div className="Hor-flex">
                    <label htmlFor="solar-cost">Cost of one solar panel (Euro):</label>
                    <input type="number" min="0" max="100000" step="0.001" placeholder="Enter cost per panel (Euro)" id="solar-cost"></input>
                </div>
                <div className="Hor-flex">
                    <label htmlFor="solar-area">Area of one solar panel (m²):</label>
                    <input type="number" min="0" max="100" step="0.01" placeholder="Enter area per panel (m²)" id="solar-area"></input>
                </div>
                <div className="Hor-flex">
                    <label htmlFor="solar-capacity">Capacity of one solar panel (mW):</label>
                    <input type="number" min="0" max="1000" step="0.00001" placeholder="Enter capacity per panel (mW)" id="solar-capacity"></input>
                </div>
                <div className="Hor-flex">
                    <label htmlFor="solar-efficiency">Efficiency of solar panels (%):</label>
                    <input type="number" min="0" max="100" step="0.001" placeholder="Enter efficiency (%)" id="solar-efficiency"></input>
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