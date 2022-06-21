import React from 'react'
import './about.css'
// import ME from '../../assets/image.PNG'
import { FaAward } from 'react-icons/fa'
import { RiTeamLine } from 'react-icons/ri'
import { BsFolderSymlink } from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      

      <div className="container about__container">
        <div className="about__me">
          {/* <div className="about__me-image">
            <img src={ME} alt="image" />
          </div> */}
          
        </div>

        <div className="about__content">
        <h5>Get To Know</h5>
      <h2>About Me</h2>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience </h5>
              <small>2+ Years of Coding</small>
            </article>
            <article className="about__card">
              <RiTeamLine className="about__icon" />
              <h5>Leadership</h5>
              <small>12+ Years as a Team Leader</small>
            </article>
            <article className="about__card">
              <BsFolderSymlink className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Projects</small>
            </article>
          </div>

          <p>
            A full-stack web developer located in Silicon Valley California, I enjoy creating things that live on the internet with a full passion for UI effects, animations, and dynamic user experiences. 
            Complete a full-stack course from UC Berkeley Extension that covers everything to building a complete web app using popular and modern technologies like React, GraphQL, Redux, etc. 
            <br></br>
            As a well-organized person, a great problem solver, and an experienced team leader with high attention to detail, I successfully worked with teams proven by ambitious projects and inclusive products.  
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
