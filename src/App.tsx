import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.tsx";
import Home from "./assets/pages/Home.tsx";
import About from "./assets/pages/About.tsx";
import Projects from "./assets/pages/Projects.tsx";
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
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/skills" element={<Skills />} /> */}
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
