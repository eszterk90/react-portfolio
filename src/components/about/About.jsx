import React from 'react'
import Image from '../../images/Eszter_K.jpeg'
import {AiOutlineHtml5, AiOutlineStar} from 'react-icons/ai'
import {DiCss3Full, DiSass, DiJavascript1, DiReact, DiPython} from 'react-icons/di'
import {BsBootstrap} from 'react-icons/bs'
import {FaNode} from 'react-icons/fa' 

function About() {
  return (
    <section className="sec-2" id="about">
            <div className="side_container">
                <div className="img_container">
                    <img src={Image} alt=""/>
                </div>
                <div className="intro">
                    <h3>Hi! My name is Eszter and I am a web developer based in Berlin.</h3>
                </div>
            </div>
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
            <div className="about">
                <h3>About me</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt alias aspernatur quibusdam molestias nulla aut, dolorem repudiandae veritatis dolore, placeat, cumque neque ipsam sit! Officiis nostrum earum cum error.</p>
                <p>Repellendus distinctio excepturi dolore delectus recusandae aspernatur nemo, repellat impedit cupiditate, qui minus architecto voluptates earum fuga facere a possimus rerum quidem voluptatibus quibusdam dolores eligendi doloremque labore! Sit, voluptatibus.</p>
                <h3>My mission</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab, tempore minus nihil sunt aperiam, quia itaque in corporis similique repellat beatae labore nemo iusto totam voluptatem distinctio nobis sapiente?
                Hic amet ducimus magnam doloremque ipsum voluptate veritatis obcaecati sapiente esse et quam suscipit, odio illo aperiam impedit dicta alias eos consequatur quibusdam nisi totam voluptates quae, dolorum velit. Facilis!</p>
            </div>
        </section>
  )
}

export default About