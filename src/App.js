import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>
        Albania Solar Calculator App
      </h1>
      <NavBar></NavBar>
      </header>
      <p>
        homepage
      </p>
    </div>
  );
}

export function NavBar() {
  return (
      <nav className="Nav-bar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Testpath">testpath</Link></li>
            <li><Link to="/FAQ">FAQ</Link></li>
          </ul>
      </nav>
  );
}

export default App;
