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

            <h1 id="largerfontb">Why is solar energy important?</h1>
            <div id ="div"> {/* place "open" next to "details" to make it open on load */}
            <img id="imagefloat" src={process.env.PUBLIC_URL+"solarmap.png"} alt="Benefits" width = "400" height = "500" floatleft/>

            <h3>The Enviornment</h3>

            <li id ="li">Reduces the amount of carbon dioxide released into the air</li>
            <li id ="li">Provides better air quality</li>
            <li id ="li">Helps mitigate climate change</li>


            <h3>Sunny Potential</h3>

            <li id ="li">Albania has extensive potential for solar energy with 2400-2500 hours of sunshine per year</li>
            <li id ="li">The irradiation, or the amount of power received from the sun, is promising</li>
            <li id ="li">The irradiation varies depending on the region your business is in, so you can check out the graph to the right, which shows the irradiation more generally</li>

  
           </div>
            
            
            
            <div id ="div"> {/* place "open" next to "details" to make it open on load */}
                <h1 id="largerfontb">What are the benefits of solar energy for your business?</h1>

            <img id="imagefloat" src={process.env.PUBLIC_URL+"reasons.png"} alt="Reasons" width = "430" height = "750"/>
           <h3>Reduced Energy Costs</h3>
           <li id ="li">Electricity bills can be problematic because they are expensive.</li>
           <li id ="li">Your electricity bill depends on how much energy is consumed and the rate your utility company charges.</li>
           <li id ="li">You can look at switching to solar as replacing your electricity bill with monthly payments for your solar equipment.</li>
           <li id ="li">Electricity bills continue to get more expensive because utility companies face high costs to maintain and expand the grid.</li>
           <li id ="li">You can avoid this increase of price by switching to solar!</li>

            
            <h3>More Energy Security and Independence</h3>
            <li id ="li">Becoming your own power providers</li>
            <li id ="li">Costs of using solar are very predictable as many additionally pay service charges that go towards grid maintenance, charges for net metering, and other associated costs</li>
            <li id ="li">Just remember if you do not go 100% solar, then you will have some level of remaining electric bill that will vary through the year.</li>
            
            <h3>Green Business</h3>
            <li id ="li">You can go green by installing solar systems!</li>
            <li id ="li">Going green means finding the most efficient ways to sustain your companies for the better impact of the environment</li>
            <li id ="li">This attracts a reduction in company costs by keeping general operating costs low over time, more eco-conscious employees to hire, and a better image and reputation of the company by leaving a lasting impression on your customers, potential customers, and vendors.</li>

            <h3>Solar Tax Benefit</h3>
            <li id ="li">The value-added tax on all machinery and other equipment imported to invest in solar energy has been discussed to be cancelled!</li>
            </div>


            <div id ="div"> {/* place "open" next to "details" to make it open on load */}
                <h1 id="largerfontb">Should your business go solar?</h1>
            
            <img id="imagefloat3" src={process.env.PUBLIC_URL+"qs.png"} alt="Questions To Ask" width = "500" height = "500"/>
            
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
            </div>

            <div id ="div"> {/* place "open" next to "details" to make it open on load */}
                <h1 id="largerfontb">How can your business go solar?</h1>
            
            <img id="imagefloat" src={process.env.PUBLIC_URL+"how.png"} alt="How to Install" width = "400" height = "600"/>

            <h3>Solar Installers</h3>
            <p id="p">
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
            
            <iframe id="solar-map" title="Map of solar companies in Tirana" src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d47942.37394858916!2d19.7906942!3d41.32195!3m2!1i1024!2i768!4f13.1!2m1!1ssolar%20companies!5e0!3m2!1sen!2s!4v1667231658526!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </details>


            <h3>Banks</h3>
            <p id="p">
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
            <p id="p">
            To determine which of the offers you are receiving from solar installation companies is the most suitable one for your business, use the app to do your own calculations! 
            </p>
            </div>

            
            </div>
            
            <PageFoot></PageFoot>
        </div>
    )



}
export default Resources;
