import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qfogjww', 'template_7mhycr9', form.current, 'l4QEqVQyNlU71nAff')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container container-contact">
        <div className="contact-options">
          <article className='contact-option'>
          <MdOutlineEmail className='contact-option-img'/>
          <h4>E-mail</h4>
          <h5>vitorkretiska@gmail.com</h5>
          <a href='mailto:vitorkretiska@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact-option'>
          <FiTwitter className='contact-option-img'/>
          <h4>Twitter</h4>
          <h5>@vkretiska</h5>
          <a href='https://twitter.com/vkretiska' target='_blank'>Send a message</a>
          </article>
          <article className='contact-option'>
          <BsWhatsapp className='contact-option-img'/>
          <h4>WhatsApp</h4>
          <h5>+55 (48) 98422-1010</h5>
          <a href='https://api.whatsapp.com/send?phone=5548984221010' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* CONTACTS OPTIONS END */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Your Full Name' name='name' required/>
          <input type="email" placeholder='Your E-mail' name='email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact