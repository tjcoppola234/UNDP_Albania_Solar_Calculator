function NavBar() {
    return (
        <nav className="Nav-bar">
            <ul>
                <li><Link to="/Testpath">testpath</Link></li>
                <li><Link to="/FAQ">FAQ</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;