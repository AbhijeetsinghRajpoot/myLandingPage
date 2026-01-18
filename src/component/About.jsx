import React from 'react';
import AnimatedSection from './AnimatedSection';

const About = () => {

   // --- SVG Icons (Self-contained components) ---

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

  const handleDownloadResume = () => {
    // You can replace this with your actual resume file path
    const resumeUrl = 'https://drive.google.com/file/d/1ArvcioFOMoU8dRytxJSJMB6pX2FQR7Yh/view?usp=sharing'; // Update this path to your actual resume file
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Abhijeet_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  };

  return (
    <AnimatedSection>
      <section id="about" className="container mx-auto my-20 px-6 relative z-20">
        <div className="glass-card p-8">
          <h3 className="text-3xl font-heading mb-8 text-glass-primary text-center">About Me</h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-glass-secondary text-lg leading-relaxed font-body mb-6">
                I'm a passionate developer with a love for the MERN stack and cloud computing. Whether it's solving intricate problems or designing intuitive user interfaces, I'm always up for a challenge. Currently diving into AWS and building future-ready web applications.
              </p>
              
              <div className="about-summary">
                <h4 className="text-xl font-heading mb-4 text-glass-primary">Professional Summary</h4>
                <p className="text-glass-secondary font-body leading-relaxed">
                  MERN Stack Developer with hands-on experience in React.js, Node.js, Express.js, MongoDB, and Redux. Skilled in building responsive, secure, and scalable web applications, integrating RESTful APIs, authentication, and payment gateways. Strong problem-solving, teamwork, and code optimization skills.
                </p>
              </div>
            </div>

            <div className="about-buttons">
              <button 
                title="Downoad Resume"
                onClick={handleDownloadResume}
                className="glass-button px-8 py-3 rounded-lg font-heading text-lg hover:scale-105 transition-transform duration-300"
              >
                {ExternalLinkIcon()}
              </button>
              
              <div className="flex gap-4">
                <a 
                  title='GitHub'
                  href="https://github.com/AbhijeetsinghRajpoot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-button px-6 py-3 rounded-lg font-heading hover:scale-105 transition-transform duration-300"
                >
                  {GithubIcon()}
                </a>
                <a 
                  title='LinkedIn'
                  href="https://www.linkedin.com/in/abhijeet-singh-719a1b223/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-button px-6 py-3 rounded-lg font-heading hover:scale-105 transition-transform duration-300"
                >
                  {LinkedinIcon()}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default About;
