import React from 'react';
import Avtar from './component/Avatar';
import Heading from './component/Heading';
import Showcase from './component/Showcase';
import Query from './component/Querry';
import CustomCursor from './component/CustomCursor';
import Navbar from './component/Navbar';
import About from './component/About';
import SolarSystem from './view/milkyway/solarSystem';
const App = () => {
 

  return (
    <div className="glass-bg min-h-screen font-alliance relative">
      <CustomCursor/>
      {/* Galaxy Background Effects */}
      <div className="galaxy-container">
        {/* Star Field */}
        <div className="star-field"></div>
        
        {/* Nebula Clouds */}
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="nebula nebula-3"></div>
        
        {/* Cosmic Particles */}
        <div className="cosmic-particle"></div>
        <div className="cosmic-particle"></div>
        <div className="cosmic-particle"></div>
        <div className="cosmic-particle"></div>
        <div className="cosmic-particle"></div>
        <div className="cosmic-particle"></div>
        <div className="cosmic-particle"></div>
        <div className="cosmic-particle"></div>
        
        {/* Glass Orbs */}
        <div className="glass-orb"></div>
        <div className="glass-orb"></div>
        <div className="glass-orb"></div>
        
        {/* Shooting Stars */}
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      
      {/* Navbar */}
      <Navbar />


      {/* Hero Section */}
      <section className="relative text-center py-24 z-20">
        <div className="absolute inset-0 glass-strong opacity-30"></div>
        <div className="App relative z-10">
         
        </div>
        <div className="relative z-10 hero-text">
          <Avtar></Avtar>
          <Heading></Heading>
        </div>
      </section>

      {/* About Section */}
      <About />
      

      {/* Projects Section */}
        <SolarSystem/>
      {/* Contact Section */}
        <Query/>

      {/* Footer */}
      <footer className=" py-6 text-center">
        <p className="text-glass-white">&copy; 2026 Dev_Abhijeet. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
