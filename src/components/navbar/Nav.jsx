import React from 'react'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'
import Context from '../../store/context'
import {useContext} from 'react'

function Nav() {

    const {handleResubmit} = useContext(Context);
  return (
    <div className="NavBar">
        <Navigation/>
        <MobileNavigation/>
    
    </div>
  )
}

export default Nav