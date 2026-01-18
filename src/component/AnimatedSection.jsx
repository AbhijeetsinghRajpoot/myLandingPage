import React, { useState, useEffect } from 'react';
import useOnScreen from '../hooks/useOnScreen';


// Custom Cursor Component (Dot and Circle effect)


// Animated section wrapper
const AnimatedSection = ({ children, className }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section
            ref={ref}
            className={`${className} transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            {children}
        </section>
    );
};
export default AnimatedSection;




// // --- Page Sections ---

// const Hero = () => {
//     return (
//         <div className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
//              {/* Animated Gradient Background */}
//             <div className="absolute inset-0 -z-10">
//                 <div className="absolute inset-0 bg-gray-900"></div>
//                 <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 via-purple-900/50 to-gray-900 animate-gradient-xy"></div>
//             </div>
            
//             <div className="transform transition-all duration-1000 ease-in-out">
//                 <h1 className="text-5xl md:text-8xl font-bold text-white mb-4">
//                     Your Name
//                 </h1>
//                 <p className="text-xl md:text-2xl text-teal-300 mb-8">
//                     Creative React Developer & UI Enthusiast
//                 </p>
//                 <a href="#projects" className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-400 transition-all duration-300">
//                     View My Work
//                 </a>
//             </div>
//         </div>
//     );
// };

// const About = () => {
//     return (
//         <AnimatedSection id="about" className="py-20 lg:py-32">
//             <div className="container mx-auto px-4 max-w-4xl text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
//                 <p className="text-lg text-gray-400 leading-relaxed">
//                     Hello! I'm a passionate web developer with a love for creating beautiful, intuitive, and high-performance user interfaces with React. I thrive on turning complex problems into simple, elegant solutions. When I'm not coding, you can find me exploring the latest design trends or contributing to open-source projects.
//                 </p>
//             </div>
//         </AnimatedSection>
//     );
// };


// const Projects = () => {
//     // --- Placeholder Project Data ---
//     const projectData = [
//         {
//             title: "Project One",
//             description: "A sleek and modern e-commerce platform built with Next.js and Tailwind CSS, featuring real-time product updates.",
//             tags: ["React", "Next.js", "Tailwind CSS"],
//             liveUrl: "#",
//             githubUrl: "#",
//             imageUrl: "https://placehold.co/600x400/111827/14b8a6?text=Project+One"
//         },
//         {
//             title: "Project Two",
//             description: "An interactive data visualization dashboard for tracking metrics, created with D3.js and React.",
//             tags: ["React", "D3.js", "Firebase"],
//             liveUrl: "#",
//             githubUrl: "#",
//             imageUrl: "https://placehold.co/600x400/111827/14b8a6?text=Project+Two"
//         },
//         {
//             title: "Project Three",
//             description: "A collaborative project management tool that helps teams stay organized and on track.",
//             tags: ["React", "Node.js", "MongoDB"],
//             liveUrl: "#",
//             githubUrl: "#",
//             imageUrl: "https://placehold.co/600x400/111827/14b8a6?text=Project+Three"
//         },
//     ];

//     return (
//         <AnimatedSection id="projects" className="py-20 lg:py-32 bg-gray-900/50">
//             <div className="container mx-auto px-4 max-w-6xl">
//                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">My Projects</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {projectData.map((project, index) => (
//                         <div key={index} className="bg-gray-800 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
//                             <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
//                             <div className="p-6">
//                                 <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                                 <p className="text-gray-400 mb-4">{project.description}</p>
//                                 <div className="flex flex-wrap gap-2 mb-4">
//                                     {project.tags.map(tag => <span key={tag} className="bg-teal-900/50 text-teal-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>)}
//                                 </div>
//                                 <div className="flex items-center justify-end space-x-4">
//                                     <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
//                                         <ExternalLinkIcon />
//                                     </a>
//                                     <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
//                                         <GithubIcon />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </AnimatedSection>
//     );
// };




// const Contact = () => {
//     return (
//         <AnimatedSection id="contact" className="py-20 lg:py-32 bg-gray-900/50">
//             <div className="container mx-auto px-4 max-w-3xl text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
//                 <p className="text-lg text-gray-400 mb-8">
//                     I'm currently open to new opportunities and collaborations. Feel free to reach out!
//                 </p>
//                 <a href="mailto:your.email@example.com" className="inline-block bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-400 transition-all duration-300 text-lg">
//                     Say Hello
//                 </a>
//             </div>
//         </AnimatedSection>
//     );
// };

// const Footer = () => {
//     return (
//         <footer className="py-10">
//             <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center">
//                 <p className="text-gray-500">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
//                 <div className="flex space-x-6 mt-4 md:mt-0">
//                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors"><GithubIcon/></a>
//                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors"><LinkedinIcon/></a>
//                    <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-teal-400 transition-colors"><MailIcon/></a>
//                 </div>
//             </div>
//         </footer>
//     );
// };


// // --- Main App Component ---

// export default function App() {
//   return (
//     // The main container with custom font and styles
//     <div className="bg-gray-900 text-white font-sans leading-normal tracking-tight">
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
//         html {
//             scroll-behavior: smooth;
//         }
//         body {
//             font-family: 'Inter', sans-serif;
//         }
//         @keyframes gradient-xy {
//             0%, 100% {
//                 background-size: 400% 400%;
//                 background-position: center top;
//             }
//             50% {
//                 background-size: 200% 200%;
//                 background-position: center center;
//             }
//         }
//         .animate-gradient-xy {
//             animation: gradient-xy 15s ease infinite;
//         }
//       `}</style>

//       {/* Renders the custom cursor */}
   
      
//       {/* Main layout */}
//       <main>
//         <Hero />
//         <About />
//         <Projects />
//         <Skills />
//         <Contact />
//       </main>

//       <Footer />
//     </div>
//   );
// }
