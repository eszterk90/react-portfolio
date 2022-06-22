import React from 'react'
import {AiOutlineHtml5, AiOutlineStar} from 'react-icons/ai'
import {DiCss3Full, DiSass, DiJavascript1, DiReact, DiPython} from 'react-icons/di'
import {BsBootstrap} from 'react-icons/bs'
import {FaNode} from 'react-icons/fa' 

const skills = ['HTML', 'CSS', 'BOOTSTRAP', 'SCSS', 'JAVASCRIPT', 'REACT', 'NODE', 'PYTHON']

function Skills() {
  return (
    <div className="skills" id="skills">
                <h3>Skills</h3>
                <div className="skills_container">
                    <div className="skill skill1">
                      <AiOutlineHtml5 className='skill-icon'/>
                        <h4>HTML</h4>
                        <div className="star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
                    </div> 
                    <div className="skill skill2">
                      <DiCss3Full className='skill-icon'/>
                        <h4>CSS</h4>
                        <div className="star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
                    </div>
                    <div className="skill skill3">
                      <BsBootstrap className='skill-icon'/>
                        <h4>BOOTSTRAP</h4>
                        <div className="star"><AiOutlineStar/><AiOutlineStar/></div>
                    </div>
                    <div className="skill skill4">
                      <DiSass className='skill-icon'/>
                        <h4>SCSS</h4>
                        <div className="star">
                        <AiOutlineStar/><AiOutlineStar/>
                        </div>
                    </div>
                    <div class="skill skill5">
                        <DiJavascript1 className='skill-icon'/>
                        <h4>JAVASCRIPT</h4>
                        <div class="star">
                        <AiOutlineStar/><AiOutlineStar/>
                        </div>
                    </div>
                    <div className="skill skill6">
                        <DiReact className='skill-icon'/>
                        <h4>REACT</h4>
                        <div className="star">
                          <AiOutlineStar/><AiOutlineStar/>
                        </div>
                    </div>
                    <div className="skill skill7">
                        <FaNode className='skill-icon'/>
                        <h4>NODE</h4>
                        <div className="star">
                          <AiOutlineStar/>
                        </div>
                    </div>
                    <div className="skill skill8">
                        <DiPython className='skill-icon'/>
                        <h4>PYTHON</h4>
                        <div class="star">
                          <AiOutlineStar/>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Skills