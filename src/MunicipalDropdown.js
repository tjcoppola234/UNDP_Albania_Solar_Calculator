import { readString } from 'react-papaparse';
import { useState, useEffect, useRef } from 'react';
import English from './English';
import Albanian from './Albanian';
import Tooltip from './Tooltip';
import * as SolarData from './SolarIrradiationReader';
import { settings } from './Settings';

/**
 * @callback changeCallback Defines a function that can be used to update components when a new municipality is selected.
 * @param {HTMLSelectElement} selectElement the select HTML element that has just had its selected value changed.
 */

/**
 * The HTML for a dropdown which displays a list of municipalities from data/MunicipalityPrefecture. Each option for the dropdown has a value equal to the name of the prefecture the municipality is located in.
 * @param {*} props A list of properties related to the dropdown.
 * @param {changeCallback} props.changeEvent A {@link changeCallback} function that is called when an option from the dropdown is selected. Used to update external HTML with the currently selected value.
 * @returns {HTMLElement} An HTMLElement representing the dropdown.
 */
export function MunicipalDropdown(props) {
    const [looping, setLooping] = useState(false);
    const [isManualShown, setIsManualShown] = useState(false);
    const ref = useRef(null);

    const [albanian, setAlbanian] = useState(settings.albanianVisible.getState());
    settings.albanianVisible.addListener(visible => {
        setAlbanian(visible);
    });

    useEffect(() => {
        //Loading csv as string
        fetch("data/MunicipalityPrefecture.csv", {
            headers: {
                'Content-Type': 'application/csv',
                'Accept': 'application/csv'
            }
        }).then(response => response.arrayBuffer()).then(function (buffer) {
            const decoder = new TextDecoder('iso-8859-16');
            return decoder.decode(buffer).replace(new RegExp("(\\r|\\n)+$"), "");
        })
            .then(function (csvData) {
                //Converting string into array of values
                readString(csvData, {
                    header: true,
                    transformHeader: function (header, index) {
                        switch (header) {
                            case "Nr.":
                                return "index";
                            case "Bashkia/Municipality":
                                return "municipality";
                            case "Qarku/Prefecture":
                                return "prefecture";
                            default:
                                return "HEADER IS RENAMED OR MISSING";
                        }
                    },
                    complete: function (results, file) {
                        //Adding municipality objects to dropdown
                        const munSelections = Array.from(document.getElementsByClassName("municipality-dropdown"));
                        results = results.data.sort((a, b) => a.municipality.localeCompare(b.municipality, settings.albanianVisible.getState() ? "sq-AL" : "en-US"));
                        munSelections.forEach(munSelection => {
                            munSelection.innerText = "";

                            let val = document.createElement("option");
                            val.innerText = "";
                            val.value = "";
                            val.id = "municipality -1";
                            val.hidden = true;
                            val.selected = true;
                            val.disabled = true;

                            munSelection.appendChild(val);

                            for (let i = 0; i < results.length; i++) {
                                val = document.createElement("option");
                                val.innerText = results[i].municipality;
                                val.value = results[i].prefecture;
                                val.id = "municipality " + i;
                                munSelection.appendChild(val);
                            }
                        });
                    },
                    error: function (error, file) {
                        console.error(error);
                    }
                });
            });
    }, []);

    return (
        <div>
            <div ref={ref} className={"modal-img" + (isManualShown ? "" : " invisible")}>
                <span className="close-modal" onClick={() => {
                    ref.current.scrollTo(0, 0);
                    setIsManualShown(false);
                    document.body.style.overflowY = "scroll";
                }}>&times;</span>
                <div className="modal-content">
                    <div className="center-label">
                        <label htmlFor="mun-irradiation">
                            <English>Manually enter the average amount of irradiation in your area per month:</English>
                            <Albanian>Vendosni manualisht sasinë mesatare të rrezatimit në zonën tuaj në muaj:</Albanian>
                        </label>
                    </div>
                    <div className="full-input">
                        <input id="mun-irradiation" type="number" placeholder={albanian ? "kWh/kW në muaj" : "kWh/kW per month"} min="0.01" max="100000" step="0.01" onChange={v => {
                            if (!looping) {
                                props.changeEvent(undefined, v.target.valueAsNumber);
                                setLooping(true);
                                for (let drop of document.getElementsByClassName("municipality-dropdown"))
                                    drop.value = "";
                                setLooping(false);
                            }
                        }}></input>
                        <Tooltip>
                            <English>Your municipality is used to determine the approximate solar irradiation, or amount of sunlight, reaching your business.</English>
                            <Albanian>Komuna juaj përdoret për të përcaktuar rrezatimin e përafërt diellor ose sasinë e dritës së diellit që arrin në biznesin tuaj.</Albanian>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className="center-label">
                <label htmlFor="municipality-dropdown">
                    <English>Select your municipality</English>
                    <Albanian>Zgjidhni komunën tuaj</Albanian>
                </label>
            </div>
            <div className="full-input extra-manual-option">
                <select className="municipality-dropdown" title="Select Municipality" defaultChecked={false} onChange={e => {
                    if (!looping) {
                        props.changeEvent(e, 0);
                        setLooping(true);
                        document.getElementById("mun-irradiation").value = parseFloat(SolarData.getData(e.target.value, SolarData.timeOptions.Average, 1, false)).toFixed(2);
                        setLooping(false);
                    }
                }}>
                </select>
                <Tooltip>
                    <English>Your municipality is used to determine the approximate solar irradiation, or amount of sunlight, reaching your business.</English>
                    <Albanian>Komuna juaj përdoret për të përcaktuar rrezatimin e përafërt diellor ose sasinë e dritës së diellit që arrin në biznesin tuaj.</Albanian>
                </Tooltip>
                <button type="button" className="submit-button" onClick={e => {
                    e.preventDefault();
                    document.body.style.overflow = "hidden";
                    setIsManualShown(true);
                }}>{albanian ? "Futni rrezatimin me dorë" : "Enter irradiation manually"}</button>
            </div>
        </div>
    );
}