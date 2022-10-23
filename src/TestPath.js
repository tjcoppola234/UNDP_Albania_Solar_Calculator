import './App.css';
import { Link } from 'react-router-dom';

function Testpath() {
    return (
        <div className="App">
        <header className="App-header">
            <p>A test</p>
            <Link to="/">Home page</Link>
        </header>
        </div>
    )
}

export default Testpath;