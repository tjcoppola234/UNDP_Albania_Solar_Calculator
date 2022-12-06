import './global.css';
import './Resources.css';
import { useState, useRef } from 'react';
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
    const [openedSRC2, setOpenSRC2] = useState("");
    const [caption, setCaption] = useState("");
    const [caption2, setCaption2] = useState("");
    const ref = useRef(null);

    /**
     * Loads an image into the modal popup and displays the modal
     * @param {number} num An index representing which image to load
     */
    const load = num => {
        if(num === 4) {
            const img1 = document.getElementById("img4");
            const img2 = document.getElementById("img5");
            setImageOpened(true);
            setOpenSRC(img1.src);
            setOpenSRC2(img2.src);
            setCaption(img1.alt);
            setCaption2(img2.alt);
        }
        else {
            const image = document.getElementById(`img${num}`);
            setImageOpened(true);
            setOpenSRC(image.src);
            setCaption(image.alt);
            setOpenSRC2("");
            setCaption2("");
        }
    }

    return (
        <div className="Resources">
            <PageHead></PageHead>
            <div className="title-box Vert-flex" style={{ backgroundImage: `linear-gradient(to bottom, rgba(204,208,209,0) 0%, rgba(220,224,225,0.75) 75%, rgba(236,240,241,1) 100%), url(${process.env.PUBLIC_URL}/resources-background.jpg)` }}>
                <English><h2 className="page-title">Resources</h2></English>
                <Albanian><h2 className="page-title">Burimet</h2></Albanian>
                <English><h3 className="page-subtitle">Learn more about solar photovoltaics!</h3></English>
                <Albanian><h3 className="page-subtitle">Mësoni më shumë rreth fotovoltaikëve diellorë!</h3></Albanian>
            </div>
            <div className="content">
            <TableOfContents></TableOfContents>
                <button id="scroll-to-top" type="button" onClick={e => {
                    e.preventDefault();
                    document.body.scrollIntoView({
                        behavior: "smooth"
                    });
                }}>▴</button>
                <div id="modal-img" ref={ref} className={openImage ? "" : " invisible"}>
                    <span className="close-modal" onClick={() => { ref.current.scrollTo(0, 0); setImageOpened(false);}}>&times;</span>
                    <div className="modal-content">
                        <div className="modal-caption">{caption}</div>
                        <img className="modal-img-src" src={openedSRC} alt={caption} />
                        <img className="modal-img-src" src={openedSRC2} alt={caption2} />
                    </div>
                </div>
                <div>
                    <div>
                        <English><h1 className="largerfontb" id="res-why-imp">Why is solar energy important?</h1></English>
                        <Albanian><h1 className="largerfontb" id="res-why-imp">Pse është e rëndësishme energjia diellore?</h1></Albanian>
                    </div>
                    <div className="content-section">
                        <img className="imagefloat-right" id="img0" src={process.env.PUBLIC_URL + "solarmap.png"} alt="Benefits" onClick={() => load(0)} width="360" height="450"/>
                        <div>
                            <English><h3 id="res-the-enviro">The Enviornment</h3></English>
                            <Albanian><h3 id="res-the-enviro">Mjedisi</h3></Albanian>
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
                            <English><h3 id="res-sunny-pot">Sunny Potential</h3></English>
                            <Albanian><h3 id="res-sunny-pot">Potencial me diell</h3></Albanian>
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
                    <div>
                        <English><h1 className="largerfontb" id="res-what-benefits">What are the benefits of solar energy for your business?</h1></English>
                        <Albanian><h1 className="largerfontb" id="res-what-benefits">Cilat janë përfitimet e energjisë diellore për biznesin tuaj?</h1></Albanian>
                    </div>
                    <div className="content-section">
                        <img className="imagefloat-right" id="img1" src={process.env.PUBLIC_URL + "reasons.png"} alt="Reasons" onClick={() => load(1)} width="450" height="770" />
                        <div>
                            <English><h3 id="res-reduced-costs">Reduced Energy Costs</h3></English>
                            <Albanian><h3 id="res-reduced-costs">Kosto të reduktuara të energjisë</h3></Albanian>
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
                            <English><h3 id="res-more-security">More Energy Security and Independence</h3></English>
                            <Albanian><h3 id="res-more-security">Më shumë siguri dhe pavarësi energjetike</h3></Albanian>
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
                            <English><h3 id="res-green-bus">Green Business</h3></English>
                            <Albanian><h3 id="res-green-bus">Biznesi i gjelbër</h3></Albanian>
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
                            <English><h3 id="res-solar-tax">Solar Tax Benefit</h3></English>
                            <Albanian><h3  id="res-solar-tax">Përfitimi nga taksat diellore</h3></Albanian>
                        </div>
                        <ul>
                            <li>
                                <English>The value-added tax on all machinery and other equipment imported to invest in solar energy has been discussed to be cancelled!</English>
                                <Albanian>Tatimi mbi vlerën e shtuar për të gjitha makineritë dhe pajisjet e tjera të importuara për të investuar në energjinë diellore është diskutuar të anulohet!</Albanian>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <English><h1 className="largerfontb" id="res-go-solar">Should your business go solar?</h1></English>
                        <Albanian><h1 className="largerfontb" id="res-go-solar">A duhet të shkojë biznesi juaj diellor?</h1></Albanian>
                    </div>
                    <div className="content-section">
                        <img className="imagefloat-left" id="img2" src={process.env.PUBLIC_URL + "qs.png"} alt="Questions To Ask" onClick={() => load(2)} width="500" height="500" />
                        <div>
                            <English><h3 id="res-why-go-solar">Why should I go solar?</h3></English>
                            <Albanian><h3 id="res-why-go-solar">Pse duhet të shkoj në diell?</h3></Albanian>
                        </div>
                        <div className="p-text">
                            <English>Choosing to go solar is completely up to you. There are many benefits to going solar, including electricity bill savings, more stable power, and building a more sustainable business. </English>
                            <Albanian>Zgjedhja për të përdorur diellore varet plotësisht nga ju. Ka shumë përfitime nga përdorimi i energjisë diellore, duke përfshirë kursimet e faturave të energjisë elektrike, energjinë më të qëndrueshme dhe ndërtimin e një biznesi më të qëndrueshëm.</Albanian>
                        </div>
                        <div>
                            <English><h3 id="res-bus-right">Is my business right for solar?</h3></English>
                            <Albanian><h3 id="res-bus-right">A është biznesi im i duhur për energjinë diellore?</h3></Albanian>
                        </div>
                        <div className="p-text">
                            <English>Before professional consultation, you can determine on your own whether a solar system makes sense for your system. You want to make sure the panels receive the most possible amount of sunlight as Albania already has a high amount of sunshine per year. You also want to determine if your electricity bills are high enough to justify going solar as the more money you spend now, the more you can save with solar.</English>
                            <Albanian>Përpara konsultimit profesional, ju mund të përcaktoni vetë nëse një sistem diellor ka kuptim për sistemin tuaj. Ju dëshironi të siguroheni që panelet të marrin sasinë më të madhe të mundshme të dritës së diellit pasi Shqipëria tashmë ka një sasi të lartë dielli në vit. Ju gjithashtu dëshironi të përcaktoni nëse faturat tuaja të energjisë elektrike janë mjaft të larta për të justifikuar përdorimin e energjisë diellore, pasi sa më shumë para të shpenzoni tani, aq më shumë mund të kurseni me energjinë diellore.</Albanian>
                        </div>
                        <div>
                            <English><h3 id="res-how-cost">How much does solar cost?</h3></English>
                            <Albanian><h3 id="res-how-cost">Sa kushton solari?</h3></Albanian>
                        </div>
                        <div className="p-text">
                            <English>Your energy usuage is directly affected by how much energy is consumed. Solar companies will typically generate a report of your estimations.</English>
                            <Albanian>Përdorimi juaj i energjisë ndikohet drejtpërdrejt nga sasia e energjisë së konsumuar. Kompanitë diellore zakonisht do të gjenerojnë një raport të vlerësimeve tuaja.</Albanian>
                        </div>
                        <br />
                        <div className="p-text">
                            <English>Solar companies will build out an estimate by using the last six months of your energy bills and utilizing sun tracking software to determine the necessary size of your system to generate 100% of your power needs. <b id="bfix">Make note that some companies oversize your system, making you pay more than what you need.</b></English>
                            <Albanian>Kompanitë diellore do të bëjnë një vlerësim duke përdorur gjashtë muajt e fundit të faturave tuaja të energjisë dhe duke përdorur softuerin e gjurmimit të diellit për të përcaktuar madhësinë e nevojshme të sistemit tuaj për të gjeneruar 100% të nevojave tuaja për energji. <b id="bfix">Vini re se disa kompani e tejkalojnë sistemin tuaj, duke ju bërë të paguani më shumë se sa keni nevojë.</b></Albanian>
                        </div>
                        <div>
                            <English><h3 id="res-how-finance">How should I finance my panels?</h3></English>
                            <Albanian><h3 id="res-how-finance">Si duhet t'i financoj panelet e mia?</h3></Albanian>
                        </div>
                        <div className="p-text">
                            <English>A business has a variety of options to explore as solar companies have packages of solar systems they sell, or a business may consider taking out a loan to finance their solar panels.</English>
                            <Albanian>Një biznes ka një shumëllojshmëri opsionesh për të eksploruar pasi kompanitë diellore kanë paketa të sistemeve diellore që shesin, ose një biznes mund të marrë në konsideratë marrjen e një kredie për të financuar panelet e tyre diellore.</Albanian>
                        </div>
                        <div>
                            <English><h3 id="res-how-money">How much money will I save with solar?</h3></English>
                            <Albanian><h3 id="res-how-money">Sa para do të kursej me solar?</h3></Albanian>
                        </div>
                        <div className="p-text">
                            <English>A solar company would be installing a custom rooftop solar system for your business, so the costs would ideally fit your needs.</English>
                            <Albanian>Një kompani diellore do të instalonte një sistem diellor me porosi në çati për biznesin tuaj, kështu që kostot do të përshtateshin në mënyrë ideale me nevojat tuaja.</Albanian>
                        </div>
                        <div>
                            <English><h3 id="res-how-long">How long will my solar panels last?</h3></English>
                            <Albanian><h3 id="res-how-long">Sa do të zgjasin panelet e mia diellore?</h3></Albanian>
                        </div>
                        <div className="p-text">
                            <English>Solar panels are continually progressing to be better in power production and efficiency. There are a variety of panels to choose from that may fit your power or aesthetic needs, depending on what manufacturer you’re looking at. Most manufacturers claim their panel’s efficiency to last at least 20-25 years due to slight degradation caused by dirt, pollen, and other external factors, so it is important to clean your panels.</English>
                            <Albanian>Panelet diellore po përparojnë vazhdimisht për të qenë më të mirë në prodhimin dhe efikasitetin e energjisë. Ka një shumëllojshmëri panelesh për të zgjedhur që mund të përshtaten me fuqinë ose nevojat tuaja estetike, në varësi të prodhuesit që po shikoni. Shumica e prodhuesve pretendojnë se efikasiteti i panelit të tyre zgjat të paktën 20-25 vjet për shkak të degradimit të lehtë të shkaktuar nga papastërtia, poleni dhe faktorë të tjerë të jashtëm, kështu që është e rëndësishme të pastroni panelet tuaja.</Albanian>
                        </div>
                        <div>
                            <English><h3 id="res-do-panels">Do solar panels have a warranty?</h3></English>
                            <Albanian><h3 id="res-do-panels">A kanë garanci panelet diellore?</h3></Albanian>
                        </div>
                        <div className="p-text">
                            <English>Warranty depends on the manufacturer with most lasting between 20-25 years. Some solar companies also offer a few years of maintenance as well after they are installed on your roof.</English>
                            <Albanian>Garancia varet nga prodhuesi me më shumë kohëzgjatje midis 20-25 vjet. Disa kompani diellore ofrojnë gjithashtu disa vite mirëmbajtje, si dhe pasi të jenë instaluar në çatinë tuaj.</Albanian>
                        </div>
                    </div>
                    <div>
                        <English><h1 className="largerfontb" id="res-how-bus">How can your business go solar?</h1></English>
                        <Albanian><h1 className="largerfontb" id="res-how-bus">Si mund të shkojë biznesi juaj diellor?</h1></Albanian>
                    </div>
                    <div className="content-section">
                        <img className="imagefloat-right" id="img3" src={process.env.PUBLIC_URL + "how.png"} alt="How to Install" onClick={() => load(3)} width="450" height="650" />
                        <div>
                            <English><h3 id="res-solar-inst">Solar Installers</h3></English>
                            <Albanian><h3 id="res-solar-inst">Instalues ​​diellor</h3></Albanian>
                        </div>
                        <div>
                            <div className="p-text">
                                <English>Talk to different solar installation companies to determine if and how a solar system is right for you. Many companies offer technical and financial consulting, along with the full projections of a PV system on your roof. At these vendors will you be able to apply for a permit and start installation. Some solar companies and many solar manufacturers in which these installation companies get their panels from also offer periodic maintenance.</English>
                                <Albanian>Bisedoni me kompani të ndryshme instalimi diellor për të përcaktuar nëse dhe si një sistem diellor është i duhuri për ju. Shumë kompani ofrojnë konsulencë teknike dhe financiare, së bashku me parashikimet e plota të një sistemi PV në çatinë tuaj. Tek këta shitës do të mund të aplikoni për një leje dhe të filloni instalimin. Disa kompani diellore dhe shumë prodhues të diellit nga të cilët këto kompani instalimi marrin panelet e tyre gjithashtu ofrojnë mirëmbajtje periodike.</Albanian>
                            </div>
                            <div id="center-solar">
                                <English><h3 id="res-solar-inst-tir">Map of solar installers near Tirana</h3></English>
                                <Albanian><h3 id="res-solar-inst-tir">Harta e instaluesve diellorë pranë Tiranës</h3></Albanian>
                                <iframe id="solar-map" title="Map of solar companies in Tirana" src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d47942.37394858916!2d19.7906942!3d41.32195!3m2!1i1024!2i768!4f13.1!2m1!1ssolar%20companies!5e0!3m2!1sen!2s!4v1667231658526!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div>
                            <English><h3 id="res-banks">Banks</h3></English>
                            <Albanian><h3 id="res-banks">Bankat</h3></Albanian>
                        </div>
                        <div className="p-text">
                            <English>Talk to different banks to determine if taking out a loan is right for your company. A couple banks, like Union Bank and ProCredit Bank, offer technical and financial assistance to help you determine if a solar system is right for you. These banks will often be partnered with solar installation companies they will get you in contact with.</English>
                            <Albanian>Bisedoni me banka të ndryshme për të përcaktuar nëse marrja e një kredie është e duhura për kompaninë tuaj. Disa banka, si Union Bank dhe ProCredit Bank, ofrojnë ndihmë teknike dhe financiare për t'ju ndihmuar të përcaktoni nëse një sistem diellor është i duhuri për ju. Këto banka shpesh do të jenë partnere me kompanitë e instalimit diellor me të cilat do t'ju kontaktojnë.</Albanian>
                        </div>
                        <div>
                            <div>
                                <English><h3 id="res-fin-op">Financing Options</h3></English>
                                <Albanian><h3 id="res-fin-op">Opsionet e financimit</h3></Albanian>
                            </div>
                        </div>
                        <div className="p-text">
                            <English>Ask your local commericial banks for their loan options and solar photovoltaics programs for businesses.</English>
                            <Albanian>Pyesni bankat tuaja tregtare lokale për opsionet e tyre të kredisë dhe programet e fotovoltaikëve diellorë për bizneset.</Albanian>
                        </div>
                        <div>
                            <English><h3 id="res-own-calc">Calculations</h3></English>
                            <Albanian><h3 id="res-own-calc">Llogaritjet</h3></Albanian>
                        </div>
                        <div className="p-text">
                            <English>To determine which of the offers you are receiving from solar installation companies is the most suitable one for your business, use the app to do your own calculations!</English>
                            <Albanian>Për të përcaktuar se cila nga ofertat që merrni nga kompanitë e instalimit diellor është më e përshtatshme për biznesin tuaj, përdorni aplikacionin për të bërë llogaritjet tuaja!</Albanian>
                        </div>
                    </div>
                </div>
                <div>
                    <English><h1 className="largerfontb" id="es-app-permit">Applying for a Building Permit</h1></English>
                    <Albanian><h1 className="largerfontb" id="es-app-permit">Aplikimi për leje ndërtimi</h1></Albanian>
                </div>
                <div className="content-section">
                    <div className="p-text">
                        <English>When starting a private project, you must hire an electrical engineer with a license in solar photovoltaics to develop it. The developed project that includes an explanation of the whole plan is then signed by your business.</English>
                        <Albanian>Kur filloni një projekt privat, duhet të punësoni një inxhinier elektrik me licencë në fotovoltaikë diellorë për ta zhvilluar atë. Projekti i zhvilluar që përfshin një shpjegim të të gjithë planit më pas nënshkruhet nga biznesi juaj.</Albanian>
                    </div>
                    <br />
                    <div className="p-text">
                        <English>You then hire a lawyer to start the permit application process. The firm goes to E-Permit at E-Albania and fills out the permit, Deklarate Paraprake. The permit will have all the information you and the lawyer need, including the municipality fee that is charged for your project being checked. This fee is dependent on municipality taxes.</English>
                        <Albanian>Më pas punësoni një avokat për të filluar procesin e aplikimit për leje. Firma shkon në E-Permit në E-Albania dhe plotëson lejen, Deklarate Paraprake. Leja do të ketë të gjitha informacionet që ju nevojiten juve dhe avokatit, duke përfshirë tarifën e bashkisë që ngarkohet për projektin tuaj që po kontrollohet. Kjo tarifë varet nga taksat komunale.</Albanian>
                    </div>
                    <br />
                    <div className="p-text">
                        <English>The next step is to apply for the permit and the application is sent to the municipality who will accept it or deny it.</English>
                        <Albanian>Hapi tjetër është aplikimi për lejen dhe aplikimi i dërgohet bashkisë e cila do ta pranojë ose refuzojë.</Albanian>
                    </div>
                </div>
                <div>
                    <English><h1 className="largerfontb" id="res-inst-proc">Solar Photovoltaic Installation Process</h1></English>
                    <Albanian><h1 className="largerfontb" id="res-inst-proc">Procesi i instalimit fotovoltaik diellor</h1></Albanian>
                </div>
                <div className="content-section">
                    <div className="Vert-flex" id="false-modal" onClick={() => load(4)}>
                        <img id="img4" className="half-top" src={process.env.PUBLIC_URL + "part1-install.jpg"} alt="Benefits-1" width="307.8" height="280.8"/>
                        <img id="img5" className="half-bottom" src={process.env.PUBLIC_URL + "part2-install.png"} alt="Benefits-2" width="307.8" height="280.8"/>
                    </div>
                    <ol>
                        <li className="p-text">
                            <English>Determine if a solar photovoltaic system is right for your business financially.</English>
                            <Albanian>Përcaktoni nëse një sistem diellor fotovoltaik është i duhuri për biznesin tuaj financiarisht.</Albanian>
                        </li>
                        <li className="p-text">
                            <English>Experts will determine the system size needed and plan the layout of the installation. *Make note that some companies oversize your system, making you pay more than what you need.</English>
                            <Albanian>Ekspertët do të përcaktojnë madhësinë e nevojshme të sistemit dhe do të planifikojnë paraqitjen e instalimit. *Vini re se disa kompani e tejkalojnë sistemin tuaj, duke ju bërë të paguani më shumë se sa keni nevojë.</Albanian>
                        </li>
                        <li className="p-text">
                            <English>Installers will show up and start setting up their equipment and scaffolding.</English>
                            <Albanian>Instaluesit do të shfaqen dhe do të fillojnë të konfigurojnë pajisjet dhe skelat e tyre.</Albanian>
                        </li>
                        <li className="p-text">
                            <English>Installers will install panel mounts to ensure stability of a system that will ensure maximum sunlight exposure.</English>
                            <Albanian>Instaluesit do të instalojnë montime panelesh për të siguruar stabilitetin e një sistemi që do të sigurojë ekspozimin maksimal ndaj dritës së diellit.</Albanian>
                        </li>
                        <li className="p-text">
                            <English>The solar panels are then installed onto the panel mounts securely.</English>
                            <Albanian>Panelet diellore më pas instalohen në montimet e paneleve në mënyrë të sigurt.</Albanian>
                        </li>
                        <li className="p-text">
                            <English>Electrical wiring is then carried out while the building's electricity supply is shut off.</English>
                            <Albanian>Më pas kryhet instalimi i instalimeve elektrike ndërkohë që furnizimi me energji elektrike i ndërtesës është i mbyllur.</Albanian>
                        </li>
                        <li className="p-text">
                            <English>The solar inverter is connected to the panels. A battery can also be installed and connected.</English>
                            <Albanian>Inverteri diellor është i lidhur me panelet. Mund të instalohet dhe lidhet gjithashtu një bateri.</Albanian>
                        </li>
                        <li className="p-text">
                            <English>To finally generate electricity, the inverter is connected to the building's consumer unit.</English>
                            <Albanian>Për të gjeneruar përfundimisht energji elektrike, inverteri lidhet me njësinë e konsumit të ndërtesës.</Albanian>
                        </li>
                        <li className="p-text">
                            <English>Switch the power on and test the new system. Then installation is complete!</English>
                            <Albanian>Ndizni fuqinë dhe provoni sistemin e ri. Pastaj instalimi ka përfunduar!</Albanian>
                        </li>
                        <li className="p-text">
                            <English>Panels require little maintenance if they remain clean and regularly inspected.</English>
                            <Albanian>Panelet kërkojnë pak mirëmbajtje nëse mbeten të pastra dhe inspektohen rregullisht.</Albanian>
                        </li>
                    </ol>
                </div>

                <div>
                        <English><h1 className="largerfontb" id="res-fin-sys">How to Finance Your System</h1></English>
                        <Albanian><h1 className="largerfontb" id="res-fin-sys">Si të financoni sistemin tuaj</h1></Albanian>
                    </div>
                    <div className="content-section">
                        <div>
                            <English><h3 id="res-cash-pur">Cash Purchase</h3></English>
                            <Albanian><h3 id="res-cash-pur">Blerje me para në dorë</h3></Albanian>
                        </div>
                        <ul>
                            <li>
                                <div className="p-text">
                                    <English>You can pay your whole system up front with cash. You will be able to see your savings a lot sooner!</English>
                                    <Albanian>Ju mund të paguani të gjithë sistemin tuaj përpara me para në dorë. Ju do të jeni në gjendje t'i shihni kursimet tuaja shumë më shpejt!</Albanian>
                                </div>
                            </li>
                            <div className="image-center-centering">
                                <img className="imagefloat-center" id="img6" src={process.env.PUBLIC_URL + "cashPurchase.png"} alt="Cash Purchase" onClick={() => load(6)} width="560" height="350"/>
                            </div>
                        </ul>

                        <div>
                            <English><h3 id="res-loans">Loans</h3></English>
                            <Albanian><h3 id="res-loans">Kredive</h3></Albanian>
                        </div>
                        <ul>
                            <li>
                                <div className="p-text">
                                    <English>You can opt to pay your panels with assistance from a loan!</English>
                                    <Albanian>Ju mund të zgjidhni të paguani panelet tuaja me ndihmën e një kredie!</Albanian>
                                </div>
                            </li>
                            <div className="image-center-centering Vert-flex">
                                <img className="imagefloat-center" id="img7" src={process.env.PUBLIC_URL + "loantable.png"} alt="Loan Table" onClick={() => load(7)} width="600" height="350"/>
                                <br />
                                <img className="imagefloat-center" id="img8" src={process.env.PUBLIC_URL + "loanpurchase.png"} alt="Loan Purchase" onClick={() => load(8)} width="600" height="350"/>
                            </div>
                        </ul>
                   
                    </div>
            </div>
        <PageFoot></PageFoot>
    </div>
    )
}

export default Resources;

/**
 * The HTML for the table of contents for the Resources page.
 * @returns {HTMLElement} An HTMLElement representing the table of contents, with id "toc".
 */
export function TableOfContents() {
    return (
        <div id="toc" className="Hor-flex">
            <ul id="toc-toplist" className="invisible">
                <h2>Contents</h2>
                <li><a href="#res-why-imp" onClick={e => jumpTo(e, "res-why-imp")}><English>Why is solar energy important?</English><Albanian>Pse është e rëndësishme energjia diellore?</Albanian></a>
                    <ul>
                        <li><a href="#res-the-enviro" onClick={e => jumpTo(e, "res-the-enviro")}><English>The Enviornment</English><Albanian>Mjedisi</Albanian></a></li>
                        <li><a href="#res-sunny-pot" onClick={e => jumpTo(e, "res-sunny-pot")}><English>Sunny Potential</English><Albanian>Potencial me diell</Albanian></a></li>
                    </ul>
                </li>
                <li><a href="#res-what-benefits" onClick={e => jumpTo(e, "res-what-benefits")}><English>What are the benefits of solar energy for your business?</English><Albanian>Cilat janë përfitimet e energjisë diellore për biznesin tuaj?</Albanian></a>
                    <ul>
                        <li><a href="#res-reduced-costs" onClick={e => jumpTo(e, "res-reduced-costs")}><English>Reduced Energy Costs</English><Albanian>Kosto të reduktuara të energjisë</Albanian></a></li>
                        <li><a href="#res-more-security" onClick={e => jumpTo(e, "res-more-security")}><English>More Energy Security and Independence</English><Albanian>Më shumë siguri dhe pavarësi energjetike</Albanian></a></li>
                        <li><a href="#res-green-bus" onClick={e => jumpTo(e, "res-green-bus")}><English>Green Business</English><Albanian>Biznesi i gjelbër</Albanian></a></li>
                        <li><a href="#res-solar-tax" onClick={e => jumpTo(e, "res-solar-tax")}><English>Solar Tax Benefit</English><Albanian>Përfitimi nga taksat diellore</Albanian></a></li>
                    </ul>
                </li>
                <li><a href="#res-go-solar" onClick={e => jumpTo(e, "res-go-solar")}><English>Should your business go solar?</English><Albanian>A duhet të shkojë biznesi juaj diellor?</Albanian></a>
                    <ul>
                        <li><a href="res-why-go-solar"><English>Why should I go solar?</English><Albanian>Pse duhet të shkoj në diell?</Albanian></a></li>
                        <li><a href="res-bus-right"><English>Is my business right for solar?</English><Albanian>A është biznesi im i duhur për energjinë diellore?</Albanian></a></li>
                        <li><a href="res-how-cost"><English>How much does solar cost?</English><Albanian>Sa kushton solari?</Albanian></a></li>
                        <li><a href="#res-how-finance" onClick={e => jumpTo(e, "res-how-finance")}><English>How should I finance my panels?</English><Albanian>Si duhet të financoj panelet e mia?</Albanian></a></li>
                        <li><a href="#res-how-money" onClick={e => jumpTo(e, "res-how-money")}><English>How much money will I save with solar?</English><Albanian>Sa para do të kursej me solar?</Albanian></a></li>
                        <li><a href="#res-how-long" onClick={e => jumpTo(e, "res-how-long")}><English>How long will my solar panels last?</English><Albanian>Sa do të zgjasin panelet e mia diellore?</Albanian></a></li>
                        <li><a href="#res-do-panels" onClick={e => jumpTo(e, "res-do-panels")}><English>Do solar panels have a warranty?</English><Albanian>A kanë garanci panelet diellore?</Albanian></a></li>
                    </ul>
                </li>
                <li><a href="#res-how-bus" onClick={e => jumpTo(e, "res-how-bus")}><English>How can your business go solar?</English><Albanian>Si mund të shkojë biznesi juaj diellor?</Albanian></a>
                    <ul>
                        <li><a href="#res-solar-inst" onClick={e => jumpTo(e, "res-solar-inst")}><English>Solar Installers</English><Albanian>Instalues ​​diellor</Albanian></a></li>
                        <li><a href="#res-solar-inst-tir" onClick={e => jumpTo(e, "res-solar-inst-tir")}><English>Solar Installers in Tirana</English><Albanian>Instalues ​​Solar ne Tirane</Albanian></a></li>
                        <li><a href="#res-banks" onClick={e => jumpTo(e, "res-banks")}><English>Banks</English><Albanian>Bankat</Albanian></a></li>
                        <li><a href="#res-fin-op" onClick={e => jumpTo(e, "res-fin-op")}><English>Financing Options</English><Albanian>Opsionet e financimit</Albanian></a></li>
                        <li><a href="#res-own-calc" onClick={e => jumpTo(e, "res-own-calc")}><English>Calculations</English><Albanian>Llogaritjet</Albanian></a></li>
                    </ul>
                </li>
                <li><a href="#res-app-permit" onClick={e => jumpTo(e, "res-app-permit")}><English>Applying for a Building Permit</English><Albanian>Aplikimi për Leje Ndërtimi</Albanian></a></li>
                <li><a href="#res-inst-proc" onClick={e => jumpTo(e, "res-inst-proc")}><English>Solar Photovoltaic Installation Process</English><Albanian>Procesi i instalimit fotovoltaik diellor</Albanian></a>
                <li><a href="#res-fin-sys" onClick={e => jumpTo(e, "res-fin-sys")}><English>How to Finance Your System</English><Albanian>Si të financoni sistemin tuaj</Albanian></a></li>
                    <ul>
                        <li><a href="#res-cash-pur" onClick={e => jumpTo(e, "res-cash-pur")}><English>Cash Purchase</English><Albanian>Blerje me para në dorë</Albanian></a></li>
                        <li><a href="#res-loans" onClick={e => jumpTo(e, "res-loans")}><English>Loans</English><Albanian>Kredive</Albanian></a></li>
                    </ul>
                </li>
            </ul>
            <button id="toc-access" type="button" onClick={e => {
                e.preventDefault();
                if(e.target.innerText === ">") {
                    document.getElementById("toc-toplist").classList.remove("invisible");
                    document.getElementById("toc").style.backgroundColor = "rgba(198, 219, 243, 0.9)";
                    e.target.innerText = "<";
                } else {
                    document.getElementById("toc-toplist").classList.add("invisible");
                    document.getElementById("toc").style.backgroundColor = "transparent";
                    e.target.innerText = ">";
                }
            }}>{">"}</button>
        </div>
    )
}

function jumpTo(e, id) {
    e.preventDefault();
    const index = document.getElementById(id);
    window.scrollTo({
        left: 0,
        top: index.offsetTop - 85,
        behavior: 'smooth'
    });
    document.getElementById("toc-access").click();
}

/**
 * To handle the back-to-top button appearing
 */
window.onscroll = () => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scroll-to-top").style.opacity = 1;
    } else {
        document.getElementById("scroll-to-top").style.opacity = 0;
    }
}

/**
 * Headers are in view when table of contents link is pressed
 * https://stackoverflow.com/a/17535094
 */
window.onhashchange = () => {
    window.scrollTo(window.scrollX, window.scrollY - 80);
}