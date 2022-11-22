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
                        <English><b id="largerfontb">What is solar and why is it good?</b></English>
                        <Albanian><b id="largerfontb">Çfarë është dielli dhe pse është i mirë?</b></Albanian>
                    </summary>
                    <img className="imagefloat" src={process.env.PUBLIC_URL+"benefitsofsolar.jpg"} alt="Benefits" width = "400" height = "400" floatleft="true"/>
                    <img className="imagefloat2" src={process.env.PUBLIC_URL+"solarmap.png"} alt="Benefits" width = "300" height = "400" floatleft="true"/>
                    <div>
                        <English><h3>The Enviornment</h3></English>
                        <Albanian><h3>Mjedisi</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>Solar energy is great for the enviornment. Some great benefits it provides are providing better air quality from the reduction of carbon dioxide released into the air, which helps reduce the impacts of climate change.</English>
                        <Albanian>Energjia diellore është e mrekullueshme për mjedisin. Disa përfitime të mëdha që ofron janë sigurimi i cilësisë më të mirë të ajrit nga reduktimi i dioksidit të karbonit të lëshuar në ajër, i cili ndihmon në reduktimin e ndikimeve të ndryshimeve klimatike.</Albanian>
                    </div>
                    <div>
                        <English><h3>Sunny Potential</h3></English>
                        <Albanian><h3>Potencial me diell</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>Albania has a great potential for solar energy as it has between 2400-2500 hours of sunshine per year. The irradiation and PV electricity potential in Albania is promising, so expanding grid-based PV systems throughout Albania would increase electricity generation. The irradiation, or the amount of power received from the sun, and PV electricity potential in Albania is promising, so expanding grid-based PV systems throughout Albania would increase electricity generation. Depending on the municipality your business is located in, the irradiation can be high or low, so you can check out the graph to the right, which shows the irradiation more generally.</English>
                        <Albanian>Shqipëria ka një potencial të madh për energjinë diellore pasi ka 2400-2500 orë diell në vit. Potenciali i rrezatimit dhe energjisë elektrike FV në Shqipëri është premtues, kështu që zgjerimi i sistemeve FV të bazuara në rrjet në të gjithë Shqipërinë do të rriste prodhimin e energjisë elektrike. Rrezatimi ose sasia e fuqisë së marrë nga dielli dhe potenciali i energjisë elektrike PV në Shqipëri është premtues, kështu që zgjerimi i sistemeve PV të bazuara në rrjet në të gjithë Shqipërinë do të rriste prodhimin e energjisë elektrike. Në varësi të komunës ku ndodhet biznesi juaj, rrezatimi mund të jetë i lartë ose i ulët, kështu që mund të shikoni grafikun në të djathtë, i cili tregon rrezatimin në përgjithësi.</Albanian>
                    </div>
                </details>
                <details close> {/* place "open" next to "details" to make it open on load */}
                    <summary>
                        <English><b id="largerfontb">Why is solar energy beneficial for businesses?</b></English>
                        <Albanian><b id="largerfontb">Pse energjia diellore është e dobishme për bizneset?</b></Albanian>
                    </summary>
                    <img className="imagefloat" src={process.env.PUBLIC_URL+"reasons.png"} alt="Reasons" width = "380" height = "700"/>
                    <div>
                        <English><h3>Reduced Energy Costs</h3></English>
                        <Albanian><h3>Kosto të reduktuara të energjisë</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>Electricity bills can be problematic because they are expensive. Your electricity bill depends on how much energy is consumed and the rate your utility company charges. By using solar energy, your bill can be lowered by X%. You can look at switching to solar as replacing your electricity bill with monthly payments for your solar equipment. Electricity bills continue to get more expensive because utility companies face high costs to maintain and expand the grid. Solar power systems generally do not require much maintenance and most reliable solar panel manufacturers offer 20–25-year warranties.</English>
                        <Albanian>Faturat e energjisë elektrike mund të jenë problematike sepse janë të shtrenjta. Fatura juaj e energjisë elektrike varet nga sasia e energjisë së konsumuar dhe tarifa që ngarkon kompania juaj e shërbimeve. Duke përdorur energjinë diellore, fatura juaj mund të ulet me X%. Ju mund ta shikoni kalimin në solare si zëvendësim të faturave të energjisë elektrike me pagesa mujore për pajisjet tuaja diellore. Faturat e energjisë elektrike vazhdojnë të shtrenjtohen për shkak se kompanitë e shërbimeve publike përballen me kosto të larta për të mirëmbajtur dhe zgjeruar rrjetin. Sistemet e energjisë diellore në përgjithësi nuk kërkojnë shumë mirëmbajtje dhe prodhuesit më të besueshëm të paneleve diellore ofrojnë garanci 20-25-vjeçare.</Albanian>
                    </div>
                    <div>
                        <English><h3>Solar Tax Benefit</h3></English>
                        <Albanian><h3>Përfitimi nga taksat diellore</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>It has been discussed by the Ministry of Infrastructure and Energy of Albania in October 2022 to cancel the value-added tax on all machinery and other equipment imported to invest in solar energy.</English>
                        <Albanian>Është diskutuar nga Ministria e Infrastrukturës dhe Energjisë së Shqipërisë në tetor 2022 për të anuluar taksën e vlerës së shtuar për të gjitha makineritë dhe pajisjet e tjera të importuara për të investuar në energjinë diellore.</Albanian>
                    </div>
                    <div>
                        <English><h3>More Energy Security and Independence</h3></English>
                        <Albanian><h3>Më shumë siguri dhe pavarësi energjetike</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>A business can achieve energy independence by adopting solar energy as they are becoming their own power providers. It provides electricity security to a business as electricity bills are seen as unpredictable. Costs of using solar are very predictable as many additionally pay service charges that go towards grid maintenance, charges for net metering, and other associated costs. If a business does not use 100% solar, then they will have some level of remaining electric bill that will vary through the year.</English>
                        <Albanian>Një biznes mund të arrijë pavarësinë energjetike duke adoptuar energjinë diellore pasi ata po bëhen ofruesit e tyre të energjisë. Ai siguron sigurinë e energjisë elektrike për një biznes pasi faturat e energjisë elektrike shihen si të paparashikueshme. Kostot e përdorimit të energjisë diellore janë shumë të parashikueshme pasi shumë paguajnë gjithashtu tarifa shërbimi që shkojnë për mirëmbajtjen e rrjetit, tarifat për matjen neto dhe kosto të tjera të lidhura. Nëse një biznes nuk përdor 100% solare, atëherë ai do të ketë një nivel të mbetur të faturës elektrike që do të ndryshojë gjatë vitit.</Albanian>
                    </div>
                    <div>
                        <English><h3>Green Business</h3></English>
                        <Albanian><h3>Biznesi i gjelbër</h3></Albanian>
                    </div>
                    <div className="p-text">
                        <English>Businesses can start going green by installing solar systems. This concept of going green is for business owners who invest their resources in finding the most efficient ways to sustain their companies for the better impact of the environment. This can attract a reduction in company costs by keeping general operating costs low over time, more eco-conscious employees to hire, and a better image and reputation of the company by leaving a lasting impression on your customers, potential customers, and vendors.</English>
                        <Albanian>Bizneset mund të fillojnë të gjelbërojnë duke instaluar sisteme diellore. Ky koncept i gjelbërimit është për pronarët e bizneseve që investojnë burimet e tyre në gjetjen e mënyrave më efikase për të mbështetur kompanitë e tyre për ndikimin më të mirë të mjedisit. Kjo mund të tërheqë një reduktim të kostove të kompanisë duke mbajtur kostot e përgjithshme operative të ulëta me kalimin e kohës, punonjësit më të ndërgjegjshëm për mjedisin për të punësuar dhe një imazh dhe reputacion më të mirë të kompanisë duke lënë një përshtypje të qëndrueshme te klientët tuaj, klientët potencialë dhe shitësit.</Albanian>
                    </div>
                </details>
                <details close> {/* place "open" next to "details" to make it open on load */}
                    <summary>
                        <b id="largerfontb">Should your business go solar?</b>
                    </summary>
                    <img className="imagefloat" src={process.env.PUBLIC_URL+"qs.png"} alt="Questions To Ask" width = "500" height = "500"/>
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
                </details>

                <details close> {/* place "open" next to "details" to make it open on load */}
                    <summary>
                        <b id="largerfontb">How can your business go solar?</b>
                    </summary>
                    
                    <img className="imagefloat" src={process.env.PUBLIC_URL+"how.png"} alt="How to Install" width = "400" height = "600"/>

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
                        <b id="largerfont2b">Solar Installer Contacts</b>
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
                    <br />
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
                    <div className="p-text">
                        <strong><a href="https://www.procreditbank.com.al/eng/business-clients/loans/loan-for-photovoltaics/">
                            <English>ProCredit Bank</English>
                            <Albanian>Banka ProCredit</Albanian>
                        </a></strong>
                    </div>
                    <div className="p-text">
                        <English><strong><a href="https://www.unionbank.al/kredia-per-panele-fotovoltaike/">Union Bank</a></strong></English>
                        <Albanian><strong><a href="https://www.unionbank.al/kredia-per-panele-fotovoltaike/">Banka Union</a></strong></Albanian>
                    </div>
                    </details>
                    <div>
						<English><h3>Calculations</h3></English>
						<Albanian><h3>Llogaritjet</h3></Albanian>
					</div>
                    <div className="p-text">
						<English>To determine which of the offers you are receiving from solar installation companies is the most suitable one for your business, use the app to do your own calculations!</English>
						<Albanian>Për të përcaktuar se cila nga ofertat që merrni nga kompanitë e instalimit diellor është më e përshtatshme për biznesin tuaj, përdorni aplikacionin për të bërë llogaritjet tuaja!</Albanian>
					</div>
                </details>
            </div>
            <PageFoot></PageFoot>
        </div>
    )



}
export default Resources;
