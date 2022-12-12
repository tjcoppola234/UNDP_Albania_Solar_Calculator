import './global.css';
import './Calculator.css';
import { PageHead, PageFoot } from './App';
import React, { useRef, useState } from 'react';
import { MunicipalDropdown } from './MunicipalDropdown';
import { SolarPanelScrollList } from './SolarPanelReader';
import * as SolarData from './SolarIrradiationReader';
import Plot from 'react-plotly.js';

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
 * @property {number} EmissionsSavings
 */

/**
 * The HTML for the calculator.
 * @returns An HTMLElement representing the calculator, with class "Calculator".
 */
function Calculator() {
    SolarData.loadData();
    const ref = useRef();
    const [muniPanelVisibility, setMuniPanelVisibility] = useState(false);


    const [numPanels, setNumPanels] = useState("");
    const [paybackPeriod, setPaybackPeriod] = useState({ months: 0, years: 0 });
    const [totalSavings, setTotalSavings] = useState("");
    const [totalCost, setTotalCost] = useState("");
    const [energyGenerated, setEnergyGenerated] = useState("");
    const [emissionsSavings, setEmissionsSavings] = useState("");
    const [monthlyProduction, setMonthlyProduction] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    const [prefecture, setPrefecture] = useState("");
    const [municipality, setMunicipality] = useState("");
    const [manualIrradiation, setManualIrradiation] = useState();

    const [solarName, setSolarName] = useState("Unnamed");
    const [solarManufacturer, setSolarManufacturer] = useState("Unnamed");
    const [solarCost, setSolarCost] = useState(0);
    const [solarArea, setSolarArea] = useState(0);
    const [solarCapacity, setSolarCapacity] = useState(0);
    const [solarEfficiency, setSolarEfficiency] = useState(0);
    const [shouldUseName, setShouldUseName] = useState(false);
    const [monthlyConsumption, setMonthlyConsumption] = useState(0);
    const [electricityPrice, setElectricityPrice] = useState(0);
    const [roofArea, setRoofArea] = useState(0);
    const [percentSolar, setPercentSolar] = useState();

    const [showCapacityManOpt, setShowCapacityManOpt] = useState(true);
    const [showNumPanels, setShowNumPanels] = useState(false);
    const [showGeneration, setShowGeneration] = useState(false);

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
        updateNumPanelVisibility(manualIrradiation, prefecture, pvSelection.CostPerPanel, pvSelection.AreaPerPanel, pvSelection.CapacityPerPanel, pvSelection.Efficiency, monthlyConsumption);
        updateGenerationVisibility(manualIrradiation, prefecture, pvSelection.CostPerPanel, pvSelection.AreaPerPanel, pvSelection.CapacityPerPanel, pvSelection.Efficiency, monthlyConsumption, electricityPrice, roofArea, percentSolar);
    }

    /**
     * Updates the showNumPanels state
     */
    const updateNumPanelVisibility = (manualIrradiation, prefecture, solarCost, solarArea, solarCapacity, solarEfficiency, monthlyConsumption) => {
        const shouldUpdate = !!((manualIrradiation || prefecture) && solarCost && solarArea && (solarCapacity || solarEfficiency) && monthlyConsumption);
        
        //Calculate capacity using efficiency
        if(!showCapacityManOpt)
            solarCapacity = solarEfficiency / 100 * solarArea;

        if (shouldUpdate) {
            const isMonthly = document.getElementById("electric-usage-my").checked;
            setNumPanels(calcNumPanels(isMonthly ? monthlyConsumption : monthlyConsumption / 12, prefecture, manualIrradiation, solarArea, solarCapacity, solarEfficiency));
        }

        setShowNumPanels(shouldUpdate);
    };
    /**
     * Updates the showGeneration state
     */
    const updateGenerationVisibility = (manualIrradiation, prefecture, solarCost, solarArea, solarCapacity, solarEfficiency, monthlyConsumption, electricityPrice, roofArea, percentSolar) => {
        let shouldUpdate = !!((manualIrradiation || prefecture) && solarCost && solarArea && (solarCapacity || solarEfficiency) && monthlyConsumption);
        shouldUpdate &= !!(electricityPrice && roofArea && percentSolar);
        
        //Calculate capacity using efficiency
        if(!showCapacityManOpt)
            solarCapacity = solarEfficiency / 100 * solarArea;

        if (shouldUpdate) {
            //Set data to use in graph
            const isMonthly = document.getElementById("electric-usage-my").checked;
            setMonthlyProduction(calcMonthlyProduction(prefecture, manualIrradiation, solarArea, solarCapacity, isMonthly ? monthlyConsumption : monthlyConsumption / 12, electricityPrice, roofArea, percentSolar));
            const results = calcROI(prefecture, manualIrradiation, solarCost, solarArea, solarCapacity, isMonthly ? monthlyConsumption : monthlyConsumption / 12, electricityPrice, roofArea, percentSolar)

            //set calculated results
            setEnergyGenerated(results.AverageMonthlyGeneration);
            setTotalSavings(results.TotalSavings);
            setTotalCost(results.TotalCost);
            setPaybackPeriod(results.ReturnOnInvestment);
            setEmissionsSavings(results.EmissionsSavings);
            //console.log(results);
        }

        setShowGeneration(shouldUpdate);
    }

    return (
        <div className="Calculator">
            <PageHead></PageHead>
            <div className="title-box Vert-flex" style={{ backgroundImage: `linear-gradient(to bottom, rgba(204,208,209,0) 0%, rgba(220,224,225,0.75) 75%, rgba(236,240,241,1) 100%), url(${process.env.PUBLIC_URL}/calculator-background.jpg)` }}>
                <English><h2 className="page-title">Solar Calculator</h2></English>
                <Albanian><h2 className="page-title">Llogaritësi diellor</h2></Albanian>
                <English><h3 className="page-subtitle">Find an estimate for your business</h3></English>
                <Albanian><h3 className="page-subtitle">Gjeni një vlerësim për biznesin tuaj</h3></Albanian>
            </div>
            <div id="half-split">
                <div className="calculations">

                    <div className="content">
                        <summary>
                            <English><b>Number of photovoltaics</b>: The number of photovoltaics required to cover 100% of your electricity consumption</English>
                            <Albanian><b>Numri i fotovoltaikëve</b>: Numri i fotovoltaikëve të nevojshme për të mbuluar 100% të konsumit të energjisë elektrike</Albanian>
                        </summary>
                        <div className="detail-content">
                            <div>
                                <MunicipalDropdown changeEvent={(e, v) => {
                                    if (e === undefined) {
                                        setPrefecture("");
                                        setMunicipality("");
                                        setManualIrradiation(v);
                                        updateNumPanelVisibility(v, "", solarCost, solarArea, solarCapacity, solarEfficiency, monthlyConsumption);
                                        updateGenerationVisibility(v, "", solarCost, solarArea, solarCapacity, solarEfficiency, monthlyConsumption, electricityPrice, roofArea, percentSolar);
                                    }
                                    else {
                                        setPrefecture(e.target.value);
                                        setMunicipality(e.target.options[e.target.selectedIndex].text);
                                        setManualIrradiation(0);
                                        updateNumPanelVisibility(0, e.target.value, solarCost, solarArea, solarCapacity, solarEfficiency, monthlyConsumption);
                                        updateGenerationVisibility(0, e.target.value, solarCost, solarArea, solarCapacity, solarEfficiency, monthlyConsumption, electricityPrice, roofArea, percentSolar);
                                    }
                                }}></MunicipalDropdown>
                                <div className="center-label"></div>
                                <div className="full-input extra-manual-option">
                                    <label htmlFor="panel-selection">
                                        <English>Select a solar photovoltaic from the table or enter a custom one</English>
                                        <Albanian>Zgjidhni një fotovoltaik diellor nga tabela ose futni një me porosi</Albanian>
                                    </label>
                                    <span></span>
                                    <button type="button" className="submit-button" onClick={e => {
                                        e.preventDefault();
                                        document.body.style.overflow = "hidden";
                                        setMuniPanelVisibility(true);
                                    }}>{albanian ? "Futni fotovoltaikë me dorë" : "Enter photovoltaics manually"}</button>
                                </div>
                                <SolarPanelScrollList
                                    onSelection={e => setSolarData(e)}
                                    checkIsCustomData={b => setShouldUseName(!b)}
                                    isSelected={(n, m) => shouldUseName && solarName === n && solarManufacturer === m}
                                    id="panel-selection"
                                ></SolarPanelScrollList>
                                <div>
                                    <English><b>Disclaimer:</b> Examples as of December 2022</English>
                                    <Albanian><b>Mohimi i përgjegjësisë:</b> Shembuj që nga dhjetor 2022</Albanian>
                                </div>
                                <div ref={ref} className={"modal-img" + (muniPanelVisibility ? "" : " invisible")}>
                                    <span className="close-modal" onClick={() => {
                                        ref.current.scrollTo(0, 0);
                                        setMuniPanelVisibility(false);
                                        document.body.style.overflowY = "scroll";
                                    }}>&times;</span>
                                    <div className="modal-content">
                                        <div id="solar-panel-info">
                                            <div className="center-label">
                                                <label htmlFor="solar-cost">
                                                    <English>Cost for one kW of panel (€)</English>
                                                    <Albanian>Kostoja për një kW panel (€)</Albanian>
                                                </label>
                                            </div>
                                            <div className="full-input">
                                                <input type="number" min="0" max="100000" step="0.001" placeholder={albanian ? "Fut koston e panelit për kW (€)" : "Enter panel's cost per kW (€)"} id="solar-cost" onInput={() => customizePanel(setSolarData, setShouldUseName)}></input>
                                                <Tooltip>
                                                    <English>What is the price for one kW peak capacity's worth of photovoltaics? Use the table for an estimate if you aren't sure.</English>
                                                    <Albanian>Cili është çmimi për një kW kapacitet maksimal të fotovoltaikëve? Përdorni tabelën për një vlerësim nëse nuk jeni të sigurt.</Albanian>
                                                </Tooltip>
                                            </div>
                                            <div className="center-label">
                                                <label htmlFor="solar-area">
                                                    <English>Area of one solar panel (m²)</English>
                                                    <Albanian>Sipërfaqja e një paneli diellor (m²)</Albanian>
                                                </label>
                                            </div>
                                            <div className="full-input">
                                                <input type="number" min="0" max="100" step="0.01" placeholder={albanian ? "Fut zonën për panel (m²)" : "Enter area per panel (m²)"} id="solar-area" onInput={() => customizePanel(setSolarData, setShouldUseName)}></input>
                                                <Tooltip>
                                                    <English>What is the size of one panel? Use the table for an estimate if you aren't sure.</English>
                                                    <Albanian>Sa është madhësia e një paneli? Përdorni tabelën për një vlerësim nëse nuk jeni të sigurt.</Albanian>
                                                </Tooltip>
                                            </div>
                                            <div className={"center-label" + (showCapacityManOpt ? "" : " invisible")}>
                                                <label htmlFor="solar-capacity">
                                                    <English>Peak capacity of one solar panel (W)</English>
                                                    <Albanian>Kapaciteti maksimal i një paneli diellor (W)</Albanian>
                                                </label>
                                            </div>
                                            <div className={"full-input" + (showCapacityManOpt ? "" : " invisible")}>
                                                <input type="number" min="0" max="1000" step="0.001" placeholder={albanian ? "Fut kapacitetin për panel (W)" : "Enter capacity per panel (W)"} id="solar-capacity" onInput={() => customizePanel(setSolarData, setShouldUseName)}></input>
                                                <Tooltip>
                                                    <English>What is the peak capacity of one panel? Use the table for an estimate if you aren't sure.</English>
                                                    <Albanian>Sa është kapaciteti maksimal i një paneli? Përdorni tabelën për një vlerësim nëse nuk jeni të sigurt.</Albanian>
                                                </Tooltip>
                                            </div>
                                            <div className={"center-label" + (showCapacityManOpt ? " invisible" : "")}>
                                                <label htmlFor="solar-efficiency">
                                                    <English>Efficiency of solar panels (%)</English>
                                                    <Albanian>Efikasiteti i paneleve diellore (%)</Albanian>
                                                </label>
                                            </div>
                                            <div className={"full-input" + (showCapacityManOpt ? " invisible" : "")}>
                                                <input type="number" min="0" max="100" step="0.001" placeholder={albanian ? "Fut efikasitetin (%)" : "Enter efficiency (%)"} id="solar-efficiency" onInput={() => customizePanel(setSolarData, setShouldUseName)}></input>
                                                <Tooltip>
                                                    <English>What is the efficiency of the panels? Use the table for an estimate if you aren't sure.</English>
                                                    <Albanian>Cili është efikasiteti i paneleve? Përdorni tabelën për një vlerësim nëse nuk jeni të sigurt.</Albanian>
                                                </Tooltip>
                                            </div>
                                            <div className="center-label">
                                                <label htmlFor="swap-cap-eff">
                                                    <English>{showCapacityManOpt ? "Calculate capacity using efficiency" : "Enter capacity directly"}</English>
                                                    <Albanian>{showCapacityManOpt ? "Llogarit kapacitetin duke përdorur efikasitetin" : "Fut direkt kapacitetin"}</Albanian>
                                                </label>
                                            </div>
                                            <div id="center-swap-cap-eff">
                                                <button type="button" id="swap-cap-eff" className="submit-button" onClick={e => {
                                                    setShowCapacityManOpt(!showCapacityManOpt);
                                                }}>
                                                    <English>{showCapacityManOpt ? "Switch to using efficiency" : "Switch to using capacity"}</English>
                                                    <Albanian>{showCapacityManOpt ? "Kaloni te efikasiteti i përdorimit" : "Kaloni te kapaciteti i përdorimit"}</Albanian>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="center-label">
                                    <label htmlFor="nop-electricity-usage">
                                        <div className="input-label-align">
                                            <English>Electricity usage per&nbsp;</English>
                                            <Albanian>Shfrytëzimi i energjisë elektrike në &nbsp;</Albanian>
                                            <label className="switch btn-color-mode-switch">
                                                <input type="checkbox" name="electric-usage-my" label="Month-Year Toggle" id="electric-usage-my" placeholder="1" onChange={e => {
                                                    e.preventDefault();
                                                    updateNumPanelVisibility(manualIrradiation, prefecture, solarCost, solarArea, solarCapacity, solarEfficiency, monthlyConsumption);
                                                    updateGenerationVisibility(manualIrradiation, prefecture, solarCost, solarArea, solarCapacity, solarEfficiency, monthlyConsumption, electricityPrice, roofArea, percentSolar);
                                                }} />
                                                <label htmlFor="electric-usage-my" data-on={albanian ? "muaj" : "month"} data-off={albanian ? "vit" : "year"} className="btn-color-mode-switch-inner"></label>
                                            </label>
                                        </div>
                                    </label>
                                </div>
                                <div className="full-input">
                                    <input id="nop-electricity-usage" type="number" min="0" max="10000000000" step="0.001" placeholder="kWh" onChange={v => {
                                        if (v.target.checkValidity()) {
                                            setMonthlyConsumption(v.target.value);
                                            updateNumPanelVisibility(manualIrradiation, prefecture, solarCost, solarArea, solarCapacity, solarEfficiency, v.target.value);
                                            updateGenerationVisibility(manualIrradiation, prefecture, solarCost, solarArea, solarCapacity, solarEfficiency, v.target.value, electricityPrice, roofArea, percentSolar);
                                        }
                                    }}></input>
                                    <Tooltip>
                                        <English>Enter the amount of electricity your business uses on average per month. This information should be on your electricity bill, or can be easily calculated by taking the average of the last 12 months of electrictiy usage for your business.</English>
                                        <Albanian>Shkruani sasinë e energjisë elektrike që biznesi juaj përdor mesatarisht në muaj. Ky informacion duhet të jetë në faturën tuaj të energjisë elektrike, ose mund të llogaritet lehtësisht duke marrë mesataren e 12 muajve të fundit të përdorimit të energjisë elektrike për biznesin tuaj.</Albanian>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                        <hr className="result-spacer" />
                        <summary>
                            <English><b>Payback Period:</b> Time for return on investment, total cost, savings, and solar energy generated for a solar photovoltaic system</English>
                            <Albanian><b>Periudha e kthimit:</b> Sa kohë do të duhet për të prishur edhe blerjen fillestare të sistemit të fotovoltaikëve diellor</Albanian>
                        </summary>
                        <div className="detail-content">
                            <div>
                                <div className="center-label">
                                    <label htmlFor="electricity-price">
                                        <English>Price of electricity</English>
                                        <Albanian>Çmimi i energjisë elektrike</Albanian>
                                    </label>
                                </div>
                                <div className="full-input">
                                    <input id="electricity-price" type="number" min="0" max="1000" step="0.01" placeholder={"Lekë/kWh"} onChange={v => {
                                        if (v.target.checkValidity()) {
                                            setElectricityPrice(v.target.value);
                                            updateGenerationVisibility(manualIrradiation, prefecture, solarCost, solarArea, solarCapacity, solarEfficiency, monthlyConsumption,
                                                v.target.value, roofArea, percentSolar);
                                        }
                                    }}></input>
                                    <Tooltip>
                                        <English>Enter the most recent price of electricity per kilowatt hour for your business.</English>
                                        <Albanian>Shkruani çmimin më të fundit të energjisë elektrike për kilovat orë për biznesin tuaj.</Albanian>
                                    </Tooltip>
                                </div>
                                <div className="center-label">
                                    <label htmlFor="roof-space">
                                        <English>Flat roof space available for solar</English>
                                        <Albanian>Hapësirë ​​me çati të sheshtë e disponueshme për diell</Albanian>
                                    </label>
                                </div>
                                <div className="full-input">
                                    <input id="roof-space" type="number" min="0" max="100000000" step="0.01" placeholder={"m\u00B2"} onChange={v => {
                                        if (v.target.checkValidity()) {
                                            setRoofArea(v.target.value);
                                            updateGenerationVisibility(manualIrradiation, prefecture, solarCost, solarArea, solarCapacity, solarEfficiency, monthlyConsumption,
                                                electricityPrice, v.target.value, percentSolar);
                                        }
                                    }}></input>
                                    <Tooltip>
                                        <English>Enter the amount of flat open space you have on your business' roof for solar photovoltaics. If you don't know the exact amount, provide a rough estimate. Keep in mind that the roof space must recieve sunlight for solar photovoltaics to work there.</English>
                                        <Albanian>Futni sasinë e hapësirës së hapur të sheshtë që keni në çatinë e biznesit tuaj për fotovoltaikë diellorë. Nëse nuk e dini shumën e saktë, jepni një vlerësim të përafërt. Mbani në mend se hapësira e çatisë duhet të marrë dritën e diellit që fotovoltaikët diellorë të punojnë atje.</Albanian>
                                    </Tooltip>
                                </div>
                                <div className="center-label">
                                    <label htmlFor="percent-solar">
                                        <English>Percent of PV share</English>
                                        <Albanian>Përqindja e pjesës së PV</Albanian>
                                    </label>
                                </div>
                                <div className="full-input">
                                    <input id="percent-solar" type="number" min="0" max="100" step="0.001" placeholder="%" onChange={v => {
                                        if (v.target.checkValidity()) {
                                            setPercentSolar(v.target.value);
                                            updateGenerationVisibility(manualIrradiation, prefecture, solarCost, solarArea, solarCapacity, solarEfficiency, monthlyConsumption,
                                                electricityPrice, roofArea, v.target.value);
                                        }
                                    }}></input>
                                    <Tooltip>
                                        <English>Enter how much of your total energy usage you want to replace with solar photovoltaic generation.</English>
                                        <Albanian>Futni se sa nga konsumi total i energjisë dëshironi të zëvendësoni me gjenerimin e fotovoltaikëve diellorë.</Albanian>
                                        <br />
                                        <English>For example, if you enter 50, then 50% of your current electricity usage will be generated by solar photovoltaics, and the other 50% will come from the grid.</English>
                                        <Albanian>Për shembull, nëse futni 50, atëherë 50% e përdorimit aktual të energjisë elektrike do të gjenerohet nga fotovoltaikët diellorë, dhe 50% e tjera do të vijnë nga rrjeti.</Albanian>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="results">
                    <div className="results-wrapper">
                        <div>
                            <English><b>Disclaimer:</b> These numbers are based on your current energy bills</English>
                            <Albanian><b>Mohim përgjegjësie:</b> Këta numra bazohen në faturat tuaja të energjisë dhe nuk janë të sakta</Albanian>
                        </div>
                        <div className="results-cluster">
                            <div className={"center-calc-top" + (showNumPanels ? "" : " hidden-result")}>
                                <English>Panels required</English>
                                <Albanian>Kërkohen panele</Albanian>
                            </div>
                            <div className={"center-calc-top calc-color-alt" + (showGeneration ? "" : " hidden-result")}>
                                <English>Energy generated</English>
                                <Albanian>Energjia e prodhuar</Albanian>
                            </div>
                            <div className={"center-calc-top" + (showGeneration ? "" : " hidden-result")}>
                                <English>Total amount saved</English>
                                <Albanian>Shuma totale e kursyer</Albanian>
                            </div>
                            <div><div className={"center-calc-middle calc-result" + (showNumPanels ? "" : " hidden-result")}>{0 + numPanels}</div></div>
                            <div className={"center-calc-middle calc-color-alt" + (showGeneration ? "" : " hidden-result")}><div className="calc-result">{Math.round(energyGenerated)}</div></div>
                            <div><div className={"center-calc-middle calc-result" + (showGeneration ? "" : " hidden-result")}>{Math.round(totalSavings)}</div></div>
                            <div className={"center-calc-bottom" + (showNumPanels ? "" : " hidden-result")}>
                                <English>panels</English>
                                <Albanian>panele</Albanian>
                            </div>
                            <div className={"center-calc-bottom calc-color-alt" + (showGeneration ? "" : " hidden-result")}>
                                <English>kWh per month</English>
                                <Albanian>kWh në muaj</Albanian>
                            </div>
                            <div className={"center-calc-bottom" + (showGeneration ? "" : " hidden-result")}>
                                <English>euro per month</English>
                                <Albanian>euro në muaj</Albanian>
                            </div>
                            <div className={"center-calc-top calc-color-alt" + (showGeneration ? "" : " hidden-result")}>
                                <English>Total cost</English>
                                <Albanian>Kostoja totale</Albanian>
                            </div>
                            <div className={"center-calc-top" + (showGeneration ? "" : " hidden-result")}>
                                <English>Amortization period</English>
                                <Albanian>Periudha e amortizimit</Albanian>
                            </div>
                            <div className={"center-calc-top calc-color-alt" + (showGeneration ? "" : " hidden-result")}>
                                <English>CO<sub>2</sub> saved</English>
                                <Albanian>CO<sub>2</sub> u ruajt</Albanian>
                            </div>
                            <div className={"center-calc-middle calc-color-alt" + (showGeneration ? "" : " hidden-result")}><div className="calc-result">{Math.round(totalCost)}</div></div>
                            <div className={"center-calc-middle" + (showGeneration ? "" : " hidden-result") + (paybackPeriod.years ? " year-font" : "")}>
                                <English>{formatYears(paybackPeriod.years, false) || (paybackPeriod.months ? "" : "Less than one month!")}</English>
                                <Albanian>{formatYears(paybackPeriod.years, true) || (paybackPeriod.months ? "" : "Më pak se një muaj!")}</Albanian>
                            </div>
                            <div className={"center-calc-middle calc-color-alt" + (showGeneration ? "" : " hidden-result")}><div className="calc-result">{parseFloat(emissionsSavings).toFixed(2)}</div></div>
                            <div className={"center-calc-bottom calc-color-alt" + (showGeneration ? "" : " hidden-result")}>
                                <English>euro</English>
                                <Albanian>euro</Albanian>
                            </div>
                            <div className={"center-calc-bottom" + (showGeneration ? "" : " hidden-result")}>
                                <English>{formatMonths(paybackPeriod.months, false)}</English>
                                <Albanian>{formatMonths(paybackPeriod.months, true)}</Albanian>
                            </div>
                            <div className={"center-calc-bottom calc-color-alt" + (showGeneration ? "" : " hidden-result")}>
                                <English>tonnes of CO<sub>2</sub></English>
                                <Albanian>ton CO<sub>2</sub></Albanian>
                            </div>
                            <div className={"hidden-pv-count" + (showNumPanels ? " only-generation" : "") + (showGeneration ? " invisible" : "")}>
                                <div className="hidden-wrapper">
                                    <English>
                                        <p className="slight-font-inc">Information needed:</p>
                                        <ul>
                                            {!!(prefecture || manualIrradiation) || <li>Prefecture or irradiation data</li>}
                                            {!!(solarArea && solarCost && (solarCapacity || solarEfficiency)) || <li>Solar photovoltaic info</li>}
                                            {!!monthlyConsumption || <li>Monthly energy consumption</li>}
                                            {!!electricityPrice || <li>Price of electricity</li>}
                                            {!!roofArea || <li>Roof size</li>}
                                            {!!percentSolar || <li>Desired solar offset</li>}
                                        </ul>
                                    </English>
                                    <Albanian>
                                        <p className="slight-font-inc">Informacioni i nevojshëm:</p>
                                        <ul>
                                            {!!(prefecture || manualIrradiation) || <li>Të dhënat e prefekturës ose rrezatimit</li>}
                                            {!!(solarArea && solarCost && (solarCapacity || solarEfficiency)) || <li>Informacione fotovoltaike diellore</li>}
                                            {!!monthlyConsumption || <li>Konsumimi mujor i energjisë</li>}
                                            {!!electricityPrice || <li>Çmimi i energjisë elektrike</li>}
                                            {!!roofArea || <li>Madhësia e çatisë</li>}
                                            {!!percentSolar || <li>Kompensimi i dëshiruar diellor</li>}
                                        </ul>
                                    </Albanian>
                                </div>
                            </div>
                        </div>
                        <div id="production-wrapper">
                            <div className={"hidden-generation-graph" + (showGeneration ? " invisible" : "")}>
                                <div className="hidden-wrapper">
                                    <English>
                                        <p className="slight-font-inc">Information needed:</p>
                                        <ul>
                                            {!!(prefecture || manualIrradiation) || <li>Prefecture or irradiation data</li>}
                                            {!!(solarArea && solarCost && (solarCapacity || solarEfficiency)) || <li>Solar photovoltaic info</li>}
                                            {!!monthlyConsumption || <li>Monthly energy consumption</li>}
                                            {!!electricityPrice || <li>Price of electricity</li>}
                                            {!!roofArea || <li>Roof size</li>}
                                            {!!percentSolar || <li>Desired solar offset</li>}
                                        </ul>
                                    </English>
                                    <Albanian>
                                        <p className="slight-font-inc">Informacioni i nevojshëm:</p>
                                        <ul>
                                            {!!(prefecture || manualIrradiation) || <li>Të dhënat e prefekturës ose rrezatimit</li>}
                                            {!!(solarArea && solarCost && (solarCapacity || solarEfficiency)) || <li>Informacione fotovoltaike diellore</li>}
                                            {!!monthlyConsumption || <li>Konsumimi mujor i energjisë</li>}
                                            {!!electricityPrice || <li>Çmimi i energjisë elektrike</li>}
                                            {!!roofArea || <li>Madhësia e çatisë</li>}
                                            {!!percentSolar || <li>Kompensimi i dëshiruar diellor</li>}
                                        </ul>
                                    </Albanian>
                                </div>
                            </div>
                            <div id="production-graph">
                                <Plot
                                    data={[
                                        {
                                            x: (albanian ? ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qërshor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"] :
                                                ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]),
                                            y: monthlyProduction,
                                            type: 'bar',
                                        },
                                    ]}
                                    layout={{
                                        title: (albanian ? 'Prodhimi mujor' : 'Monthly Production'),
                                        xaxis: { title: (albanian ? "Muaj" : "Month") },
                                        yaxis: { title: (albanian ? "Prodhimi në kWh" : "Production in kWh") }
                                    }}
                                    style={{
                                        width: 'inherit',
                                        height: '40vh',
                                        overflowX: "hidden"
                                    }}
                                    config={{ responsive: true }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PageFoot></PageFoot>
        </div>
    )
}

