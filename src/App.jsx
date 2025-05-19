import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaAws, FaPython, FaJava, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

const tools = [
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "SQL", icon: <FaDatabase /> },
];

const certificates = [
  "AWS Certified Cloud Practitioner",
  "Google TensorFlow Developer",
  "DeepLearning.AI: Neural Networks & Deep Learning"
];

const projects = [
  {
    name: "Resume Agent AI",
    desc: "NLP-powered resume analysis and optimization using OpenAI & LangChain.",
    link: "https://github.com/bandiapoorva1/resume-agent-ai",
    img: "https://raw.githubusercontent.com/bandiapoorva1/resume-agent-ai/main/demo.png"
  },
  {
    name: "Disaster Relief App",
    desc: "Decentralized PWA for emergency coordination, built with React, Mapbox, Twilio.",
    link: "https://github.com/bandiapoorva1/disaster-relief-app",
    img: "https://raw.githubusercontent.com/bandiapoorva1/disaster-relief-app/main/demo.png"
  },
  {
    name: "Urban Sound Classifier",
    desc: "CNN trained to classify environmental sound categories (UrbanSound8K).",
    link: "https://github.com/bandiapoorva1/UrbanSoundClassifier",
    img: "https://raw.githubusercontent.com/bandiapoorva1/UrbanSoundClassifier/main/demo.png"
  }
];

