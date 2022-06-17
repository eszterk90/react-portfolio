import {NavLink} from 'react-router-dom'
import React, {useContext} from 'react'
import Context from '../../store/context'

const NavLinks = (props) => {

    const {handleResubmit} = useContext(Context);
    return (
        <ul>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/" id="home">HOME</NavLink></li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/about">About</NavLink></li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/projects">Projects</NavLink></li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/contact" onClick={handleResubmit}>Contact</NavLink></li>
    </ul>
    )
}

export default NavLinks