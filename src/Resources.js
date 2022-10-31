import './global.css';
import { PageHead } from './App';

function Resources() {
    return (
        <div className="Resources">
            <PageHead></PageHead>
            <h2>Solar Installers Nearby</h2>
                <p>Here are some solar installation companies in the Tirana region</p>
                <img id="solar-map" src={process.env.PUBLIC_URL+'solar_company_map.png'} alt='Map of solar companies'></img>
            <h2>More Information on Solar Photovoltaics</h2>
        </div>
    )
}

export default Resources;