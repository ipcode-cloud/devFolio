import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations and responsive design.",
    image: "./portfolio.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/ipcode-cloud/devFolio",
    liveLink: "https://your-portfolio-url.com",
    featured: true
  },
  {
    title: "Todo App",
    description: "A todo app built with Laravel, Alpine.js and Tailwind CSS. Features a clean and intuitive interface.",
    image: "./todo.png",
    technologies: ["Laravel", "Tailwind CSS", "Alpine.js"],
    githubLink: "https://github.com/ipcode-cloud/todoApp",
    featured: true
  },
  {
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for managing online store operations. Features real-time analytics and inventory management.",
      image: "./ecommerce.png",
      technologies: ["Next.js", "Redux", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/ecommerce-dashboard",
      featured: true
    },
  {
    title: "Weather App",
    description: "A beautiful weather application that provides real-time weather updates with animated visualizations.",
    image: "./weather.png",
    technologies: ["React", "OpenWeather API", "Chart.js", "Styled Components"],
    githubLink: "https://github.com/yourusername/weather-app",
    liveLink: "https://weather-app-demo.com"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-[#13111C]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
            Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1E1B2C] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-purple-600 rounded-full">
                    Featured
                  </span>
                </div>
              )}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B2C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-purple-600 transition-colors duration-300"
                  >
                    <FaGithub size={20} />
                  </Link>
                  {project.liveLink && (
                    <Link
                      to={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-purple-600 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={18} />
                    </Link>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm text-purple-400 bg-purple-500/10 rounded-full hover:bg-purple-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-800">
                  <Link
                    to={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    <FaCode size={16} />
                    <span>View Source Code</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
