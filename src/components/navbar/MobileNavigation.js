import NavLinks from './NavLinks'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import React, {useContext} from 'react'
import Context from '../../store/context'
 

const MobileNavigation = () => {

    const {open, setOpen} = useContext(Context);

    const hamburger =  <AiOutlineMenu className='hamburger' size='40px' color='white' onClick={() => setOpen(!open)}/>
    const closeBtn =  <AiOutlineClose className='hamburger' size='40px' color='white' onClick={() => setOpen(!open)}/>
   

   const closeMobileMenu = () => setOpen(false);
    return (
        <nav className='mobile-nav'>
            {open ? closeBtn : hamburger}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
    );
}

export default MobileNavigation;