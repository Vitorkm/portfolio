import React from 'react'
import './footer.css'
import {FiTwitter} from 'react-icons/fi'	
import {BsLinkedin, BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer-logo'>VKM</a>

      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href='https://instagram.com/vkretiska'><BsInstagram /></a>
        <a href='https://twitter.com/vkretiska'><FiTwitter /></a>
        <a href='https://www.linkedin.com/in/vitor-kretiska/'><BsLinkedin /></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; VKM. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer