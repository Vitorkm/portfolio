import React from 'react'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href='https://www.linkedin.com/in/vitor-kretiska/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Vitorkm' target="_blank"><FaGithub/></a>
        <a href='https://www.instagram.com/vkretiska/' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials;