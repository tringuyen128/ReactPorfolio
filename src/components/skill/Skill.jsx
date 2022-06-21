import React from 'react'
import './skill.css'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { DiJavascript } from 'react-icons/di'
import { FaBootstrap } from 'react-icons/fa'
import { SiMaterialui } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { GrGraphQl } from 'react-icons/gr'
import { SiMongodb } from 'react-icons/si'
import { FaPython } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'

const Skill = () => {
  return (
  <section id='skill'>
    <h5>What Skills I Have</h5>
    <h2>My Skills</h2>
    <div className="container experience__container">

      {/* FRONTEND SIDE */}
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
          <FaReact className="experience__details-icon"/>
          <div>
          <h4>React</h4>
          <small className="text-light">Experienced</small>
          </div>
          </article>
          <article className="experience__details">
          <FaHtml5 className="experience__details-icon"/>
          <div>
          <h4>HTML</h4>
          <small className="text-light">Experienced</small>
          </div>
          </article>
          <article className="experience__details">
          <FaCss3Alt className="experience__details-icon"/>
          <div>
          <h4>CSS</h4>
          <small className="text-light">Intermediate</small>
          </div>
          </article>
          <article className="experience__details">
          <DiJavascript className="experience__details-icon"/>
          <div>
          <h4>Javascript</h4>
          <small className="text-light">Experienced</small>
          </div>
          </article>
          <article className="experience__details">
          <FaBootstrap className="experience__details-icon"/>
          <div>
          <h4>Bootstrap</h4>
          <small className="text-light">Experienced</small>
          </div>
          </article>
          <article className="experience__details">
          <SiMaterialui className="experience__details-icon"/>
          <div>
          <h4>Material-UI</h4>
          <small className="text-light">Experienced</small>
          </div>
          </article>
        </div>
      </div>

{/* BACKEND SIDE */}
      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
          <FaNodeJs className="experience__details-icon"/>
          <div>
          <h4>NodeJS</h4>
          <small className="text-light">Experienced</small>
          </div>
          </article>
          <article className="experience__details">
          <GrGraphQl className="experience__details-icon"/>
          <div>
          <h4>GraphQL</h4>
          <small className="text-light">Experienced</small>
          </div>
          </article>
          <article className="experience__details">
          <SiMongodb className="experience__details-icon"/>
          <div>
          <h4>MongoDB</h4>
          <small className="text-light">Intermediate</small>
          </div>
          </article>
          <article className="experience__details">
          <FaPython className="experience__details-icon"/>
          <div>
          <h4>Python</h4>
          <small className="text-light">Experienced</small>
          </div>
          </article>
          <article className="experience__details">
          <GrMysql className="experience__details-icon"/>
          <div>
          <h4>MySQL</h4>
          <small className="text-light">Experienced</small>
          </div>
          </article>
         
        </div>
      </div>
    </div>
  </section>

  )
}

export default Skill
