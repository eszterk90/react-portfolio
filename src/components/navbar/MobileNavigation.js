import NavLinks from './NavLinks'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import React, {useContext} from 'react'
import Context from '../../store/context'
import CV from '../../assets/EszterKadar_CV_EN_2023.pdf'
 

const MobileNavigation = () => {

    const {open, setOpen} = useContext(Context);

    const hamburger =  <AiOutlineMenu className='hamburger' size='60px' color='white' onClick={() => setOpen(!open)}/>
    const closeBtn =  <AiOutlineClose className='hamburger' size='60px' color='white' onClick={() => setOpen(!open)}/>
   

   const closeMobileMenu = () => setOpen(false);

    return (
        <nav className='mobile-nav'>
            {open ? closeBtn : hamburger}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
            <span className="button-mobile">
                <a className="cv-link" href={CV} download = "EszterKadar_CV_EN_2023.pdf">
                Download my CV
                </a>
            </span>
        </nav>
    );
}

export default MobileNavigation;