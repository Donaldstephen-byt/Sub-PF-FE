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

export default function Sidebar() {
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
      className="bg-slate-900 rounded-xl shadow-lg border border-slate-700 hover:shadow-xl transition border-l-5  flex flex-col gap-4 w-full max-w-72"
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
        className="flex flex-col gap-2 justify-center"
      >
        <div className="relative rounded-md py-[0.5px] animate-border-glow bg-linear-to-br from-indigo-400 via-purple-500 to-blue-500 transition-all duration-300 hover:bg-transparent">
          <div
            className="flex items-center gap-2 text-white bg-gray-900 rounded-md p-2 transition-all duration-300 hover:bg-opacity-30 hover:scale-95 hover:bg-gray-700"
            data-testid="test-user-contact-email"
          >
            📧 <span>{profile.email}</span>
          </div>
        </div>

        <div className="relative rounded-md py-[0.8px] animate-border-glow bg-linear-to-br from-indigo-400 via-purple-500 to-blue-500 transition-all duration-300 hover:bg-transparent">
          <div
            className="flex items-center gap-2 text-white bg-gray-900 rounded-md p-2 transition-all duration-300 hover:bg-opacity-30 hover:scale-95 hover:bg-gray-700"
            data-testid="test-user-contact-phone"
          >
            📞 <span>{profile.phone}</span>
          </div>
        </div>

        <div className="relative rounded-md py-[0.8px] animate-border-glow bg-linear-to-br from-indigo-400 via-purple-500 to-blue-500 transition-all duration-300 hover:bg-transparent">
          <div
            className="flex items-center gap-2 text-white bg-gray-900 rounded-md p-2 transition-all duration-300 hover:bg-opacity-30 hover:scale-95 hover:bg-gray-700"
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
