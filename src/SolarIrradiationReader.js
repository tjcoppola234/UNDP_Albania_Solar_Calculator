import { readString } from 'react-papaparse';

/**
 * A possible month to get solar irradiation data for. Average is unique, and is equivalent to the average irradiation across all months
 * @readonly
 * @enum {string} timeOption
 */
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

let solarData = [{Month: timeOptions.January}, {Month: timeOptions.February}, {Month: timeOptions.March}, {Month: timeOptions.April},
                 {Month: timeOptions.May}, {Month: timeOptions.June},{Month: timeOptions.July}, {Month: timeOptions.August},
                 {Month: timeOptions.September}, {Month: timeOptions.October}, {Month: timeOptions.November}, {Month: timeOptions.December},
                 {Month: timeOptions.Average}];
let loaded = false;

/**
 * Reads solar irradiation data from "data/SolarIrradiation.csv" by prefecture and loads the data into solarData.
 */
function loadData() {
    if(!loaded) {
        //Loading csv as string
        fetch("data/SolarIrradiation.csv", {
            headers : { 
                'Content-Type': 'application/csv',
                'Accept': 'application/csv'
            }
        }).then(response => response.arrayBuffer()).then(function(buffer){
            const decoder = new TextDecoder('iso-8859-16');
            //Removes extra line with unecessary data and re-attaches Month to the entry
            return decoder.decode(buffer).replace(new RegExp("^.*(\\r|\\n)+"), "Month").replace(new RegExp("(\\r|\\n)+$"), "");
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
                    console.error(error);
                }
            });
        });
    }
}

/**
 * Calculates the amount of solar irradiation for a prefecture (a group of municipalities).
 * Must have called loadData first in order to function properly. Check that data has been loaded first with isLoaded().
 * If called with invalid arguments or without data being loaded, returns the average irradiation for all of Albania.
 * @param {string} prefecture The name of a prefecture, which must match the format use in SolarIrradiation.csv
 * @param {timeOptions} month The month to get data for. Must be one of the strings in timeOptions. AVG returns the overall average accross all months
 * @param {number} capPerM2 The capacity of solar panel being calculated for in kW/m^2. Important for converting from (kWh/month)/m^2 to (kWh/month)/kW.
 * @param {boolean} isLeapYear Whether the year is a leap year. The default is false, and only matters for calculations for February
 * @returns {number} The average amount of solar irradiation for the provided prefecture in (kWh/month)/kW
 */
function getData(prefecture, month, capPerM2, isLeapYear = false) {
    if(!loaded) {
        console.error("Municipality irradiation data not loaded.");
    }

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
            return (solarData[i][prefecture].replace(",", "") / 3600 * days(month, isLeapYear)) / capPerM2;
        }
    }

    console.error("Missing month " + month + " in data.");
    return 1400 / 12;
}

/**
 * Calculates the number of days in a month, taking into account whether it is a leap year.
 * @param {string} month A value from timeOptions representing a month, or the average of all months.
 * @param {boolean} isLeapYear True if it is a leap year, and false otherwise.
 * @returns {number} The number of days in the month, or the average number of days in all months if the average was provided as the current month.
 */
function days(month, isLeapYear) {
    if(month === timeOptions.January || month === timeOptions.March || month === timeOptions.May || month === timeOptions.July ||
       month === timeOptions.August || month === timeOptions.October || month === timeOptions.December)
        return 31;
    if(month === timeOptions.April || month === timeOptions.June || month === timeOptions.September || month === timeOptions.November)
        return 30;
    if(month === timeOptions.February)
        return 28 + !!isLeapYear;

    //Average number of days in a month (for using AVG)
    if(isLeapYear)
        return 366 / 12;
    
    return 365 / 12;
}

/**
 * Determines whether the solar irradiation data has been loaded.
 * @returns {boolean} Whether the irradiation data has been loaded.
 */
const isLoaded = () => loaded;

export {timeOptions, isLoaded, loadData, getData};