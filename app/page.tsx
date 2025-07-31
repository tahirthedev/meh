
import { Preloader, Navbar, Hero, About, Skills, Projects, Contact } from "./components";

export default function Home() {
  return (
    <div className="relative font-cartoon bg-cartoonWhite min-h-screen">
      <Preloader />
      <Navbar />
      <main className="flex flex-col gap-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
