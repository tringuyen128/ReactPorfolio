import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Tri Nguyen</h1>
        <h3 className="text-light">Fullstack Web Developer</h3>
        <h5 className="text-light">
          <em>
            I build websites with a focus on responsive design and
            accessibility.
          </em>
        </h5>
        <CTA />
        <a href="#contact" className="scroll__down"></a>
      </div>
    </header>
  )
}

export default Header
