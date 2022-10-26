import './global.css';
// import UNDP_logo from 'public/UNDP_logo.png';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <p>homepage</p>
    </div>
  );
}

export function NavBar() {
  return (
      <nav className="Nav-bar">
          <ul>
            {/* <img src={UNDP_logo} alt='Logo for UNDP'></img> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Testpath">testpath</Link></li>
            <li><Link to="/FAQ">FAQ</Link></li>
          </ul>
      </nav>
  );
}

export default App;
