import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 pt-24 pb-12 bg-pastelBlue">
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="flex-shrink-0 flex items-center justify-center"
      >
        <video
          src="/avatar.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-56 h-56 rounded-cartoon shadow-cartoon border-4 border-pastelPink bg-cartoonWhite"
        />
      </motion.div>
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
        className="flex flex-col items-center md:items-start text-center md:text-left"
      >
        <h1 className="font-cartoon text-4xl md:text-6xl text-cartoonBlack mb-2">Tahir</h1>
        <h2 className="font-cartoon text-2xl md:text-3xl text-pastelPink mb-2">Full-Stack Developer</h2>
        <p className="font-cartoon text-lg md:text-xl text-cartoonBlack mb-6 max-w-md">
          Turning ideas into functional, beautiful web apps.
        </p>
        <a
          href="#projects"
          className="bg-pastelPink text-cartoonWhite font-cartoon px-6 py-3 rounded-cartoon shadow-cartoon text-lg hover:bg-pastelYellow hover:text-cartoonBlack transition-all duration-300 animate-bouncey"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
}
