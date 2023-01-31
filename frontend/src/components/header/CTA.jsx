import React from 'react'
import Curriculum from '../../assets/curriculum.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Curriculum} download className='btn'>Download Curriculum</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA