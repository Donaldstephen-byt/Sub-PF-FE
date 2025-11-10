import {
  ExternalLink,
  Code2,
  Rocket,
  Sparkles,
  Globe,
  Award,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Assistant UI",
      desc: "A sleek conversational interface powered by OpenAI API, designed for real-time responses and intuitive interaction.",
      tech: ["React", "Tailwind", "Node.js"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Responsive developer portfolio featuring modern design, animations, and optimized performance.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Data Dashboard",
      desc: "Interactive analytics dashboard presenting live charts and actionable insights from API data.",
      tech: ["React", "Recharts", "Express"],
      link: "#",
    },
    {
      title: "Task Manager",
      desc: "Minimalist full-stack productivity app to track tasks efficiently with intuitive UX.",
      tech: ["MongoDB", "React", "Tailwind"],
      link: "#",
    },
    {
      title: "Trackademic",
      desc: "Comprehensive platform to manage student records, attendance, grades, and staff operations seamlessly.",
      tech: ["Tailwind", "JavaScript", "Node.js"],
      link: "#",
    },
    {
      title: "Quiz Master",
      desc: "Interactive web app for creating, taking, and sharing quizzes in real-time with dynamic feedback.",
      tech: ["Node.js", "React", "Firebase"],
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-400/20 shadow-inner">
              <Code2 className="w-7 h-7 text-indigo-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
              Projects
            </h2>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <Rocket className="w-5 h-5 hover:text-indigo-400 transition-colors" />
            <Sparkles className="w-5 h-5 hover:text-indigo-400 transition-colors" />
            <Globe className="w-5 h-5 hover:text-indigo-400 transition-colors" />
          </div>
        </div>

        {/* Description Card */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-3xl p-8 mb-12 shadow-2xl backdrop-blur-sm">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-300 flex items-center gap-2">
            <Award className="w-6 h-6 text-indigo-400" />
            Building with Integrity & Excellence
          </h3>
          <p className="text-slate-300 text-base leading-relaxed">
            Each project demonstrates precision, creativity, and purposeful
            design. My work focuses on reliable, scalable solutions that create
            real-world impact, emphasizing clean code, thoughtful UX, and
            long-term value.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative bg-slate-800/60 border border-slate-700 rounded-2xl p-6 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.4)] hover:border-indigo-500/40"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-300 group-hover:text-indigo-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm">{p.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs bg-slate-700/70 rounded-full text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
