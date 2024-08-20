function Header() {
    return(
    <nav className="navbar">
        <div className="navbar-container">
            <div className="portfolio">Portfolio</div>
            <ul>
                <li>
                    <a href="/aboutme">About Me</a>
                </li>
                <li>
                    <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/resume">Resume</a>
                </li>
            </ul>
        </div>
    </nav>   
    );
} 

export default Header;