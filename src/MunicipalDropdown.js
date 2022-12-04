import { readString } from 'react-papaparse';
import { useEffect } from 'react';
import English from './English';
import Albanian from './Albanian';
import Tooltip from './Tooltip';
import {settings} from './Settings';

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
    useEffect(() => {
        //Loading csv as string
        fetch("data/MunicipalityPrefecture.csv", {
          headers : { 
            'Content-Type': 'application/csv',
            'Accept': 'application/csv'
           }
        }).then(response => response.arrayBuffer()).then(function(buffer){
            const decoder = new TextDecoder('iso-8859-16');
            return decoder.decode(buffer).replace(new RegExp("\\r\\n$"), "");
          })
          .then(function(csvData) {
            //Converting string into array of values
            readString(csvData, {
                header: true,
                transformHeader: function(header, index) {
                    switch(header) {
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
                complete: function(results, file) {
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
    
                        for(let i = 0; i < results.length; i++) {
                            val = document.createElement("option");
                            val.innerText = results[i].municipality;
                            val.value = results[i].prefecture;
                            val.id = "municipality " + i;
                            munSelection.appendChild(val);
                        }
                    });
                },
                error: function(error, file) {
                    console.log(error);
                }
            });
        });
    }, []);

    return (
        <div className="Hor-flex">
            <label htmlFor="municipality-dropdown">
                <English>Select your municipality:</English>
                <Albanian>Zgjidhni komunën tuaj:</Albanian>
            </label>
            <select className="municipality-dropdown" title="Select Municipality" defaultChecked={false} onChange={e => props.changeEvent(e)}>
            {}
            </select>
            <Tooltip>
                <English>Your municipality is used to determine the approximate solar irradiation, or amount of sunlight, reaching your business.</English>
                <Albanian>Komuna juaj përdoret për të përcaktuar rrezatimin e përafërt diellor ose sasinë e dritës së diellit që arrin në biznesin tuaj.</Albanian>
            </Tooltip>
        </div>
    );
}