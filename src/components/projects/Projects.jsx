import React from 'react'
import {Link} from 'react-router-dom'
import CreateBlog from '../../images/create-blog-2.png'
import Calculator from '../../images/calculator.png'
import Monsters from '../../images/monsters-rolodex.png'

function Projects() {
  return (
    <section className="sec-3" id="projects">
    <h2>Projects</h2>
    <div className="projects_wrapper">
        <div className="projects p-1">
            <div className="project_container">
                <img src={CreateBlog} alt="project"/>
                <div className="click_here">
                    <Link to="/blog" target="_about">Generic blog</Link>
                </div>
            </div>
            <div className="description">
                <h5>What is this?</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nam ea, perferendis pariatur explicabo illo doloribus! Veritatis quia molestiae qui!</p>
            </div>
        </div>
        <div className="projects p-2">
            <div className="project_container">
                <img src={Calculator} alt="project"/>
                <div className="click_here">
                    <Link to="/calculator" target="_about">Calculator App</Link>
                </div>
            </div> 
            <div className="description">
                <h5>What is this?</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nam ea, perferendis pariatur explicabo illo doloribus! Veritatis quia molestiae qui!</p>
            </div>
        </div>
        <div className="projects p-3">
            <div className="project_container">
                <img src={Monsters} alt='project'/>
                <div className="click_here">
                    <Link to="/monsters" target="_about">Monsters rolodex</Link>
                </div>
            </div>
            <div className="description">
                <h5>What is this?</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nam ea, perferendis pariatur explicabo illo doloribus! Veritatis quia molestiae qui!</p>
            </div>
        </div>
    </div>
    <div className="project_list"><a href="https://github.com/eszterk90" target='_blank'>See All</a></div>
</section>
  )
}

export default Projects