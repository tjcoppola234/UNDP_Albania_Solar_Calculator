import './global.css';
import './Resources.css';
import { PageHead, PageFoot } from './App';
import English from './English';
import Albanian from './Albanian';

/**
 * The HTML for the resources page.
 * @returns {HTMLElement} An HTMLElement representing the resources page, with class "Resources".
 */
function Resources() {
    return (
        <div className="Resources">
            <button id="scroll-to-top" type="button" onClick={e => {
                e.preventDefault();
                document.body.scrollIntoView({
                    behavior: "smooth"
                });
            }}>^</button>
            <PageHead></PageHead>
            <div className="content">
            <TableOfContents></TableOfContents>
                <div>
                    <English><h2 className="h2resources">Resources</h2></English>
                    <Albanian><h2 className="h2resources">Burimet</h2></Albanian>
                </div>
                <div>
                <div>
                    <English><h1 className="largerfontb" id="res-why-imp">Why is solar energy important?</h1></English>
                    <Albanian><h1 className="largerfontb" id="res-why-imp">Pse është e rëndësishme energjia diellore?</h1></Albanian>
                </div>
                <img id="imagefloat" src={process.env.PUBLIC_URL+"solarmap.png"} alt="Benefits" width = "360" height = "450" floatleft/>
                <div className="div5">
                <div>
                    <English><h3 id="res-the-enviro">The Enviornment</h3></English>
                    <Albanian><h3 id="res-the-enviro">Mjedisi</h3></Albanian>
                </div>
                <ul>
                    <li className="li-1">
                        <English>Reduces the amount of carbon dioxide released into the air.</English>
                        <Albanian>Redukton sasinë e dioksidit të karbonit të lëshuar në ajër.</Albanian>
                    </li>
                    <li className="li-1">
                        <English>Provides better air quality.</English>
                        <Albanian>Ofron cilësi më të mirë të ajrit.</Albanian>
                    </li>
                    <li className="li-1">
                        <English>Helps mitigate climate change.</English>
                        <Albanian>Ndihmon në zbutjen e ndryshimeve klimatike.</Albanian>
                    </li>
                </ul>
                <div>
                    <English><h3 id="res-sunny-pot">Sunny Potential</h3></English>
                    <Albanian><h3 d="res-sunny-pot">Potencial me diell</h3></Albanian>
                </div>
                <ul>
                    <li className="li-1">
                        <English>Albania has extensive potential for solar energy.</English>
                        <Albanian>Shqipëria ka një potencial të gjerë për energjinë diellore.</Albanian>
                    </li>
                    <li className="li-1">
                        <English>Between 2400-2500 hours of sunshine per year.</English>
                        <Albanian>Mes 2400-2500 orëve me diell në vit.</Albanian>
                    </li>
                    <li className="li-1">
                        <English>The irradiation is the amount of power received from the sun.</English>
                        <Albanian>Rrezatimi është sasia e fuqisë së marrë nga dielli.</Albanian>
                    </li>
                    <li className="li-1">
                        <English>The graph to the right shows the irradiation of Albanian regions.</English>
                        <Albanian>Grafiku në të djathtë tregon rrezatimin e rajoneve shqiptare.</Albanian>
                    </li>
                </ul>
            </div>    
        </div>
        <div>
            <div>
                <English><h1 className="largerfontb" id="res-what-benefits">What are the benefits of solar energy for your business?</h1></English>
                <Albanian><h1 className="largerfontb" id="res-what-benefits">Cilat janë përfitimet e energjisë diellore për biznesin tuaj?</h1></Albanian>
            </div>
            <div className="div5">
            <img id="imagefloat2" src={process.env.PUBLIC_URL+"reasons2.png"} alt="Reasons" width = "450" height = "810" />
                <div>
                    <English><h3 id="res-reduced-costs">Reduced Energy Costs</h3></English>
                    <Albanian><h3 id="res-reduced-costs">Kosto të reduktuara të energjisë</h3></Albanian>
                </div>
                <ul>
                    <li className="li-1">
                        <English>Electricity bills are expensive and problematic.</English>
                        <Albanian>Faturat e energjisë elektrike janë të shtrenjta dhe problematike.</Albanian>
                    </li>
                    <li className="li-1">
                        <English>Your electricity bill depends on how much energy is consumed and the rate your utility company charges.</English>
                        <Albanian>Fatura juaj e energjisë elektrike varet nga sasia e energjisë së konsumuar dhe tarifa që ngarkon kompania juaj e shërbimeve.</Albanian>
                    </li>
                    <li className="li-1">
                        <English>You can look at switching to solar as replacing your electricity bill with monthly payments for your solar equipment.</English>
                        <Albanian>Ju mund ta shikoni kalimin në solare si zëvendësim të faturave të energjisë elektrike me pagesa mujore për pajisjet tuaja diellore.</Albanian>
                    </li>
                    <li className="li-1">
                        <English>Utility companies face high costs to maintain and expand the grid making your electricity bills more expensive.</English>
                        <Albanian>Kompanitë e shërbimeve publike përballen me kosto të larta për të mirëmbajtur dhe zgjeruar rrjetin duke i bërë më të shtrenjta faturat tuaja të energjisë elektrike.</Albanian>
                    </li>
                    <li className="li-1">
                        <English>You can avoid this increase of price by switching to solar!</English>
                        <Albanian>Ju mund ta shmangni këtë rritje të çmimit duke kaluar në solare!</Albanian>
                    </li>    
                </ul>
                <div>
                    <English><h3 id="res-more-security">More Energy Security and Independence</h3></English>
                    <Albanian><h3 id="res-more-security">Më shumë siguri dhe pavarësi energjetike</h3></Albanian>
                </div>
                <ul>
                    <li className="li-1">
                        <English>Becoming your own power providers</English>
                        <Albanian>Duke u bërë ofruesit tuaj të energjisë</Albanian>
                    </li>
                    <li className="li-1">
                        <English>Costs of using solar are very predictable as many additionally pay service charges that go towards grid maintenance, charges for net metering, and other associated costs</English>
                        <Albanian>Kostot e përdorimit të energjisë diellore janë shumë të parashikueshme pasi shumë paguajnë gjithashtu tarifa shërbimi që shkojnë për mirëmbajtjen e rrjetit, tarifat për matjen neto dhe kosto të tjera të lidhura.</Albanian>
                    </li>
                    <li className="li-1">
                        <English>Just remember if you do not go 100% solar, then you will have some level of remaining electric bill that will vary through the year.</English>
                        <Albanian>Mos harroni nëse nuk përdorni 100% diellore, atëherë do të keni një nivel të mbetur të faturës elektrike që do të ndryshojë gjatë vitit.</Albanian>
                    </li>
                </ul>
                <div>
                    <English><h3 id="res-green-bus">Green Business</h3></English>
                    <Albanian><h3 id="res-green-bus">Biznesi i gjelbër</h3></Albanian>
                </div>
                <ul>
                    <li className="li-1">
                        <English>You can go green by installing solar systems!</English>
                        <Albanian>Mund të jesh i gjelbër duke instaluar sisteme diellore!</Albanian>
                    </li>
                    <li className="li-1">
                        <English>Going green means finding the most efficient ways to sustain your companies for the better impact of the environment.</English>
                        <Albanian>Të jesh i gjelbër do të thotë të gjesh mënyrat më efikase për të mbështetur kompanitë tuaja për ndikimin më të mirë të mjedisit.</Albanian>
                    </li>
                    <li className="li-1">
                        <English>It reduces company costs by keeping general operating costs low over time.</English>
                        <Albanian>Redukton kostot e kompanisë duke i mbajtur kostot e përgjithshme operative të ulëta me kalimin e kohës.</Albanian>
                    </li>
                    <li className="li-1">
                        <English>It attracts more eco-conscious employees to hire, and a better image.</English>
                        <Albanian>Ajo tërheq më shumë punonjës të ndërgjegjshëm për mjedisin për të punësuar dhe një imazh më të mirë.</Albanian>
                    </li>
                    <li className="li-1">
                        <English>It creates a more robust reputation of the company by leaving a lasting impression on your customers.</English>
                        <Albanian>Krijon një reputacion më të fortë të kompanisë duke lënë një përshtypje të qëndrueshme te klientët tuaj.</Albanian>
                    </li>
                </ul>
                <div>
                    <English><h3 id="res-solar-tax">Solar Tax Benefit</h3></English>
                    <Albanian><h3 id="res-solar-tax">Përfitimi nga taksat diellore</h3></Albanian>
                </div>
                <ul>
                    <li className="li-1">
                        <English>The value-added tax on all machinery and other equipment imported to invest in solar energy has been discussed to be cancelled!</English>
                        <Albanian>Tatimi mbi vlerën e shtuar për të gjitha makineritë dhe pajisjet e tjera të importuara për të investuar në energjinë diellore është diskutuar të anulohet!</Albanian>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div>
                <English><h1 className="largerfontb" id="res-go-solar">Should your business go solar?</h1></English>
                <Albanian><h1 className="largerfontb" id="res-go-solar">A duhet të shkojë biznesi juaj diellor?</h1></Albanian>
            </div>
            
            <div className="div5">
                <img id="imagefloat3" src={process.env.PUBLIC_URL+"qs.png"} alt="Questions To Ask" width = "500" height = "500"/>
                
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
                    <Albanian><h3 id="res-how-finance">Si duhet të financoj panelet e mia?</h3></Albanian>
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
        </div>
        <div>
            <div>
                <English><h1 className="largerfontb" id="res-how-bus">How can your business go solar?</h1></English>
                <Albanian><h1 className="largerfontb" id="res-how-bus">Si mund të shkojë biznesi juaj diellor?</h1></Albanian>
            </div>
            
                <div className="div5">
                    <img id="imagefloat2" src={process.env.PUBLIC_URL+"how.png"} alt="How to Install" width = "450" height = "650"/>
                    <div>
                        <English><h3 id="res-solar-inst">Solar Installers</h3></English>
                        <Albanian><h3 id="res-solar-inst">Instalues ​​diellor</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>Talk to different solar installation companies to determine if and how a solar system is right for you. Many companies offer technical and financial consulting, along with the full projections of a PV system on your roof. At these vendors will you be able to apply for a permit and start installation. Some solar companies and many solar manufacturers in which these installation companies get their panels from also offer periodic maintenance.</English>
                        <Albanian>Bisedoni me kompani të ndryshme instalimi diellor për të përcaktuar nëse dhe si një sistem diellor është i duhuri për ju. Shumë kompani ofrojnë konsulencë teknike dhe financiare, së bashku me parashikimet e plota të një sistemi PV në çatinë tuaj. Tek këta shitës do të mund të aplikoni për një leje dhe të filloni instalimin. Disa kompani diellore dhe shumë prodhues të diellit nga të cilët këto kompani instalimi marrin panelet e tyre gjithashtu ofrojnë mirëmbajtje periodike.</Albanian>
                    </div>

                <div>
                    <div>
                        <English><h3 id="res-solar-inst-tir">Solar Installers in Tirana</h3></English>
                        <Albanian><h3 id="res-solar-inst-tir">Instalues ​​Solar ne Tirane</h3></Albanian>
                    </div>
                    
                    <iframe id="solar-map" title="Map of solar companies in Tirana" src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d47942.37394858916!2d19.7906942!3d41.32195!3m2!1i1024!2i768!4f13.1!2m1!1ssolar%20companies!5e0!3m2!1sen!2s!4v1667231658526!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                        <div>
                            <English><h3 id="res-fin-op">Financing Options</h3></English>
                            <Albanian><h3 id="res-fin-op">Opsionet e financimit</h3></Albanian>
                        </div>
                    </div>
                    <div className="p-text">
                        <English>Ask your local commericial banks for their loan options and solar photovoltaics programs for businesses.</English>
                    </div>
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
            <div>
                <English><h1 className="largerfontb" id="res-app-permit">Applying for a Building Permit</h1></English>
                <Albanian><h1 className="largerfontb" id="res-app-permit">Aplikimi për Leje Ndërtimi</h1></Albanian>
                <div className="div5">
                {/* <English><h3></h3></English>
                <Albanian></Albanian> */}

                <div className="p-text">
                <English><p>When starting a private project, you must hire an electrical engineer with a license in solar photovoltaics to develop it. The developed project that includes an explanation of the whole plan is then signed by your business.</p></English>
                <Albanian></Albanian>
                </div>
                <div className="p-text">
                <English><p>You then hire a lawyer to start the permit application process. The firm goes to E-Permit at E-Albania and fills out the permit, Deklarate Paraprake. The permit will have all the information you and the lawyer need, including the municipality fee that is charged for your project being checked. This fee is dependent on municipality taxes.</p></English>
                <Albanian></Albanian>
                </div>
                <div className="p-text">
                <English><p>The next step is to apply for the permit and the application is sent to the municipality who will accept it or deny it.</p></English>
                <Albanian></Albanian>
                </div>
                </div>


            </div>
            </div>

            <div>
                <English><h1 className="largerfontb" id="res-inst-proc">Solar Photovoltaic Installation Process</h1></English>
                <Albanian><h1 className="largerfontb" id="res-inst-proc">Procesi i instalimit fotovoltaik diellor</h1></Albanian>
            </div>
            <div class="div5">
            <div class="row">
            <div class="column">
            <img id="imagefloat4" src={process.env.PUBLIC_URL+"part1-install.jpg"} alt="Benefits-1" width = "570" height = "520" floatleft/>
            </div>


            <div class="column">
            <img id="imagefloat4" src={process.env.PUBLIC_URL+"part2-install.png"} alt="Benefits-2" width = "570" height = "520" floatleft/>
            </div>
            </div>
            <English><p className="p-text">1. Determine if a solar photovoltaic system is right for your business financially.</p></English>
            <English><p className="p-text">2. Experts will determine the system size needed and plan the layout of the installation. *Make note that some companies oversize your system, making you pay more than what you need.</p></English>
            <English><p className="p-text">3. Installers will show up and start setting up their equipment and scaffolding.</p></English>
            <English><p className="p-text">4. Installers will install panel mounts to ensure stability of a system that will ensure maximum sunlight exposure.</p></English>
            <English><p className="p-text">5. The solar panels are then installed onto the panel mounts securely.</p></English>
            <English><p className="p-text">6. Electrical wiring is then carried out while the building's electricity supply is shut off. </p></English>
            <English><p className="p-text">7. The solar inverter is connected to the panels. A battery can also be installed and connected.</p></English>
            <English><p className="p-text">8. To finally generate electricity, the inverter is connected to the building's consumer unit.</p></English>
            <English><p className="p-text">9. Switch the power on and test the new system. Then installation is complete!</p></English>
            <English><p className="p-text">10. Panels require little maintenance if they remain clean and regularly inspected.</p></English>


            </div>
            </div>
            <PageFoot></PageFoot>
        </div>

    )
}
export default Resources;

