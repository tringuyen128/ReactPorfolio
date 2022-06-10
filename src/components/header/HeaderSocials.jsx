import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/tri-nguyen-3512011bb/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/tringuyen128?tab=repositories">
        <BsGithub />
      </a>
    </div>
  )
}

export default HeaderSocials
