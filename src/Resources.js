import './global.css';
import './Resources.css';
import { PageHead, PageFoot } from './App';
import English from './English';
import Albanian from './Albanian';


function Resources() {
    
    return (
        <div className="Resources">
            <PageHead></PageHead>
            
            <div className="content">
                <div>
                    <English><h2 className="h2resources">Resources</h2></English>
                    <Albanian><h2 className="h2resources">Burimet</h2></Albanian>
                </div>
            <details close> {/* place "open" next to "details" to make it open on load */}
                <summary>
                    <English><b id="largerfontb">Why is solar energy important?</b></English>
                    <Albanian><b id="largerfontb">Pse është e rëndësishme energjia diellore?</b></Albanian>
                </summary>
                <img id="imagefloat" src={process.env.PUBLIC_URL+"solarmap.png"} alt="Benefits" width = "400" height = "500" floatleft/>
                <div className="div5">
                <div>
                    <English><h3>The Enviornment</h3></English>
                    <Albanian><h3>Mjedisi</h3></Albanian>
                </div>
                <ul>
                    <li id ="li">Reduces the amount of carbon dioxide released into the air.</li>
                    <li id ="li">Provides better air quality.</li>
                    <li id ="li">Helps mitigate climate change.</li>
                </ul>
                <h3>Sunny Potential</h3>
                <ul>
                    <li id ="li">Albania has extensive potential for solar energy.</li>
                    <li id ="li">Between 2400-2500 hours of sunshine per year.</li>
                    <li id ="li">The irradiation is the amount of power received from the sun.</li>
                    <li id ="li">The graph to the right shows the irradiation of Albanian regions.</li>
                </ul>
            </div>    
        </details>
        <details close> {/* place "open" next to "details" to make it open on load */}
            <summary>
                <English><b id="largerfontb">What are the benefits of solar energy for your business?</b></English>
                <Albanian><b id="largerfontb">Cilat janë përfitimet e energjisë diellore për biznesin tuaj?</b></Albanian>
            </summary>
            <div className="div5">
            <img id="imagefloat2" src={process.env.PUBLIC_URL+"reasons.png"} alt="Reasons" width = "450" height = "770"/>
                <h3>Reduced Energy Costs</h3>
                <ul>
                    <li id ="li">Electricity bills are expensive and problematic.</li>
                    <li id ="li">Your electricity bill depends on how much energy is consumed and the rate your utility company charges.</li>
                    <li id ="li">You can look at switching to solar as replacing your electricity bill with monthly payments for your solar equipment.</li>
                    <li id ="li">Utility companies face high costs to maintain and expand the grid making your electricity bills more expensive.</li>
                    <li id ="li">You can avoid this increase of price by switching to solar!</li>    
                </ul>
                <h3>More Energy Security and Independence</h3>
                <ul>
                    <li id ="li">Becoming your own power providers</li>
                    <li id ="li">Costs of using solar are very predictable as many additionally pay service charges that go towards grid maintenance, charges for net metering, and other associated costs</li>
                    <li id ="li2">Just remember if you do not go 100% solar, then you will have some level of remaining electric bill that will vary through the year.</li>
                </ul>
                <h3>Green Business</h3>
                <ul>
                    <li id ="li2">You can go green by installing solar systems!</li>
                    <li id ="li2">Going green means finding the most efficient ways to sustain your companies for the better impact of the environment.</li>
                    <li id ="li2">It reduces company costs by keeping general operating costs low over time.</li>
                    <li id ="li2">It attracts more eco-conscious employees to hire, and a better image.</li>
                    <li id ="li2">It creates a more robust reputation of the company by leaving a lasting impression on your customers.</li>
                </ul>
                <h3>Solar Tax Benefit</h3>
                <ul>
                    <li id ="li2">The value-added tax on all machinery and other equipment imported to invest in solar energy has been discussed to be cancelled!</li>
                </ul>
            </div>
        </details>
        <details close> {/* place "open" next to "details" to make it open on load */}
            <summary>
                <English><b id="largerfontb">Should your business go solar?</b></English>
                <Albanian><b id="largerfontb">A duhet të shkojë biznesi juaj diellor?</b></Albanian>
            </summary>
            
            <div id="div5">
                <img id="imagefloat3" src={process.env.PUBLIC_URL+"qs.png"} alt="Questions To Ask" width = "500" height = "500"/>
                
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
        </details>
        <details close> {/* place "open" next to "details" to make it open on load */}
            <summary>
                <English><h1 id="largerfontb">How can your business go solar?</h1></English>
                <Albanian><h1 id="largerfontb">Si mund të shkojë biznesi juaj diellor?</h1></Albanian>
            </summary>
            
                <div className="div5">
                    <img id="imagefloat2" src={process.env.PUBLIC_URL+"how.png"} alt="How to Install" width = "450" height = "650"/>

                    <div>
                        <English><h3>Solar Installers</h3></English>
                        <Albanian><h3>Instalues ​​diellor</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>Talk to different solar installation companies to determine if and how a solar system is right for you. Many companies offer technical and financial consulting, along with the full projections of a PV system on your roof. At these vendors will you be able to apply for a permit and start installation. Some solar companies and many solar manufacturers in which these installation companies get their panels from also offer periodic maintenance.</English>
                        <Albanian>Bisedoni me kompani të ndryshme instalimi diellor për të përcaktuar nëse dhe si një sistem diellor është i duhuri për ju. Shumë kompani ofrojnë konsulencë teknike dhe financiare, së bashku me parashikimet e plota të një sistemi PV në çatinë tuaj. Tek këta shitës do të mund të aplikoni për një leje dhe të filloni instalimin. Disa kompani diellore dhe shumë prodhues të diellit nga të cilët këto kompani instalimi marrin panelet e tyre gjithashtu ofrojnë mirëmbajtje periodike.</Albanian>
                    </div>

                <details close> {/* place "open" next to "details" to make it open on load */}
                    <summary>
                        <English><b id="largerfont2b">Solar Installer Contacts</b></English>
                        <Albanian><b id="largerfont2b">Kontaktet e instaluesit diellor</b></Albanian>
                    </summary>
                    <div className="p-text"><strong><a href = "https://panelebesi.al/"> Panele Fotovoltaike Besi</a></strong></div>
                    <div className="p-text">+355 69 992 9800</div>
                    <div className="p-text">panelebesi@gmail.com</div>
                    <div className="p-text">Rruga Artan Lenja, Tirana 1023</div>
                    <br />
                    <div className="p-text"><strong><a href = "https://vegasolar.al/">Vega Electric</a></strong></div>
                    <div className="p-text">+355 69 202 1115</div>
                    <div className="p-text">info@vegasolar.al</div>
                    <div className="p-text">Artan Lenja Street 61 Lyra Palace, Magnet Complex Tirana AL, Tirana 1001</div>
                    <br />
                    <div className="p-text"><strong><a href ="https://enercom.al/index.html">Enercom</a></strong></div>
                    <div className="p-text">+355 68 900 1221</div>
                    <div className="p-text">info@enercom.al</div>
                    <div className="p-text">Rruga e Elbasanit, Sauk, 1044, Tiranë</div>
                    
                    <iframe id="solar-map" title="Map of solar companies in Tirana" src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d47942.37394858916!2d19.7906942!3d41.32195!3m2!1i1024!2i768!4f13.1!2m1!1ssolar%20companies!5e0!3m2!1sen!2s!4v1667231658526!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </details>


                    <div>
						<English><h3>Banks</h3></English>
						<Albanian><h3>Bankat</h3></Albanian>
					</div>
                    <div className="p-text">
						<English>Talk to different banks to determine if taking out a loan is right for your company. A couple banks, like Union Bank and ProCredit Bank, offer technical and financial assistance to help you determine if a solar system is right for you. These banks will often be partnered with solar installation companies they will get you in contact with.</English>
						<Albanian>Bisedoni me banka të ndryshme për të përcaktuar nëse marrja e një kredie është e duhura për kompaninë tuaj. Disa banka, si Union Bank dhe ProCredit Bank, ofrojnë ndihmë teknike dhe financiare për t'ju ndihmuar të përcaktoni nëse një sistem diellor është i duhuri për ju. Këto banka shpesh do të jenë partnere me kompanitë e instalimit diellor me të cilat do t'ju kontaktojnë.</Albanian>
					</div>
                    <details close> {/* place "open" next to "details" to make it open on load */}
                    <summary>
                        <b id="largerfont2b">Financing Options</b>
                    </summary>
                    <p><strong><a href="https://www.procreditbank.com.al/eng/business-clients/loans/loan-for-photovoltaics/">
                        <English>ProCredit Bank</English>
                        <Albanian>Banka ProCredit</Albanian>
                    </a></strong></p>
                    <p><strong><a href="https://www.unionbank.al/kredia-per-panele-fotovoltaike/">
                        <English>Union Bank</English>
                        <Albanian>Banka Union</Albanian>
                    </a></strong></p>
                    </details>

                    <div>
						<English><h3>Calculations</h3></English>
						<Albanian><h3>Llogaritjet</h3></Albanian>
					</div>
                    <div className="p-text">
						<English>To determine which of the offers you are receiving from solar installation companies is the most suitable one for your business, use the app to do your own calculations!</English>
						<Albanian>Për të përcaktuar se cila nga ofertat që merrni nga kompanitë e instalimit diellor është më e përshtatshme për biznesin tuaj, përdorni aplikacionin për të bërë llogaritjet tuaja!</Albanian>
					</div>
                </div>
            </details>
            </div>
            <PageFoot></PageFoot>
        </div>
    )
}
export default Resources;
