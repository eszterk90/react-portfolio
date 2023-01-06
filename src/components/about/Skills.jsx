import React from 'react'
import {AiOutlineHtml5, AiOutlineStar} from 'react-icons/ai'
import {DiCss3Full, DiSass, DiJavascript1, DiReact} from 'react-icons/di'
import {SiMongodb, SiTypescript, SiAngular, SiExpress, SiMysql, SiFirebase} from 'react-icons/si'
import {FaNode} from 'react-icons/fa' 

// const skills = [
//   {skill: 'HTML',
//    level: 3,
//    icon: '<AiOutlineHtml5/>',
//   },

//   {skill: 'CSS',
//   level: 3,
//   icon: '<DiCss3Full/>',
//   },

//   {skill: 'BOOTSTRAP',
//   level: 2,
//   icon: '<BsBootstrap/>',
//   },

//   {skill: 'SCSS',
//   level: 2,
//   icon: '<DiSass/>',
//   },

//   {skill: 'JAVASCRIPT',
//   level: 2,
//   icon: '<DiJavascript1/>',
//   },

//   {skill: 'REACT',
//   level: 2,
//   icon: '<DiReact/>',
//   },

//   {skill: 'NODE',
//   level: 1,
//   icon: '<FaNode/>',
//   },

//   {skill: 'PYTHON',
//   level: 1,
//   icon: '<DiPython/>',
//   },
// ]

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills_container">
        <div className="skill skill1">
          <AiOutlineHtml5 className='skill-icon'/>
          <h4>HTML5</h4>
          <div className="star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
        </div> 
        <div className="skill skill2">
          <DiCss3Full className='skill-icon'/>
          <h4>CSS</h4>
          <div className="star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
        </div>
        <div className="skill skill3">
          <DiSass className='skill-icon'/>
          <h4>SCSS</h4>
          <div className="star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
        </div>
        <div class="skill skill4">
          <DiJavascript1 className='skill-icon'/>
          <h4>Javascript</h4>
          <div class="star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
        </div>
        <div class="skill skill5">
          <SiTypescript className='skill-icon'/>
          <h4>Typescript</h4>
          <div class="star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
        </div>
        <div className="skill skill6">
          <DiReact className='skill-icon'/>
          <h4>React</h4>
          <div className="star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
        </div>
        <div className="skill skill7">
          <SiAngular className='skill-icon'/>
          <h4>Angular</h4>
          <div className="star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
        </div>
        <div className="skill skill8">
          <FaNode className='skill-icon'/>
          <h4>Node</h4>
          <div className="star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
        </div>
        <div className="skill skill9">
          <SiExpress className='skill-icon'/>
          <h4>Express</h4>
          <div className="star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
        </div>
        <div className="skill skill10">
          <SiMongodb className='skill-icon'/>
          <h4>MongoDB</h4>
          <div class="star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
        </div>
        <div className="skill skill11">
          <SiMysql className='skill-icon'/>
          <h4>MySQL</h4>
          <div class="star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
        </div>
        <div className="skill skill12">
          <SiFirebase className='skill-icon'/>
          <h4>Firebase</h4>
          <div class="star"><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
        </div>
      </div>
    </div>
  )
}

export default Skills