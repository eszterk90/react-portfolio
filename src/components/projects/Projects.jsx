import React, {useContext} from 'react'
import Context from '../../store/context'
import Library from '../../images/Library.png'
import CrwnProject from '../../images/CWRN-WEBSHOP.png'
import Agency from '../../images/X-AGENCY.png'
import Noix from '../../images/Noix.png'

function Projects() {

    const {toggleProjects, active} = useContext(Context)
  return (
    <section className="sec-3" id="projects">
    <h2>Projects</h2>
    <div className="projects_wrapper">
        <div className="projects">
            <div className="project_container">
                <img src={Noix} alt="project"/>
                <div className="click_here">
                    <a href="https://make.noix.space/" target="_about">NÖIX - connects musicians</a>
                </div>
            </div>
            <div className="description">
                <h5>What is this?</h5>
                <p>In this group project we created a MERN-Stack app for musicians to find band members and music collaboration partners who live in the same city. The main features include: select genres and instruments on your profile page, uploading music snippets of the artist's own music, find musicians with similar music taste, explore other profiles and listen to their uploaded music and, connect with other musicians and start a chat. I was in charge of writing the server side code and establishing communication with the client side using API calls. Besides that I took a great part of developing the real-time chat feature using socket.io. and creating the custom multi-audio player and database management.</p>
                <p>Technologies include: Node, React, MongoDB, Express, socket.io, SCSS, JWT, bcrypt</p>
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
                    <a href="https://mern-library-five.vercel.app/" target="_about">Mock-up Library</a>
                </div>
            </div> 
            <div className="description">
                <h5>What is this?</h5>
                <p>In this team project we created a full-stack mockup library, in which I wrote the most part of the server-side code, implemented state management using context api on the client side and took part in database management. Besides that I created and styled the home page, profile and single book components.</p>
            <p>Technologies: React, MongoDB, Express, Node, SCSS, HTML5</p>
            </div>
        </div>
         <div className="projects">
            <div className="project_container">
                <img src={Agency} alt="project"/>
                <div className="click_here">
                    <a href="https://x-agency.vercel.app/" target="_about">X-Agency</a>
                </div>
            </div>
            <div className="description">
                <h5>What is this?</h5>
                <p>In this group project we created the frontend side of a fictive agency website, specializing in web development and online marketing. I took part in implementing the project architecture and state management using context api and was responsible for creating and styling the career, contact and about pages.</p>
                <p>Technologies: React, SCSS, HTML5</p>
            </div>
        </div>
    </div>

    {/* 
    
    {active && (<div>
        
    </div>)}

    {active ? <div className="project_list"><button onClick={toggleProjects}>Show less</button></div> : <div className="project_list"><button onClick={toggleProjects}>Show more</button></div>} 

    */}

</section>

  )
}

export default Projects