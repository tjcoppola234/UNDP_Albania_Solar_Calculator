import './global.css';
import './App.css';
// import UNDP_logo from 'public/UNDP_logo.png';
import { Link } from 'react-router-dom';
import Albanian from './Albanian';
import English from './English';
import LanguageToggle from './LanguageToggle';
import { settings } from './Settings';

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
  return (
    <div>
      <header id="App-header">
        <h1 id="Nav-title">
          <English>Albania Solar Calculator</English>
          <Albanian>Llogaritësi diellor i Shqipërisë</Albanian>
        </h1>
        <nav id="Nav-options">
          <ul>
            <li className={settings.disabledMenuItem.getState() === "Home" ? "current-tab" : ""}><Link to="/" onClick={() => setCurrentTab("Home")}>Home</Link></li>
            <li className={settings.disabledMenuItem.getState() === "Resources" ? "current-tab" : ""}><Link to="/Resources" onClick={() => setCurrentTab("Resources")}>Resources</Link></li>
            <li className={settings.disabledMenuItem.getState() === "Calculator" ? "current-tab" : ""}><Link to="/Calculator" onClick={() => setCurrentTab("Calculator")}>Calculator</Link></li>
            <li className={settings.disabledMenuItem.getState() === "FAQ" ? "current-tab" : ""}><Link to="/FAQ" onClick={() => setCurrentTab("FAQ")}>FAQ</Link></li>
            <li><LanguageToggle></LanguageToggle></li>
          </ul>
        </nav>
      </header>
      <div id="Nav-spacing"></div>
    </div>
  );
}

function setCurrentTab(tab) {
  settings.disabledMenuItem.setState(tab);
}

export default App;