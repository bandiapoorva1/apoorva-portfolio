import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

const skills = ["Python", "Java", "JavaScript", "React", "Node.js", "TailwindCSS", "TensorFlow", "MongoDB", "AWS"];

const categories = ["All", "AI", "Web", "Cloud"];

const projects = [
  {
    name: "Resume Agent AI",
    desc: "AI-powered resume analysis and optimization using OpenAI & LangChain. Helps users tailor resumes effectively.",
    link: "https://github.com/bandiapoorva1/resume-agent-ai",
    img: "/resume-agent-ai.png",
    tags: ["AI"],
  },
  {
    name: "Disaster Relief App",
    desc: "A PWA for emergency coordination using React, Mapbox, IPFS, and Twilio. Facilitates community relief management.",
    link: "https://github.com/bandiapoorva1/disaster-relief-app",
    img: "/disaster-relief-ai-apoorva.png",
    tags: ["Web", "Cloud"],
  },
  {
    name: "Urban Sound Classifier",
    desc: "CNN model classifying urban audio scenes using UrbanSound8K. Useful for smart city applications.",
    link: "https://github.com/bandiapoorva1/UrbanSoundClassifier",
    img: "/urban-sound-apoorva.png",
    tags: ["AI"],
  },
  {
    name: "Autism Detection",
    desc: "Deep learning model detecting autism from facial features using CNNs and OpenCV.",
    link: "https://github.com/bandiapoorva1/autism-detection",
    img: "/autism-detection-apoorva.png",
    tags: ["AI"],
  },
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

const achievements = [
  {
    title: "Technical Head – CSI",
    desc: "Led tech initiatives and mentored developers in the CSI student chapter."
  },
  {
    title: "Student Coordinator – Stentorian",
    desc: "Conducted communication and leadership workshops for English club members."
  }
];

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [filter, setFilter] = useState("All");
  const [confetti, setConfetti] = useState(false);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const handleConfetti = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 1500);
  };

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.tags.includes(filter));

  return (
    <div className={theme === "dark" ? "bg-[#0a0f1c] text-white" : "bg-white text-black"}>
      {confetti && <Confetti recycle={false} numberOfPieces={300} />}

      <header className="flex justify-between items-center px-8 py-6 sticky top-0 z-50 backdrop-blur-md">
        <div className="text-2xl font-bold">AB<span className="text-purple-400 ml-1">•</span></div>
        <nav className="flex items-center space-x-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleTheme}>{theme === "dark" ? <FaSun /> : <FaMoon />}</button>
        </nav>
      </header>

      <section className="text-center px-6 py-24" onClick={handleConfetti}>
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Apoorva<span className="text-purple-400">.</span></h1>
        <p className="text-2xl font-semibold text-purple-300 mb-4">ML/AI Engineer • Cloud Developer • Full-Stack Enthusiast</p>
        <p className="max-w-2xl mx-auto">Passionate about creating smart, scalable systems. I thrive at the intersection of creativity and code.</p>
      </section>

      <section id="about" className="px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-purple-400">About</h2>
        <p className="mb-4">I'm Apoorva, a machine learning engineer and full-stack developer. My passion lies in solving real-world problems with intelligent systems.</p>
        <h3 className="text-xl font-semibold mb-3 text-purple-300">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => <span key={idx} className="bg-purple-900/20 px-4 py-2 rounded-full">{skill}</span>)}
        </div>
      </section>

      <section id="projects" className="px-6 py-24">
        <h2 className="text-3xl font-bold text-purple-400 mb-8">Projects</h2>
        <div className="flex gap-4 mb-8">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full border ${filter === cat ? 'bg-purple-600 text-white' : 'bg-transparent text-purple-300'} transition`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => (
            <motion.a key={idx} whileHover={{ scale: 1.05 }} href={proj.link} target="_blank" className="relative bg-white/5 rounded-xl p-5 border border-purple-300/30 backdrop-blur-xl shadow-lg">
              <img src={proj.img} alt={proj.name} className="rounded-md mb-4 h-40 w-full object-cover border border-white/10" />
              <h3 className="text-xl font-bold mb-2">{proj.name}</h3>
              <p className="text-sm text-gray-300 mb-2">{proj.desc}</p>
              <div className="absolute top-3 right-3 text-lg">
                {proj.tags.map((tag, i) => <span key={i} className="mr-1">{tag === "AI" ? "🧠" : tag === "Web" ? "🌐" : tag === "Cloud" ? "☁️" : ""}</span>)}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="experience" className="px-6 py-24 bg-[#151c2e]">
        <h2 className="text-3xl font-bold text-purple-400 mb-10">Experience</h2>
        {experience.map((exp, idx) => (
          <motion.div key={idx} whileHover={{ scale: 1.02 }} className="bg-white/5 p-6 rounded-xl mb-6 border border-purple-400/10">
            <h3 className="text-xl font-bold">{exp.role} – {exp.org}</h3>
            <p className="italic text-sm mb-2">{exp.time}</p>
            <ul className="list-disc ml-6">
              {exp.desc.map((line, i) => <li key={i}>{line}</li>)}
            </ul>
          </motion.div>
        ))}
      </section>

      <section id="achievements" className="px-6 py-24">
        <h2 className="text-3xl font-bold text-purple-400 mb-10">Achievements & Leadership</h2>
        {achievements.map((ach, idx) => (
          <motion.div key={idx} whileHover={{ scale: 1.02 }} className="bg-white/5 p-5 rounded-lg mb-4 border border-purple-400/10">
            <h3 className="text-lg font-semibold text-white">{ach.title}</h3>
            <p className="text-sm text-gray-300 mt-1">{ach.desc}</p>
          </motion.div>
        ))}
      </section>

      <section id="contact" className="px-6 py-24 bg-[#0d1426]">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">Contact Me</h2>
        <form action="https://formspree.io/f/xwkgaepw" method="POST" className="max-w-xl mx-auto space-y-4">
          <input name="email" type="email" required placeholder="Email" className="w-full px-4 py-2 rounded bg-white/10 border border-purple-500/30 text-white" />
          <input name="subject" type="text" required placeholder="Subject" className="w-full px-4 py-2 rounded bg-white/10 border border-purple-500/30 text-white" />
          <textarea name="message" rows="5" required placeholder="Your message..." className="w-full px-4 py-2 rounded bg-white/10 border border-purple-500/30 text-white" />
          <button type="submit" className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded">Send Message</button>
        </form>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">© {new Date().getFullYear()} Apoorva Bandi • All Rights Reserved</footer>
    </div>
  );
};

export default App;
