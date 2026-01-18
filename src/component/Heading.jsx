import React from 'react'
import { ReactTyped } from 'react-typed';
import AnimatedSection from './AnimatedSection';

export default function Heading() {
  return (
    <AnimatedSection >
    <div>
        <h2 className="text-5xl font-display mb-4 text-glass-glow">Hey there!{' '} 
        <ReactTyped strings={["I'm Abhijeet singh","I'm a Software Engineer",]} typeSpeed={75} backSpeed={50} />
        </h2>
        <p className="text-xl mb-6 text-glass-white font-body">A tech enthusiast crafting solutions that inspire and innovate</p>
        <button onClick={() => window.location.href = '#projects'} className="mt-6 glass-button px-8 py-3 rounded-full font-heading">Explore My Work</button>
    </div>
    </AnimatedSection>
  )
}
