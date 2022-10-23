import './App.css';
import { Link } from 'react-router-dom';

function FAQ() {
    return (
        <div className="App">
        <header className="App-header">
            <p>FAQ</p>
            <Link to="/">Home page</Link>
        </header>
        </div>
    )
}

export default FAQ;