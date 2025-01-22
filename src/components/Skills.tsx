import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiAdobexd, SiAdobeillustrator, SiRedux, SiCss3, SiFigma } from "react-icons/si";
import { motion } from "framer-motion";
import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    // Top row
    { name: "Figma", icon: <SiFigma size={32} className="text-[#F24E1E]" />, orbit: "top" },
    { name: "React", icon: <FaReact size={32} className="text-[#61DAFB]" />, orbit: "top" },
    { name: "Node.js", icon: <FaNodeJs size={32} className="text-[#339933]" />, orbit: "top" },
    { name: "TypeScript", icon: <SiTypescript size={32} className="text-[#3178C6]" />, orbit: "top" },
    { name: "JavaScript", icon: <SiJavascript size={32} className="text-[#F7DF1E]" />, orbit: "top" },
    { name: "Next.js", icon: <SiNextdotjs size={32} className="text-white" />, orbit: "top" },
    
    // Middle row
    { name: "Redux", icon: <SiRedux size={32} className="text-[#764ABC]" />, orbit: "middle" },
    { name: "Tailwind", icon: <SiTailwindcss size={32} className="text-[#06B6D4]" />, orbit: "middle" },
    { name: "CSS3", icon: <SiCss3 size={32} className="text-[#1572B6]" />, orbit: "middle" },
    { name: "Adobe XD", icon: <SiAdobexd size={32} className="text-[#FF61F6]" />, orbit: "middle" },
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={32} className="text-[#FF9A00]" />, orbit: "middle" }
  ];

  return (
    <section className={styles.container}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        Skills & Technologies
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={styles.orbitalLayout}
      >
        {/* Center Logo */}
        <div className={styles.centerLogo}>
          <span className={styles.centerLogoText}>Σ</span>
          <div className={styles.centerLogoPulse}></div>
        </div>

        {/* Orbital Paths */}
        <div className={styles.orbitalPathLarge}></div>
        <div className={styles.orbitalPathSmall}></div>

        {/* Skills Icons */}
        {skills.map((skill, index) => {
          const isTopRow = skill.orbit === "top";
          const orbitClass = isTopRow ? styles.outer : styles.inner;
          const itemsInOrbit = isTopRow ? 6 : 5;
          const startAngle = (360 / itemsInOrbit) * (index % itemsInOrbit);
          
          return (
            <motion.div
              key={`${skill.name}-${index}`}
              className={`${styles['skill-icon']} ${orbitClass}`}
              style={{
                '--start-angle': `${startAngle}deg`
              } as React.CSSProperties}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              {skill.icon}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
