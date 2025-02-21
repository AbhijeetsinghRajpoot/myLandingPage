import React from 'react'
import { ReactTyped } from 'react-typed';

export default function Heading() {
  return (
    <div>
        <h2 className="text-5xl font-bold mb-4">Hey there!{' '} 
        <ReactTyped strings={["I'm Abhijeet singh","I'm a Software Engineer",]} typeSpeed={75} backSpeed={50} />
        </h2>
        <p className="text-xl mb-6">A tech enthusiast crafting solutions that inspire and innovate</p>
        <button className="mt-6 bg-white text-blue-500 px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition">Explore My Work</button>
    </div>
  )
}
