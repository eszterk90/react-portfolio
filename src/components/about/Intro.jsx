import React from 'react'
import Image from '../../images/Eszter_K.jpeg'

function Intro() {
  return (
    <div className="side_container">
        <div className="img_container">
            <img src={Image} alt=""/>
        </div>
        <div className="intro">
            <h3>Hi! My name is Eszter. I'm a full stack web developer.</h3>
        </div>
    </div>
  )
}

export default Intro