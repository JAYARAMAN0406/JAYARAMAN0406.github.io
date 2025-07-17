import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Server, Smartphone, Globe, GitBranch, Menu, X, Calendar, GraduationCap } from 'lucide-react';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = {
    "Backend Development": ["Spring Boot Framework", "Java Development", "RESTful API Design", "Database Integration", "Microservices Architecture"],
    "Frontend Development": ["React.js", "Angular JS", "Web Design", "UI Updates", "Tailwind CSS"],
    "Tools & Technologies": ["Git Version Control", "API Integration", "Troubleshooting and Debugging"],
    "Design & UX": ["User Experience Design", "Usability Testing"]
  };

  const projects = [
    {
      title: "Media Streaming Application",
      description: "Developed a real-time media streaming application using Vite, React.js, Tailwind CSS, and Material-UI for a responsive and modern user interface. Integrated with a Spring Boot backend to handle APIs, authentication, and data processing.",
      technologies: ["React.js", "Vite", "Tailwind CSS", "Material-UI", "Spring Boot"],
      github: "#",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Basic Calculator",
      description: "Created a Basic Calculator application using HTML, CSS, and JavaScript to strengthen foundational web development skills. Implemented core functionalities like addition, subtraction, multiplication, and division with a user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      icon: <Code className="w-6 h-6" />
    }
  ];

 const scrollToSection = (id) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
  setIsMenuOpen(false);
};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">Jayaraman M</h1>
                <p className="text-sm text-gray-600">Full Stack Developer</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">About</button>
                <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Skills</button>
                <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Experience</button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Projects</button>
                <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Education</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">About</button>
                <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Skills</button>
                <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Experience</button>
                <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Projects</button>
                <button onClick={() => scrollToSection('education')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Education</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
 <section
  id="about"
  className="relative pt-20 pb-16 overflow-hidden"
>

  <div
    className="absolute inset-0 bg-contain bg-center opacity-50"
    style={{ backgroundImage: "url('./images/fullstack.jpg')" }}
  ></div>


   <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 opacity-40"></div>
     <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              {/* <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold text-blue-600">JM</span>
              </div> */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Jayaraman M
              </h1>
              <p className="text-xl text-white mb-6 font-semibold">Full Stack Developer</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 font-semibold" />
                  <span className="font-semibold">Kanchipuram, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-2 ">
                  <Mail className="w-4 h-4 font-semibold" />
                  <span className="font-semibold">jayaraman040699@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 font-semibold" />
                  <span className="font-semibold">+91 6380225068</span>
                </div>
              </div>
            </div>
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-lg text-white leading-relaxed font-semibold">
                User-focused Full Stack Developer with expertise in Spring Boot and Java. Strong understanding of usability goals and design principles, and skilled in building optimized user interfaces and robust backend systems. Proven track record of delivering successful projects by collaborating with teams and stakeholders.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://linkedin.com/in/jayaraman-m-816287228" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a href="https://github.com/jayaraman040699" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors duration-200 flex items-center justify-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive expertise across the full stack development lifecycle
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  {index === 0 && <Server className="w-6 h-6 text-blue-600 mr-3" />}
                  {index === 1 && <Smartphone className="w-6 h-6 text-teal-600 mr-3" />}
                  {index === 2 && <GitBranch className="w-6 h-6 text-orange-600 mr-3" />}
                  {index === 3 && <Globe className="w-6 h-6 text-purple-600 mr-3" />}
                  <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {skillList.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-700 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building scalable solutions and leading development initiatives
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-6">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Full Stack Developer</h3>
                  <p className="text-lg text-blue-600 mb-2">Quadprosoft Technologies</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>September 2022 - April 2025 | Kanchipuram, Tamil Nadu</span>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Designed and implemented scalable backend services using Spring Boot and Java
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Built responsive and dynamic front-end applications using React.js
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Integrated APIs for seamless communication between frontend and backend
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Utilized Git for version control and collaborated effectively with the development team
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Participated in code reviews and mentoring junior developers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing innovative solutions and technical expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a href={project.github} className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Academic foundation in computer science and technology
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-6">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Master of Science in Computer Science (M.Sc)</h3>
                  <p className="text-lg text-green-600 mb-2">SRM Arts And Science College</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>2017 - 2022 | Chengalpattu, Tamil Nadu</span>
                  </div>
                  <p className="text-gray-700">
                    Comprehensive study of computer science fundamentals, software development methodologies, and advanced programming concepts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-white max-w-2xl mx-auto mb-12">
              Let's discuss how we can work together to bring your ideas to life
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-white">jayaraman040699@gmail.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-white">+91 6380225068</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-white">Kanchipuram, Tamil Nadu</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:jayaraman040699@gmail.com" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Send Email
              </a>
              <a href="https://linkedin.com/in/jayaraman-m-816287228" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors duration-200 flex items-center justify-center gap-2">
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">© 2025 Jayaraman M. All rights reserved.</p>
            <p className="text-gray-500 text-sm">
              Always committed to continuous learning and keeping up with the latest technologies and trends in web and backend development.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;