import { motion } from "framer-motion";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

function Skills() {
 const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: <SiC />, color: "#A8B9CC" },
      { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
      {
        name: "Java",
        icon: <span className="text-skill-icon">J</span>,
        color: "#F89820",
      },
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
    ],
  },
  {
    title: "Front-End",
    skills: [
      { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <SiCss />, color: "#663399" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "React JS", icon: <SiReact />, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    ],
  },
  {
    title: "Back-End",
    skills: [
      { name: "Node JS", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Express JS", icon: <SiExpress />, color: "#000000" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#181717" },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    ],
  },
];
  return (
    <section className="skills-page">
      <div className="skills-hero">
        <p className="page-eyebrow">MY TECH STACK</p>

        <h1>
          Tools that help me
          <br />
          <span>bring ideas to life.</span>
        </h1>

        <p>
          A collection of technologies I use to build responsive interfaces,
          scalable applications, and practical digital solutions.
        </p>
      </div>

      <div className="skills-categories">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            className="skill-category"
            key={category.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: categoryIndex * 0.1,
            }}
          >
            <h2>{category.title}</h2>

            <div className="skill-items">
              {category.skills.map((skill) => (
                <motion.div
                  className="skill-item"
                  key={skill.name}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                        className="skill-icon"
                        style={{ color: skill.color }}
                   >
                        {skill.icon}
                   </span>

                  <span className="skill-name">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;