/**
 * Calculates the return on investment.
 * @param {number} roofArea Amount of roof space to be used for solar panels (m^2)
 * @param {number} percentEnergyForSolar Amount of total energy consumption dedicated to solar (between 0 and 100) (%)
 * @param {number} monthlyConsumption Total energy used per month (kWh / month)
 * @param {string} prefecture The prefecture to gather solar data from
 * @param {number} manualIrradiation A manually entered solar irradiation amount to use instead of a prefecture
 * @param {number} costPerKW Cost of a single kW of PV (euro)
 * @param {number} panelSize Size of a single solar panel (m^2)
 * @param {number} panelCapacity Capacity of a single solar panel (W)
 * @returns {Calculations} A collection of calculations represented by a {@link Calculations} object.
 */
function calcROI(prefecture, manualIrradiation, costPerKW, panelSize, panelCapacity, monthlyConsumption, electricityPrice, roofArea, percentEnergyForSolar) {
    // Amount of solar irradiation for the specified municipality kWh/kW per month. Uses a manual value if entered (non-0)
    const solarIrradiation = manualIrradiation || SolarData.getData(prefecture, "AVG", panelCapacity / panelSize / 1000, false);
    // Ideal amount of energy generated per month for a system (kWh/month)
    const desiredMonthlyGen = (percentEnergyForSolar / 100) * monthlyConsumption;
    //Expected number of solar panels required
    const solarPanelReq = calcNumPanels(desiredMonthlyGen, prefecture, manualIrradiation, panelSize, panelCapacity);
    // Number of solar panels needed, or as many as fit on the roof if the amount needed does not fit
    const solarPanelAmt = Math.min(Math.floor(roofArea / panelSize), solarPanelReq);
    //Capacity of solarPanelAmt (kW)
    const solarCapacityAmt = panelCapacity * solarPanelAmt / 1000;
    // Amount of energy generated per month for a system (kWh per month)
    const actualMonthlyGen = solarCapacityAmt * solarIrradiation;
    // Total cost of the system in euro
    const totalCost = solarCapacityAmt * costPerKW;
    // Amount of euro saved per month
    const savings = actualMonthlyGen * (electricityPrice / settings.lekPerEuro.getState());
    // Total time to return on investment in months
    const roi = totalCost / savings;
    //energy in kwh * 0.38 MWh per toe (tonnes of crude oil burned) / 1000 = tonnes of CO2
    const emissionsSaved = (actualMonthlyGen * 0.38) / 1000;

    return {
        AverageMonthlyGeneration: actualMonthlyGen,
        TotalSavings: savings,
        TotalCost: totalCost,
        ReturnOnInvestment: decimalToMY(roi),
        EmissionsSavings: emissionsSaved
    };
}

