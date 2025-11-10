import { ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Assistant UI",
      desc: "A sleek conversational UI powered by OpenAI API for real-time responses.",
      tech: ["React", "Tailwind", "Node.js"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Responsive developer portfolio built with modern design and animations.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Data Dashboard",
      desc: "Interactive analytics dashboard with live charts and API data.",
      tech: ["React", "Recharts", "Express"],
      link: "#",
    },
    {
      title: "Task Manager",
      desc: "A minimalist full-stack app for tracking daily productivity.",
      tech: ["MongoDB", "React", "Tailwind"],
      link: "#",
    },
    {
      title: "Trackademic",
      desc: "A comprehensive platform for managing student records, attendance, grades, and staff operations.",
      tech: ["Tailwind", "Javascript", "Node.js"],
      link: "#",
    },
    {
      title: "Quiz Master",
      desc: "An interactive web app for creating, taking, and sharing quizzes in real-time.",
      tech: ["Node.js", "React", "Firebase"],
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center flex justify-center items-center gap-3">
          <Code2 className="w-8 h-8 text-indigo-400" />
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative bg-slate-800/60 border border-slate-700 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.4)]"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-300 group-hover:text-indigo-400 transition">
                  {p.title}
                </h3>
                <p className="text-slate-400 mb-4">{p.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-sm bg-slate-700/70 rounded-full text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                className="absolute top-4 right-4 text-slate-400 hover:text-indigo-400 transition"
                target="_blank"
                rel="noopener noreferrer"
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
