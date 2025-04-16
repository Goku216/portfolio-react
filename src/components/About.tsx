import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/600x600"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Aspiring Front-End Developer with hands-on experience in React.js,
              JavaScript, and Tailwind CSS. Passionate about building
              responsive, user-friendly web applications and continuously
              learning in a collaborative environment. Eager to contribute to
              impactful projects and grow with a forward-thinking remote team.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {[
                "Problem Solving",
                "Team Leadership",
                "Clean Code",
                "Agile Development",
              ].map((strength, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 dark:text-gray-200"
                >
                  <span className="mr-2">✓</span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
