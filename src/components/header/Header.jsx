import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className='text-light' id='intro-header'>Hello, I'm</h5>
        <h1>Tri Nguyen</h1>
        <h3 className="text-light" id='title-header'>Fullstack Web Developer</h3>
        <h5 className="text-light">
          <em>
            I build websites with a focus on responsive design and
            accessibility.
          </em>
        </h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down >>
        </a>
      </div>
    </header>
  )
}

export default Header