export function TableOfContents() {
    return (
        <div id="toc" className="Hor-flex">
            <ul id="toc-toplist">
            <h2>Contents</h2>
                <li><a href="#res-why-imp"><English>Why is solar energy important?</English><Albanian>Pse është e rëndësishme energjia diellore?</Albanian></a>
                    <ul>
                        <li><a href="#res-the-enviro"><English>The Enviornment</English><Albanian>Mjedisi</Albanian></a></li>
                        <li><a href="#res-sunny-pot"><English>Sunny Potential</English><Albanian>Potencial me diell</Albanian></a></li>
                    </ul>
                </li>
                <li><a href="#res-what-benefits"><English>What are the benefits of solar energy for your business?</English><Albanian>Cilat janë përfitimet e energjisë diellore për biznesin tuaj?</Albanian></a>
                    <ul>
                        <li><a href="#res-reduced-costs"><English>Reduced Energy Costs</English><Albanian>Kosto të reduktuara të energjisë</Albanian></a></li>
                        <li><a href="#res-more-security"><English>More Energy Security and Independence</English><Albanian>Më shumë siguri dhe pavarësi energjetike</Albanian></a></li>
                        <li><a href="#res-green-bus"><English>Green Business</English><Albanian>Biznesi i gjelbër</Albanian></a></li>
                        <li><a href="#res-solar-tax"><English>Solar Tax Benefit</English><Albanian>Përfitimi nga taksat diellore</Albanian></a></li>
                    </ul>
                </li>
                <li><a href="#res-go-solar"><English>Should your business go solar?</English><Albanian>A duhet të shkojë biznesi juaj diellor?</Albanian></a>
                    <ul>
                        <li><a href="#res-why-go-solar"><English>Why should I go solar?</English><Albanian>Pse duhet të shkoj në diell?</Albanian></a></li>
                        <li><a href="#res-bus-right"><English>Is my business right for solar?</English><Albanian>A është biznesi im i duhur për energjinë diellore?</Albanian></a></li>
                        <li><a href="#res-how-cost"><English>How much does solar cost?</English><Albanian>Sa kushton solari?</Albanian></a></li>
                        <li><a href="#res-how-finance"><English>How should I finance my panels?</English><Albanian>Si duhet të financoj panelet e mia?</Albanian></a></li>
                        <li><a href="#res-how-money"><English>How much money will I save with solar?</English><Albanian>Sa para do të kursej me solar?</Albanian></a></li>
                        <li><a href="#res-how-long"><English>How long will my solar panels last?</English><Albanian>Sa do të zgjasin panelet e mia diellore?</Albanian></a></li>
                        <li><a href="#res-do-panels"><English>Do solar panels have a warranty?</English><Albanian>A kanë garanci panelet diellore?</Albanian></a></li>
                    </ul>
                </li>
                <li><a href="#res-how-bus"><English>How can your business go solar?</English><Albanian>Si mund të shkojë biznesi juaj diellor?</Albanian></a>
                    <ul>
                        <li><a href="#res-solar-inst"><English>Solar Installers</English><Albanian>Instalues ​​diellor</Albanian></a></li>
                        <li><a href="#res-solar-inst-tir"><English>Solar Installers in Tirana</English><Albanian>Instalues ​​Solar ne Tirane</Albanian></a></li>
                        <li><a href="#res-banks"><English>Banks</English><Albanian>Bankat</Albanian></a></li>
                        <li><a href="#res-fin-op"><English>Financing Options</English><Albanian>Opsionet e financimit</Albanian></a></li>
                        <li><a href="#res-own-calc"><English>Calculations</English><Albanian>Llogaritjet</Albanian></a></li>
                    </ul>
                </li>
                <li><a href="#res-app-permit"><English>Applying for a Building Permit</English><Albanian>Aplikimi për Leje Ndërtimi</Albanian></a></li>
                <li><a href="#res-inst-proc"><English>Solar Photovoltaic Installation Process</English><Albanian>Procesi i instalimit fotovoltaik diellor</Albanian></a></li>
            </ul>
            <button id="toc-access" type="button" onClick={e => {
                e.preventDefault();
                debugger;
                if(e.target.innerText === ">") {
                    document.getElementById("toc-toplist").style.display = "block";
                    e.target.innerText = "<";
                } else {
                    document.getElementById("toc-toplist").style.display = "none";
                    e.target.innerText = ">";
                }
            }}>{">"}</button>
        </div>
    )
}

/**
 * To handle the back-to-top button appearing
 */
window.onscroll = () => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scroll-to-top").style.visibility = "visible";
    } else {
        document.getElementById("scroll-to-top").style.visibility = "hidden";
    }
}

/**
 * Headers are in view when table of contents link is pressed
 * https://stackoverflow.com/a/17535094
 */
window.onhashchange = () => {
    window.scrollTo(window.scrollX, window.scrollY - 80);
}