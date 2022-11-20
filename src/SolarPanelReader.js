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
    );
}

function fillPanelFields(pvSelection) {
    console.log(pvSelection);
}