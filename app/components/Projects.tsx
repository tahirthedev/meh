import { motion } from "framer-motion";

const projects = [
  {
    title: "Cartoon Portfolio",
    description: "A playful, animated portfolio site using Next.js and Tailwind.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    live: "#",
    github: "#",
  },
  {
    title: "API Playground",
    description: "Fun REST API explorer with cartoon UI and live docs.",
    stack: ["React", "Node.js", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    title: "Tasky App",
    description: "A bouncy, collaborative task manager for teams.",
    stack: ["Next.js", "PostgreSQL", "Tailwind"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-[60vh] py-16 bg-pastelBlue flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-cartoon text-3xl md:text-4xl text-cartoonBlack mb-8"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.07, rotate: -2 }}
            className="rounded-cartoon shadow-cartoon bg-pastelYellow p-6 flex flex-col items-start hover:shadow-lg transition-all duration-300 cursor-pointer border-4 border-pastelPink"
          >
            <h3 className="font-cartoon text-xl text-cartoonBlack mb-2">{p.title}</h3>
            <p className="font-cartoon text-cartoonBlack mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.stack.map((tech) => (
                <span key={tech} className="bg-pastelPink text-cartoonWhite font-cartoon px-3 py-1 rounded-cartoon text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="font-cartoon text-pastelBlue hover:underline">Live</a>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="font-cartoon text-pastelBlue hover:underline">GitHub</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
