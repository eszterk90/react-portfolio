import React, {useContext} from 'react'
import Context from '../../store/context'
import {Link} from 'react-router-dom'
import CreateBlog from '../../images/create-blog-2.png'
import Calculator from '../../images/calculator.png'
import Monsters from '../../images/monsters-rolodex.png'
import CrwnProject from '../../images/crwn-project.png'
import DogFinder from '../../images/dog-finder.png'

function Projects() {

    const {toggleProjects, active} = useContext(Context)
  return (
    <section className="sec-3" id="projects">
    <h2>Projects</h2>
    <div className="projects_wrapper">
        <div className="projects p-1">
            <div className="project_container">
                <img src={CreateBlog} alt="project"/>
                <div className="click_here">
                    <Link to="/blog" target="_about">Blog</Link>
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
                <img src={CrwnProject} alt='project'/>
                <div className="click_here">
                    <Link to="/monsters" target="_about">CRWN-Webshop</Link>
                </div>
            </div>
            <div className="description">
                <h5>What is this?</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nam ea, perferendis pariatur explicabo illo doloribus! Veritatis quia molestiae qui!</p>
            </div>
        </div>
    </div>

    {/* -------- */}

    {active ? (<div className="projects_wrapper">
        <div className="projects p-1">
            <div className="project_container">
                <img src={CreateBlog} alt="project"/>
                <div className="click_here">
                    <Link to="/blog" target="_about">Blog</Link>
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
    </div>) : null}

    {active ? <div className="project_list"><button onClick={toggleProjects}>Show less</button></div> : <div className="project_list"><button onClick={toggleProjects}>Show more</button></div>}
</section>
  )
}

export default Projects