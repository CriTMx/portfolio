import {IconInsta, IconDiscord, IconGithub, IconLinkedin, IconSpotify, IconSteam, IconVector} from './Icons.js';

function NavList()
{
    return (
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-2 gap-md-1 gap-0">
                <li className="nav-item">
                    <a className="nav-link" href="#" id="textLink">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about" id="textLink">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" id="textLink">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" id="textLink">Skills</a>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto icon-list">
                <li className="nav-item">
                    <a className="nav-link icon-svg" href="https://instagram.com/crit.mx" target='_blank'><IconInsta /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link icon-svg" href="#" target='_blank'><IconDiscord /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link icon-svg" href="https://github.com/CriTMx" target='_blank'><IconGithub /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link icon-svg" href="https://www.linkedin.com/in/shlok-aditya-tripathy-10345022a/" target='_blank'><IconLinkedin /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link icon-svg" href="https://open.spotify.com/user/ov1zogss07js9te0ap4zmbb0x" target='_blank'><IconSpotify /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link icon-svg" href="https://steamcommunity.com/id/CriTMx/" target='_blank'><IconSteam /></a>
                </li>
            </ul>
        </div>
    )
}

export default NavList;