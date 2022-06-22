import React from 'react'
import Image from '../../images/Eszter_K.jpeg'

function Intro() {
  return (
    <div className="side_container">
        <div className="img_container">
            <img src={Image} alt=""/>
        </div>
        <div className="intro">
            <h3>Hi! My name is Eszter and I am a web developer based in Berlin.</h3>
        </div>
    </div>
  )
}

export default Intro