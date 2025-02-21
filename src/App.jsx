import React from 'react';
import Avtar from './component/Avatar';
import Heading from './component/Heading';
import Showcase from './component/Showcase';
import {slidesData, slidesData2} from './data';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg text-white sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-wide">Dev_Abhijeet</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:underline hover:text-gray-200 transition">About</a></li>
            <li><a href="#projects" className="hover:underline hover:text-gray-200 transition">Projects</a></li>
            <li><a href="#contact" className="hover:underline hover:text-gray-200 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-24">
        <Avtar></Avtar>
        <Heading></Heading>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto my-20 px-6">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">About Me</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          I’m a passionate developer with a love for the MERN stack and cloud computing. Whether it’s solving intricate problems or designing intuitive user interfaces, I’m always up for a challenge. Currently diving into AWS and building future-ready web applications.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10 text-center text-gray-800">My Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition ">
              <h4 className="text-xl font-bold mb-3">Mission 1 Million</h4>
              <p className="text-gray-600">An online learning platform to empower 1 million learners with skill-based knowledge. Built using the MERN stack.</p>
              <Showcase slides={slidesData} ></Showcase>
              <a href="https://m1m.vercel.app/" target="_blank">
              <button   className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition"  >Vist </button></a>
            </div>
            {/* Project 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h4 className="text-xl font-bold mb-3">Portfolio Builder</h4>
              <p className="text-gray-600">A customizable portfolio generator for developers. Includes live previews and deployment options.</p>
              <Showcase slides={slidesData2} ></Showcase>
              <a href="http://galasitsolutions.com/" target="_blank">
              <button   className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition"  >Vist </button></a>

            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto my-20 px-6">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Get In Touch</h3>
        <form className="bg-white shadow-lg rounded-lg p-8">
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Name</label>
            <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Your Name" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Your Email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Message</label>
            <textarea className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 text-center">
        <p>&copy; 2025 Dev_Abhijeet. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
