import React from 'react'
import Image from '/pod_img.png'
import AnimatedSection from './AnimatedSection'

function Avatar() {
  return (
    <AnimatedSection >
    <img src={Image} alt="Description"  width="200" loop="2" className='mx-auto  border-4 border-white rounded-full' />
    </AnimatedSection>
  )
}

export default Avatar