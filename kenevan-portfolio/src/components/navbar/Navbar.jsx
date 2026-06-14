import './navbar/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-monogram">KC</div>
                <div className="navbar-name">Kenevan</div>
            </div>

            <ul className="navbar-links">
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>

            <div className="navbar-icons">
                <a className="icon-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">LI</a>
                <a className="icon-link" href="https://leetcode.com/" target="_blank" rel="noreferrer" aria-label="LeetCode">LC</a>
                <a className="icon-link" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
            </div>
        </nav>
    );
}

export default Navbar;
