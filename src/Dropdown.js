import { readString } from 'react-papaparse';
import { useEffect } from 'react';

export function MunicipalDropdown({changeEvent}) {
    useEffect(() => {
        //Loading csv as string
        fetch("data/MunicipalityPrefecture.csv", {
          headers : { 
            'Content-Type': 'application/csv',
            'Accept': 'application/csv'
           }
        }).then(response => response.arrayBuffer()).then(function(buffer){
            const decoder = new TextDecoder('iso-8859-1');
            return decoder.decode(buffer);
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
                    let munSelection = document.getElementById("municipality-dropdown");
                    munSelection.innerText = "";
                    
                    let val = document.createElement("option");
                    val.innerText = "";
                    val.value = "";
                    val.id = "municipality -1";
                    val.hidden = true;
                    val.selected = true;
                    val.disabled = true;

                    munSelection.appendChild(val);

                    for(let i = 0; i < results.data.length; i++) {
                        val = document.createElement("option");
                        val.innerText = results.data[i].municipality;
                        val.value = results.data[i].prefecture;
                        val.id = "municipality " + i;
                        munSelection.appendChild(val);
                    }
                },
                error: function(error, file) {
                    console.log(error);
                }
            });
        });
    }, []);

    return (
        <div>
            <label htmlFor="municipality-dropdown">Select your municipality:</label>
                <select id="municipality-dropdown" defaultChecked={false} onChange={e => changeEvent(e)}>
                </select>
        </div>
    );
}