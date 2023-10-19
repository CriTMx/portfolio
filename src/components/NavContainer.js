import Logo from './Logo.js';
import NavList from './NavList.js';

function NavContainer()
{
    return (
        <div className='container-fluid ps-5 pe-5'>
            <Logo />
            <button class="navbar-dark navbar-toggler mt-3 mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <NavList />
        </div>
    )
}

export default NavContainer;