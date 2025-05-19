import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaAws, FaPython, FaJava, FaReact, FaNodeJs, FaDatabase, FaCloud, FaRobot, FaBrain, FaCloudSunRain } from "react-icons/fa";
import { SiTensorflow, SiMongodb, SiTailwindcss, SiJavascript } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

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
    desc: "NLP-powered resume analysis and optimization using OpenAI & LangChain. Automatically detects improvement areas and generates ATS-ready suggestions for job seekers.",
    link: "https://github.com/bandiapoorva1/resume-agent-ai",
    img: "/resume-agent-ai.png",
    icon: <FaRobot className="text-purple-400" />,
    stack: ["LangChain", "OpenAI", "React"],
  },
  {
    name: "Disaster Relief App",
    desc: "A decentralized PWA for emergency coordination and relief. Built with React, Mapbox, and Twilio, it connects volunteers and survivors in real-time during disasters.",
    link: "https://github.com/bandiapoorva1/disaster-relief-app",
    img: "/disaster-relief-ai-apoorva.png",
    icon: <FaCloudSunRain className="text-blue-400" />,
    stack: ["React", "Mapbox", "Twilio"],
  },
  {
    name: "Urban Sound Classifier",
    desc: "CNN-based classifier that recognizes environmental sounds from the UrbanSound8K dataset, helping smart cities monitor noise and pollution sources.",
    link: "https://github.com/bandiapoorva1/UrbanSoundClassifier",
    img: "/urban-sound-apoorva.png",
    icon: <FaBrain className="text-indigo-400" />,
    stack: ["TensorFlow", "CNN", "Python"],
  },
  {
    name: "Autism Detection with Computer Vision",
    desc: "Deep learning-powered computer vision tool to detect early signs of autism in children using facial image analysis and behavioral features.",
    link: "https://github.com/bandiapoorva1/autism-detection", // replace with your real repo!
    img: "/autism-detection-apoorva.png",
    icon: <FaRobot className="text-pink-400" />,
    stack: ["TensorFlow", "Computer Vision", "Python"],
  }
];

const experience = [
  {
    title: "Graduate Research Assistant",
    org: "UTA Honors College",
    period: "June 2024 – May 2025",
    desc: "Led a team of 30+ students in editing and publishing research papers, and provided AI-based technical guidance for capstone projects, improving research output quality.",
  },
  {
    title: "Full-Stack Intern",
    org: "Balaji Textiles",
    period: "Jan 2023 – May 2023",
    desc: "Developed a dashboard app with AWS + Tableau integration, streamlining business analytics and inventory tracking for the organization.",
  },
  {
    title: "ML Engineer Intern",
    org: "QuadB Tech",
    period: "Aug 2022 – Dec 2022",
    desc: "Enhanced classification models for industrial automation, improving accuracy by 15% through advanced hyperparameter tuning and data pipeline optimization.",
  }
];

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#11182a] text-white font-sans relative overflow-x-hidden">
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
          <div className="text-2xl sm:text-3xl font-semibold mb-4 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 min-h-[40px] flex items-center gap-2">
            <span role="img" aria-label="robot">🤖</span>
            <Typewriter
              words={[
                "ML/AI Engineer 🧠",
                "Cloud Developer ☁️",
                "Full-Stack Innovator 💻",
              ]}
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
        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <Tilt key={idx} tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.17}>
              <motion.a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative group rounded-2xl bg-[#161d30] border border-[#232e53] hover:border-purple-500 transition p-8 flex flex-col shadow hover:shadow-2xl hover:-translate-y-2 duration-200 cursor-pointer"
                style={{ minHeight: 340 }}
              >
                {proj.img && (
                  <img src={proj.img} alt={proj.name} className="rounded-lg mb-6 border border-[#252c47] object-cover h-36 w-full transition-transform group-hover:scale-105" />
                )}
                <div className="flex items-center gap-3 mb-2">
                  {proj.icon}
                  <h3 className="font-bold text-xl group-hover:text-purple-400">{proj.name}</h3>
                </div>
                <p className="text-gray-300 mb-3">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.stack.map((stack, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-[#222d4b] text-xs text-gray-300 border border-[#282d47]">{stack}</span>
                  ))}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 group-hover:bg-[#6d28d9]/10 opacity-0 group-hover:opacity-100 rounded-2xl flex flex-col justify-center items-center transition-all">
                  <span className="text-lg font-bold text-purple-200 mb-1">View Project →</span>
                </div>
              </motion.a>
            </Tilt>
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
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="group rounded-2xl bg-[#161d30] border border-[#232e53] hover:border-purple-500 transition p-8 shadow hover:shadow-2xl hover:-translate-y-2 duration-200"
            >
              <div className="w-5 h-5 rounded-full bg-purple-400 border-4 border-[#151c2e]" />
              <h3 className="font-bold text-lg mb-2 group-hover:text-purple-400">{exp.title} – {exp.org}</h3>
              <p className="text-purple-200 italic mb-2">{exp.period}</p>
              <p className="text-gray-200 text-base">{exp.desc}</p>
            </motion.div>
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col gap-6 text-left"
          >
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
          </motion.div>
          {/* Right: Contact Form */}
          <motion.form
            action="https://formspree.io/f/xwkgaepw"
            method="POST"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-4"
          >
            <input name="email" type="email" placeholder="Email" required className="w-full border border-[#232e53] bg-[#161d30] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-purple-400" />
            <input name="subject" type="text" placeholder="Subject" required className="w-full border border-[#232e53] bg-[#161d30] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-purple-400" />
            <textarea name="message" rows="4" placeholder="Your message..." required className="w-full border border-[#232e53] bg-[#161d30] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-purple-400" />
            <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-3 rounded-full transition">
              SEND MESSAGE
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-sm text-gray-400 bg-[#0f172a]">
        © {new Date().getFullYear()} Apoorva Bandi — <a href="mailto:bandiapoorvaa@gmail.com" className="underline">bandiapoorvaa@gmail.com</a>
      </footer>
    </div>
  );
}
