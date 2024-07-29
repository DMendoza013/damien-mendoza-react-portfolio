function Navbar() {
    return( <nav className="navbar">
        <div className="navbar-container">
            <a href="/" className="portfolio">Portfolio</a>
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

export default Navbar;