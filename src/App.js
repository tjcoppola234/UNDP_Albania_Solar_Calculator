import './global.css';
import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Albanian from './Albanian';
import English from './English';
import LanguageToggle from './LanguageToggle';
import { settings } from './Settings';

/**
 * The HTML for the home page.
 * @returns {HTMLElement} An HTMLElement representing the home page, with class "App".
 */
function App() {
  return (
    <div className="App" style={{ backgroundImage: `linear-gradient(to bottom, rgba(236,240,241,0.25), rgba(236,240,241,0.25)), url(${process.env.PUBLIC_URL}/home-background.jpeg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <PageHead></PageHead>
      <div className="content">
        <div id="center-fade">
          <English>This website is designed <b>for businesses</b></English>
          <Albanian>Kjo faqe interneti është krijuar <b>për bizneset</b></Albanian>
          <English>Here are some tools that can help you determine whether solar panels are a good fit for your business</English>
          <Albanian>Këtu janë disa mjete që mund t'ju ndihmojnë të përcaktoni nëse panelet diellore janë një përshtatje e mirë për biznesin tuaj</Albanian>
          <div className="square">
            <button><Link to="/Calculator" onClick={() => settings.disabledMenuItem.setState("Calculator")}>
              <English>Calculator</English>
              <Albanian>Llogaritësi</Albanian>
            </Link></button>
            <div className="square-bullets">
              <ul>
                <li>
                  <English>Learn if solar photovoltaics are right for you!</English>
                  <Albanian>Shihni sa energji mund të gjeneroni</Albanian>
                </li>
              </ul>
            </div>
          </div>
          <div className="square">
            <button><Link to="/Resources" onClick={() => settings.disabledMenuItem.setState("Resources")}>
              <English>Resources</English>
              <Albanian>Burimet</Albanian>
            </Link></button>
            <div className="square-bullets">
              <ul>
                <li>
                  <English>Learn about what solar energy is!</English>
                  <Albanian>Mësoni se si funksionojnë fotovoltaikët diellorë</Albanian>
                </li>
              </ul>
            </div>
          </div>
          <div className="square">
            <button><Link to="/Help" onClick={() => {settings.disabledMenuItem.setState("Help"); document.body.scrollTo(0, 0); }}>
              <English>Help</English>
              <Albanian>Ndihmë</Albanian>
            </Link></button>
            <div className="square-bullets">
              <ul>
                <li>
                  <English>Learn how to use the tool!</English>
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

/**
 * The HTML for the navigation bar and language toggle.
 * @returns {HTMLElement} An HTMLElement representing the navigation bar, with class "App-header".
 */
export function PageHead() {
  const [dropdownVis, setDropdownVis] = useState(false);

  window.addEventListener("resize", e => {
    setDropdownVis(window.innerWIdth > 1330);
  });
  
  document.addEventListener("click", e => {
    if (e.target.closest("#Nav-options") === null && window.innerWidth <= 1330)
      setDropdownVis(false);
  });

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
          <button id="Hamburger" type="button" onClick={() => setDropdownVis(!dropdownVis)}><img src={process.env.PUBLIC_URL + "icons8-menu-50.png"} alt="hamburger icon"></img></button>
          <ul id="Nav-options-list" className={dropdownVis ? "" : "invisible"}>
            <li className={settings.disabledMenuItem.getState() === "Home" ? "current-tab" : ""}><Link to="/" onClick={() => settings.disabledMenuItem.setState("Home")}>
              <English>Home</English>
              <Albanian>Shitet</Albanian>
            </Link></li>
            <li className={settings.disabledMenuItem.getState() === "Calculator" ? "current-tab" : ""}><Link to="/Calculator" onClick={() => settings.disabledMenuItem.setState("Calculator")}>
              <English>Calculator</English>
              <Albanian>Llogaritësi</Albanian>
            </Link></li>
            <li className={settings.disabledMenuItem.getState() === "Resources" ? "current-tab" : ""}><Link to="/Resources" onClick={() => settings.disabledMenuItem.setState("Resources")}>
              <English>Resources</English>
              <Albanian>Burimet</Albanian>
            </Link></li>
            <li className={settings.disabledMenuItem.getState() === "Help" ? "current-tab" : ""}><Link to="/Help" onClick={() => settings.disabledMenuItem.setState("Help")}>
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

/**
 * The HTML for the footer at the bottom of each page.
 * @returns {HTMLElement} An HTMLElement representing the footer, with class "App-footer".
 */
export function PageFoot() {
  return (
    <div id="App-footer">
      <footer>
        <div className="Sponsor-logos">
          <div className="Center-items">
            <a href="http://eficenca.gov.al/" target="_blank" rel="noreferrer"><img id="aee-logo" src={process.env.PUBLIC_URL + 'AEE_logo.png'} alt='Logo for AEE'></img></a>
            <div>
              <English>in collaboration with</English>
              <Albanian>ne bashkepunim me</Albanian>
            </div>
            <a href="https://www.undp.org/albania" target="_blank" rel="noreferrer"><img id="undp-logo" src={process.env.PUBLIC_URL + 'UNDP_logo.png'} alt='Logo for UNDP'></img></a>
          </div>
        </div>
        <div>
          <English>Created by: Andrew Salls, Annalisa Allan, Ashe Andrews, and Theo Coppola</English>
          <Albanian>Krijuar nga: Andrew Salls, Annalisa Allan, Ashe Andrews, and Theo Coppola</Albanian>
        </div>
      </footer>
    </div>
  )
}

let loop = false;
/**
 * Hides hamburger dropdown menu when clicking off of the menu.
 * Also hides tooltips when clicking off of them
 */
document.addEventListener("click", ev => {
  //Hides tooltips when clicking off of them
  if (!loop) {
    const buttonClicked = ev.target.closest(".tool-button");

    const tooltips = document.getElementsByClassName("tool-tip-parent");

    if (ev.target.closest(".tool-tip") === null) {
      for (let tooltip of tooltips) {
        if (!tooltip.querySelector(".tool-tip").classList.contains("invisible")) {
          const aButton = tooltip.querySelector(".tool-button");

          if (buttonClicked === null || !buttonClicked.isSameNode(aButton)) {
            loop = true;
            aButton.click();
          }
        }
      }
    }

    loop = false;
  }
});

export default App;