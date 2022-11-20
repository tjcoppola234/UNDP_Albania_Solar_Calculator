import { readString } from 'react-papaparse';

const timeOptions = {
    January: "Jan",
    February: "Feb",
    March: "Mar",
    April: "Apr",
    May: "May",
    June: "Jun",
    July: "Jul",
    August: "Aug",
    September: "Sep",
    October: "Oct",
    November: "Nov",
    December: "Dec",
    Average: "AVG"
};

let solarData = [{Month: "Jan"}, {Month: "Feb"}, {Month: "Mar"}, {Month: "Apr"}, {Month: "May"}, {Month: "Jun"},{Month: "Jul"},
                 {Month: "Aug"}, {Month: "Sep"}, {Month: "Oct"}, {Month: "Nov"}, {Month: "Dec"}, {Month: "AVG"}];
let loaded = false;

function loadData() {
    if(loaded)
        return;
    
    //Loading csv as string
    fetch("data/SolarIrradiation.csv", {
        headers : { 
            'Content-Type': 'application/csv',
            'Accept': 'application/csv'
        }
    }).then(response => response.arrayBuffer()).then(function(buffer){
        const decoder = new TextDecoder('iso-8859-16');
        //Removes extra line with unecessary data and re-attaches Month to the entry
        return decoder.decode(buffer).replace(new RegExp("^.*\\r\\n"), "Month").replace(new RegExp("\\r\\n$"), "");
    })
    .then(function(csvData) {
        //Converting string into map of months and the irradiation for each month
        readString(csvData, {
            header: true,
            complete: function(results, file) {
                solarData = results.data;
                loaded = true;
            },
            error: function(error, file) {
                console.log(error);
            }
        });
    });
}

/**
 * Calculates the amount of solar irradiation for a prefecture (a group of municipalities).
 * Must have called loadData first in order to function properly. Check that data has been loaded first with isLoaded().
 * If called with invalid arguments or without data being loaded, returns the average irradiation for all of Albania.
 * @param {string} prefecture The name of a prefecture, which must match the format use in SolarIrradiation.csv
 * @param {string} month The month to get data for. Must be one of the strings in timeOptions. AVG returns the overall average accross all months
 * @param {number} capacity The capacity of solar panel being calculated for in kW/m^2. Important for converting from (kWh/month)/m^2 to (kWh/month)/kW.
 * @param {boolean} isLeapYear Whether the year is a leap year. The default is false, and only matters for calculations for February
 * @returns The average amount of solar irradiation for the provided prefecture in (kWh/month)/kW
 */
function getData(prefecture, month, capacity, isLeapYear = false) {
    if(!Object.values(timeOptions).some(v => v === month)) {
        console.error("Invalid month entered. Please use timeOptions.");
        return 1400 / 12;
    }

    for(let i = 0; i < solarData.length; i++) {
        if(solarData[i].Month === month) {
            if(!(prefecture in solarData[i])) {
                console.log("Data missing for " + prefecture + " in " + month + ".\nUsing general average.");
                //1400 (kWh/year)/kW is statistical average, divided by 12 to make per month
                return 1400 / 12;
            }

            //Irradiation of prefecture is in (kJ/day)/m^2
            //s = (irradiation of prefecture / 3600 * days in month) / capacity of panels = (kWh/month)/kW capacity
            //3600 converts kJ to kWh, days in month converts from days to month
            return (solarData[i][prefecture].replace(",", "") / 3600 * days(month, isLeapYear)) / capacity;
        }
    }

    console.error("Missing month " + month + " in data.");
    return 1400 / 12;
}

function days(month, isLeapYear) {
    if(month === "Jan" || month === "Mar" || month === "May" || month === "Jul" || month === "Aug" || month === "Oct" || month === "Dec")
        return 31;
    if(month === "Apr" || month === "Jun" || month === "Sep" || month === "Nov")
        return 30;
    //This is really dumb; !!isLeapYear = 1 if isLeapYear is true, 0 otherwise
    if(month === "Feb")
        return 28 + !!isLeapYear;

    //Average number of days in a month (for using AVG)
    if(isLeapYear)
        return 366 / 12;
    
    return 365 / 12;
}

const isLoaded = () => loaded;

export {timeOptions, isLoaded, loadData, getData};