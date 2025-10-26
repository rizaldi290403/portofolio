import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 text-center px-4">
      <motion.img
        src="/Rizaldi.jpeg"
        alt="Rizaldi Afri Yanto"
        className="w-32 h-32 rounded-full shadow-lg mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Haloo, Saya <span className="text-blue-900 dark:text-blue-300">Rizaldi</span>
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Saya seorang IT Support yang bersemangat untuk terus belajar dan mengembangkan aplikasi web modern menggunakan React, Node.js, dan Laravel. Saya juga tertarik memperdalam DevOps untuk mendukung proses pengembangan yang lebih efisien.
      </motion.p>
      <motion.a
        href="#projects"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Projects
      </motion.a>
    </section>
  );
}
