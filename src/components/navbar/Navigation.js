import NavLinks from './NavLinks'
import {useContext} from 'react'
import Context from '../../store/context'

const Navigation = () => {

    const {open, setOpen} = useContext(Context);

    return (
    <nav className='navigation transparent'>
        <NavLinks/>
    </nav>
    );
}

export default Navigation;