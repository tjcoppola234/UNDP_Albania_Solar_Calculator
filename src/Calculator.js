import './global.css';
import './Calculator.css';
import { PageHead, PageFoot } from './App';
import {useState} from 'react';
import { MunicipalDropdown } from './MunicipalDropdown';
import {SolarPanelScrollList} from './SolarPanelReader';
import * as SolarData from './SolarIrradiationReader';

import English from './English';
import Albanian from './Albanian';
import { settings } from './Settings';
import Tooltip from './Tooltip';

/**
 * @typedef {import('./SolarPanelReader').SolarPVEntry} SolarPVEntry A collection of data about a specific solar PV example.
 * 
 * @typedef Calculations A collection of calculations based on the entered location and solar PV data.
 * @property {number} AverageMonthlyGeneration
 * @property {number} TotalSavings
 * @property {number} TotalCost
 * @property {number} ReturnOnInvestment
 */

/**
 * The HTML for the calculator.
 * @returns An HTMLElement representing the calculator, with class "Calculator".
 */
function Calculator() {
    //Number of Panels calculator state variables
    const [numPanels, setNumPanels] = useState("");

    //Payback Period calculator state variables
    const [paybackPeriod, setPaybackPeriod] = useState("");
    const [totalSavings, setTotalSavings] = useState("");
    const [totalCost, setTotalCost] = useState("");
    const [energyGenerated, setEnergyGenerated] = useState("");

    const [prefecture, setPrefecture] = useState("");

    const [solarName, setSolarName] = useState("Unnamed");
    const [solarManufacturer, setSolarManufacturer] = useState("Unnamed");
    const [solarCost, setSolarCost] = useState(0);
    const [solarArea, setSolarArea] = useState(0);
    const [solarCapacity, setSolarCapacity] = useState(0);
    const [solarEfficiency, setSolarEfficiency] = useState(0);
    const [shouldUseName, setShouldUseName] = useState(false);

    const [albanian, setAlbanian] = useState(settings.albanianVisible.getState());
    settings.albanianVisible.addListener(visible => {
        setAlbanian(visible);
    });

    /**
     * Updates all relevant react functional hooks with the selected solar PV data.
     * @param {SolarPVEntry} pvSelection The selected solar PV to update the hooks with.
     */
    function setSolarData(pvSelection) {
        setSolarName(pvSelection.NameOrModel);
        setSolarManufacturer(pvSelection.Manufacturer);
        setSolarCost(pvSelection.CostPerPanel);
        setSolarArea(pvSelection.AreaPerPanel);
        setSolarCapacity(pvSelection.CapacityPerPanel);
        setSolarEfficiency(pvSelection.Efficiency.replace("%", ""));
    }

    SolarData.loadData();

    return (
        <div className="Calculator">
            <PageHead></PageHead>
            <div className="content">
                <header>
                    <div>
                        <English><h2 className="h2resources">Calculator</h2></English>
                        <Albanian><h2 className="h2resources">Llogaritësi</h2></Albanian>
                    </div>
                </header>
                <details>
                    <summary>
                        <English><b>Number of photovoltaics</b>: The number of photovoltaics required to cover 100% of your electricity consumption</English>
                        <Albanian><b>Numri i fotovoltaikëve</b>: Numri i fotovoltaikëve të nevojshme për të mbuluar 100% të konsumit të energjisë elektrike</Albanian>
                    </summary>
                    <form onSubmit={e => {
                        e.preventDefault();
                        if(prefecture === "") {
                            return;
                        }
                        setNumPanels(calcNumPanels(prefecture, solarArea, solarCapacity, solarEfficiency));
                    }}>
                        <div className="Hor-flex">
                            <English>Enter municipality and solar photovoltaics info <a href="#muni-panel-choice">here</a></English>
                            <Albanian>Shkruani informacionin e bashkisë dhe fotovoltaikëve diellor <a href="#muni-panel-choice">këtu</a></Albanian>
                            <Tooltip>
                                <English>Your municipality is the city or town you live in, and is used to find the amount of solar irradiation businesses in your area recieve.</English>
                                <Albanian>Komuna juaj është qyteti ose qyteti ku jetoni dhe përdoret për të gjetur sasinë e rrezatimit diellor që marrin bizneset në zonën tuaj.</Albanian>
                                <br />
                                <English>For solar photovoltaics, either choose an example from our list, or enter photovoltaics information yourself!</English>
                                <Albanian>Për fotovoltaikëve diellore, ose zgjidhni një shembull nga lista jonë, ose vendosni vetë informacionin e fotovoltaikëve!</Albanian>
                            </Tooltip>
                        </div>
                        <div className="Hor-flex">
                            <label htmlFor="nop-electricity-usage">
                                <div className="Hor-flex">
                                    <English>Electricity usage per&nbsp;</English>
                                    <Albanian>Shfrytëzimi i energjisë elektrike në &nbsp;</Albanian>
                                    <select id="nop-electricity-usage-period">
                                        <option value="month">
                                            {albanian ? "muaj" : "month"}
                                        </option>
                                        <option value="year">
                                            {albanian ? "vit" : "year"}
                                        </option>
                                    </select>
                                </div>
                            </label>
                            <input id="nop-electricity-usage" type="number" placeholder="kWh"></input>
                            <Tooltip>
                                <English>Enter the amount of electricity your business uses on average per month. This information should be on your electricity bill, or can be easily calculated by taking the average of the last 12 months of electrictiy usage for your business.</English>
                                <Albanian>Shkruani sasinë e energjisë elektrike që biznesi juaj përdor mesatarisht në muaj. Ky informacion duhet të jetë në faturën tuaj të energjisë elektrike, ose mund të llogaritet lehtësisht duke marrë mesataren e 12 muajve të fundit të përdorimit të energjisë elektrike për biznesin tuaj.</Albanian>
                            </Tooltip>
                        </div>
                        <button type="submit" id="submit-button">Calculate</button>
                        <English>{numPanels ? `Panels required: ${numPanels} panels` : ""}</English>
                        <Albanian>{numPanels ? `Kërkohen panele: ${numPanels} panele` : ""}</Albanian>
                    </form>
                </details>
                <details open> {/* place "open" next to "details" to make it open on load */}
                    <summary>
                        <English><b>Payback Period:</b> Time for return on investment, total cost, savings, and solar energy generated for a solar photovoltaic system</English>
                        <Albanian><b>Periudha e kthimit:</b> Sa kohë do të duhet për të prishur edhe blerjen fillestare të sistemit të fotovoltaikëve diellor</Albanian>
                    </summary>
                    <form onSubmit={(e) => {
                            e.preventDefault();
                            const results = getSystemData(prefecture, solarCost * 100, solarArea, solarCapacity, solarEfficiency);
                            setEnergyGenerated(results.monthlyGeneration);
                            setTotalSavings(results.totalSavings);
                            setTotalCost(results.totalCost);
                            setPaybackPeriod(results.ROI);
                        }}>
                        <div className="Hor-flex">
                            <English>Enter municipality and solar photovoltaic info <a href="#muni-panel-choice">here</a></English>
                            <Albanian>Shkruani informacionin e bashkisë dhe fotovoltaikëve diellor <a href="#muni-panel-choice">këtu</a></Albanian>
                            <Tooltip>
                                <English>Your municipality is the city or town you live in, and is used to find the amount of solar irradiation businesses in your area recieve.</English>
                                <Albanian>Komuna juaj është qyteti ose qyteti ku jetoni dhe përdoret për të gjetur sasinë e rrezatimit diellor që marrin bizneset në zonën tuaj.</Albanian>
                                <br />
                                <English>For solar photovoltaics, either choose an example from our list, or enter photovoltaic information yourself!</English>
                                <Albanian>Për fotovoltaikëve diellore, ose zgjidhni një shembull nga lista jonë, ose vendosni vetë informacionin e fotovoltaikëve!</Albanian>
                            </Tooltip>
                        </div>
                        <div className="Hor-flex">
                            <label htmlFor="roof-space">
                                <English>Flat roof space available for solar</English>
                                <Albanian>Hapësirë ​​me çati të sheshtë e disponueshme për diell</Albanian>
                            </label>
                            <input id="roof-space" type="number" placeholder={"m\u00B2"}></input>
                            <Tooltip>
                                <English>Enter the amount of flat open space you have on your business' roof for solar photovoltaics. If you don't know the exact amount, provide a rough estimate. Keep in mind that the roof space must recieve sunlight for solar photovoltaics to work there.</English>
                                <Albanian>Futni sasinë e hapësirës së hapur të sheshtë që keni në çatinë e biznesit tuaj për fotovoltaikë diellorë. Nëse nuk e dini shumën e saktë, jepni një vlerësim të përafërt. Mbani në mend se hapësira e çatisë duhet të marrë dritën e diellit që fotovoltaikët diellorë të punojnë atje.</Albanian>
                            </Tooltip>
                        </div>
                        <div className="Hor-flex">
                            <label htmlFor="percent-solar">
                                <English>Percent of electricity consumption for solar</English>
                                <Albanian>Përqindja e konsumit të energjisë elektrike për energjinë diellore</Albanian>
                            </label>
                            <input id="percent-solar" type="number" placeholder="%"></input>
                            <Tooltip>
                                <English>Enter how much of your total energy usage you want to replace with solar photovoltaic generation.</English>
                                <Albanian>Futni se sa nga konsumi total i energjisë dëshironi të zëvendësoni me gjenerimin e fotovoltaikëve diellorë.</Albanian>
                                <br />
                                <English>For example, if you enter 50, then 50% of your current electricity usage will be generated by solar photovoltaics, and the other 50% will come from the grid.</English>
                                <Albanian>Për shembull, nëse futni 50, atëherë 50% e përdorimit aktual të energjisë elektrike do të gjenerohet nga fotovoltaikët diellorë, dhe 50% e tjera do të vijnë nga rrjeti.</Albanian>
                            </Tooltip>
                        </div>
                        <div className="Hor-flex">
                            <label htmlFor="electricity-paid">
                                <div className="Hor-flex">
                                    <English>Current amount paid for electricity per</English>
                                    <Albanian>Shuma aktuale e paguar për energjinë elektrike në</Albanian>
                                    <select id="electricity-paid-period">
                                        <option value="month">
                                            {albanian ? "muaj" : "month"}
                                        </option>
                                        <option value="year">
                                            {albanian ? "vit" : "year"}
                                        </option>
                                    </select>
                                </div>
                            </label>
                            <input id="electricity-paid" type="number" placeholder="Lekë"></input>
                            <Tooltip>
                                <English>Enter the amount of money your businesses spends on electricity on average per month. This information should be on your electricity bill, or can be easily calculated by taking the average of the cost of electricity for your business for the last 12 months.</English>
                                <Albanian>Shkruani shumën e parave që bizneset tuaja shpenzojnë për energji elektrike mesatarisht në muaj. Ky informacion duhet të jetë në faturën tuaj të energjisë elektrike, ose mund të llogaritet lehtësisht duke marrë mesataren e kostos së energjisë elektrike për biznesin tuaj për 12 muajt e fundit.</Albanian>
                            </Tooltip>
                        </div>
                        <button type="submit" id="submit-button">
                            <English>Calculate</English>
                            <Albanian>Llogaritni</Albanian>
                        </button>
                    </form>
                    <div className="Vert-flex">
                        <br />
                        <div>
                            <English><b>Disclaimer:</b> These numbers are based on your current energy bills</English>
                            <Albanian><b>Mohim përgjegjësie:</b> Këta numra bazohen në faturat tuaja të energjisë dhe nuk janë të sakta</Albanian>
                        </div>
                        <br />
                        <div>
                            <English>{energyGenerated ? `Energy generated by solar sytem: ${Math.round(energyGenerated)} kWh per month` : ""}</English>
                            <Albanian>{energyGenerated ? `Energjia e gjeneruar nga sistemi diellor: ${Math.round(energyGenerated)} kWh në muaj` : ""}</Albanian>
                        </div>
                        <div>
                            <English>{totalSavings ? `Total amount saved by solar photovoltaic system purchase: ${Math.round(totalSavings)} Lekë` : ""}</English>
                            <Albanian>{totalSavings ? `Shuma totale e kursyer nga blerja e sistemit të fotovoltaikëve diellore: ${Math.round(totalSavings)} Lekë` : ""}</Albanian>
                        </div>
                        <div>
                            <English>{totalCost ? `Total cost of solar photovoltaic system: ${Math.round(totalCost)} Lekë` : ""}</English>
                            <Albanian>{totalCost ? `Kostoja totale e sistemit të fotovoltaikëve diellore: ${Math.round(totalCost)} Lekë` : ""}</Albanian>
                        </div>
                        <div>
                            <English>{paybackPeriod ? `Time to make a return on investment: ${formatMonths(paybackPeriod)}` : ""}</English>
                            <Albanian>{paybackPeriod ? `Koha për të bërë një kthim nga investimi: ${formatMonths(paybackPeriod, true)}` : ""}</Albanian>
                        </div>
                    </div>
                </details>
                <details id="muni-panel-choice">
                    <summary>
                        <English><b>Municipality and Solar Photovoltaic Info</b>: Input the municipality of your building. Then input information about the solar photovoltaics you will use, or select a solar photovoltaic system from the table</English>
                        <Albanian><b>Informacion komunal dhe fotovoltaik diellor</b>: Futni bashkinë e ndërtesës suaj. Më pas futni informacione rreth fotovoltaikëve diellorë që do të përdorni, ose zgjidhni një sistem fotovoltaik diellor nga tabela</Albanian>
                    </summary>
                    <MunicipalDropdown changeEvent={(e) => setPrefecture(e.target.value)}></MunicipalDropdown>
                    <SolarPanelScrollList onSelection={e => setSolarData(e)} checkIsCustomData={b => setShouldUseName(!b)}></SolarPanelScrollList>
                </details>
            </div>
            <PageFoot></PageFoot>
        </div>
    )
}

