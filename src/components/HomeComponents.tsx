import { useEffect, useState } from "react";
import { BASE_URL } from "./config";

type Profile = {
  fullName: string;
  email: string;
  avatar: string;
  role: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  facebook: string;
};

export  function Sidebar() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${BASE_URL}/profile`)
      .then((res) => res.json())
      .then((data: Profile) => setProfile(data))
      .catch(() => setError("Failed to load profile"));
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!profile) return <p>Loading...</p>;

  return (
    <aside
      data-testid="test-user-sidebar"
      className="bg-slate-900 rounded-xl shadow-lg border border-slate-700 hover:shadow-xl transition border-l-5  flex flex-col justify-between w-full max-w-72 sm:h-120 "
      style={{ padding: "20px" }}
      aria-label="Sidebar with profile summary"
    >
      {/* Top Section */}
      <div data-testid="sidebar-top" className="flex items-center gap-4 ">
        <img
          src={profile.avatar}
          alt={`${profile.fullName} avatar`}
          className="w-20 h-20 rounded-lg object-cover shadow border"
          data-testid="test-user-avatar"
        />
        <div data-testid="test-user-profile-name-section">
          <h1
            data-testid="test-user-profile-fullname"
            className="text-lg font-semibold"
          >
            {profile?.fullName}
          </h1>
          <p
            data-testid="test-user-profile-role"
            className="text-gray-500 text-sm"
          >
            {profile.role}
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div
        data-testid="test-user-sidebar-contact"
        className="flex flex-col gap-6"
      >
        <div className="relative rounded-md py-[0.5px] animate-border-glow bg-linear-to-br from-indigo-400 via-purple-500 to-blue-500 transition-all duration-300 hover:bg-transparent">
          <div
            className="flex items-center gap-2 text-white bg-gray-900 rounded-md p-2 py-3 transition-all duration-300 hover:bg-opacity-30 hover:scale-95 hover:bg-gray-700"
            data-testid="test-user-contact-email"
          >
            📧 <span>{profile.email}</span>
          </div>
        </div>

        <div className="relative rounded-md py-[0.8px] animate-border-glow bg-linear-to-br from-indigo-400 via-purple-500 to-blue-500 transition-all duration-300 hover:bg-transparent">
          <div
            className="flex items-center gap-2 text-white bg-gray-900 rounded-md p-2 py-3 transition-all duration-300 hover:bg-opacity-30 hover:scale-95 hover:bg-gray-700"
            data-testid="test-user-contact-phone"
          >
            📞 <span>{profile.phone}</span>
          </div>
        </div>

        <div className="relative rounded-md py-[0.8px] animate-border-glow bg-linear-to-br from-indigo-400 via-purple-500 to-blue-500 transition-all duration-300 hover:bg-transparent">
          <div
            className="flex items-center gap-2 text-white bg-gray-900 rounded-md p-2 py-3 transition-all duration-300 hover:bg-opacity-30 hover:scale-95 hover:bg-gray-700"
            data-testid="test-user-contact-location"
          >
            📍 <span>{profile.location}</span>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <nav
        aria-label="Social links"
        data-testid="test-user-social-links"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-2"
      >
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-linear-to-br from-indigo-400/40 via-purple-500/40 to-blue-500/40 rounded-[13px] text-sm font-bold p-2 transition-transform duration-300 hover:scale-95 hover:-translate-y-1"
          data-testid="test-user-social-github"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-linear-to-br from-indigo-400/40 via-purple-500/40 to-blue-500/40 rounded-[13px] text-sm font-bold p-2 transition-transform duration-300 hover:scale-95 hover:-translate-y-1"
          data-testid="test-user-social-linkedin"
        >
          LinkedIn
        </a>
        <a
          href={profile.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-linear-to-br from-indigo-400/40 via-purple-500/40 to-blue-500/40 rounded-[13px] text-sm font-bold p-2 transition-transform duration-300 hover:scale-95 hover:-translate-y-1"
          data-testid="test-user-social-twitter"
        >
          Twitter
        </a>
        <a
          href={profile.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-linear-to-br from-indigo-400/40 via-purple-500/40 to-blue-500/40 rounded-[13px] text-sm font-bold p-2 transition-transform duration-300 hover:scale-95 hover:-translate-y-1"
          data-testid="test-user-social-instagram"
        >
          Instagram
        </a>
        <a
          href={profile.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-linear-to-br from-indigo-400/40 via-purple-500/40 to-blue-500/40 rounded-[13px] text-sm font-bold p-2 transition-transform duration-300 hover:scale-95 hover:-translate-y-1"
          data-testid="test-user-social-facebook"
        >
          Facebook
        </a>
      </nav>
    </aside>
  );
}




export function LefIndexCard() {
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
                <div className="p-px rounded-xl bg-linear-to-br from-indigo-400 via-purple-500 to-blue-500 animate-pulse duration-300">
                  <li
                    key={index}
                    className="bg-black/80 text-white rounded-xl px-2 py-1 shadow-sm"
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
                  className="bg-slate-700 border border-cyan-300 text-slate-200 rounded-xl px-2 py-1 shadow-sm"
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
