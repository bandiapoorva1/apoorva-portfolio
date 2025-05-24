import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaLaptopCode, FaCodeBranch, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const skills = {
  Languages: ["Python 🐍", "Java ☕", "JavaScript ⚡"],
  Frameworks: ["React ⚛️", "Node.js 🟢", "TailwindCSS 🌬️"],
  Tools: ["TensorFlow 🤖", "MongoDB 🍃", "AWS ☁️"]
};
const skillIcons = {
  Languages: <FaLaptopCode className="text-xl text-purple-400" />,
  Frameworks: <FaCodeBranch className="text-xl text-purple-400" />,
  Tools: <FaTools className="text-xl text-purple-400" />
};

const projects = [
  {
    name: "Resume Agent AI",
    desc: "AI-powered resume analysis and optimization using OpenAI & LangChain. Helps users tailor resumes effectively.",
    tag: "🧠 AI",
    link: "https://github.com/bandiapoorva1/resume-agent-ai",
    img: "/resume-agent-ai.png"
  },
  {
    name: "Disaster Relief App",
    desc: "A PWA for emergency coordination using React, Mapbox, IPFS, and Twilio. Facilitates community relief management.",
    tag: "☁️ Cloud",
    link: "https://github.com/bandiapoorva1/disaster-relief-app",
    img: "/disaster-relief-ai-apoorva.png"
  },
  {
    name: "Urban Sound Classifier",
    desc: "CNN model classifying urban audio scenes using UrbanSound8K. Useful for smart city applications.",
    tag: "🧠 AI",
    link: "https://github.com/bandiapoorva1/UrbanSoundClassifier",
    img: "/urban-sound-apoorva.png"
  },
  {
    name: "Autism Detection",
    desc: "Deep learning model detecting autism from facial features using CNNs and OpenCV.",
    tag: "🧠 AI",
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

const extracurriculars = [
  {
    role: "Technical Head",
    org: "Computer Society of India (CSI)",
    time: "2020 – 2021",
    desc: [
      "Organized tech fests, hackathons, and coding contests.",
      "Led student workshops on AI, web development, and Git.",
      "Mentored juniors on academic and career development."
    ]
  },
  {
    role: "Student Coordinator",
    org: "Stentorian English Club",
    time: "2019 – 2020",
    desc: [
      "Managed literature and debating events.",
      "Collaborated with faculty to conduct writing contests.",
      "Curated weekly English expression newsletters."
    ]
  }
];

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1c] to-[#0f172a] text-white font-sans">
      <header className="flex justify-between items-center px-8 py-6 text-lg font-semibold bg-transparent sticky top-0 z-50 backdrop-blur-md">
        <div className="text-2xl font-bold tracking-tight">AB<span className="text-purple-400 ml-1">•</span></div>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#experience" className="hover:text-purple-400">Experience</a>
          <a href="#extracurriculars" className="hover:text-purple-400">Leadership</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-20 gap-12 relative overflow-hidden">
        <motion.div className="flex-1 z-10" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-6 text-xl">
            <a href="https://linkedin.com/in/apoorvabandi" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/bandiapoorva1" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="mailto:bandiapoorvaa@gmail.com"><FaEnvelope /></a>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2">Hi, I'm Apoorva<span className="text-purple-400">.</span></h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-purple-300 mb-4">
            <Typewriter
              words={["ML/AI Engineer", "Cloud Developer", "Full-Stack Enthusiast"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-gray-300 max-w-xl">
            Passionate about creating smart, scalable software systems. I thrive at the intersection of creativity and code.
          </p>
        </motion.div>
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>
          <img src="/apoorva.jpeg" alt="Apoorva" className="w-48 h-48 rounded-2xl border-4 border-purple-500 object-cover shadow-xl" />
        </motion.div>
      </section>

      <section id="about" className="px-8 py-20">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-bold mb-6 text-purple-400">About Me</motion.h2>
        <motion.p initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="text-lg max-w-3xl text-gray-300">
          I'm Apoorva, a machine learning engineer and full-stack developer. My passion lies in solving real-world problems with intelligent systems.
          I’ve contributed to impactful projects using technologies like React, TensorFlow, MongoDB, and AWS.
          I’m currently exploring AI research, design systems, and scalable cloud solutions.
        </motion.p>
      </section>

      <section id="skills" className="px-8 py-24 bg-[#11182a]">
        <h2 className="text-4xl font-bold mb-12 text-purple-400">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, list], idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.2 }}>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-300">
                {skillIcons[category]} {category}
              </h3>
              <ul className="space-y-2 text-gray-300">
                {list.map((item, i) => (
                  <li key={i} className="bg-[#1e293b] px-4 py-2 rounded-md shadow hover:shadow-purple-400 hover:bg-purple-500 hover:text-white transition cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-8 py-24">
        <h2 className="text-4xl font-bold mb-12 text-purple-400">Projects</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((proj, idx) => (
            <motion.a key={idx} whileHover={{ scale: 1.05 }} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400 transition shadow-xl" href={proj.link} target="_blank" rel="noopener noreferrer">
              <div className="text-sm mb-2">{proj.tag}</div>
              <img src={proj.img} alt={proj.name} className="rounded-lg mb-4 object-cover h-40 w-full border border-white/10" />
              <h3 className="text-xl font-bold text-white mb-2">{proj.name}</h3>
              <p className="text-gray-300 text-sm">{proj.desc}</p>
            </motion.a>
          ))}
        </div>
      </section>

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

      <section id="extracurriculars" className="px-8 py-24 bg-[#0f172a]">
        <h2 className="text-4xl font-bold mb-12 text-purple-400">Leadership & Activities</h2>
        <div className="space-y-10">
          {extracurriculars.map((activity, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-xl border border-purple-400/20 rounded-xl p-6 shadow-md hover:shadow-purple-500/30">
              <h3 className="text-xl font-bold mb-1 text-white">{activity.role} – {activity.org}</h3>
              <p className="text-gray-400 italic mb-2">{activity.time}</p>
              <ul className="list-disc list-inside text-sm text-gray-300">
                {activity.desc.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-8 py-24">
        <h2 className="text-4xl font-bold mb-6 text-purple-400">Contact Me</h2>
        <p className="text-gray-300 max-w-2xl mb-10">I'm open to freelance projects, collaborations, and full-time opportunities. Let's connect and build something amazing!</p>
        <form action="https://formspree.io/f/xwkgaepw" method="POST" className="max-w-xl mx-auto space-y-6 bg-white/5 backdrop-blur-md border border-purple-400/10 p-6 rounded-xl">
          <input name="email" type="email" required placeholder="Your email" className="w-full px-4 py-3 rounded-md bg-[#0f172a] text-white border border-purple-500/30" />
          <input name="subject" type="text" required placeholder="Subject" className="w-full px-4 py-3 rounded-md bg-[#0f172a] text-white border border-purple-500/30" />
          <textarea name="message" required placeholder="Your message..." rows="5" className="w-full px-4 py-3 rounded-md bg-[#0f172a] text-white border border-purple-500/30" />
          <button type="submit" className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition text-white font-semibold rounded-full">Send Message</button>
        </form>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500 bg-[#0d1426]">
        © {new Date().getFullYear()} Apoorva Bandi • All Rights Reserved
      </footer>
    </div>
  );
};

export default App;
