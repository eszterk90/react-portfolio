import React from 'react'
import {AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter} from 'react-icons/ai'
import LinePattern from '../../images/bigPattern.svg'

function ContactInfo() {
  return (
    <div className='info-container'>
        <div className='get-in-touch'>
            <h4>Get in touch</h4>
        </div>
        <div className='contact-list'>
            <AiOutlineMail/> <span>eszter.kadar1@gmail.com</span>
            <div className='contact-logo'>
                <a href='https://www.linkedin.com/in/eszter-kadar-7642146a/' target='blank'><AiOutlineLinkedin/></a>
                <a href='https://github.com/eszterk90' target='blank'><AiOutlineGithub/></a>
                <a href='https://twitter.com/?lang=de' target='blank'><AiOutlineTwitter/></a>
            </div>
        </div>
        <div className='line-pattern'>
        <img src={LinePattern} className='logo'/></div>
    </div>
  )
}

export default ContactInfo