/**
 * Converts a decimal number of months to the closest number of years and months, increasing
 * @param {number} dec a decimal representation of a number of months
 * @returns An object {years, months}
 */
function decimalToMY(dec) {
    let years = Math.floor(dec / 12);
    let months = Math.round(dec % 12);

    if (years === Infinity)
        return { years: "50+", months: 0 };

    if (months === 12) {
        years++;
        months = 0;
    }

    return { years: years, months: months };
}

/**
 * Convert a numerical number of years to a textual representation of that time
 * @param {number} numYears The number of years to format to text
 * @param {boolean} isAlbanian whether to translate text as Albanian or not
 * @returns A string representation of the number of years entered
 */
function formatYears(numYears, isAlbanian) {
    switch (numYears) {
        case 0:
            return "";
        case 1:
            return isAlbanian ? "1 vit" : "1 year";
        default:
            return `${numYears} ${isAlbanian ? "vjet" : "years"}`;
    }
}

/**
 * Convert a numerical number of months to a textual representation of that time
 * @param {number} numMonths The number of months to format to text
 * @param {boolean} isAlbanian whether to translate text as Albanian or not
 * @returns A string representation of the number of months entered
 */
function formatMonths(numMonths, isAlbanian) {
    switch (numMonths) {
        case 0:
            return "";
        case 1:
            return isAlbanian ? "1 muaj" : "1 month";
        default:
            return `${numMonths} ${isAlbanian ? "muaj" : "months"}`;
    }
}

