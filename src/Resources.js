import './global.css';
import './Resources.css';
import { PageHead, PageFoot } from './App';

function Resources() {
    return (
        <div className="Resources">
            <PageHead></PageHead>
            <div className="content">
                <h2>Solar Installers Nearby</h2>
                <p>Here are some solar installation companies in the Tirana region</p>
                <h2>Map of solar companies in Tirana</h2>
                <iframe id="solar-map" title="Map of solar companies in Tirana" src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d47942.37394858916!2d19.7906942!3d41.32195!3m2!1i1024!2i768!4f13.1!2m1!1ssolar%20companies!5e0!3m2!1sen!2s!4v1667231658526!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2>Solar technology</h2>
                <ul>
                    <li><a href="http://technology-al.ebrdgeff.com/alb_alb/catalog/category/view/s/pv/id/42/">GEFF approved solar panels</a></li>
                    <li><a href="https://www.axsol.de/en/for-you/">Axsol solar panels</a></li>
                    <li><a href="https://www.bisol.com/pv-modules">Bisol solar panels</a></li>
                    <li><a href="https://qcells.com/us/get-started/complete-energy-solution/solar-panel">Qcell solar panels</a></li>
                </ul>
                <h2>Loans for solar</h2>
                <ul>
                    <li><a href="https://www.procreditbank.com.al/eng/business-clients/loans/loan-for-photovoltaics/">ProCredit Bank</a></li>
                    <li><a href="https://www.unionbank.al/kredia-per-panele-fotovoltaike/">Union Bank</a></li>
                </ul>
                <aside>
                    <h2>Helpful Links</h2>
                    <ul>
                        <li><a href="https://github.com/tjcoppola234">Example Link 1</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Robert_Hersh">Example Link 2</a></li>
                    </ul>
                </aside>
            </div>
            <PageFoot></PageFoot>
        </div>
    )
}

export default Resources;