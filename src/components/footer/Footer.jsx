import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>TRI NGUYEN</a>

      <ul className='permalinks'>
        <li> <a href='#'>Home</a></li>
        <li> <a href='#about'>About</a></li>
        <li> <a href='#skill'>Skills</a></li>
        <li> <a href='#project'>Projects</a></li>
        <li> <a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/tri-nguyen-3512011bb/'><BsLinkedin /></a>
        <a href='https://github.com/tringuyen128'><BsGithub /></a>
        </div>
    </footer>
  )
}


export default Footer
