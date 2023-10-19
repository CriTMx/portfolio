import logo from './media/weblogo.png';

function Logo()
{
    return (
        <a class="navbar-brand" href="#"><img id="imgLogo" className="img" src={logo} width='250px'></img></a>
    )
}

export default Logo;