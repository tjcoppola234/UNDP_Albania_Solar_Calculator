import { readString } from 'react-papaparse';
import { useEffect } from 'react';
import English from './English';
import Albanian from './Albanian';
import {settings} from './Settings';

export function MunicipalDropdown({changeEvent}) {
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
        <div>
            <label htmlFor="municipality-dropdown">
                <English>Select your municipality:</English>
                <Albanian>Zgjidhni komunën tuaj:</Albanian>
            </label>
            <select className="municipality-dropdown" defaultChecked={false} onChange={e => changeEvent(e)}>
            </select>
        </div>
    );
}