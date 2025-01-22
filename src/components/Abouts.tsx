import { FaPencil, FaCode, FaLaptopCode, FaServer } from "react-icons/fa6";

const Abouts = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3 mb-4">
          Software Developer <span className="text-purple-500"><FaPencil className="animate-pulse" /></span>
        </h2>
        <p className="text-xl text-gray-400">
          Passionate about creating elegant solutions to complex problems.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-6 text-gray-300">
        <p className="leading-relaxed">
          I'm a dedicated software developer with a focus on web development and user experience. 
          My journey in tech is driven by a passion for creating intuitive and impactful digital solutions.
        </p>

        {/* Skills Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <SkillCard 
            icon={<FaCode />}
            title="Frontend Development"
            description="Crafting responsive and interactive user interfaces using modern frameworks"
          />
          <SkillCard 
            icon={<FaServer />}
            title="Backend Development"
            description="Building robust and scalable server-side applications"
          />
          <SkillCard 
            icon={<FaLaptopCode />}
            title="Full Stack Development"
            description="End-to-end application development with modern tech stacks"
          />
          <SkillCard 
            icon={<FaPencil />}
            title="UI/UX Design"
            description="Creating beautiful and intuitive user experiences"
          />
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-[#1E1B2C] p-4 rounded-lg">
    <div className="text-purple-500 text-xl mb-2">{icon}</div>
    <h3 className="text-white font-semibold mb-1">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export default Abouts;