/**
 * Use the provided location and solar PV data to calculate {@link Calculations} values.
 * @param {string} prefecture The prefecture to use for irradiation data
 * @param {number} solarCost The cost of a single solar PV unit
 * @param {number} solarArea The dimensions of a single solar PV unit
 * @param {number} solarCapacity The capacity of a single solar PV unit
 * @param {number} solarEfficiency The efficiency of the selected solar PV unit
 * @returns {Calculations} A collection of calculations represented by a {@link Calculations} object.
 */
function getSystemData(prefecture, solarCost, solarArea, solarCapacity, solarEfficiency) {
    const roofSpace = document.getElementById("roof-space");
    const percentSolar = document.getElementById("percent-solar");
    const electricityPaid = document.getElementById("electricity-paid");
    const percentLoan = document.getElementById("loan-percent");
    const interest = document.getElementById("loan-interest");

    let electricityPaidVal = electricityPaid.value;
    if(document.getElementById("electricity-paid-period").value === "year") {
        electricityPaidVal /= 12;
    }
    const systemData = calcROI(roofSpace.value, percentSolar.value, electricityPaidVal, prefecture, solarCost, solarArea, solarCapacity, solarEfficiency);

    return systemData;
}

/**
 * Calculates the return on investment.
 * @param {number} roofArea Amount of roof space to be used for solar panels (m^2)
 * @param {number} percentEnergyForSolar Amount of total energy consumption dedicated to solar (between 0 and 100) (%)
 * @param {number} costPerMonth Total amount paid for electricity per month (Lekë per month)
 * @param {string} prefecture The prefecture to gather solar data from
 * @param {number} singlePanelCost Cost of a single solar panel (Lekë)
 * @param {number} [panelSize] Size of a single solar panel (m^2)
 * @param {number} [panelCapacity] Capacity of a single solar panel (kW)
 * @param {number} [panelEfficiency] Efficiency of solar panels (%)
 * @param {number} [percentLoan] Percentage of payment to be covered by loan
 * @param {number} [interest] Monthly interest in the case of payment by loan (Lekë per month)
 * @returns {Calculations} A collection of calculations represented by a {@link Calculations} object.
 */