const experience = [
  {
    title: "Graduate Research Assistant",
    org: "UTA Honors College",
    period: "June 2024 – May 2025",
    points: [
      "Edited 30+ student research papers for academic clarity.",
      "Guided students in AI-based capstone development.",
    ],
  },
  {
    title: "Full-Stack Intern",
    org: "Balaji Textiles",
    period: "Jan 2023 – May 2023",
    points: [
      "Developed dashboard app with AWS + Tableau integration."
    ]
  },
  {
    title: "ML Engineer Intern",
    org: "QuadB Tech",
    period: "Aug 2022 – Dec 2022",
    points: [
      "Improved classification accuracy by 15% via model tuning."
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#11182a] text-white font-sans relative">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:18px_18px] opacity-20 pointer-events-none z-0" />

      {/* Navbar */}
      <header className="relative z-10 flex justify-between items-center px-8 py-6 text-base font-semibold bg-transparent">
        <div className="text-2xl font-bold tracking-tight">AB<span className="text-purple-400 ml-1">•</span></div>
        <nav className="space-x-8 text-gray-200">
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#experience" className="hover:text-purple-400">Experience</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-32 gap-16">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6 text-xl">
            <a href="https://linkedin.com/in/apoorvabandi" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/bandiapoorva1" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="mailto:bandiapoorvaa@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2">
            Hi, I'm Apoorva<span className="text-purple-400">.</span>
          </h1>
          <div className="text-2xl sm:text-3xl font-semibold mb-4 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 min-h-[40px]">
            <Typewriter
              words={["ML/AI Engineer", "Cloud Developer", "Full-Stack Innovator"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </div>
          <p className="text-gray-400 text-lg max-w-xl mt-4 mb-6">
            I specialize in building scalable, intelligent systems for real-world impact.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            GET IN TOUCH →
          </a>
        </div>
        <div className="w-44 h-44 rounded-full border-4 border-purple-500 shadow-lg overflow-hidden">
          <img
            src="/apoorva.jpeg"
            alt="Apoorva Bandi"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="w-full flex flex-col md:flex-row items-start justify-center gap-10 px-8 py-24 bg-[#151c2e]">
        <div className="flex-1 max-w-xl">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
            About <span className="text-purple-400 text-4xl">•</span>
          </h2>
          <div className="text-gray-200 font-light text-lg mb-4">
            <p>
              Hey there! I'm Apoorva, a machine learning and full-stack enthusiast specializing in building scalable, user-centric digital products.
              With experience across AI, cloud, web, and research, I craft impactful solutions with technical precision and creative vision.
            </p>
            <p className="mt-3">
              I'm always exploring new technologies and challenges where code meets human needs. If you want to collaborate or connect, let's talk!
            </p>
          </div>
        </div>
        {/* Tools & Certs */}
        <div className="flex-1 flex flex-col gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="text-purple-400">{"</>"}</span> Programming & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1c2440] text-gray-100 text-sm font-medium border border-[#252c47] hover:bg-[#232e53] hover:border-purple-400 transition"
                >
                  {tool.icon} {tool.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="text-purple-400">📄</span> Certificates
            </h3>
            <div className="flex flex-wrap gap-2">
              {certificates.map((cert, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-[#212947] text-gray-100 text-sm font-medium border border-[#252c47] hover:bg-[#323d65] hover:border-purple-400 transition"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-24 bg-[#11182a]">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
          Projects <span className="text-purple-400 text-4xl">•</span>
        </h2>
        <p className="text-gray-400 mb-12">Most recent works</p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <a
              key={idx}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-2xl bg-[#161d30] border border-[#232e53] hover:border-purple-500 transition p-8 flex flex-col shadow hover:shadow-2xl hover:-translate-y-2 duration-200"
            >
              {proj.img && (
                <img src={proj.img} alt={proj.name} className="rounded-lg mb-6 border border-[#252c47] object-cover h-36 w-full" />
              )}
              <h3 className="font-bold text-xl mb-3 group-hover:text-purple-400">{proj.name}</h3>
              <p className="text-gray-300 mb-4">{proj.desc}</p>
              <div className="absolute bottom-4 right-4 opacity-70 group-hover:opacity-100 transition">
                <FaGithub size={22} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-8 py-24 bg-[#151c2e]">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
          Experience <span className="text-purple-400 text-4xl">•</span>
        </h2>
        <p className="text-gray-400 mb-12">Career highlights & roles</p>
        <div className="grid md:grid-cols-2 gap-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-[#161d30] border border-[#232e53] hover:border-purple-500 transition p-8 shadow hover:shadow-2xl hover:-translate-y-2 duration-200"
            >
              <h3 className="font-bold text-lg mb-2 group-hover:text-purple-400">{exp.title} – {exp.org}</h3>
              <p className="text-gray-400 italic mb-2">{exp.period}</p>
              <ul className="list-disc ml-6 text-gray-300 text-sm space-y-1 text-left">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-24 bg-[#11182a]">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
          Contact <span className="text-purple-400 text-4xl">•</span>
        </h2>
        <p className="text-gray-400 mb-12">Connect with Me</p>
        <div className="flex flex-col md:flex-row gap-10 max-w-4xl mx-auto">
          {/* Left: Contact Info */}
          <div className="flex-1 flex flex-col gap-6 text-left">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-purple-400" size={22} />
              <span className="font-medium text-gray-200">bandiapoorvaa@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-purple-400" size={22} />
              <span className="font-medium text-gray-200">/in/apoorvabandi</span>
            </div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-purple-400" size={22} />
              <span className="font-medium text-gray-200">bandiapoorva1</span>
            </div>
          </div>
          {/* Right: Contact Form */}
          <form
            action="https://formspree.io/f/xwkgaepw"
            method="POST"
            className="flex-1 space-y-4"
          >
            <input name="email" type="email" placeholder="Email" required className="w-full border border-[#232e53] bg-[#161d30] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-purple-400" />
            <input name="subject" type="text" placeholder="Subject" required className="w-full border border-[#232e53] bg-[#161d30] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-purple-400" />
            <textarea name="message" rows="4" placeholder="Your message..." required className="w-full border border-[#232e53] bg-[#161d30] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-purple-400" />
            <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-3 rounded-full transition">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-sm text-gray-400 bg-[#0f172a]">
        © {new Date().getFullYear()} Apoorva Bandi — <a href="mailto:bandiapoorvaa@gmail.com" className="underline">bandiapoorvaa@gmail.com</a>
      </footer>
    </div>
  );
}
