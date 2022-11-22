import './global.css';
import './App.css';
import { Link } from 'react-router-dom';
import Albanian from './Albanian';
import English from './English';
import LanguageToggle from './LanguageToggle';
import { settings } from './Settings';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/home-background.jpeg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
      <PageHead></PageHead>
      <div className="content">
        <div id="center-fade">
          <English>This website is designed <span>for businesses</span></English>
          <Albanian>Kjo faqe interneti është krijuar <span>për bizneset</span></Albanian>
          <English>Here are some tools that can help you determine whether solar panels are a good fit for your business</English>
          <Albanian>Këtu janë disa mjete që mund t'ju ndihmojnë të përcaktoni nëse panelet diellore janë një përshtatje e mirë për biznesin tuaj</Albanian>
          <div className="square">
            <button><Link to="/Calculator" onClick={() => setCurrentTab("Calculator")}>
              <English>Calculator</English>
              <Albanian>Llogaritësi</Albanian>
            </Link></button>
            <div className="square-bullets">
              <ul>
                <li>
                  <English>Enter information about your electricity bills and available roof space to see how much <span>energy you could generate</span> and <span>money you could save</span> with a solar panel system</English>
                  <Albanian>Futni informacione për faturat tuaja të energjisë elektrike dhe hapësirën e disponueshme të çatisë për të parë se sa <span>energji mund të gjeneroni</span> dhe <span>para mund të kurseni</span> me një sistem paneli diellor</Albanian>
                </li>
              </ul>
            </div>
          </div>
          <div className="square">
            <button><Link to="/Resources" onClick={() => setCurrentTab("Resources")}>
              <English>Resources</English>
              <Albanian>Burimet</Albanian>
            </Link></button>
            <div className="square-bullets">
              <ul>
                <li>
                <English>Learn about how solar works, find solar installers, and explore links to banks with solar energy programs</English>
              <Albanian>Mësoni se si funksionon solari, gjeni instalues ​​diellor dhe eksploroni lidhjet me bankat me programe të energjisë diellore</Albanian>
                </li>
              </ul>
            </div>
          </div>
          <div className="square">
            <button><Link to="/Help" onClick={() => setCurrentTab("Help")}>
              <English>Help</English>
              <Albanian>Ndihmë</Albanian>
            </Link></button>
            <div className="square-bullets">
            <ul>
              <li>
                <English>See frequently asked questions about solar</English>
                <Albanian>Shikoni pyetjet e bëra më shpesh në lidhje me energjinë diellore</Albanian>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      <PageFoot></PageFoot>
    </div>
  );
}

export function PageHead() {
  return (
    <div>
      <header id="App-header">
        <a href="/" id="Nav-title">
          <div>
            <English><h2>Albania Solar Calculator for Businesses</h2></English>
            <Albanian><h2>Kalkulator Solar Albania per Bizneset</h2></Albanian>
          </div>
        </a>
        <nav id="Nav-options">
          <button id="Hamburger" type="button" onClick={() => hamburgerVis()}><img src={process.env.PUBLIC_URL + "icons8-menu-50.png"} alt="hamburger icon"></img></button>
          <ul id="Nav-options-list">
          <li className={settings.disabledMenuItem.getState() === "Home" ? "current-tab" : ""}><Link to="/" onClick={() => setCurrentTab("Home")}>
              <English>Home</English>
              <Albanian>Shitet</Albanian>
            </Link></li>
            <li className={settings.disabledMenuItem.getState() === "Calculator" ? "current-tab" : ""}><Link to="/Calculator" onClick={() => setCurrentTab("Calculator")}>
              <English>Calculator</English>
              <Albanian>Llogaritësi</Albanian>
            </Link></li>
            <li className={settings.disabledMenuItem.getState() === "Resources" ? "current-tab" : ""}><Link to="/Resources" onClick={() => setCurrentTab("Resources")}>
              <English>Resources</English>
              <Albanian>Burimet</Albanian>
            </Link></li>
            <li className={settings.disabledMenuItem.getState() === "Help" ? "current-tab" : ""}><Link to="/Help" onClick={() => setCurrentTab("Help")}>
              <English>Help</English>
              <Albanian>Ndihmë</Albanian>
            </Link></li>
            <li id="toggle-li"><LanguageToggle></LanguageToggle></li>
          </ul>
        </nav>
      </header>
      <div id="Nav-spacing"></div>
    </div>
  );
}

export function PageFoot() {
  return (
    <div id="App-footer">
      <footer>
        <div className="Sponsor-logos">
          <span className="Center-items">
            <a href="http://eficenca.gov.al/" target="_blank" rel="noreferrer"><img id="aee-logo" src={process.env.PUBLIC_URL+'AEE_logo.png'} alt='Logo for AEE'></img></a>
            <div>
              <English>in collaboration with</English>
              <Albanian>ne bashkepunim me</Albanian>
            </div>
            <a href="https://www.undp.org/albania" target="_blank" rel="noreferrer"><img id="undp-logo" src={process.env.PUBLIC_URL+'UNDP_logo.png'} alt='Logo for UNDP'></img></a>
          </span>
        </div>
        <div>
          <English>Created by: Andrew Salls, Annalisa Allan, Ashe Andrews, and Theo Coppola</English>
          <Albanian>Krijuar nga: Andrew Salls, Annalisa Allan, Ashe Andrews, and Theo Coppola</Albanian>
        </div>
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