function calcROI(roofArea, percentEnergyForSolar, costPerMonth, prefecture, singlePanelCost, panelSize = 1.66, panelCapacity = .150, panelEfficiency = 15, percentLoan = 0, interest = 0) {
    let electricityPrice = 14; // Cost of electricity (Lekë per kWh)
    let panelCost = singlePanelCost / panelCapacity;
    let expenses = 200000; // Initial costs apart from the panels themselves (Ex: batteries, installation costs, replacing grid cables, etc.) (Lekë)

    // Amount of solar irradiation for the specified municipality (kWh/month)/kW
    const solarIrradiation = SolarData.getData(prefecture, "AVG", panelCapacity / panelSize, false);
    // Ideal amount of energy generated per month for a system (kWh/month)
    const desiredMonthlyGen = ((percentEnergyForSolar / 100) * costPerMonth) / electricityPrice;
    // Number of solar panels needed
    const solarPanelAmt = Math.min(Math.floor(roofArea / panelSize), Math.ceil(desiredMonthlyGen / (panelEfficiency / 100) / solarIrradiation / panelCapacity));
    // Amount of energy generated per month for a system (kWh per month)
    const actualMonthlyGen = panelCapacity * solarPanelAmt * solarIrradiation * (panelEfficiency / 100);
    // Total cost of the system in Lekë
    const totalCost = (panelCost * panelCapacity * solarPanelAmt) + expenses;
    // Amount of Lekë saved per month
    const savings = (electricityPrice * actualMonthlyGen) - (percentLoan * interest * totalCost / 10000);
    // Total time to return on investment in months
    const roi = totalCost / savings;

    return {
        monthlyGeneration: actualMonthlyGen, 
        totalSavings: savings,
        totalCost: totalCost,
        ROI: roi,
    };
}

