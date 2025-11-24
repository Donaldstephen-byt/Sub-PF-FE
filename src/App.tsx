import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.tsx";
import Home from "./assets/pages/Home.tsx";
import AboutPage from "./assets/pages/About.tsx";
import Projects from "./assets/pages/Projects.tsx";
import ContactPage from "./assets/pages/Contact.tsx";

// import About from "./pages/About";
// import Skills from "./pages/Skills";

function App() {
  return (
    <>
      {/* Navbar always stays here */}
      <Navbar />

      {/* Page content changes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;

// function App() {
//   return (
//     <>
//       <div>
//         <Navbar />
//       </div>
//       <div className="flex flex-wrap w-full justify-center gap-4 items-center mt-4">
//         <Sidebar /> <LefIndexCard /> <SkillsCard />
//       </div>
//     </>
//   );
// }

// export default App;
