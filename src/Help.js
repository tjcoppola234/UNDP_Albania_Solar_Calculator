import './global.css';
import './Help.css';
import { PageHead, PageFoot } from './App';
import English from './English';
import Albanian from './Albanian';

/**
 * The HTML for the help/information page.
 * @returns {HTMLElement} An HTMLElement representing the help/information page, with class "Help".
 */
function Help() {
    return (
        <div className="Help">
            <PageHead></PageHead>
            <div className="title-box Vert-flex" style={{ backgroundImage: `linear-gradient(to bottom, rgba(204,208,209,0) 0%, rgba(220,224,225,0.75) 75%, rgba(236,240,241,1) 100%), url(${process.env.PUBLIC_URL}/help-background.jpg)` }}>
                <English><h2 className="page-title">Help Page</h2></English>
                <Albanian><h2 className="page-title">Faqja e Ndihmës</h2></Albanian>
                <English><h3 className="page-subtitle">An explanation of the features of this website</h3></English>
                <Albanian><h3 className="page-subtitle">Një shpjegim i veçorive të kësaj faqeje interneti</h3></Albanian>
            </div>
            <div className="content">
                <section id="key-features">
                    <div>
                        <English><h3>Key Features</h3></English>
                        <Albanian><h3>Karakteristikat kryesore</h3></Albanian>
                    </div>
                    <ul>
                        <li>
                            <English>If you are unsure of what a certain field is asking for, click on ? beside the field box to get a brief explanation.</English>
                            <Albanian>Nëse nuk jeni të sigurt se çfarë kërkon një fushë e caktuar, klikoni në ? pranë kutisë së fushës për të marrë një shpjegim të shkurtër.</Albanian>
                        </li>
                        <li>
                            <English>On the top left corner of <b>Resources</b>, click on the hamburger button next to <b>Contents</b> to easily find a section on the page. Click on a section and it will scroll to the section for you.</English>
                            <Albanian>Në këndin e sipërm majtas të <b>Burimet</b>, kliko butonin e hamburgerit pranë <b>Përmbajtjet</b> për të gjetur lehtësisht një seksion në faqe. Klikoni në një seksion dhe ai do të lëvizë në seksionin për ju.</Albanian>
                        </li>
                    </ul>
                    <div className="centering">
                        <img src={process.env.PUBLIC_URL + "resources-toc.png"} width="827" height="389" alt="Resources has a Table of Contents in the top left" />
                    </div>
                    <ul>
                        <li>
                            <English>If you are having trouble reading an image or infographic in <b>Resources</b>, click on the image and the image will enlarge.</English>
                            <Albanian>Nëse keni probleme me leximin e një imazhi ose infografike në <b>Burimet</b>, klikoni mbi imazhin dhe imazhi do të zmadhohet.</Albanian>
                        </li>
                    </ul>
                </section>
                <section id="help-num-panels">
                    <div>
                        <English><h3>Number of Panels Calculator</h3></English>
                        <Albanian><h3>Llogaritësi i numrit të paneleve</h3></Albanian>
                    </div>
                    <div>
                        <English>This calculator determines the number of panels you would need to install to cover your entire electricity needs.</English>
                        <Albanian>Ky kalkulator përcakton numrin e paneleve që duhet të instaloni për të mbuluar të gjitha nevojat tuaja për energji elektrike.</Albanian>
                    </div>
                    <ol>
                        <li>
                            <English>Select the municipality that your building is located in under <b>Select your municipality</b>. The municipality you select is used to determine the average amount of sunlight per month/year for your building.</English>
                            <Albanian>Zgjidhni komunën në të cilën ndodhet ndërtesa juaj te <b>Zgjidhni komunën tuaj</b>. Komuna që zgjidhni përdoret për të përcaktuar sasinë mesatare të dritës së diellit në muaj/vit për ndërtesën tuaj.</Albanian>
                        </li>
                        <li>
                            <English>Scroll through the table under <b>Solar Panel Info</b> and click on <b>Use this panel</b> under <b>Panel Selection</b> if you find a solar panel model you are interested in using.</English>
                            <Albanian>Lëvizni nëpër tabelën nën <b>Informacioni i panelit diellor</b> dhe klikoni në <b>Përdorni këtë panel</b> nën <b>Zgjedhja e panelit</b> nëse gjeni një model të panelit diellor që jeni të interesuar të përdorni .</Albanian>
                        </li>
                    </ol>
                    <div className="indented or-spacing">
                        <English>OR</English>
                        <Albanian>OSE</Albanian>
                    </div>
                    <div className="indented">
                        <English>Click Enter photovoltaics manually and enter the following fields manually:</English>
                        <Albanian>Klikoni Enter photovoltaics manually dhe futni manualisht fushat e mëposhtme:</Albanian>
                    </div>
                    <ul>
                        <li className="undotted">
                            <ul>
                                <li>
                                    <English><b>Cost for one kW of panel</b>: In euro, the price of a singular solar panel that you are looking to purchase.</English>
                                    <Albanian><b>Kosto për një kW panel</b>: Në euro, çmimi i një paneli diellor të vetëm që po kërkoni të blini.</Albanian>
                                </li>
                                <li>
                                    <English><b>Area of one solar panel</b>: In meters-squared, the length times the width of a singular solar panel that you are looking to purchase.</English>
                                    <Albanian><b>Sipërfaqja e një paneli diellor</b>: Në metra katrorë, gjatësia është shumëfishi i gjerësisë së një paneli diellor të vetëm që po kërkoni të blini.</Albanian>
                                </li>
                                <li>
                                    <English><b>Peak capacity of one solar panel (W)</b>: In watts (W), the capacity of a singular solar panel that you are looking to purchase.</English>
                                    <Albanian><b>Kapaciteti maksimal i një paneli diellor (W)</b>: Në vat (W), kapaciteti i një paneli diellor të vetëm që po kërkoni të blini.</Albanian>
                                </li>
                            </ul>
                            <div className="indented or-spacing">
                                <English>OR</English>
                                <Albanian>OSE</Albanian>
                            </div>
                            <ul>
                                <li>
                                    <English>Click <b>Switch to using efficiency</b> and enter the efficiency (%) of a singular solar panel that you are looking to purchase under <b>Efficiency of solar panels</b> if you do not know the peak capacity.</English>
                                    <Albanian>Klikoni <b>Kaloni në përdorimin e efikasitetit</b> dhe futni efikasitetin (%) të një paneli diellor të vetëm që po kërkoni të blini nën <b>Efiçenca e paneleve diellore</b> nëse nuk e dini kapacitetin maksimal .</Albanian>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="centering">
                        <img src={process.env.PUBLIC_URL + "help_panel_table.png"} width="828" height="348.75" alt="Table with example photovoltaics" />
                    </div>
                    <ol>
                        <li value="3">
                            <English>Under <b>Electricity usage per month</b>, enter, in kilowatt-hours (kWh), the amount of electricity your business uses on average per month. This information should be on your electricity bill, or can be easily calculated by taking the average of the last 12 months of electricity usage for your business. If instead you would like to enter your yearly electricity bill, click on the slider to swap between <b>months</b> and <b>years</b>.</English>
                            <Albanian>Tek <b>Përdorimi i energjisë elektrike në muaj</b>, shkruani në kilovat-orë (kWh) sasinë e energjisë elektrike që biznesi juaj përdor mesatarisht në muaj. Ky informacion duhet të jetë në faturën tuaj të energjisë elektrike, ose mund të llogaritet lehtësisht duke marrë mesataren e 12 muajve të fundit të përdorimit të energjisë elektrike për biznesin tuaj. Nëse në vend të kësaj dëshironi të futni faturën tuaj vjetore të energjisë elektrike, klikoni në rrëshqitësin për ta ndërruar mes <b>muajve</b> dhe <b>viteve</b>.</Albanian>
                        </li>
                        <li>
                            <English>On the right hand panel, the number of panels you need for your system is under <b>Panels Required</b>.</English>
                            <Albanian>Në panelin e djathtë, numri i paneleve që ju nevojiten për sistemin tuaj është nën <b>Kërkohen panele</b>.</Albanian>
                        </li>
                    </ol>
                </section>
                <section id="help-payback-period">
                    <div>
                        <English><h3>Payback Period Calculator</h3></English>
                        <Albanian><h3>Llogaritësi i periudhës së shlyerjes</h3></Albanian>
                    </div>
                    <div>
                        <English>This calculator determines how long it will take to break even on your initial solar panel system purchase.</English>
                        <Albanian>Ky kalkulator përcakton se sa kohë do të duhet për t'u prishur me blerjen fillestare të sistemit të panelit diellor.</Albanian>
                    </div>
                    <ol>
                        <li>
                            <English>If you haven’t already from the previous calculator, select the municipality that your building is located in under <b>Select your municipality</b>. The municipality you select is used to determine the average amount of sunlight per month/year for your building.</English>
                            <Albanian>Nëse nuk e keni bërë tashmë nga kalkulatori i mëparshëm, zgjidhni komunën në të cilën ndodhet ndërtesa juaj te <b>Zgjidhni komunën tuaj</b>. Komuna që zgjidhni përdoret për të përcaktuar sasinë mesatare të dritës së diellit në muaj/vit për ndërtesën tuaj.</Albanian>
                        </li>
                        <li>
                            <English>Scroll through the table under <b>Example Solar Photovoltaics</b> and click on <b>Use this panel</b> under <b>Panel Selection</b> if you find a solar panel model you are interested in using.</English>
                            <Albanian>Lëvizni nëpër tabelën nën <b>Shembull Solar Fotovoltaics</b> dhe klikoni në <b>Përdorni këtë panel</b> nën <b>Zgjedhja e panelit</b> nëse gjeni një model të panelit diellor që jeni të interesuar të përdorni .</Albanian>
                        </li>
                    </ol>
                    <div className="indented or-spacing">
                        <English>OR</English>
                        <Albanian>OSE</Albanian>
                    </div>
                    <ul>
                        <li className="undotted">
                            <ul>
                                <li>
                                    <English><b>Cost for one kW of panel</b>: In euro, the price of a singular solar panel that you are looking to purchase.</English>
                                    <Albanian><b>Kosto për një kW panel</b>: Në euro, çmimi i një paneli diellor të vetëm që po kërkoni të blini.</Albanian>
                                </li>
                                <li>
                                    <English><b>Area of one solar panel</b>: In meters-squared, the length times the width of a singular solar panel that you are looking to purchase.</English>
                                    <Albanian><b>Sipërfaqja e një paneli diellor</b>: Në metra katrorë, gjatësia është shumëfishi i gjerësisë së një paneli diellor të vetëm që po kërkoni të blini.</Albanian>
                                </li>
                                <li>
                                    <English><b>Peak capacity of one solar panel (W)</b>: In watts (W), the capacity of a singular solar panel that you are looking to purchase.</English>
                                    <Albanian><b>Kapaciteti maksimal i një paneli diellor (W)</b>: Në vat (W), kapaciteti i një paneli diellor të vetëm që po kërkoni të blini.</Albanian>
                                </li>
                            </ul>
                            <div className="indented or-spacing">
                                <English>OR</English>
                                <Albanian>OSE</Albanian>
                            </div>
                            <ul>
                                <li>
                                    <English>Click <b>Switch to using efficiency</b> and enter the efficiency (%) of a singular solar panel that you are looking to purchase under <b>Efficiency of solar panels</b> if you do not know the peak capacity.</English>
                                    <Albanian>Klikoni <b>Kaloni në përdorimin e efikasitetit</b> dhe futni efikasitetin (%) të një paneli diellor të vetëm që po kërkoni të blini nën <b>Efiçenca e paneleve diellore</b> nëse nuk e dini kapacitetin maksimal .</Albanian>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="centering">
                        <img src={process.env.PUBLIC_URL + "help_panel_table.png"} width="828" height="348.75" alt="Table with example photovoltaics" />
                    </div>
                    <ol>
                        <li value="3">
                            <English>Under <b>Electricity usage per month</b>, enter, in kilowatt-hours (kWh), the amount of electricity your business uses on average per month. This information should be on your electricity bill, or can be easily calculated by taking the average of the last 12 months of electricity usage for your business. If instead you would like to enter your yearly electricity bill, click on the slider to swap between <b>months</b> and <b>years</b>.</English>
                            <Albanian>Tek <b>Përdorimi i energjisë elektrike në muaj</b>, shkruani në kilovat-orë (kWh) sasinë e energjisë elektrike që biznesi juaj përdor mesatarisht në muaj. Ky informacion duhet të jetë në faturën tuaj të energjisë elektrike, ose mund të llogaritet lehtësisht duke marrë mesataren e 12 muajve të fundit të përdorimit të energjisë elektrike për biznesin tuaj. Nëse në vend të kësaj dëshironi të futni faturën tuaj vjetore të energjisë elektrike, klikoni në rrëshqitësin për ta ndërruar mes <b>muajve</b> dhe <b>viteve</b>.</Albanian>
                        </li>
                        <li>
                            <English>Under <b>Price of electricity</b> enter, in Lek/kWh, the most recent price of electricity per kilowatt hour for your business.</English>
                            <Albanian>Tek <b>Çmimi i energjisë elektrike</b> shënoni, në lekë/kWh, çmimin më të fundit të energjisë elektrike për kilovat orë për biznesin tuaj.</Albanian>
                        </li>
                        <li>
                            <English>Under <b>Flat roof space available for solar</b> enter, in meters-squared, the amount of flat, open space you have on your business' roof for solar photovoltaics. If you don't know the exact amount, provide a rough estimate. Keep in mind that the roof space must receive sunlight for solar photovoltaics to work there.</English>
                            <Albanian>Në <b>Hapësira e çatisë së sheshtë e disponueshme për energji diellore</b> shkruani, në metra katrorë, sasinë e hapësirës së sheshtë dhe të hapur që keni në çatinë e biznesit tuaj për fotovoltaikë diellorë. Nëse nuk e dini shumën e saktë, jepni një vlerësim të përafërt. Mbani në mend se hapësira e çatisë duhet të marrë rrezet e diellit që fotovoltaikët diellorë të funksionojnë atje.</Albanian>
                        </li>
                        <li>
                            <English>Under <b>Percent of PV Share</b>, enter how much of your total energy usage you want to replace with solar photovoltaic generation. For example, if you enter “50”, then 50% of your current electricity usage will be generated by solar photovoltaics, and the other 50% will come from the grid.</English>
                            <Albanian>Nën <b>Përqindja e Ndarjes së PV-ve</b>, shkruani se sa nga konsumi total i energjisë dëshironi të zëvendësoni me gjenerimin e fotovoltaikëve diellorë. Për shembull, nëse futni "50", atëherë 50% e përdorimit aktual të energjisë elektrike do të gjenerohet nga fotovoltaikët diellorë, dhe 50% e tjera do të vijnë nga rrjeti.</Albanian>
                        </li>
                    </ol>
                    <div className="centering">
                        <img src={process.env.PUBLIC_URL + "help_other_inputs.png"} width="835.5" height="431.25" alt="Fields needed for remaining calculations" />
                    </div>
                    <ol>
                        <li value="7">
                            <English>On the right hand panel, the energy system generated by the system, the total amount saved, the total cost, the payback period, and CO2 savings are shown.</English>
                            <Albanian>Në panelin e djathtë, shfaqen sistemi i energjisë i gjeneruar nga sistemi, shuma totale e kursyer, kostoja totale, periudha e kthimit dhe kursimet e CO2.</Albanian>
                        </li>
                    </ol>
                    <div className="centering">
                        <img src={process.env.PUBLIC_URL + "help_results.png"} width="719" height="703" alt="Display of results from provided inputs" />
                    </div>
                </section>
                <div className="bottom-spacing"></div>
            </div>
            <PageFoot></PageFoot>
        </div>
    )
}

export default Help;