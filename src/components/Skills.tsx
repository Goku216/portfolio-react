import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaDocker } from "react-icons/fa";

const skillCategories = [
  {
    title: "Front-End",
    icon: FaReact,
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Back-End",
    icon: FaNodeJs,
    skills: ["Node.js", "Express", "Nest.js"],
  },
  {
    title: "Databases",
    icon: FaDatabase,
    skills: ["MySQL", "PostgreSQL", "Firebase"],
  },
  {
    title: "DevOps/Tools",
    icon: FaDocker,
    skills: ["Docker", "Git"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <category.icon className="text-3xl text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
