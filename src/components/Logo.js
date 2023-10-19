import logo from './media/weblogo.png';

function Logo()
{
    return (
        <span className='logo'>
            <a className="navbar-brand" href="#"><img id="imgLogo" className="img d-none d-lg-block" src={logo} width='250px'></img></a>
            <h4 className='d-lg-none d-sm-block logo-alt-text'>CriTMx's Abyss</h4>
        </span>
    )
}

export default Logo;