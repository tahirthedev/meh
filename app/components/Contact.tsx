"use client";
import { motion } from "framer-motion";

const socials = [
  { name: "GitHub", icon: "/file.svg", url: "#" },
  { name: "LinkedIn", icon: "/globe.svg", url: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-[40vh] py-16 bg-pastelPink flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-cartoon text-3xl md:text-4xl text-cartoonWhite mb-8"
      >
        Contact
      </motion.h2>
      <form className="bg-cartoonWhite rounded-cartoon shadow-cartoon p-8 flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="rounded-cartoon border-2 border-pastelBlue px-4 py-2 font-cartoon text-cartoonBlack focus:outline-none focus:border-pastelPink transition-all"
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded-cartoon border-2 border-pastelBlue px-4 py-2 font-cartoon text-cartoonBlack focus:outline-none focus:border-pastelPink transition-all"
        />
        <textarea
          placeholder="Message"
          className="rounded-cartoon border-2 border-pastelBlue px-4 py-2 font-cartoon text-cartoonBlack focus:outline-none focus:border-pastelPink transition-all min-h-[100px]"
        />
        <button
          type="submit"
          className="bg-pastelBlue text-cartoonWhite font-cartoon px-6 py-3 rounded-cartoon shadow-cartoon text-lg hover:bg-pastelYellow hover:text-cartoonBlack transition-all duration-300 animate-bouncey"
        >
          Send Message
        </button>
      </form>
      <div className="flex gap-6 mt-8">
        {socials.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 8 }}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-pastelBlue shadow-cartoon hover:bg-pastelYellow transition-all duration-300"
          >
            <img src={s.icon} alt={s.name} className="w-8 h-8" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
