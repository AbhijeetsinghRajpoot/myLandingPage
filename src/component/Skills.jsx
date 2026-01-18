const Skills = () => {
    const skillsData = ["React", "JavaScript (ES6+)", "TypeScript", "Next.js", "Node.js", "HTML5", "CSS3", "Tailwind CSS", "Figma", "Firebase", "Git"];
    
    return (
        <AnimatedSection id="skills" className="py-20 lg:py-32">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Skills & Technologies</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skillsData.map(skill => (
                         <div key={skill} className="bg-gray-800 text-gray-300 py-2 px-5 rounded-lg text-lg font-medium">
                            {skill}
                         </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};