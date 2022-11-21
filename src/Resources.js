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
                    <English><h2>Map of solar companies in Tirana</h2></English>
                    <Albanian><h2>Harta e kompanive diellore ne Tirane</h2></Albanian>
                </div>
                <iframe id="solar-map" title="Map of solar companies in Tirana" src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d47942.37394858916!2d19.7906942!3d41.32195!3m2!1i1024!2i768!4f13.1!2m1!1ssolar%20companies!5e0!3m2!1sen!2s!4v1667231658526!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div>
                    <English><h2>Solar technology</h2></English>
                    <Albanian><h2>Teknologjia diellore</h2></Albanian>
                </div>
                <ul>
                    <li><a href="http://technology-al.ebrdgeff.com/alb_alb/catalog/category/view/s/pv/id/42/">
                            <English>GEFF approved solar panels</English>
                            <Albanian>Panele diellore të miratuara nga GEFF</Albanian>
                        </a></li>
                    <li><a href="https://www.axsol.de/en/for-you/">
                            <English>Axsol solar panels</English>
                            <Albanian>Panele diellore Axsol</Albanian>
                        </a></li>
                    <li><a href="https://www.bisol.com/pv-modules">
                            <English>Bisol solar panels</English>
                            <Albanian>Panele diellore Bisol</Albanian>
                        </a></li>
                    <li><a href="https://qcells.com/us/get-started/complete-energy-solution/solar-panel">
                            <English>Qcell solar panels</English>
                            <Albanian>Panele diellore Qcell</Albanian>
                        </a></li>
                </ul>
                <div>
                    <English><h2>Loans for solar</h2></English>
                    <Albanian><h2>Kredi për solare</h2></Albanian>
                </div>
                <ul>
                    <li><a href="https://www.procreditbank.com.al/eng/business-clients/loans/loan-for-photovoltaics/">
                        <English>ProCredit Bank</English>
                        <Albanian>Banka ProCredit</Albanian>
                    </a></li>
                    <li><a href="https://www.unionbank.al/kredia-per-panele-fotovoltaike/">
                        <English>Union Bank</English>
                        <Albanian>Banka Union</Albanian>
                    </a></li>
                </ul>
            </div>
            <PageFoot></PageFoot>
        </div>
    )
}

export default Resources;