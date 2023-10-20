import NavContainer from './NavContainer';
import './css/Navbar.css';

function Header()
{
    return (
        <nav className="header navbar navbar-expand-lg" id="nav-header">
            <NavContainer />
        </nav>
    )
}

export default Header;