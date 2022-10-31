import './global.css';
// import UNDP_logo from 'public/UNDP_logo.png';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <PageHead></PageHead>
      <h2>Homepage</h2>
    </div>
  );
}

export function PageHead() {
  return (
    <header className="App-header">
      <h1>
        Shqipëri Solar Calculator
      </h1>
      <nav className="Nav-bar">
        <div className="Nav-bar-logos">
          <img id="undp-logo" src={process.env.PUBLIC_URL+'UNDP_logo.png'} alt='Logo for UNDP'></img>
          <img id="wpi-logo" src={process.env.PUBLIC_URL+'WPI_logo.png'} alt='Logo for WPI'></img>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Resources">Resources</Link></li>
          <li><Link to="/Calculator">Calculator</Link></li>
          <li><Link to="/FAQ">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
