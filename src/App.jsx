/* This file contains the updated React App with animated background, hero intro, project cards, experience timeline, and styled contact form. */

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = ["Python", "Java", "JavaScript", "React", "Node.js", "TailwindCSS", "TensorFlow", "MongoDB", "AWS"];

const projects = [
  {
    name: "Resume Agent AI",
    desc: "AI-powered resume analysis and optimization using OpenAI & LangChain. Helps users tailor resumes effectively.",
    link: "https://github.com/bandiapoorva1/resume-agent-ai",
    img: "/resume-agent-ai.png"
  },
  {
    name: "Disaster Relief App",
    desc: "A PWA for emergency coordination using React, Mapbox, IPFS, and Twilio. Facilitates community relief management.",
    link: "https://github.com/bandiapoorva1/disaster-relief-app",
    img: "/disaster-relief-ai-apoorva.png"
  },
  {
    name: "Urban Sound Classifier",
    desc: "CNN model classifying urban audio scenes using UrbanSound8K. Useful for smart city applications.",
    link: "https://github.com/bandiapoorva1/UrbanSoundClassifier",
    img: "/urban-sound-apoorva.png"
  },
  {
    name: "Autism Detection",
    desc: "Deep learning model detecting autism from facial features using CNNs and OpenCV.",
    link: "https://github.com/bandiapoorva1/autism-detection",
    img: "/autism-detection-apoorva.png"
  }
];

const experience = [
  {
    role: "Graduate Research Assistant",
    org: "UTA Honors College",
    time: "June 2024 – May 2025",
    desc: [
      "Guided 30+ students on capstone and AI research.",
      "Edited academic papers and ensured formatting standards.",
      "Built internal tools to assist faculty with AI assessments."
    ]
  },
  {
    role: "Full-Stack Intern",
    org: "Balaji Textiles",
    time: "Jan 2023 – May 2023",
    desc: [
      "Built an inventory dashboard with React & MongoDB.",
      "Integrated AWS SES for automated alerts.",
      "Enhanced UI/UX using Tailwind and ChartJS."
    ]
  },
  {
    role: "ML Engineer Intern",
    org: "QuadB Tech",
    time: "Aug 2022 – Dec 2022",
    desc: [
      "Improved model performance for classification tasks.",
      "Cleaned and preprocessed large health datasets.",
      "Documented ML pipeline with visual reports."
    ]
  }
];

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#11182a] to-[#0f172a] text-white font-sans relative overflow-hidden">
      {/* Animated Blobs */}
      <motion.div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }} transition={{ duration: 10, repeat: Infinity }} />
      <motion.div className="absolute top-40 right-0 w-[400px] h-[400px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }} transition={{ duration: 10, repeat: Infinity }} />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-32 gap-16">
        <motion.div className="flex-1" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 mb-6 text-xl">
            <a href="https://linkedin.com/in/apoorvabandi" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/bandiapoorva1" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="mailto:bandiapoorvaa@gmail.com"><FaEnvelope /></a>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2">Hi, I'm Apoorva<span className="text-purple-400">.</span></h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-purple-300 mb-4">ML/AI Engineer • Cloud Developer • Full-Stack Enthusiast</h2>
          <p className="text-gray-300 max-w-xl">Passionate about creating smart, scalable software systems that make a difference. I thrive in environments that blend innovation, design, and impactful technology.</p>
          <a href="#contact" className="inline-block mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition">GET IN TOUCH →</a>
        </motion.div>
        <motion.div className="w-48 h-48 rounded-full border-4 border-purple-500 shadow-xl overflow-hidden z-10" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <img src="/apoorva.jpeg" alt="Apoorva Bandi" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* About + Skills */}
      <section id="about" className="w-full flex flex-col md:flex-row items-start justify-center gap-12 px-8 py-24 bg-[#121c30]">
        <div className="flex-1 max-w-xl">
          <h2 className="text-3xl font-bold mb-4">About <span className="text-purple-400">•</span></h2>
          <p className="text-gray-300">I'm Apoorva, a machine learning engineer and full-stack enthusiast who loves building tech that matters. My work bridges backend robustness, frontend elegance, and AI capability. I believe in continuous learning and collaborating on impactful projects.</p>
        </div>
        <div className="flex-1 max-w-xl">
          <h3 className="text-xl font-semibold mb-3 text-purple-300">Skills & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="bg-[#1e2a48] border border-[#2c3654] px-4 py-2 rounded-full text-sm text-white hover:border-purple-400 transition">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-24">
        <h2 className="text-4xl font-bold mb-12 text-purple-400">Projects</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((proj, idx) => (
            <motion.a key={idx} whileHover={{ scale: 1.05 }} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400 transition shadow-xl" href={proj.link} target="_blank" rel="noopener noreferrer">
              <img src={proj.img} alt={proj.name} className="rounded-lg mb-4 object-cover h-40 w-full border border-white/10" />
              <h3 className="text-xl font-bold text-white mb-2">{proj.name}</h3>
              <p className="text-gray-300 text-sm">{proj.desc}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-8 py-24 bg-[#1e293b]">
        <h2 className="text-4xl font-bold mb-12 text-purple-400">Experience</h2>
        <div className="space-y-10">
          {experience.map((exp, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-xl border border-purple-400/20 rounded-xl p-6 shadow-lg hover:shadow-purple-600/30">
              <h3 className="text-xl font-bold mb-1 text-white">{exp.role} – {exp.org}</h3>
              <p className="text-gray-400 italic mb-2">{exp.time}</p>
              <ul className="list-disc list-inside text-sm text-gray-300">
                {exp.desc.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-24">
        <h2 className="text-4xl font-bold mb-6 text-purple-400">Contact Me</h2>
        <form action="https://formspree.io/f/xwkgaepw" method="POST" className="max-w-xl mx-auto space-y-6 bg-white/5 backdrop-blur-md border border-purple-400/10 p-6 rounded-xl">
          <input name="email" type="email" placeholder="Your Email" required className="w-full px-4 py-3 bg-[#0f172a] text-white rounded-md border border-purple-500/20" />
          <input name="subject" type="text" placeholder="Subject" required className="w-full px-4 py-3 bg-[#0f172a] text-white rounded-md border border-purple-500/20" />
          <textarea name="message" rows="5" placeholder="Your message..." required className="w-full px-4 py-3 bg-[#0f172a] text-white rounded-md border border-purple-500/20" />
          <button type="submit" className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all">SEND MESSAGE</button>
        </form>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500 bg-[#0d1426]">© {new Date().getFullYear()} Apoorva Bandi • All Rights Reserved</footer>
    </div>
  );
};

export default App;
