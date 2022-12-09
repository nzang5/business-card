import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
function Footer(){

    return(
        <div className='footer'>
            <a href='twitter.com'><FontAwesomeIcon icon={ faTwitter } /></a>
            <a href='facebook.com'><FontAwesomeIcon icon={ faFacebook } /></a>
            <a href='instagram'><FontAwesomeIcon icon={ faInstagram } /></a>
            <a href='github.com'><FontAwesomeIcon icon={ faGithub } /></a>
            
        </div>
    )
}

export default Footer;