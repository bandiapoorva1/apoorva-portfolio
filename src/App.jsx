import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPython, FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiTensorflow } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Tilt from "react-parallax-tilt";

function ParticleBG() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -10 },
        particles: {
          number: { value: 60, density: { enable: true, area: 900 } },
          color: { value: "#a78bfa" },
          links: { enable: true, color: "#818cf8", distance: 120 },
          move: { enable: true, speed: 0.5 },
          size: { value: 2 },
          opacity: { value: 0.4 }
        }
      }}
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans overflow-x-hidden relative">
      <ParticleBG />
      <div className="absolute inset-0 -z-20 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-purple-900 to-blue-900 animate-gradient opacity-70"></div>

      <header className="flex justify-between items-center px-8 py-6 text-base font-semibold relative z-10">
        <div className="text-2xl font-bold tracking-tight">Apoorva<span className="text-purple-400">•</span></div>
        <nav className="space-x-8 text-gray-200">
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#experience" className="hover:text-purple-400">Experience</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-24 gap-16 relative z-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6 text-xl">
            <a href="https://linkedin.com/in/apoorvabandi" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/bandiapoorva1" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="mailto:bandiapoorvaa@gmail.com"><FaEnvelope /></a>
          </div>
          <h1 className="text-5xl font-extrabold mb-2">Hi, I'm Apoorva<span className="text-purple-400">.</span></h1>
          <div className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 min-h-[40px]">
            <Typewriter
              words={["ML/AI Engineer 🤖", "Cloud Developer ☁️", "Full-Stack Innovator 💻"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </div>
          <p className="text-gray-400 text-lg max-w-xl mt-4">I craft intelligent, scalable software that bridges user needs and cutting-edge AI technology.</p>
        </div>
        <div className="w-44 h-44 rounded-full border-4 border-purple-500 shadow-lg overflow-hidden">
          <img src="/apoorva.jpeg" alt="Apoorva" className="w-full h-full object-cover" />
        </div>
      </section>

      <footer className="text-center py-10 text-sm text-gray-400">© {new Date().getFullYear()} Apoorva Bandi</footer>
    </div>
  );
}