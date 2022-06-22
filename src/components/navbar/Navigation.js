import NavLinks from './NavLinks'
import Logo from '../../images/pattern.svg'

const Navigation = () => {


    return (
    <nav className='navigation transparent'>
        <NavLinks/>
        <div>
        <img src={Logo} className='logo'/>
        </div>
    </nav>
    );
}

export default Navigation;