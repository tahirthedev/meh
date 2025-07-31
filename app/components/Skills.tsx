import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "/public/globe.svg", color: "bg-pastelBlue" },
  { name: "Next.js", icon: "/public/next.svg", color: "bg-pastelPink" },
  { name: "Node.js", icon: "/public/window.svg", color: "bg-pastelYellow" },
  { name: "Tailwind", icon: "/public/file.svg", color: "bg-pastelBlue" },
  { name: "MongoDB", icon: "/public/globe.svg", color: "bg-pastelPink" },
  { name: "PostgreSQL", icon: "/public/vercel.svg", color: "bg-pastelYellow" },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-[40vh] py-16 bg-pastelYellow flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-cartoon text-3xl md:text-4xl text-cartoonBlack mb-8"
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: i * 0.1 }}
            className={`flex flex-col items-center p-6 rounded-cartoon shadow-cartoon ${skill.color} hover:scale-110 transition-transform duration-300 animate-bouncey`}
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
            <span className="font-cartoon text-lg text-cartoonBlack">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
