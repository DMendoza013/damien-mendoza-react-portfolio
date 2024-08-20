import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="text-center py-3"> 
            <div className="container mt-2">  
                <div className="footer-contact">
                
                <a className="mx-2" href="https://github.com/DMendoza013" target="_blank"> <FontAwesomeIcon icon={faSquareGithub} className= "footer-icon" size='4x'/></a>
                <a className="mx-2" href="https://www.linkedin.com/in/damien-mendoza-35403b323/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className= "footer-icon" size='4x' /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;