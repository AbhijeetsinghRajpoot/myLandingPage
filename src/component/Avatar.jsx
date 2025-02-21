import React from 'react'
import Image from '/waving.webp'

function Avatar() {
  return (
    <img src={Image} alt="Description"  width="200" loop="2" className='mx-auto border-4 border-white rounded-full' />
  )
}

export default Avatar