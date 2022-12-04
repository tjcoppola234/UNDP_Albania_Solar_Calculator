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
            <div className="content">
                <div>
                    <English><h2 className="h2resources">Help</h2></English>
                    <Albanian><h2 className="h2resources">Ndihmë</h2></Albanian>
                </div>
                <section id="help-payback-period">
                    <div>
                        <English><h3 className="space-left">Payback Period Calculator</h3></English>
                        <Albanian><h3 className="space-left">Llogaritësi i periudhës së shlyerjes</h3></Albanian>
                    </div>
                    <div className="space-left">
                        <English>This calculator determines how long it will take to break even on your initial solar panel system purchase.</English>
                        <Albanian>Ky kalkulator përcakton se sa kohë do të duhet për t'u prishur me blerjen fillestare të sistemit të panelit diellor.</Albanian>
                    </div>
                    <ol>
                        <li>
                            <div>
                                <English>Below Solar Panel Statistics, enter the following fields:</English>
                                <Albanian>Më poshtë Statistikat e Panelit Diellor, shkruani fushat e mëposhtme:</Albanian>
                            </div>
                            <ul>
                                <li>
                                    <div>
                                        <English><strong>Cost of one solar panel</strong>: In Euros, the price of a singular solar panel that you are looking to purchase.</English>
                                        <Albanian><strong>Kostoja e një paneli diellor</strong>: Në euro, çmimi i një paneli diellor të vetëm që po kërkoni të blini.</Albanian>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <English><strong>Area of one solar panel</strong>: In meters-squared, the length times the width of a singular solar panel that you are looking to purchase.</English>
                                        <Albanian><strong>Sipërfaqja e një paneli diellor</strong>: Në metra katrorë, gjatësia është shumëfishi i gjerësisë së një paneli diellor të vetëm që po kërkoni të blini.</Albanian>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <English><strong>Capacity of one solar panel</strong>: In kilowatts, the capacity of a singular solar panel that you are looking to purchase.</English>
                                        <Albanian><strong>Kapaciteti i një paneli diellor</strong>: Në kilovat, kapaciteti i një paneli diellor të vetëm që po kërkoni të blini.</Albanian>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <English><strong>Efficiency of solar panels</strong>: The percentage of the efficiency of a singular solar panel that you are looking to purchase.</English>
                                        <Albanian><strong>Efikasiteti i paneleve diellore</strong>: Përqindja e efikasitetit të një paneli diellor të vetëm që po kërkoni të blini.</Albanian>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <English><strong>Note</strong>: You can scroll through the table under <strong>Solar Panel Info</strong> and click on <strong>Use this panel</strong> under <strong>Panel Selection</strong> if you find a solar panel model you are interested in using.</English>
                                        <Albanian><strong>Shënim</strong>: Mund të lëvizni nëpër tabelë nën <strong>Informacionet e panelit diellor</strong> dhe të klikoni në <strong>Përdor këtë panel</strong> nën <strong>Zgjedhja e panelit</strong> nëse ju gjeni një model panel diellor që jeni të interesuar të përdorni.</Albanian>
                                    </div>
                                    <br/>
                                    <img id="help-panel-table" src={process.env.PUBLIC_URL + "help_panel_table.png"} alt="A reference to the calculator's table of solar panels"/>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div>
                                <English>Select the municipality that your building is located in under <strong>Select your municipality</strong>. The municipality you select is used to determine the average amount of sunlight per month/year for your building.</English>
                                <Albanian>Zgjidhni komunën në të cilën ndodhet ndërtesa juaj te <strong>Zgjidhni komunën tuaj</strong>. Komuna që zgjidhni përdoret për të përcaktuar sasinë mesatare të dritës së diellit në muaj/vit për ndërtesën tuaj.</Albanian>
                            </div>
                        </li>
                        <li>
                            <div>
                                <English>Under <strong>Roof space available for solar</strong> enter, in meters-squared, your available roof space that you would like to cover in solar panels. Keep in mind, your whole roof space may or may not be needed to cover your electricity needs.</English>
                                <Albanian>Nën <strong>Hapësira në çati e disponueshme për energji diellore</strong>, futni, në metra katror, ​​hapësirën tuaj të disponueshme të çatisë që dëshironi të mbuloni me panele diellore. Mbani në mend, e gjithë hapësira juaj e çatisë mund të jetë ose jo e nevojshme për të mbuluar nevojat tuaja për energji elektrike.</Albanian>
                            </div>
                        </li>
                        <li>
                            <div>
                                <English>Under <strong>Percent energy savings from solar</strong>, enter the percentage you would like solar to cover your electricity demands. For example, if you would like 70% of your electricity consumption to come from solar energy and 30% from other forms, you would enter in “70”.</English>
                                <Albanian>Nën <strong>Kursime në përqindje të energjisë nga dielli</strong>, shkruani përqindjen që dëshironi që energjia diellore të mbulojë kërkesat tuaja për energji elektrike. Për shembull, nëse dëshironi që 70% e konsumit tuaj të energjisë elektrike të vijë nga energjia diellore dhe 30% nga forma të tjera, do të futni "70".</Albanian>
                            </div>
                        </li>
                        <li>
                            <div>
                                <English>Under <strong>Current amount paid for electricity per month</strong>, enter, in Lek, how much money you spend in a month on your electricity bill. If you consume more energy during a specific month, we suggest you use your latest bill of that month. If instead you would like to enter your yearly electricity bill, click on <strong>month</strong> and select <strong>year</strong> from the dropdown menu.</English>
                                <Albanian>Në <strong>Shuma aktuale e paguar për energjinë elektrike në muaj</strong>, shënoni në lekë sa para shpenzoni në një muaj për faturën tuaj të energjisë elektrike. Nëse konsumoni më shumë energji gjatë një muaji të caktuar, ju sugjerojmë të përdorni faturën tuaj të fundit të atij muaji. Nëse në vend të kësaj dëshironi të futni faturën tuaj vjetore të energjisë elektrike, klikoni te <strong>muaj</strong> dhe zgjidhni <strong>vit</strong> nga menyja rënëse.</Albanian>
                            </div>
                        </li>
                        <li>
                            <div>
                                <English>Click <strong>Calculate</strong> to receive your payback period, how much energy your panels would produce, the total cost of your panels, and the total money saved by your investment.</English>
                                <Albanian>Klikoni <strong>Llogarit</strong> për të marrë periudhën e kthimit, sa energji do të prodhonin panelet tuaja, koston totale të paneleve tuaja dhe paratë totale të kursyera nga investimi juaj.</Albanian>
                            </div>
                        </li>
                    </ol>
                </section>
            </div>
            <PageFoot></PageFoot>
        </div>
    )
}

export default Help;