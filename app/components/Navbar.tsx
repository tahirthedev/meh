"use client";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const onScroll = () => {
      let current = "hero";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && window.scrollY + 80 >= el.offsetTop) {
          current = section.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-pastelBlue/80 backdrop-blur shadow-cartoon rounded-b-cartoon flex justify-center py-3 px-4">
      <ul className="flex gap-6">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`font-cartoon text-cartoonBlack text-lg px-4 py-2 rounded-cartoon transition-all duration-300 hover:bg-pastelPink hover:text-cartoonWhite cursor-pointer ${active === s.id ? "bg-pastelPink text-cartoonWhite shadow-cartoon scale-105" : ""}`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