/**
 * Converts a decimal number of months into a representation as a number of months and years (Eg. 13.11111 total months becomes 1 year and 2 months).
 * @param {number} totalMonths A decimal representing some amount of months
 * @param {boolean} isAlbanian Whether the output should use Albanian or English words for "month" and "year"
 * @returns {string} Some number of years and months
 */
function formatMonths(totalMonths, isAlbanian = false) {
    let years = Math.floor(totalMonths / 12);
    const months = Math.round(totalMonths % 12);
    if(years === Infinity) {
        if(isAlbanian)
            return "Ju lutemi futni numra të vlefshëm";
        else
            return "Please input valid numbers";
    }
    
    let yearText, monthText;
    switch(years) {
        case 0:
            yearText = "";
            break;
        case 1:
            if(isAlbanian)
                yearText = "1 Vit";
            else
                yearText = "1 Year";
            break;
        default:
            if(isAlbanian)
                yearText = `${years} Vjet`;
            else
                yearText = `${years} Years`;
            break;
    }

    //Adds line break when displaying both month and year counts
    if(years !== 0 && months !== 0)
        yearText += "\n";

    switch(months) {
        case 0:
            if(years === 0) {
                if(isAlbanian)
                    monthText = "Më pak se 1 muaj!";
                else
                    monthText = "Less than 1 month!";
            }
            else
                monthText = "";
            break;
        case 1:
            if(isAlbanian)
                monthText = "1 muaj";
            else
                monthText = "1 month";
            break;
        case 12:
            years++;
            if(isAlbanian)
                yearText = `${years} Vit`;
            else {
                yearText = `${years} Years`;
            }
            if(years > 1) {
                if(isAlbanian)
                    yearText = `${years} Vjet`;
                else
                    yearText = `${years} Years`;
            }
            monthText = "";
            break;
        default:
            if(isAlbanian)
                monthText = `${months} Muaj`;
            else
                monthText = `${months} Months`;
             break;
    }
    
    return yearText + monthText;
}

function calcNumPanels(prefecture, solarArea = 1, solarCapacity = .21, solarEfficiency = .15) {
    const electricityUsage = document.getElementById("nop-electricity-usage");
    const electricityUsagePeriod = document.getElementById("nop-electricity-usage-period");

    const solarIrradiation = SolarData.getData(prefecture, "AVG", solarCapacity / solarArea, false);

    if(electricityUsagePeriod.value === "year") {
        return Math.ceil(electricityUsage.value / 12 / (solarEfficiency / 100) / solarIrradiation / solarCapacity);
    }
    return Math.ceil(electricityUsage.value / (solarEfficiency / 100) / solarIrradiation / solarCapacity);
}

export default Calculator;