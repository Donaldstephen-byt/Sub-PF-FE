import { useEffect, useState } from "react";
import { BASE_URL } from "./config";

export default function LefIndexCard() {
  const [skills, setSkills] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/skills`)
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch(() => setError("Failed to load profile"));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const clock = document.querySelector('[data-testid="test-user-time"]');
      if (clock) clock.textContent = Date.now();
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!skills) return <p>Loading...</p>;
  console.log(skills);

  return (
    <main data-testid="test-user-profile-main" class="flex flex-col gap-5">
      <section
        data-testid="test-user-profile-card"
        class="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8 pl-2  bg-slate-900 rounded-xl shadow-lg border border-slate-700 hover:shadow-xl transition border-l-5"
      >
        {/* <!-- Left Side --> */}
        <div data-testid="test-user-profile-left">
          <h3
            data-testid="test-user-skills-title"
            className="text-base font-semibold mb-2"
          >
            {skills.title}
          </h3>
          <p
            className="text-gray-600 leading-relaxed mb-4 whitespace-pre-line"
            data-testid="skills-text"
          >
            {skills.discription}
          </p>

          <div className="grid mt-2 gap-4">
            <div
              className="flex justify-between items-center bg-slate-800 rounded-lg px-4 shadow-sm border border-slate-700 text-slate-200"
              data-testid="test-user-info-fullname"
            >
              <span className="text-gray-500 text-sm">Full name</span>
              <span classNames="font-semibold"> {skills.fullName} </span>
            </div>

            <div
              class="flex justify-between items-center bg-slate-800 rounded-lg px-4 shadow-sm border border-slate-700 text-slate-200"
              data-testid="test-user-info-role"
            >
              <span className="text-sm">Role</span>
              <span className="font-semibold"> {skills.role} </span>
            </div>

            <div
              className="flex justify-between items-center bg-slate-800 rounded-lg px-4 shadow-sm border border-slate-700 text-slate-200"
              data-testid="test-user-info-email"
            >
              <span className=" text-sm">Email</span>
              <a
                href="mailto:donalduko69@gmail.com"
                className="font-semibold text-blue-600 hover:underline"
              >
                {skills.email}
              </a>
            </div>

            <div
              className="flex justify-between items-center bg-slate-800 rounded-lg px-4 shadow-sm border border-slate-700 text-slate-200"
              data-testid="test-user-info-phone"
            >
              <span className=" text-sm">Phone</span>
              <a
                href="tel:+2348143405610"
                className="font-semibold text-blue-600 hover:underline"
              >
                {skills.phone}
              </a>
            </div>

            <div
              className="flex justify-between items-center bg-slate-800 rounded-lg px-4 shadow-sm border border-slate-700 text-slate-200"
              data-testid="test-user-info-location"
            >
              <span className="text-sm">Location</span>
              <span className="font-semibold"> {skills.location} </span>
            </div>
          </div>
        </div>

        {/* {<!-- Right Side -->} */}
        <aside
          data-testid="test-user-profile-right"
          className="flex flex-col gap-3 py-2 pr-2"
        >
          <div
            className="p-3 rounded-lg bg-slate-800 px-4 shadow-sm border border-slate-700"
            data-testid="hobbies-section"
          >
            <h4 className="font-semibold mb-2">Hobbies</h4>
            <ul className="flex flex-wrap gap-2">
              {skills.hobies.map((hobby, index) => (
                <div className="p-px rounded-[12px] bg-linear-to-br from-indigo-400 via-purple-500 to-blue-500 animate-pulse duration-300">
                  <li
                    key={index}
                    className="bg-black/80 text-white rounded-[12px] px-2 py-1 shadow-sm"
                  >
                    {hobby}
                  </li>
                </div>
              ))}
            </ul>
          </div>

          <div
            className="p-3 rounded-lg bg-slate-800 px-4 shadow-sm border border-slate-700"
            data-testid="dislikes-section"
          >
            <h4 className="font-semibold mb-2">Dislikes</h4>
            <ul className="flex flex-wrap gap-2">
              {skills.Dislikes.map((Dislikes, index) => (
                <li
                  key={index}
                  className="bg-slate-700 border border-cyan-300 text-slate-200 rounded-[12px] px-2 py-1 shadow-sm"
                >
                  {Dislikes}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="p-3 rounded-lg bg-slate-800 px-4 shadow-sm border border-slate-700"
            data-testid="time-section"
          >
            Current time (ms):{" "}
            <span id="timeMs" data-testid="test-user-time"></span>
          </div>
        </aside>
      </section>
    </main>
  );
}
