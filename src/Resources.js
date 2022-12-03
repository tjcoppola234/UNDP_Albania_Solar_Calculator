import './global.css';
import './Resources.css';
import { useState } from 'react';
import { PageHead, PageFoot } from './App';
import English from './English';
import Albanian from './Albanian';

/**
 * The HTML for the resources page.
 * @returns {HTMLElement} An HTMLElement representing the resources page, with class "Resources".
 */
function Resources() {
    const [openImage, setImageOpened] = useState(false);
    const [openedSRC, setOpenSRC] = useState("");
    const [caption, setCaption] = useState("");

    const load = (num) => {
        const image = document.getElementById(`img${num}`);
        setImageOpened(true);
        setOpenSRC(image.src);
        setCaption(image.alt);
    }

    return (
        <div className="Resources">
            <PageHead></PageHead>
            <div className="title-box Vert-flex" style={{backgroundImage: `linear-gradient(to bottom, rgba(204,208,209,0) 0%, rgba(220,224,225,0.75) 75%, rgba(236,240,241,1) 100%), url(${process.env.PUBLIC_URL}/resources-background.jpg)`}}>
                <English><h2 className="page-title">Resources</h2></English>
                <Albanian><h2 className="page-title">Burimet</h2></Albanian>
                <English><h3 className="page-subtitle">Learn more about solar photovoltaics!</h3></English>
                <Albanian><h3 className="page-subtitle">Mësoni më shumë rreth fotovoltaikëve diellorë!</h3></Albanian>
            </div>
            <div className="content">
                <div className={"modal-img" + (openImage ? "" : " invisible")}>
                    <span className="close-modal" onClick={() => setImageOpened(false)}>&times;</span>
                    <div className="modal-content">
                        <div className="modal-caption">{caption}</div>
                        <img className="modal-img-src" src={openedSRC} alt={caption}></img>
                    </div>
                </div>
            <div>
                <div>
                    <English><h1 className="largerfontb">Why is solar energy important?</h1></English>
                    <Albanian><h1 className="largerfontb">Pse është e rëndësishme energjia diellore?</h1></Albanian>
                </div>
                <div className="content-section">
                    <div className="imagefloat-box"><img className="imagefloat-right" id="img0" src={process.env.PUBLIC_URL+"solarmap.png"} alt="Benefits" onClick={() => load(0)} width = "360" height = "450" floatleft/></div>
                    <div>
                        <English><h3>The Enviornment</h3></English>
                        <Albanian><h3>Mjedisi</h3></Albanian>
                    </div>
                    <ul>
                        <li>
                            <English>Reduces the amount of carbon dioxide released into the air.</English>
                            <Albanian>Redukton sasinë e dioksidit të karbonit të lëshuar në ajër.</Albanian>
                        </li>
                        <li>
                            <English>Provides better air quality.</English>
                            <Albanian>Ofron cilësi më të mirë të ajrit.</Albanian>
                        </li>
                        <li>
                            <English>Helps mitigate climate change.</English>
                            <Albanian>Ndihmon në zbutjen e ndryshimeve klimatike.</Albanian>
                        </li>
                    </ul>
                    <div>
                        <English><h3>Sunny Potential</h3></English>
                        <Albanian><h3>Potencial me diell</h3></Albanian>
                    </div>
                    <ul>
                        <li>
                            <English>Albania has extensive potential for solar energy.</English>
                            <Albanian>Shqipëria ka një potencial të gjerë për energjinë diellore.</Albanian>
                        </li>
                        <li>
                            <English>Between 2400-2500 hours of sunshine per year.</English>
                            <Albanian>Mes 2400-2500 orëve me diell në vit.</Albanian>
                        </li>
                        <li>
                            <English>The irradiation is the amount of power received from the sun.</English>
                            <Albanian>Rrezatimi është sasia e fuqisë së marrë nga dielli.</Albanian>
                        </li>
                        <li>
                            <English>The graph to the right shows the irradiation of Albanian regions.</English>
                            <Albanian>Grafiku në të djathtë tregon rrezatimin e rajoneve shqiptare.</Albanian>
                        </li>
                    </ul>
                </div>    
            </div>
            <div>
                <div>
                    <English><h1 className="largerfontb">What are the benefits of solar energy for your business?</h1></English>
                    <Albanian><h1 className="largerfontb">Cilat janë përfitimet e energjisë diellore për biznesin tuaj?</h1></Albanian>
                </div>
                <div className="content-section">
                    <div className="imagefloat-box"><img className="imagefloat-right" id="img1" src={process.env.PUBLIC_URL+"reasons.png"} alt="Reasons" onClick={() => load(1)} width = "450" height = "770" /></div>
                    <div>
                        <English><h3>Reduced Energy Costs</h3></English>
                        <Albanian><h3>Kosto të reduktuara të energjisë</h3></Albanian>
                    </div>
                    <ul>
                        <li>
                            <English>Electricity bills are expensive and problematic.</English>
                            <Albanian>Faturat e energjisë elektrike janë të shtrenjta dhe problematike.</Albanian>
                        </li>
                        <li>
                            <English>Your electricity bill depends on how much energy is consumed and the rate your utility company charges.</English>
                            <Albanian>Fatura juaj e energjisë elektrike varet nga sasia e energjisë së konsumuar dhe tarifa që ngarkon kompania juaj e shërbimeve.</Albanian>
                        </li>
                        <li>
                            <English>You can look at switching to solar as replacing your electricity bill with monthly payments for your solar equipment.</English>
                            <Albanian>Ju mund ta shikoni kalimin në solare si zëvendësim të faturave të energjisë elektrike me pagesa mujore për pajisjet tuaja diellore.</Albanian>
                        </li>
                        <li>
                            <English>Utility companies face high costs to maintain and expand the grid making your electricity bills more expensive.</English>
                            <Albanian>Kompanitë e shërbimeve publike përballen me kosto të larta për të mirëmbajtur dhe zgjeruar rrjetin duke i bërë më të shtrenjta faturat tuaja të energjisë elektrike.</Albanian>
                        </li>
                        <li>
                            <English>You can avoid this increase of price by switching to solar!</English>
                            <Albanian>Ju mund ta shmangni këtë rritje të çmimit duke kaluar në solare!</Albanian>
                        </li>    
                    </ul>
                    <div>
                        <English><h3>More Energy Security and Independence</h3></English>
                        <Albanian><h3>Më shumë siguri dhe pavarësi energjetike</h3></Albanian>
                    </div>
                    <ul>
                        <li>
                            <English>Becoming your own power providers</English>
                            <Albanian>Duke u bërë ofruesit tuaj të energjisë</Albanian>
                        </li>
                        <li>
                            <English>Costs of using solar are very predictable as many additionally pay service charges that go towards grid maintenance, charges for net metering, and other associated costs</English>
                            <Albanian>Kostot e përdorimit të energjisë diellore janë shumë të parashikueshme pasi shumë paguajnë gjithashtu tarifa shërbimi që shkojnë për mirëmbajtjen e rrjetit, tarifat për matjen neto dhe kosto të tjera të lidhura.</Albanian>
                        </li>
                        <li className="has-sublist">
                            <ul>
                                <li>
                                    <English>Just remember if you do not go 100% solar, then you will have some level of remaining electric bill that will vary through the year.</English>
                                    <Albanian>Mos harroni nëse nuk përdorni 100% diellore, atëherë do të keni një nivel të mbetur të faturës elektrike që do të ndryshojë gjatë vitit.</Albanian>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div>
                        <English><h3>Green Business</h3></English>
                        <Albanian><h3>Biznesi i gjelbër</h3></Albanian>
                    </div>
                    <ul>
                        <li>
                            <English>You can go green by installing solar systems!</English>
                            <Albanian>Mund të jesh i gjelbër duke instaluar sisteme diellore!</Albanian>
                        </li>
                        <li>
                            <English>Going green means finding the most efficient ways to sustain your companies for the better impact of the environment.</English>
                            <Albanian>Të jesh i gjelbër do të thotë të gjesh mënyrat më efikase për të mbështetur kompanitë tuaja për ndikimin më të mirë të mjedisit.</Albanian>
                        </li>
                        <li>
                            <English>It reduces company costs by keeping general operating costs low over time.</English>
                            <Albanian>Redukton kostot e kompanisë duke i mbajtur kostot e përgjithshme operative të ulëta me kalimin e kohës.</Albanian>
                        </li>
                        <li>
                            <English>It attracts more eco-conscious employees to hire, and a better image.</English>
                            <Albanian>Ajo tërheq më shumë punonjës të ndërgjegjshëm për mjedisin për të punësuar dhe një imazh më të mirë.</Albanian>
                        </li>
                        <li>
                            <English>It creates a more robust reputation of the company by leaving a lasting impression on your customers.</English>
                            <Albanian>Krijon një reputacion më të fortë të kompanisë duke lënë një përshtypje të qëndrueshme te klientët tuaj.</Albanian>
                        </li>
                    </ul>
                    <div>
                        <English><h3>Solar Tax Benefit</h3></English>
                        <Albanian><h3>Përfitimi nga taksat diellore</h3></Albanian>
                    </div>
                    <ul>
                        <li>
                            <English>The value-added tax on all machinery and other equipment imported to invest in solar energy has been discussed to be cancelled!</English>
                            <Albanian>Tatimi mbi vlerën e shtuar për të gjitha makineritë dhe pajisjet e tjera të importuara për të investuar në energjinë diellore është diskutuar të anulohet!</Albanian>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <English><h1 className="largerfontb">Should your business go solar?</h1></English>
                    <Albanian><h1 className="largerfontb">A duhet të shkojë biznesi juaj diellor?</h1></Albanian>
                </div>
                
                <div className="content-section">
                    <div className="imagefloat-box"><img className="imagefloat-left" id="img2" src={process.env.PUBLIC_URL+"qs.png"} alt="Questions To Ask" onClick={() => load(2)} width = "500" height = "500"/></div>
                    <div>
                        <English><h3>Why should I go solar?</h3></English>
                        <Albanian><h3>Pse duhet të shkoj në diell?</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>Choosing to go solar is completely up to you. There are many benefits to going solar, including electricity bill savings, more stable power, and building a more sustainable business. </English>
                        <Albanian>Zgjedhja për të përdorur diellore varet plotësisht nga ju. Ka shumë përfitime nga përdorimi i energjisë diellore, duke përfshirë kursimet e faturave të energjisë elektrike, energjinë më të qëndrueshme dhe ndërtimin e një biznesi më të qëndrueshëm.</Albanian>
                    </div>
                    <div>
                        <English><h3>Is my business right for solar?</h3></English>
                        <Albanian><h3>A është biznesi im i duhur për energjinë diellore?</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>Before professional consultation, you can determine on your own whether a solar system makes sense for your system. You want to make sure the panels receive the most possible amount of sunlight as Albania already has a high amount of sunshine per year. You also want to determine if your electricity bills are high enough to justify going solar as the more money you spend now, the more you can save with solar.</English>
                        <Albanian>Përpara konsultimit profesional, ju mund të përcaktoni vetë nëse një sistem diellor ka kuptim për sistemin tuaj. Ju dëshironi të siguroheni që panelet të marrin sasinë më të madhe të mundshme të dritës së diellit pasi Shqipëria tashmë ka një sasi të lartë dielli në vit. Ju gjithashtu dëshironi të përcaktoni nëse faturat tuaja të energjisë elektrike janë mjaft të larta për të justifikuar përdorimin e energjisë diellore, pasi sa më shumë para të shpenzoni tani, aq më shumë mund të kurseni me energjinë diellore.</Albanian>
                    </div>
                    <div>
                        <English><h3>How much does solar cost?</h3></English>
                        <Albanian><h3>Sa kushton solari?</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>The average Albanian business energy usage can be about X lek which is directly affected by how much energy is used, so this cost varies depending on your business’ consumption. Solar companies will typically generate a report of your estimations.</English>
                        <Albanian>Përdorimi mesatar i energjisë së biznesit shqiptar mund të jetë rreth X lek që ndikohet drejtpërdrejt nga sasia e energjisë së përdorur, kështu që kjo kosto varion në varësi të konsumit të biznesit tuaj. Kompanitë diellore zakonisht do të gjenerojnë një raport të vlerësimeve tuaja.</Albanian>
                    </div>
                    <br />
                    <div className="p-text">
                        <English>Most solar companies will build out an accurate estimate by using the last six months of your energy bills and utilizing sun tracking software to determine the necessary size of your system to generate 100% of your power needs.</English>
                        <Albanian>Shumica e kompanive diellore do të krijojnë një vlerësim të saktë duke përdorur gjashtë muajt e fundit të faturave tuaja të energjisë dhe duke përdorur softuerin e gjurmimit të diellit për të përcaktuar madhësinë e nevojshme të sistemit tuaj për të gjeneruar 100% të nevojave tuaja për energji.</Albanian>
                    </div>
                    <div>
                        <English><h3>How should I finance my panels?</h3></English>
                        <Albanian><h3>Si duhet t'i financoj panelet e mia?</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>A business has a variety of options to explore as solar companies have packages of solar systems they sell, or a business may consider taking out a loan to finance their solar panels.</English>
                        <Albanian>Një biznes ka një shumëllojshmëri opsionesh për të eksploruar pasi kompanitë diellore kanë paketa të sistemeve diellore që shesin, ose një biznes mund të marrë në konsideratë marrjen e një kredie për të financuar panelet e tyre diellore.</Albanian>
                    </div>
                    <div>
                        <English><h3>How much money will I save with solar?</h3></English>
                        <Albanian><h3>Sa para do të kursej me solar?</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>A solar company would be installing a custom rooftop solar system for your business, so the costs would ideally fit your needs.</English>
                        <Albanian>Një kompani diellore do të instalonte një sistem diellor me porosi në çati për biznesin tuaj, kështu që kostot do të përshtateshin në mënyrë ideale me nevojat tuaja.</Albanian>
                    </div>
                    <div>
                        <English><h3>How long will my solar panels last?</h3></English>
                        <Albanian><h3>Sa do të zgjasin panelet e mia diellore?</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>Solar panels are continually progressing to be better in power production and efficiency. There are a variety of panels to choose from that may fit your power or aesthetic needs, depending on what manufacturer you’re looking at. Most manufacturers claim their panel’s efficiency to last at least 20-25 years due to slight degradation caused by dirt, pollen, and other external factors, so it is important to clean your panels.</English>
                        <Albanian>Panelet diellore po përparojnë vazhdimisht për të qenë më të mirë në prodhimin dhe efikasitetin e energjisë. Ka një shumëllojshmëri panelesh për të zgjedhur që mund të përshtaten me fuqinë ose nevojat tuaja estetike, në varësi të prodhuesit që po shikoni. Shumica e prodhuesve pretendojnë se efikasiteti i panelit të tyre zgjat të paktën 20-25 vjet për shkak të degradimit të lehtë të shkaktuar nga papastërtia, poleni dhe faktorë të tjerë të jashtëm, kështu që është e rëndësishme të pastroni panelet tuaja.</Albanian>
                    </div>
                    <div>
                        <English><h3>Do solar panels have a warranty?</h3></English>
                        <Albanian><h3>A kanë garanci panelet diellore?</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>Warranty depends on the manufacturer with most lasting between 20-25 years. Some solar companies also offer a few years of maintenance as well after they are installed on your roof.</English>
                        <Albanian>Garancia varet nga prodhuesi me më shumë kohëzgjatje midis 20-25 vjet. Disa kompani diellore ofrojnë gjithashtu disa vite mirëmbajtje, si dhe pasi të jenë instaluar në çatinë tuaj.</Albanian>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <English><h1 className="largerfontb">How can your business go solar?</h1></English>
                    <Albanian><h1 className="largerfontb">Si mund të shkojë biznesi juaj diellor?</h1></Albanian>
                </div>
                <div className="content-section">
                    <div className="imagefloat-box"><img className="imagefloat-left" id="img3" src={process.env.PUBLIC_URL+"how.png"} alt="How to Install" onClick={() => load(3)} width = "450" height = "650"/></div>
                    <div>
                        <English><h3>Solar Installers</h3></English>
                        <Albanian><h3>Instalues ​​diellor</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>Talk to different solar installation companies to determine if and how a solar system is right for you. Many companies offer technical and financial consulting, along with the full projections of a PV system on your roof. At these vendors will you be able to apply for a permit and start installation. Some solar companies and many solar manufacturers in which these installation companies get their panels from also offer periodic maintenance.</English>
                        <Albanian>Bisedoni me kompani të ndryshme instalimi diellor për të përcaktuar nëse dhe si një sistem diellor është i duhuri për ju. Shumë kompani ofrojnë konsulencë teknike dhe financiare, së bashku me parashikimet e plota të një sistemi PV në çatinë tuaj. Tek këta shitës do të mund të aplikoni për një leje dhe të filloni instalimin. Disa kompani diellore dhe shumë prodhues të diellit nga të cilët këto kompani instalimi marrin panelet e tyre gjithashtu ofrojnë mirëmbajtje periodike.</Albanian>
                    </div>
                    <div>
                        <div>
                            <English><h3>Solar Installer Contacts</h3></English>
                            <Albanian><h3>Kontaktet e instaluesit diellor</h3></Albanian>
                        </div>
                        <div>
                            <div className="solar-installer-contact">
                                <div className="p-text"><strong><a href = "https://panelebesi.al/"> Panele Fotovoltaike Besi</a></strong></div>
                                <div className="p-text">+355 69 992 9800</div>
                                <div className="p-text">panelebesi@gmail.com</div>
                                <div className="p-text">Rruga Artan Lenja, Tirana 1023</div>
                            </div>
                            <div className="solar-installer-contact">
                                <div className="p-text"><strong><a href = "https://vegasolar.al/">Vega Electric</a></strong></div>
                                <div className="p-text">+355 69 202 1115</div>
                                <div className="p-text">info@vegasolar.al</div>
                                <div className="p-text">Artan Lenja Street 61 Lyra Palace, Magnet Complex Tirana AL, Tirana 1001</div>
                            </div>
                            <div className="solar-installer-contact">
                                <div className="p-text"><strong><a href ="https://enercom.al/index.html">Enercom</a></strong></div>
                                <div className="p-text">+355 68 900 1221</div>
                                <div className="p-text">info@enercom.al</div>
                                <div className="p-text">Rruga e Elbasanit, Sauk, 1044, Tiranë</div>
                            </div>
                        </div>
                        <div id="center-solar" className="Vert-flex">
                            <English><h3>Map of solar installers near Tirana</h3></English>
                            <Albanian><h3>Harta e instaluesve diellorë pranë Tiranës</h3></Albanian>
                            <iframe id="solar-map" title="Map of solar companies in Tirana" src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d47942.37394858916!2d19.7906942!3d41.32195!3m2!1i1024!2i768!4f13.1!2m1!1ssolar%20companies!5e0!3m2!1sen!2s!4v1667231658526!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div>
                        <English><h3>Banks</h3></English>
                        <Albanian><h3>Bankat</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>Talk to different banks to determine if taking out a loan is right for your company. A couple banks, like Union Bank and ProCredit Bank, offer technical and financial assistance to help you determine if a solar system is right for you. These banks will often be partnered with solar installation companies they will get you in contact with.</English>
                        <Albanian>Bisedoni me banka të ndryshme për të përcaktuar nëse marrja e një kredie është e duhura për kompaninë tuaj. Disa banka, si Union Bank dhe ProCredit Bank, ofrojnë ndihmë teknike dhe financiare për t'ju ndihmuar të përcaktoni nëse një sistem diellor është i duhuri për ju. Këto banka shpesh do të jenë partnere me kompanitë e instalimit diellor me të cilat do t'ju kontaktojnë.</Albanian>
                    </div>
                    <div>
                        <div>
                            <English><h3>Financing Options</h3></English>
                            <Albanian><h3>Opsionet e financimit</h3></Albanian>
                        </div>
                        <div className="p-text">
                            <strong><a href="https://www.procreditbank.com.al/eng/business-clients/loans/loan-for-photovoltaics/">
                                <English>ProCredit Bank</English>
                                <Albanian>Banka ProCredit</Albanian>
                            </a></strong>
                        </div>
                        <br />
                        <div className="p-text">
                            <strong><a href="https://www.unionbank.al/kredia-per-panele-fotovoltaike/">
                                <English>Union Bank</English>
                                <Albanian>Banka Union</Albanian>
                            </a></strong>
                        </div>
                    </div>
                    <div>
                        <English><h3>Calculations</h3></English>
                        <Albanian><h3>Llogaritjet</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>To determine which of the offers you are receiving from solar installation companies is the most suitable one for your business, use the app to do your own calculations!</English>
                        <Albanian>Për të përcaktuar se cila nga ofertat që merrni nga kompanitë e instalimit diellor është më e përshtatshme për biznesin tuaj, përdorni aplikacionin për të bërë llogaritjet tuaja!</Albanian>
                    </div>
                </div>
            </div>
        </div>
        <PageFoot></PageFoot>
    </div>
    )
}

export default Resources;
