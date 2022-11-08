import './global.css';
import './App.css';
// import UNDP_logo from 'public/UNDP_logo.png';
import { Link } from 'react-router-dom';
import Albanian from './Albanian';
import English from './English';
import LanguageToggle from './LanguageToggle';

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
          <button id="Hamburger" onClick={(e) => hamburgerVis(e)}><img src={process.env.PUBLIC_URL + "icons8-menu-50.png"} alt="hamburger icon"></img></button>
          <ul id="Nav-options-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Resources">Resources</Link></li>
            <li><Link to="/Calculator">Calculator</Link></li>
            <li><Link to="/FAQ">FAQ</Link></li>
            <li><LanguageToggle></LanguageToggle></li>
          </ul>
        </nav>
      </header>
      <div id="Nav-spacing"></div>
    </div>
  );
}

function hamburgerVis(e) {
  e.preventDefault();
  e.stopPropagation();
  const nav = document.getElementById("Nav-options-list");
  if(nav.style.visibility === "hidden") {
    nav.style.visibility = "visible";
  } else {
    nav.style.visibility = "hidden";
  }
}
document.onclick = (e) => {
  if(window.innerWidth < 920) {
    document.getElementById("Nav-options-list").style.visibility = "hidden";
  }
}

//To manage hiding the navbar when the hamburger menu appears
let sizeDecreased = false;
window.onresize = () => {
  if(window.innerWidth > 920) {
    document.getElementById("Nav-options-list").style.visibility = "visible";
    sizeDecreased = false;
  } else if(!sizeDecreased && window.innerWidth <= 920) {
    document.getElementById("Nav-options-list").style.visibility = "hidden";
    sizeDecreased = true;
  }
}
window.onload = () => {
  if(window.innerWidth <= 920) {
    document.getElementById("Nav-options-list").style.visibility = "hidden";
  }
}

export default App;