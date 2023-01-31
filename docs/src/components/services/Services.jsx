import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What Do I Offer</h5>
      <h2>Services</h2>

      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>UX/UI Design</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor</p>
            </li>
          </ul>
        </article>
        {/* UX/UI END */}
        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor</p>
            </li>
          </ul>
        </article>
        {/* WEB END */}
        <article className="service">
          <div className="service-head">
            <h3>Data Science</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <BiCheck className='service-list-icon'/>
              <p>Lorem ipsum dolor</p>
            </li>
          </ul>
        </article>
        {/* DATA END */}
      </div>
    </section>
  )
}

export default Services