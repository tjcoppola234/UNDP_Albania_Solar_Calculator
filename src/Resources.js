import './global.css';
import './Resources.css';
import { useState, useRef, useEffect } from 'react';
import { PageHead, PageFoot } from './App';
import English from './English';
import Albanian from './Albanian';
import { settings } from './Settings';

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

    const [showToTop, setShowToTop] = useState(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100);
    window.addEventListener("scroll", e => {
        setShowToTop(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100);
    });
    
    /**
     * Loads an image into the modal popup and displays the modal
     * @param {number} num An index representing which image to load
     */
    const load = num => {
        document.body.style.overflowY = "hidden";
        if (num === 4) {
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
                <button id="scroll-to-top" style={{ opacity: showToTop ? 1 : 0 }} type="button" onClick={e => {
                    e.preventDefault();
                    document.body.scrollIntoView({
                        behavior: "smooth"
                    });
                }}>▲</button>
                <div id="modal-img" ref={ref} className={openImage ? "" : " invisible"}>
                    <span className="close-modal" onClick={() => {
                        ref.current.scrollTo(0, 0);
                        setImageOpened(false);
                        document.body.style.overflowY = "scroll";
                    }}>&times;</span>
                    <div className="modal-content">
                        <div className="modal-caption">{caption}</div>
                        <img className="modal-img-src" src={openedSRC} alt={caption} />
                        <img className="modal-img-src" src={openedSRC2} alt={caption2} />
                    </div>
                </div>
                <div>
                    <FadeInSection id="section-1">
                        <div>
                            <English><h1 className="largerfontb" id="res-why-imp">Impacts of Solar Energy</h1></English>
                            <Albanian><h1 className="largerfontb" id="res-why-imp"></h1></Albanian>
                        </div>
                        <div className="content-section">
                            <img className="imagefloat-right" id="img0" src={process.env.PUBLIC_URL + "solarmap.png"} alt="Benefits" onClick={() => load(0)} width="360" height="450" />
                            //slide for each h3 section
                            <div>
                                <English><h3 id="res-the-enviro">Mitigate Climate Change</h3></English>
                                <Albanian><h3 id="res-the-enviro"></h3></Albanian>
                            </div>
                            <ul>
                                <li>
                                    <English>Albania’s power generation mainly comes from hydropower.</English>
                                    <Albanian></Albanian>
                                </li>
                                <li>
                                    <English>	Hydropower is becoming less reliable due to climate change.</English>
                                    <Albanian></Albanian>
                                </li>
                                <li>
                                    <English>This means Albania is importing a lot of energy from other countries.</English>
                                    <Albanian></Albanian>
                                </li>
                                <li>
                                    <English>Using solar energy can help reduce the reliance on fossil fuels such as coal, natural gas, and oil.</English>
                                    <Albanian></Albanian>
                                </li>
                                <li>
                                    <English>This helps reduce the emission of harmful greenhouse gasses to the atmosphere.</English>
                                    <Albanian></Albanian>
                                </li>
                                <li>
                                    <English>Therefore providing better air quality for us!</English>
                                    <Albanian></Albanian>
                                </li>
                            </ul>
                    
                            <div>
                                <English><h3 id="res-sunny-pot">Sunny Potential</h3></English>
                                <Albanian><h3 id="res-sunny-pot"></h3></Albanian>
                            </div>
                            <ul>
                                <li>
                                    <English>Albania has extensive potential for solar energy.</English>
                                    <Albanian></Albanian>
                                </li>
                                <li>
                                    <English>Between 2400-2500 hours of sunshine per year.</English>
                                    <Albanian></Albanian>
                                </li>
                                <li>
                                    <English>The graph to the right shows the irradiation of Albanian regions. The irradiation is the amount of power received from the sun.</English>
                                    <Albanian></Albanian>
                                </li>
                               
                            </ul>
                        </div>
                    </FadeInSection>
                    <FadeInSection id="section-2">
                        <div>
                            <English><h1 className="largerfontb" id="res-what-benefits">Solar Myths and Misconceptions</h1></English>
                            <Albanian><h1 className="largerfontb" id="res-what-benefits"></h1></Albanian>
                        </div>
                        //slide for each myth 

                        <img></img>
                            <div>
                                <English><h3 id="res-sunny-pot">Myth #1: Solar only works when the sun is shining and not in the rain.</h3></English>
                                <Albanian><h3 id="res-sunny-pot"></h3></Albanian>
                            </div>
                            <div className="p-text">
                                <English>Solar panels collect light, not heat, so solar technology can work in almost any condition, including rainy and snowy days, because some sunlight still reaches the earth.</English>
                                <Albanian></Albanian>
                            </div>
                            <div>
                                <English><h3 id="res-sunny-pot">Myth #2: Solar panels aren’t efficient enough.</h3></English>
                                <Albanian><h3 id="res-sunny-pot"></h3></Albanian>
                            </div>
                            <div className="p-text">
                                <English>Most solar panels that are cost-effective for business solar systems have efficiency rates of around 20%. This means that 20% of the sunlight reflected on the panel is turned into electricity. Some of the remaining sunlight is reflected off the panel or turned into heat</English>
                                <Albanian></Albanian>
                            </div>
                            <div>
                                <English><h3 id="res-sunny-pot">Myth #3: Solar is too expensive.</h3></English>
                                <Albanian><h3 id="res-sunny-pot"></h3></Albanian>
                            </div>
                            <div className="p-text">
                                <English>There is the option to pay for your whole solar photovoltaic system at the time of installation. However, you can explore several other solar financing options that allow you to pay over time. More information can be found on How To Finance Your System.</English>
                                <Albanian></Albanian>
                            </div>

                        <div className="content-section">
                            
                        </div>
                    </FadeInSection>
                    <FadeInSection id="section-3">
                        <div>
                            <English><h1 className="largerfontb" id="res-go-solar">The Benefits of Solar Energy for your Business</h1></English>
                            <Albanian><h1 className="largerfontb" id="res-go-solar"></h1></Albanian>
                        </div>
                        <div className="content-section">
                            <img className="imagefloat-right" id="img1" src={process.env.PUBLIC_URL + "reasons.png"} alt="Reasons" onClick={() => load(1)} width="450" height="770" />
                        <div>
                        //slide for each h3 section

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
                        </div>
                    </FadeInSection>
                    <FadeInSection id="section-4">
                        <div>
                            <English><h1 className="largerfontb" id="res-how-bus">Should your business go solar?</h1></English>
                            <Albanian><h1 className="largerfontb" id="res-how-bus"></h1></Albanian>
                        </div>
                        <div className="content-section">
                        <img className="imagefloat-left" id="img2" src={process.env.PUBLIC_URL + "qs.png"} alt="Questions To Ask" onClick={() => load(2)} width="500" height="500" />
                            <div>
                            //slide for each h3 section/question

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
                                <English>Solar companies will build out an estimate by using the last six months of your energy bills and utilizing sun tracking software to determine the necessary size of your system to generate 100% of your power needs. Be careful not to oversize your system that might increase your costs ineffectively.</English>
                                <Albanian>Kompanitë diellore do të bëjnë një vlerësim duke përdorur gjashtë muajt e fundit të faturave tuaja të energjisë dhe duke përdorur softuerin e gjurmimit të diellit për të përcaktuar madhësinë e nevojshme të sistemit tuaj për të gjeneruar 100% të nevojave tuaja për energji. Kini kujdes që të mos e teproni sistemin tuaj që mund të rrisë kostot tuaja në mënyrë joefektive.</Albanian>
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
                    </FadeInSection>
                    <FadeInSection id="section-5">
                        <div>
                            <English><h1 className="largerfontb" id="res-how-bus">How to get more information?</h1></English>
                            <Albanian><h1 className="largerfontb" id="res-how-bus">Si të merrni më shumë informacion?</h1></Albanian>
                        </div>
                        <div className="content-section">
                            <img className="imagefloat-right" id="img3" src={process.env.PUBLIC_URL + "how.png"} alt="How to Install" onClick={() => load(3)} width="450" height="650" />
                            <div>
                            //slide for each h3 section

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
                    </FadeInSection>
                    <FadeInSection id="section-7">

                        <div>
                            <English><h1 className="largerfontb" id="res-fin-sys">How to Finance Your System</h1></English>
                            <Albanian><h1 className="largerfontb" id="res-fin-sys">Si të financoni sistemin tuaj</h1></Albanian>
                        </div>
                        <div className="content-section">
                            <div>
                            //slide for each h3 section

                                <English><h3 id="res-cash-pur">Cash Purchase</h3></English>
                                <Albanian><h3 id="res-cash-pur">Blerje me para në dorë</h3></Albanian>
                            </div>
                            <ul>
                                <p>
                                    <div className="p-text">
                                        <English>You can choose to pay your whole system up front with cash which allows you to enjoy your savings immediately. By paying cash for solar, it simplifies the process as you do not need to worry about solar loan application, approval, or repayments. Paying with cash ends up being cheaper than taking out a loan, and your payback period becomes a lot quicker. However, going solar is a large investment that involves many substantial expenses that may not be convenient for you.</English>
                                        <Albanian>Ju mund të zgjidhni të paguani të gjithë sistemin tuaj paraprakisht me para, gjë që ju lejon të shijoni kursimet tuaja menjëherë. Duke paguar para në dorë për energjinë diellore, ai thjeshton procesin pasi nuk keni nevojë të shqetësoheni për aplikimin, miratimin ose shlyerjen e kredisë diellore. Pagesa me para në dorë përfundon të jetë më e lirë se marrja e një kredie dhe periudha juaj e shlyerjes bëhet shumë më e shpejtë. Megjithatë, përdorimi i energjisë diellore është një investim i madh që përfshin shumë shpenzime të konsiderueshme që mund të mos jenë të përshtatshme për ju.</Albanian>
                                    </div>
                                </p>
                                
                            </ul>
                            <div>
                                <English><h3 id="res-loans">Loans</h3></English>
                                <Albanian><h3 id="res-loans">Kredive</h3></Albanian>
                            </div>
                            <ul>
                                <p>
                                    <div className="p-text">
                                        <English>You can opt to pay your panels with assistance from a loan with no upfront payment! It is advised that the monthly repayments should not exceed your expected solar savings or else it’ll become a long-term burden and you won’t see any savings until the loan is completely paid off. Generally, you’d want to see your savings as soon as possible as the payback period does take longer than paying with cash. You will also need to consider the longer process of applying for the solar loan, getting approval, and receiving the funds.</English>
                                        <Albanian>Ju mund të zgjidhni të paguani panelet tuaja me ndihmën e një kredie pa pagesë paraprake! Këshillohet që pagesat mujore të mos tejkalojnë kursimet tuaja të pritshme diellore ose përndryshe do të bëhet një barrë afatgjatë dhe nuk do të shihni asnjë kursim derisa kredia të shlyhet plotësisht. Në përgjithësi, do të dëshironit t'i shihnit kursimet tuaja sa më shpejt që të jetë e mundur pasi periudha e kthimit zgjat më shumë sesa pagimi me para. Ju gjithashtu do të duhet të konsideroni procesin më të gjatë të aplikimit për kredinë diellore, marrjen e miratimit dhe marrjen e fondeve.</Albanian>
                                    </div>
                                </p>
                            </ul>
                            <div>
                                <English><h3 id="res-loans">Grants</h3></English>
                                <Albanian><h3 id="res-loans">Bursë</h3></Albanian>
                            </div>
                            <ul>
                                <p>
                                    <div className="p-text">
                                        <English>You can apply for the SME Competitiveness Programme, a grant by the EBRD and EU that provides both a 15% grant on any investment that may help their business meet EU directives and free technical assistance funded by the EU on how to best meet those directives and increase their profitability.</English>
                                        <Albanian>Ju mund të aplikoni për Programin e Konkurrueshmërisë së SME-ve, një grant nga EBRD dhe EU që ofron një grant prej 15% për çdo investim që mund të ndihmojë biznesin e tyre të përmbushë direktivat e EU-së dhe asistencë teknike falas të financuar nga BE-ja se si të përmbushen më së miri këto direktiva dhe rrisin rentabilitetin e tyre.</Albanian>
                                    </div>
                                </p>
                            </ul>
                        </div>
                    </FadeInSection>
                    
                   
                    <FadeInSection id="section-7">
                        <div>
                            <English><h1 className="largerfontb" id="res-fin-sys">Choosing the Right Solar Installer for your Project</h1></English>
                            <Albanian><h1 className="largerfontb" id="res-fin-sys">Zgjedhja e instaluesit të duhur diellor për projektin tuaj</h1></Albanian>
                        </div>
                        <div className="content-section">
                            <div>
                            //slide for each h3 section

                                <English><h3 id="res-cash-pur">Credibility and Expertise</h3></English>
                                <Albanian><h3 id="res-cash-pur">Besueshmëria dhe Ekspertiza</h3></Albanian>
                            </div>
                            <ul>
                                <p>
                                    <div className="p-text">
                                        <English>It’s advised that your solar installer has experience installing solar equipment and is knowledgeable about the whole process. Ask them a lot of questions about how long they’ve been in the business and how many systems they’ve installed. Are they able to explain to you clearly the panels they use and why, the solar incentives you are eligible for and how they work, and what coverage under warranty is there when a problem with a component or the whole system occurs.</English>
                                        <Albanian>Këshillohet që instaluesi juaj diellor të ketë përvojë në instalimin e pajisjeve diellore dhe të ketë njohuri për të gjithë procesin. Bëjuni atyre shumë pyetje për sa kohë kanë qenë në biznes dhe sa sisteme kanë instaluar. A janë ata në gjendje t'ju shpjegojnë qartë panelet që përdorin dhe pse, stimujt diellorë për të cilët kualifikoheni dhe si funksionojnë, dhe çfarë mbulimi nën garanci ka kur shfaqet një problem me një komponent ose të gjithë sistemin.</Albanian>
                                    </div>
                                </p>
                                
                            </ul>
                            <div>
                                <English><h3 id="res-loans">Transparency</h3></English>
                                <Albanian><h3 id="res-loans">Transparenca</h3></Albanian>
                            </div>
                            <ul>
                                <p>
                                    <div className="p-text">
                                        <English>It’s important for your installer to be direct and honest with you about the installation process and available to answer your questions. </English>
                                        <Albanian>Është e rëndësishme që instaluesi juaj të jetë i drejtpërdrejtë dhe i sinqertë me ju në lidhje me procesin e instalimit dhe i disponueshëm për t'iu përgjigjur pyetjeve tuaja.</Albanian>
                                    </div>
                                </p>
                            </ul>
                            <div>
                                <English><h3 id="res-loans">Reputation</h3></English>
                                <Albanian><h3 id="res-loans">Reputacioni</h3></Albanian>
                            </div>
                            <ul>
                                <p>
                                    <div className="p-text">
                                        <English>Read online reviews from installers’ past customers and it’s even better if the installers point you to their previous clients who would share their experiences with the installation process. It can also be helpful to talk to other businesses you know who have thought about going or gone solar to find out what they’ve learned from their experiences.</English>
                                        <Albanian>Lexoni komentet në internet nga klientët e kaluar të instaluesve dhe është edhe më mirë nëse instaluesit ju drejtojnë te klientët e tyre të mëparshëm të cilët do të ndajnë përvojat e tyre me procesin e instalimit. Mund të jetë gjithashtu e dobishme të flisni me biznese të tjera që njihni, të cilët kanë menduar të shkojnë ose të shkojnë në diell për të zbuluar se çfarë kanë mësuar nga përvojat e tyre.</Albanian>
                                    </div>
                                </p>
                            </ul>
                        </div>
                        </FadeInSection>
                        <FadeInSection id="section-7">
                        <div>
                        //slide for each h3 section

                            <English><h1 className="largerfontb" id="res-fin-sys">Different Types of Panels</h1></English>
                            <Albanian><h1 className="largerfontb" id="res-fin-sys">Lloje të ndryshme panelesh</h1></Albanian>
                        </div>
                        <div className="content-section">
                            <div>
                                <English><h3 id="res-cash-pur">Monocrystalline</h3></English>
                                <Albanian><h3 id="res-cash-pur">Monokristale</h3></Albanian>
                            </div>
                            <ul>
                                <p>
                                    <div className="p-text">
                                        <English>Although these panels are generally thought of as a premium solar product, the main advantages of monocrystalline panels are higher efficiencies and sleeker aesthetics. You will need less monocrystalline panels for your roof to produce more kWh of electricity than other types of panels, but they are more expensive per panel.</English>
                                        <Albanian>Megjithëse këto panele përgjithësisht mendohen si një produkt diellor premium, avantazhet kryesore të paneleve monokristaline janë efikasiteti më i lartë dhe estetika më e hijshme. Do t'ju duhen më pak panele monokristaline për çatinë tuaj për të prodhuar më shumë kWh energji elektrike sesa llojet e tjera të paneleve, por ato janë më të shtrenjta për panel.</Albanian>
                                    </div>
                                </p>
                                
                            </ul>
                            <div>
                                <English><h3 id="res-loans">Polycrystalline</h3></English>
                                <Albanian><h3 id="res-loans">Polikristaline</h3></Albanian>
                            </div>
                            <ul>
                                <p>
                                    <div className="p-text">
                                        <English>Polycrystalline solar panels generally have lower efficiencies than monocrystalline cell options, so you will need more to provide electricity for your home but their cost is lower. Due to the easier manufacturer process, these panels have a lower price point on average. In addition, polycrystalline solar panels tend to have a blue hue instead of the black hue of monocrystalline solar panels.</English>
                                        <Albanian>Panelet diellore polikristaline në përgjithësi kanë efikasitet më të ulët se opsionet e qelizave monokristaline, kështu që do t'ju duhet më shumë për të siguruar energji elektrike për shtëpinë tuaj, por kostoja e tyre është më e ulët. Për shkak të procesit më të lehtë të prodhuesit, këto panele kanë mesatarisht një çmim më të ulët. Përveç kësaj, panelet diellore polikristaline priren të kenë një nuancë blu në vend të ngjyrës së zezë të paneleve diellore monokristaline.</Albanian>
                                    </div>
                                </p>
                            </ul>
                        </div>
                        </FadeInSection>
                    <FadeInSection id="section-5">
                        <div>
                            //no slides
                            <English><h1 className="largerfontb" id="res-app-permit">Applying for a Building Permit</h1></English>
                            <Albanian><h1 className="largerfontb" id="res-app-permit">Aplikimi për leje ndërtimi</h1></Albanian>
                        </div>
                        <div className="content-section">
                            <div className="p-text">
                                <English>When starting a private project, you must hire an electrical engineer with a license that covers a solar photovoltaics specialty to develop it. The developed project that includes an explanation of the whole plan is then signed by your business.</English>
                                <Albanian>Kur filloni një projekt privat, duhet të punësoni një inxhinier elektrik me licencë që mbulon një specialitet të fotovoltaikëve diellorë për ta zhvilluar atë. Projekti i zhvilluar që përfshin një shpjegim të të gjithë planit më pas nënshkruhet nga biznesi juaj.</Albanian>
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
                     </FadeInSection>
                    
                    
                    <FadeInSection id="section-6">
                        <div>
                            <English><h1 className="largerfontb" id="res-inst-proc">The Day of Installment</h1></English>
                            <Albanian><h1 className="largerfontb" id="res-inst-proc">Dita e Këstit</h1></Albanian>
                        </div>
                        <div className="content-section">
                        //slide for each step

                            <div className="Vert-flex" id="false-modal" onClick={() => load(4)}>
                                <img id="img4" className="half-top" src={process.env.PUBLIC_URL + "part1-install.jpg"} alt="Benefits-1" width="307.8" height="280.8" />
                                <img id="img5" className="half-bottom" src={process.env.PUBLIC_URL + "part2-install.png"} alt="Benefits-2" width="307.8" height="280.8" />
                            </div>
                            <ol>
                                <li className="p-text">
                                    <English>Determine if a solar photovoltaic system is right for your business financially.</English>
                                    <Albanian>Përcaktoni nëse një sistem diellor fotovoltaik është i duhuri për biznesin tuaj financiarisht.</Albanian>
                                </li>
                                <li className="p-text">
                                    <English>Experts will determine the system size needed and plan the layout of the installation. Be careful not to oversize your system that might increase your costs ineffectively.  </English>
                                    <Albanian>Ekspertët do të përcaktojnë madhësinë e nevojshme të sistemit dhe do të planifikojnë paraqitjen e instalimit. Kini kujdes që të mos e teproni sistemin tuaj që mund të rrisë kostot tuaja në mënyrë joefektive.</Albanian>
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
                    </FadeInSection>
                    <FadeInSection id="section-5">
                        <div>
                            <English><h1 className="largerfontb" id="res-app-permit">Solar Fire Safety</h1></English>
                            <Albanian><h1 className="largerfontb" id="res-app-permit">Siguria diellore nga zjarri</h1></Albanian>
                        </div>
                        <div className="content-section">
                            //no slide
                            <div className="p-text">
                                <English>Solar rooftop fires can be caused by design flaws, component defects, and faulty installation. To avoid this from happening, your rooftop solar PV system should be installed in accordance with current safety codes and standards. It’s important for there to be clear labeling in the building that indicates which power lines are connected to the PV system and where the different components are, so that firefighters can get to them quickly and easily.</English>
                                <Albanian>Zjarret në çati diellore mund të shkaktohen nga të metat e projektimit, defektet e komponentëve dhe instalimi i gabuar. Për të shmangur që kjo të ndodhë, sistemi juaj diellor PV në çati duhet të instalohet në përputhje me kodet dhe standardet aktuale të sigurisë. Është e rëndësishme që në ndërtesë të ketë një etiketim të qartë që tregon se cilat linja elektrike janë të lidhura me sistemin FV dhe ku janë komponentët e ndryshëm, në mënyrë që zjarrfikësit të mund t'i arrijnë ato shpejt dhe me lehtësi.</Albanian>
                            </div>
                            
                        </div>
                     </FadeInSection>
                    
                    <FadeInSection id="section-8">

                        <div>
                            <English><h1 className="largerfontb" id="res-bus-success">Business Solar Success Story</h1></English>
                            <Albanian><h1 className="largerfontb" id="res-bus-success">Histori Suksesi i Biznesit Solar</h1></Albanian>
                        </div>
                        <div className="content-section">
                            //no slide
                            <div>
                                <English><h3 id="res-bus-title">A Goat Farm with Solar</h3></English>
                                <Albanian><h3 id="res-bus-title">Një fermë dhish me solare</h3></Albanian>
                            </div>
                            <div className="p-text">
                                <English>A goat farm outside of Tirana produces 150 liters of milk every day and makes dairy, cheese, and yogurt. They used to spend 2 million lek per month on electricity, and they frequently had brownouts that caused milk to spoil.</English>
                                <Albanian>Një fermë dhish jashtë Tiranës prodhon 150 litra qumësht çdo ditë dhe prodhon bulmet, djathë dhe kos. Ata shpenzonin 2 milionë lekë në muaj për rrymën dhe shpesh herë kishin djegie që shkaktonin prishjen e qumështit.</Albanian>
                            </div>
                            <br />
                            <div className="p-text">
                                <English>The company heard about solar panels and started talking to people they knew. The company then met with a solar panel installer and applied for a permit with OSHEE. With a loan for 200,000 euros, the farm was able to install solar panels.</English>
                                <Albanian>Kompania dëgjoi për panelet diellore dhe filloi të fliste me njerëzit që njihnin. Më pas kompania u takua me një instalues të paneleve diellore dhe aplikoi për leje pranë OSHEE. Me një kredi prej 200 mijë euro, ferma ka mundur të vendosë panele diellore.</Albanian>
                            </div>
                            <br />
                            <div className="p-text">
                                <English>After installing the solar panels, the goat farm reduced their electricty bill by 40% and has fewer brownouts. When electricity from the panels is interrupted, the farm uses power from the grid. Now the farm can sell fresher products and pay less for electricity!</English>
                                <Albanian>Pas instalimit të paneleve diellore, ferma e dhive uli faturën e tyre të energjisë elektrike me 40% dhe ka më pak djegie. Kur ndërpritet energjia elektrike nga panelet, ferma përdor energjinë nga rrjeti. Tani ferma mund të shesë produkte më të freskëta dhe të paguajë më pak për energjinë elektrike!</Albanian>
                            </div>
                            <br />
                            <div className="image-center-centering Vert-flex">
                                <img className="imagefloat-center" id="img9" src={process.env.PUBLIC_URL + "goatfarm.jpg"} alt="Goat Farm" onClick={() => load(9)} width="700" height="500" />
                            </div>
                        </div>
                    </FadeInSection>
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
                <li><h2>Contents</h2></li>
                <li className="outer-li"><a href="#res-why-imp" onClick={e => jumpTo(e, "res-why-imp")}><English>Why is solar energy important?</English><Albanian>Pse është e rëndësishme energjia diellore?</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-the-enviro" onClick={e => jumpTo(e, "res-the-enviro")}><English>The Enviornment</English><Albanian>Mjedisi</Albanian></a></li>
                        <li><a href="#res-sunny-pot" onClick={e => jumpTo(e, "res-sunny-pot")}><English>Sunny Potential</English><Albanian>Potencial me diell</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-what-benefits" onClick={e => jumpTo(e, "res-what-benefits")}><English>What are the benefits of solar energy for your business?</English><Albanian>Cilat janë përfitimet e energjisë diellore për biznesin tuaj?</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-reduced-costs" onClick={e => jumpTo(e, "res-reduced-costs")}><English>Reduced Energy Costs</English><Albanian>Kosto të reduktuara të energjisë</Albanian></a></li>
                        <li><a href="#res-more-security" onClick={e => jumpTo(e, "res-more-security")}><English>More Energy Security and Independence</English><Albanian>Më shumë siguri dhe pavarësi energjetike</Albanian></a></li>
                        <li><a href="#res-green-bus" onClick={e => jumpTo(e, "res-green-bus")}><English>Green Business</English><Albanian>Biznesi i gjelbër</Albanian></a></li>
                        <li><a href="#res-solar-tax" onClick={e => jumpTo(e, "res-solar-tax")}><English>Solar Tax Benefit</English><Albanian>Përfitimi nga taksat diellore</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-go-solar" onClick={e => jumpTo(e, "res-go-solar")}><English>Should your business go solar?</English><Albanian>A duhet të shkojë biznesi juaj diellor?</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-why-go-solar" onClick={e => jumpTo(e, "res-why-go-solar")}><English>Why should I go solar?</English><Albanian>Pse duhet të shkoj në diell?</Albanian></a></li>
                        <li><a href="#res-bus-right" onClick={e => jumpTo(e, "res-bus-right")}><English>Is my business right for solar?</English><Albanian>A është biznesi im i duhur për energjinë diellore?</Albanian></a></li>
                        <li><a href="#res-how-cost" onClick={e => jumpTo(e, "res-how-cost")}><English>How much does solar cost?</English><Albanian>Sa kushton solari?</Albanian></a></li>
                        <li><a href="#res-how-finance" onClick={e => jumpTo(e, "res-how-finance")}><English>How should I finance my panels?</English><Albanian>Si duhet të financoj panelet e mia?</Albanian></a></li>
                        <li><a href="#res-how-money" onClick={e => jumpTo(e, "res-how-money")}><English>How much money will I save with solar?</English><Albanian>Sa para do të kursej me solar?</Albanian></a></li>
                        <li><a href="#res-how-long" onClick={e => jumpTo(e, "res-how-long")}><English>How long will my solar panels last?</English><Albanian>Sa do të zgjasin panelet e mia diellore?</Albanian></a></li>
                        <li><a href="#res-do-panels" onClick={e => jumpTo(e, "res-do-panels")}><English>Do solar panels have a warranty?</English><Albanian>A kanë garanci panelet diellore?</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-how-bus" onClick={e => jumpTo(e, "res-how-bus")}><English>How can your business go solar?</English><Albanian>Si mund të shkojë biznesi juaj diellor?</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-solar-inst" onClick={e => jumpTo(e, "res-solar-inst")}><English>Solar Installers</English><Albanian>Instalues ​​diellor</Albanian></a></li>
                        <li><a href="#res-solar-inst-tir" onClick={e => jumpTo(e, "res-solar-inst-tir")}><English>Solar Installers in Tirana</English><Albanian>Instalues ​​Solar ne Tirane</Albanian></a></li>
                        <li><a href="#res-banks" onClick={e => jumpTo(e, "res-banks")}><English>Banks</English><Albanian>Bankat</Albanian></a></li>
                        <li><a href="#res-fin-op" onClick={e => jumpTo(e, "res-fin-op")}><English>Financing Options</English><Albanian>Opsionet e financimit</Albanian></a></li>
                        <li><a href="#res-own-calc" onClick={e => jumpTo(e, "res-own-calc")}><English>Calculations</English><Albanian>Llogaritjet</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-app-permit" onClick={e => jumpTo(e, "res-app-permit")}><English>Applying for a Building Permit</English><Albanian>Aplikimi për Leje Ndërtimi</Albanian></a></li>
                <li className="outer-li"><a href="#res-inst-proc" onClick={e => jumpTo(e, "res-inst-proc")}><English>Solar Photovoltaic Installation Process</English><Albanian>Procesi i instalimit fotovoltaik diellor</Albanian></a></li>
                <li className="outer-li"><a href="#res-fin-sys" onClick={e => jumpTo(e, "res-fin-sys")}><English>How to Finance Your System</English><Albanian>Si të financoni sistemin tuaj</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-cash-pur" onClick={e => jumpTo(e, "res-cash-pur")}><English>Cash Purchase</English><Albanian>Blerje me para në dorë</Albanian></a></li>
                        <li><a href="#res-loans" onClick={e => jumpTo(e, "res-loans")}><English>Loans</English><Albanian>Kredive</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-bus-success" onClick={e => jumpTo(e, "res-bus-success")}><English>Business Solar Success Story</English><Albanian>Histori Suksesi i Biznesit Solar</Albanian></a></li>
            </ul>
            <button id="toc-access" type="button" onClick={e => {
                e.preventDefault();
                if (e.currentTarget.style.width === "150px" || e.currentTarget.style.width === "") {
                    document.getElementById("toc-toplist").classList.remove("invisible");
                    document.getElementById("toc").style.backgroundColor = "";
                    e.currentTarget.style.width = "440px";
                } else {
                    document.getElementById("toc-toplist").classList.add("invisible");
                    document.getElementById("toc").style.backgroundColor = "transparent";
                    e.currentTarget.style.width = "150px";
                }
            }}>☰ Contents</button>
        </div>
    )
}

function jumpTo(e, id) {
    e.preventDefault();
    for (let sec of document.getElementsByClassName("fade-in-section")) {
        sec.classList.remove("slow");
        sec.classList.add("is-visible");
    }
    const index = document.getElementById(id);
    window.scrollTo({
        left: 0,
        top: index.offsetTop - 85,
        behavior: 'smooth'
    });
    document.getElementById("toc-access").click();
}

/**
 * Headers are in view when table of contents link is pressed
 * https://stackoverflow.com/a/17535094
 */
window.onhashchange = () => {
    window.scrollTo(window.scrollX, window.scrollY - 80);
}

/**
 * Causes each section to fade upon first scrolling to them
 * @param {*} props 
 * @returns An HTMLElement that fades in when first scrolling on screen
 */
function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const [loadSlow, shouldLoadSlow] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const cur = domRef.current;
        if (cur.classList.contains("is-visible"))
            setVisible(true);
        if (!cur.classList.contains("slow"))
            shouldLoadSlow(false);

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => isVisible || setVisible(entry.isIntersecting));
        });

        observer.observe(cur);

        const bBox = domRef.current.getBoundingClientRect();
        if (bBox.top > 0 && (bBox.bottom < window.innerHeight || document.documentElement.clientHeight)) {
            shouldLoadSlow(true);
        }

        return () => observer.unobserve(cur);
    }, [isVisible]);

    return (
        <div>
            <div ref={domRef} id={props.id}>
                <div className="rounding"></div>
                <div className={`fade-in-section${loadSlow ? ' slow' : ''}${isVisible ? ' is-visible' : ''}`}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}