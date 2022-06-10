import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { BsBookmarkCheck } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageDots } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <BiUser />
      </a>
      <a
        href="#skill"
        onClick={() => setActiveNav('#skill')}
        className={activeNav === '#skill' ? 'active' : ''}
      >
        <BsBookmarkCheck />
      </a>
      <a
        href="#project"
        onClick={() => setActiveNav('#project')}
        className={activeNav === '#project' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageDots />
      </a>
    </nav>
  )
}

export default Nav
