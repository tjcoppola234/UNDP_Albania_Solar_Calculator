import './global.css';
import './App.css';
// import UNDP_logo from 'public/UNDP_logo.png';
import { Link } from 'react-router-dom';
import Albanian from './Albanian';
import English from './English';
import {language, DEFAULT_ALBANIAN_VISIBILITY, DEFAULT_ENGLISH_VISIBILITY} from './Language';

function App() {
  return (
    <div className="App">
      <PageHead></PageHead>
      <h2>Homepage</h2>
      <div className="Sponsor-logos">
        <img id="undp-logo" src={process.env.PUBLIC_URL+'UNDP_logo.png'} alt='Logo for UNDP'></img>
        <img id="wpi-logo" src={process.env.PUBLIC_URL+'WPI_logo.png'} alt='Logo for WPI'></img>
      </div>
    </div>
  );
}

export function PageHead() {
  const switchToAlbanian = () => {
    document.getElementById("Switch-albanian").toggleAttribute("disabled", true);
    document.getElementById("Switch-english").toggleAttribute("disabled", false);
    language.setState(true, false);
  };
  const switchToEnglish = () => {
    document.getElementById("Switch-albanian").toggleAttribute("disabled", false);
    document.getElementById("Switch-english").toggleAttribute("disabled", true);
    language.setState(false, true);
  };
  
  return (
    <div>
      <header id="App-header">
        <h1 id="Nav-title">
          <English>Albania Solar Calculator</English>
          <Albanian>Llogaritësi diellor i Shqipërisë</Albanian>
        </h1>
        <nav id="Nav-options">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Resources">Resources</Link></li>
            <li><Link to="/Calculator">Calculator</Link></li>
            <li><Link to="/FAQ">FAQ</Link></li>
            <li>
              <div id="Toggle">
                <button id="Switch-albanian" type="button" disabled={!DEFAULT_ALBANIAN_VISIBILITY} onClick={switchToAlbanian}><img src={process.env.PUBLIC_URL+'albania_flag.png'} alt="Shqip"></img></button>
                <button id="Switch-english" type="button" disabled={!DEFAULT_ENGLISH_VISIBILITY} onClick={switchToEnglish}><img src={process.env.PUBLIC_URL+'usa_flag.png'} alt="English"></img></button>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <div id="Nav-spacing"></div>
    </div>
  );
}

export default App;