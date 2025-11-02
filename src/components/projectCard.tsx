export function MainprojectCard() {
  return (
    <div className="bg-gray-700 text-white grid grid-cols-2 p-5 rounded-lg shadow lg:col-start-3 lg:col-span-3 lg:row-start-5 space-y-4">
      <p className="text-sm border-r mr-4">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        Visit my GitHub to see portfolio websites, admin dashboards, UI
        components, and fullstack apps.
        {/* Link to GitHub */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-300 underline mt-2 block"
        >
          View GitHub →
        </a>
      </p>
      {/* Project Highlights Section */}
      <div>
        <h3 className="font-semibold mb-1">Project Highlights:</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Responsive portfolio website with dynamic content</li>
          <li>Admin dashboard with real-time data visualization</li>
          <li>Reusable UI components library</li>
          <li>Fullstack e-commerce app with user authentication</li>
        </ul>
      </div>
    </div>
  );
}
