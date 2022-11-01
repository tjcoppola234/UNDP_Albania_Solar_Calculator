import './global.css';
import { PageHead } from './App';

function Resources() {
    return (
        <div className="Resources">
            <PageHead></PageHead>
            <h2>Solar Installers Nearby</h2>
                <p>Here are some solar installation companies in the Tirana region</p>
            <h2>More Information on Solar Photovoltaics</h2>
            <iframe title="Map of solar companies in Tirana" src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d47942.37394858916!2d19.7906942!3d41.32195!3m2!1i1024!2i768!4f13.1!2m1!1ssolar%20companies!5e0!3m2!1sen!2s!4v1667231658526!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <aside>
                <h2>Helpful Links</h2>
                <ul>
                    <li><a href="https://github.com/tjcoppola234">Example Link 1</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Robert_Hersh">Example Link 2</a></li>
                </ul>
            </aside>
        </div>
    )
}

export default Resources;