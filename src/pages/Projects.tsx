import { motion } from "framer-motion";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#13111C] min-h-screen"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-white mb-8 text-center"
        >
          My Projects
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mb-12 text-center max-w-2xl mx-auto"
        >
          Here's a collection of projects I've worked on. Each one represents a unique challenge
          and learning experience in my journey as a developer.
        </motion.p>
      </div>
      <Projects />
      <Footer />
    </motion.div>
  );
};

export default ProjectsPage;
