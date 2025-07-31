import { motion } from "framer-motion";

const timeline = [
  { label: "HTML", color: "bg-pastelPink" },
  { label: "React", color: "bg-pastelBlue" },
  { label: "Node.js", color: "bg-pastelYellow" },
  { label: "DBs", color: "bg-pastelPink" },
  { label: "APIs", color: "bg-pastelBlue" },
];

export default function About() {
  return (
    <section id="about" className="min-h-[60vh] flex flex-col items-center justify-center py-16 bg-pastelPink">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-cartoon text-3xl md:text-4xl text-cartoonWhite mb-4"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-cartoon text-lg md:text-xl text-cartoonWhite mb-8 max-w-2xl text-center"
      >
        Hi! I’m Tahir, a creative full-stack developer who loves building playful, functional web apps. My journey started with HTML and has taken me through modern frameworks, databases, and APIs. I enjoy making code fun and user experiences memorable!
      </motion.p>
      <div className="flex items-center justify-center gap-4 w-full max-w-2xl">
        {timeline.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: i * 0.15 }}
            className={`flex flex-col items-center`}
          >
            <div className={`w-16 h-16 rounded-cartoon shadow-cartoon flex items-center justify-center text-xl font-cartoon text-cartoonBlack ${item.color} mb-2 animate-bouncey`}>
              {item.label}
            </div>
            {i < timeline.length - 1 && (
              <div className="w-8 h-2 bg-cartoonWhite rounded-full mb-2" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
