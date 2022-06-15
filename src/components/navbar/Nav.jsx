import React from 'react'
import {NavLink} from 'react-router-dom'
import Context from '../../store/context'
import {useContext} from 'react'

function Nav() {

    const {handleResubmit} = useContext(Context);
  return (
    <nav className="menu-wrap">
        <input type="checkbox" className="toggler"/>
        <div className="hamburger"><div></div></div>
        <div className="menu">
            <div>
                <div>
                    <ul>
                        <li><NavLink to="/" id="home">HOME</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/contact" onClick={handleResubmit}>Hire me!</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav