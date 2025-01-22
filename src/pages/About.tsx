import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Abouts from '../components/Abouts';
import { FaInstagram } from 'react-icons/fa6';
import { SOCIAL_LINKS } from '../constants/socialLinks';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-[#13111C] text-white py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">About Me</h1>
          <div className="flex justify-center gap-6 mb-8">
            <Link
              to={SOCIAL_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              to={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              to={SOCIAL_LINKS.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              to={SOCIAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaInstagram size={24} />
            </Link>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Abouts />
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#1E1B2C] rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">My Journey</h2>
            <div className="space-y-8">
              {/* Timeline items */}
              <TimelineItem 
                year="2024"
                title="Software Developer"
                description="Currently working on exciting projects and expanding my skills in web development."
              />
              <TimelineItem 
                year="2023"
                title="Started Learning Programming"
                description="Began my journey in software development, focusing on web technologies."
              />
              <TimelineItem 
                year="2022"
                title="University"
                description="Started my Computer Science degree, laying the foundation for my tech career."
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => (
  <div className="relative pl-8 border-l-2 border-purple-500">
    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-purple-500 rounded-full" />
    <div className="text-purple-400 text-sm mb-1">{year}</div>
    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default About;
