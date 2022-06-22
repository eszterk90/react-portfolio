import React from 'react'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

function Nav() {

  return (
    <div className="NavBar">
        <Navigation/>
        <MobileNavigation/>
    
    </div>
  )
}

export default Nav