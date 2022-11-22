import './global.css';
import './Help.css';
import { PageHead, PageFoot } from './App';
import English from './English';
import Albanian from './Albanian';

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
                    <h3>Payback Period Calculator</h3>
                    <p>This calculator determines how long it will take to break even on your initial solar panel system purchase.</p>
                    <ol>
                        <li>Below Solar Panel Statistics, enter the following fields:
                            <ul>
                                <li><strong>Cost of one solar panel</strong>: In Euros, the price of a singular solar panel that you are looking to purchase.</li>
                                <li><strong>Area of one solar panel</strong>: In meters-squared, the length times the width of a singular solar panel that you are looking to purchase.</li>
                                <li><strong>Capacity of one solar panel</strong>: In kilowatts, the capacity of a singular solar panel that you are looking to purchase.</li>
                                <li><strong>Efficiency of solar panels</strong>: The percentage of the efficiency of a singular solar panel that you are looking to purchase.</li>
                                <li>
                                    <strong>Note</strong>: You can scroll through the table under <strong>Solar Panel Info</strong> and click on <strong>Use this panel</strong> under <strong>Panel Selection</strong> if you find a solar panel model you are interested in using.
                                    <br/>
                                    <img id="help-panel-table" src={process.env.PUBLIC_URL + "help_panel_table.png"} alt="A reference to the calculator's table of solar panels"/>
                                </li>
                            </ul>
                        </li>
                        <li>Select the municipality that your building is located in under <strong>Select your municipality</strong>. The municipality you select is used to determine the average amount of sunlight per month/year for your building.</li>
                        <li>Under <strong>Roof space available for solar</strong> enter, in meters-squared, your available roof space that you would like to cover in solar panels. Keep in mind, your whole roof space may or may not be needed to cover your electricity needs.</li>
                        <li>Under <strong>Percent of total energy consumption for solar</strong>, enter the percentage you would like solar to cover your electricity demands. For example, if you would like 70% of your electricity consumption to come from solar energy and 30% from other forms, you would enter in “70”.</li>
                        <li>Under <strong>Current amount paid for electricity per month</strong>, enter, in Lek, how much money you spend in a month on your electricity bill. If you consume more energy during a specific month, we suggest you use your latest bill of that month. If instead you would like to enter your yearly electricity bill, click on <strong>month</strong> and select <strong>year</strong> from the dropdown menu.</li>
                        <li>Click <strong>Calculate</strong> to receive your payback period, how much energy your panels would produce, the total cost of your panels, and the total money saved by your investment.</li>
                    </ol>
                </section>
            </div>
            <PageFoot></PageFoot>
        </div>
    )
}

export default Help;