import React from 'react'
import Intro from './Intro'
import Skills from './Skills'
import AboutMeText from './AboutMeText'



function About() {
  return (
    <section className="sec-2" id="about">
           <Intro/>
           <Skills/>
           <AboutMeText/>
        </section>
  )
}

export default About