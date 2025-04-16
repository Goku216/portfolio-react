import { motion } from "framer-motion";
import { experiences, education } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Experience & Education
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400"
                >
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.role}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400"
                >
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {edu.period}
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