/**
 * Calculates the electricity production for a given month.
 * @param {string} prefecture The prefecture to gather solar data from
 * @param {number} [panelSize] Size of a single solar panel (m^2)
 * @param {number} [panelCapacity] Capacity of a single solar panel (kW)
 * @param {number} [panelEfficiency] Efficiency of solar panels (%)
 * @returns {number[]} The production for each month of the year.
 */
function calcMonthlyProduction(prefecture, manualIrradiation, panelSize, panelCapacity, monthlyConsumption, electricityPrice, roofArea, percentSolar) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; //Months, x-axis
    let monthlyProd = [];

    for (let i in months) {
        // Amount of solar irradiation for the specified municipality kWh/kW per month. Uses a manual value if entered (non-0)
        const solarIrradiation = manualIrradiation || SolarData.getData(prefecture, months[i], panelCapacity / panelSize / 1000, false);
        // Ideal amount of energy generated per month for a system (kWh/month)
        const desiredMonthlyGen = (percentSolar / 100) * monthlyConsumption;
        //Expected number of solar panels required
        const solarPanelReq = calcNumPanels(desiredMonthlyGen, prefecture, manualIrradiation, panelSize, panelCapacity);
        // Number of solar panels needed, or as many as fit on the roof if the amount needed does not fit
        const solarPanelAmt = Math.min(Math.floor(roofArea / panelSize), solarPanelReq);
        //Capacity of solarPanelAmt (kW)
        const solarCapacityAmt = panelCapacity * solarPanelAmt / 1000;
        // Amount of energy generated per month for a system (kWh per month)
        const actualMonthlyGen = solarCapacityAmt * solarIrradiation;

        monthlyProd.push(actualMonthlyGen);
    }

    return monthlyProd;
}

