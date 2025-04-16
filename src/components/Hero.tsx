import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Sagar Pariyar
          </h1>
          <h2 className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Building beautiful and functional web applications with modern
            technologies
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
