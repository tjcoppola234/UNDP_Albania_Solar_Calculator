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
                     
            <h2 id="h2resources">Resources </h2>

            <details close> {/* place "open" next to "details" to make it open on load */}
            <summary>
                <b id="largerfontb">What is solar and why is it good?</b>
            </summary>
            <img id="something" src={process.env.PUBLIC_URL+"benefitsofsolar.jpg"} alt="Benefits" width = "500" height = "500" floatleft/>
            
           </details>
            
            
            
            <details close> {/* place "open" next to "details" to make it open on load */}
            <summary>
                <b id="largerfontb">Why is solar energy beneficial for businesses?</b>
            </summary>

            <img id="imagefloat" src={process.env.PUBLIC_URL+"reasons.png"} alt="Reasons" width = "400" height = "550"/>
           <h3>Reduced Energy Costs</h3>
            <p>
            Electricity bills can be problematic because they are expensive. Your electricity bill depends on how much energy is consumed and the rate your utility company charges. By using solar energy, your bill can be lowered by X%. You can look at switching to solar as replacing your electricity bill with monthly payments for your solar equipment. Electricity bills continue to get more expensive because utility companies face high costs to maintain and expand the grid. Solar power systems generally do not require much maintenance and most reliable solar panel manufacturers offer 20–25-year warranties.
            </p>
            <h3>Solar Tax Benefit</h3>
            <p>
            </p>
            <h3>More Energy Security and Independence</h3>
            <p>
            A business can achieve energy independence by adopting solar energy as they are becoming their own power providers. It provides electricity security to a business as electricity bills are seen as unpredictable. Costs of using solar are very predictable as many additionally pay service charges that go towards grid maintenance, charges for net metering, and other associated costs. If a business does not use 100% solar, then they will have some level of remaining electric bill that will vary through the year.
            </p>
            <h3>Green Business</h3>
            <p>
            Businesses can start going green by installing solar systems.
            </p>
            </details>


            <details close> {/* place "open" next to "details" to make it open on load */}
            <summary>
                <b id="largerfontb">Should your business go solar?</b>
            </summary>
            
            <img id="imagefloat" src={process.env.PUBLIC_URL+"qs.png"} alt="Questions To Ask" width = "500" height = "500"/>
            
            <h3>Why should I go solar?</h3>
            <p>
            Choosing to go solar is completely up to you. There are many benefits to going solar, including electricity bill savings, more stable power, and building a more sustainable business. 
            </p>
            <h3>Is my business right for solar?</h3>
            <p>
            Before professional consultation, you can determine on your own whether a solar system makes sense for your system. You want to make sure the panels receive the most possible amount of sunlight as Albania already has a high amount of sunshine per year. You also want to determine if your electricity bills are high enough to justify going solar as the more money you spend now, the more you can save with solar. 
            </p>
            <h3>How much does solar cost?</h3>
            <p>
            The average Albanian business energy usage can be about X lek which is directly affected by how much energy is used, so this cost varies depending on your business’ consumption. Solar companies will typically generate a report of your estimations. 
            </p>
            <p>
            Most solar companies will build out an accurate estimate by using the last six months of your energy bills and utilizing sun tracking software to determine the necessary size of your system to generate 100% of your power needs.  
            </p>
            <h3>How should I finance my panels?</h3>
            <p>
            A business have a variety of options to explore as solar companies have packages of solar systems they sell, or a business may consider taking out a loan to finance their solar panels. 
            </p>
            <h3>How much money will I save with solar?</h3>
            <p>
            A solar company would be installing a custom rooftop solar system for your business, so the costs would ideally fit your needs. 
            </p>
            <h3>How long will my solar panels last?</h3>
            <p>
            Solar panels are continually progressing to be better in power production and efficiency. There are a variety of panels to choose from that may fit your power or aesthetic needs, depending on what manufacturer you’re looking at. Most manufacturers claim their panel’s efficiency to last at least 20-25 years due to slight degradation caused by dirt, pollen, and other external factors, so it is important to clean your panels. 
            </p>
            <h3>Do solar panels have a warranty?</h3>
            <p>
            Warranty depends on the manufacturer with most lasting between 20-25 years. Some solar companies also offer a few years of maintenance as well after they are installed on your roof.
            </p>
            </details>

            <details close> {/* place "open" next to "details" to make it open on load */}
            <summary>
                <b id="largerfontb">How can your business go solar?</b>
            </summary>
            
            <img id="imagefloat" src={process.env.PUBLIC_URL+"how.png"} alt="How to Install" width = "400" height = "600"/>

            <h3>Solar Installers</h3>
            <p>
            Talk to different solar installation companies to determine if and how a solar system is right for you. Many companies offer technical and financial consulting, along with the full projections of a PV system on your roof. At these vendors will you be able to apply for a permit and start installation. Some solar companies and many solar manufacturers in which these installation companies get their panels from also offer periodic maintenance.
            </p>

            <details close> {/* place "open" next to "details" to make it open on load */}
            <summary>
                <b id="largerfont2b">Solar Installer Contacts</b>
            </summary>
            <p><strong><a href = "https://panelebesi.al/"> Panele Fotovoltaike Besi</a></strong></p>
            <p>+355 69 992 9800</p>
            <p>panelebesi@gmail.com</p>
            <p>Rruga Artan Lenja, Tirana 1023</p>

            <p><strong><a href = "https://vegasolar.al/">Vega Electric</a></strong></p>
            <p>+355 69 202 1115</p>
            <p>info@vegasolar.al</p>
            <p>Artan Lenja Street 61 Lyra Palace, Magnet Complex Tirana AL, Tirana 1001</p>

            <p><strong><a href ="https://enercom.al/index.html">Enercom</a></strong></p>
            <p>+355 68 900 1221</p>
            <p>info@enercom.al</p>
            <p>Rruga e Elbasanit, Sauk, 1044, Tiranë</p>
            </details>


            <h3>Banks</h3>
            <p>
            Talk to different banks to determine if taking out a loan is right for your company. A couple banks, like Union Bank and ProCredit Bank, offer technical and financial assistance to help you determine if a solar system is right for you. These banks will often be partnered with solar installation companies they will get you in contact with.
            </p>
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

            <h3>Calculations</h3>
            <p>
            To determine which of the offers you are receiving from solar installation companies is the most suitable one for your business, use the app to do your own calculations! 
            </p>
            </details>

            
            </div>
            
            <PageFoot></PageFoot>
        </div>
    )



}
export default Resources;
