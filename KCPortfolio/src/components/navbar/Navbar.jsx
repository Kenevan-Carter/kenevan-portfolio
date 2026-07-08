import './Navbar.css';
import linkedinIcon from '../../assets/images/linkedin.png';
import leetIcon from '../../assets/images/leet.png';
import githubIcon from '../../assets/images/github.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-monogram">KC</div>
            </div>

            <div className="navbar-text">
                <span>Will this extend as long as I need it to? lets see for ourselves</span>
            </div>

            <ul className="navbar-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="navbar-icons">
                <a className="icon-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a className="icon-link" href="https://leetcode.com/u/Kenevan/" target="_blank" rel="noreferrer" aria-label="LeetCode">
                    <img src={leetIcon} alt="LeetCode" />
                </a>
                <a className="icon-link" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <img src={githubIcon} alt="GitHub" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
