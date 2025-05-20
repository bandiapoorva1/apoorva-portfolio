import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f172a] to-[#1e293b] text-white font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold tracking-tight">AB<span className="text-purple-400 ml-1">•</span></div>
        <nav className="space-x-8 text-gray-200">
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#experience" className="hover:text-purple-400">Experience</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20">
        <div className="flex justify-center gap-6 mb-4 text-xl">
          <a href="https://linkedin.com/in/apoorvabandi" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/bandiapoorva1" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="mailto:bandiapoorvaa@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Hi, I'm Apoorva<span className="text-purple-400">.</span></h1>
        <div className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
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
        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          I build intelligent, cloud-powered solutions that drive impact.<br />
          Passionate about AI, innovation, and scalable architectures.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          GET IN TOUCH →
        </a>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-24 bg-[#1e293b] text-left">
        <h2 className="text-4xl font-bold mb-6 text-purple-400">About Me</h2>
        <p className="text-gray-300 max-w-3xl">
          I’m a dedicated software engineer passionate about ML, cloud, and building polished frontend experiences. 
          I have experience in full-stack web development, AI engineering, and scalable cloud-based solutions.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-24">
        <h2 className="text-4xl font-bold mb-12 text-purple-400">Projects</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {[
            {
              name: "Resume Agent AI",
              desc: "An NLP-powered agent built with LangChain + OpenAI that analyzes resumes and gives intelligent insights. Uses semantic similarity, prompts, and streamlit interface.",
              link: "https://github.com/bandiapoorva1/resume-agent-ai",
              img: "/resume.png"
            },
            {
              name: "Disaster Relief App",
              desc: "Decentralized PWA for coordinating emergency relief. Built with React, IPFS, Mapbox, and Twilio. Supports role-based login, map markers, and notifications.",
              link: "https://github.com/bandiapoorva1/disaster-relief-app",
              img: "/disaster.png"
            },
            {
              name: "Urban Sound Classifier",
              desc: "A CNN-based classifier trained on UrbanSound8K. Classifies real-world noises like sirens, dog barks, or drilling. Built using TensorFlow and Keras.",
              link: "https://github.com/bandiapoorva1/UrbanSoundClassifier",
              img: "/sound.png"
            },
            {
              name: "Autism Detection",
              desc: "Image classification model using computer vision to detect facial patterns indicative of autism. Developed as part of a research-driven health AI project.",
              link: "https://github.com/bandiapoorva1/autism-detection",
              img: "/autism.png"
            }
          ].map((proj, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1e293b] rounded-2xl p-6 border border-[#334155] hover:border-purple-500 transition shadow-lg"
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={proj.img} alt={proj.name} className="rounded-lg mb-4 object-cover h-40 w-full" />
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
          {[{
            role: "Graduate Research Assistant",
            org: "UTA Honors College",
            time: "June 2024 – May 2025",
            desc: [
              "Guided 30+ students on capstone and AI research.",
              "Edited academic papers and ensured formatting standards.",
              "Built internal tools to assist faculty with AI assessments."
            ]
          }, {
            role: "Full-Stack Intern",
            org: "Balaji Textiles",
            time: "Jan 2023 – May 2023",
            desc: [
              "Built an inventory dashboard with React & MongoDB.",
              "Integrated AWS SES for automated alerts.",
              "Enhanced UI/UX using Tailwind and ChartJS."
            ]
          }, {
            role: "ML Engineer Intern",
            org: "QuadB Tech",
            time: "Aug 2022 – Dec 2022",
            desc: [
              "Improved model performance for classification tasks.",
              "Cleaned and preprocessed large health datasets.",
              "Documented ML pipeline with visual reports."
            ]
          }].map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-[#0f172a] border border-[#334155] rounded-xl p-6 shadow hover:border-purple-500"
            >
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
        <p className="text-gray-300 max-w-2xl mb-10">
          Let's collaborate or connect! Feel free to reach out for freelance work, tech discussions, or referrals.
        </p>
        <form
          action="https://formspree.io/f/xwkgaepw"
          method="POST"
          className="max-w-xl mx-auto space-y-6"
        >
          <input name="email" type="email" required placeholder="Email" className="w-full px-4 py-3 rounded-md bg-[#0f172a] text-white border border-[#334155]" />
          <input name="subject" type="text" required placeholder="Subject" className="w-full px-4 py-3 rounded-md bg-[#0f172a] text-white border border-[#334155]" />
          <textarea name="message" required placeholder="Your message..." rows="5" className="w-full px-4 py-3 rounded-md bg-[#0f172a] text-white border border-[#334155]" />
          <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md">
            Send Message
          </button>
        </form>
      </section>

      <footer className="text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Apoorva Bandi • All rights reserved
      </footer>
    </div>
  );
}
