import React from 'react'
import './about.css'
import ME from '../../assets/image.PNG'
import { FaAward } from 'react-icons/fa'
import { RiTeamLine } from 'react-icons/ri'
import { BsFolderSymlink } from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          {/* <div className="about__me-image">
            <img src={ME} alt="image" />
          </div> */}
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience </h5>
              <small>2+ Years working</small>
            </article>
            <article className="about__card">
              <RiTeamLine className="about__icon" />
              <h5>Leadership</h5>
              <small>12+ years team leader</small>
            </article>
            <article className="about__card">
              <BsFolderSymlink className="about__icon" />
              <h5>Projects</h5>
              <small>50+ projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aut
            consequuntur aliquam dolore, sint, qui doloribus quasi quaerat odit
            incidunt veritatis ex. Veritatis, doloribus quo sed cupiditate porro
            dignissimos modi?
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