/**
 * Calculates the amount of solar PV units required to produce 100% of electricity consumption
 * @param {number} monthlyConsumption The amount of electricity used per month in kWh
 * @param {number} roofArea Amount of roof space to be used for solar panels (m^2)
 * @param {number} manualIrradiation A value to use if a prefecture is not selected for the irradiation
 * @param {string} prefecture The prefecture to gather solar data from
 * @param {number} panelCapacity Capacity of a single solar panel (kW)
 * @returns {number} The number of PV units required to replace electricity consumption
 */
function calcNumPanels(monthlyConsumption, prefecture, manualIrradiation, solarArea, solarCapacity) {
    const solarIrradiation = manualIrradiation || SolarData.getData(prefecture, "AVG", (solarCapacity / 1000) / solarArea, false);
    let capacityNeeded = monthlyConsumption / solarIrradiation;
    //capacityNeeded = capacityNeeded / 1.15 / 0.99; //Accounts for optimal angle and orientation (extra 15%) and efficiency of cables (99%)

    const numberNeeded = Math.ceil(capacityNeeded / (solarCapacity / 1000));
    return numberNeeded;
}

/**
 * Updates the currently selected panel to be custom when modifying manual PV fields
 * @param {*} props Contains references to checkIsOnCustomData and onSelection
 */
function customizePanel(setSolarData, setShouldUseName) {
    setShouldUseName(false);
    setSolarData({
        NameOrModel: "Custom",
        Manufacturer: "",
        ManufacturerLink: "",
        CostPerPanel: document.getElementById("solar-cost").value,
        AreaPerPanel: document.getElementById("solar-area").value,
        CapacityPerPanel: document.getElementById("solar-capacity").value,
        Efficiency: document.getElementById("solar-efficiency").value
    });
}

export default Calculator;