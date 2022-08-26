import React, {useContext} from 'react'
import Context from '../../store/context'
import Library from '../../images/Library.png'
import CrwnProject from '../../images/CWRN-WEBSHOP.png'
import Agency from '../../images/X-AGENCY.png'


function Projects() {

    const {toggleProjects, active} = useContext(Context)
  return (
    <section className="sec-3" id="projects">
    <h2>Projects</h2>
    <div className="projects_wrapper">
        <div className="projects">
            <div className="project_container">
                <img src={Agency} alt="project"/>
                <div className="click_here">
                    <a href="https://x-agency.vercel.app/" target="_about">X-Agency</a>
                </div>
            </div>
            <div className="description">
                <h5>What is this?</h5>
                <p>In this group project we created the frontend side of a fictive agency website, specializing in web development and online marketing. I took part in implementing the project architecture using context api and wrote the code for the career, contact and about pages.</p>
                <p>Technologies: React, SCSS, HTML5</p>
            </div>
        </div>
        <div className="projects">
            <div className="project_container">
                <img src={CrwnProject} alt='project'/>
                <div className="click_here">
                    <a href="https://crwn-webshop.netlify.app/" target="_about">CRWN-Webshop</a>
                </div>
            </div>
            <div className="description">
                <h5>What is this?</h5>
                <p>This is a full-stack E-commerce app that I created by completing the Complete React Developer in 2022 on Udemy. Building this project I learnt about design patterns, how to architect my app, organize code, structure folders, and how to think about performance.</p>
                <p>Technologies: React, Firebase, SCSS, Redux, GraphQL, Typescript</p>
            </div>
        </div>
        <div className="projects">
        <div className="project_container">
            <img src={Library} alt="project"/>
            <div className="click_here">
                <a href="https://mern-library-five.vercel.app/" target="_about">Library</a>
            </div>
        </div> 
        <div className="description">
        <h5>What is this?</h5>
        <p>In this team project we created a full-stack mockup library, in which I implemented and leveraged the logic and functionality of the code using context api, took part in writing the server side code and created the home page, profile and single book components.</p>
        <p>Technologies: React, MongoDB, Express, Node, SCSS, HTML5</p>
        </div>
    </div>
    </div>

    {/* -------- */}

    {active && (<div>
        
    </div>)}

    {active ? <div className="project_list"><button onClick={toggleProjects}>Show less</button></div> : <div className="project_list"><button onClick={toggleProjects}>Show more</button></div>}
</section>

  )
}

export default Projects