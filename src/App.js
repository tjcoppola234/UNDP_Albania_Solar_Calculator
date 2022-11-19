import './global.css';
import './App.css';
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
        <a href="/" id="Nav-title">
          <h1>
            <English>Albania Solar Calculator</English>
            <Albanian>Llogaritësi diellor i Shqipërisë</Albanian>
          </h1>
        </a>
        <nav id="Nav-options">
          <button id="Hamburger" type="button" onClick={() => hamburgerVis()}><img src={process.env.PUBLIC_URL + "icons8-menu-50.png"} alt="hamburger icon"></img></button>
          <ul id="Nav-options-list">
            <li className={settings.disabledMenuItem.getState() === "Calculator" ? "current-tab" : ""}><Link to="/" onClick={() => setCurrentTab("Calculator")}>Calculator</Link></li>
            <li className={settings.disabledMenuItem.getState() === "Resources" ? "current-tab" : ""}><Link to="/Resources" onClick={() => setCurrentTab("Resources")}>Resources</Link></li>
            <li className={settings.disabledMenuItem.getState() === "Tutorial" ? "current-tab" : ""}><Link to="/Tutorial" onClick={() => setCurrentTab("Tutorial")}>Tutorial</Link></li>
            <li><LanguageToggle></LanguageToggle></li>
          </ul>
        </nav>
      </header>
      <div id="Nav-spacing"></div>
    </div>
  );
}

export function PageFoot() {
  return (
    <div>
      <footer id="App-footer">
        <div className="Sponsor-logos">
          <a href="https://www.undp.org/albania" target="_blank" rel="noreferrer"><img id="undp-logo" src={process.env.PUBLIC_URL+'UNDP_logo.png'} alt='Logo for UNDP'></img></a>
          <a href="https://www.wpi.edu/" target="_blank" rel="noreferrer"><img id="wpi-logo" src={process.env.PUBLIC_URL+'WPI_logo.png'} alt='Logo for WPI'></img></a>
          <a href="http://eficenca.gov.al/" target="_blank" rel="noreferrer"><img id="aee-logo" src={process.env.PUBLIC_URL+'AEE_logo.png'} alt='Logo for AEE'></img></a>
        </div>
        <p>Created by: Andrew Salls, Annalisa Allen, Ashe Andrews, and Theo Coppola</p>
      </footer>
    </div>
  )
}

function setCurrentTab(tab) {
  settings.disabledMenuItem.setState(tab);
}

let switching = false;
function hamburgerVis() {
  switching = true;
  let nav = document.getElementById("Nav-options-list");
  if(nav.classList.contains("invisible")) {
    nav.classList.remove("invisible");
  }
  else {
    nav.classList.add("invisible");
  }
}
document.onclick = () => {
  let nav = document.getElementById("Nav-options-list");
  if(!switching && window.innerWidth < 1000 && !nav.classList.contains("invisible")) {
    nav.classList.add("invisible");
  }
  switching = false;
}

//To manage hiding the navbar when the hamburger menu appears
let sizeDecreased = false;
window.onresize = () => {
  if(window.innerWidth > 1000) {
    document.getElementById("Nav-options-list").classList.remove("invisible");
    sizeDecreased = false;
  } else if(!sizeDecreased && window.innerWidth <= 1000) {
    document.getElementById("Nav-options-list").classList.add("invisible");
    sizeDecreased = true;
  }
}
window.onload = () => {
  if(window.innerWidth <= 1000) {
    document.getElementById("Nav-options-list").classList.add("invisible");
  }
}

export default App;