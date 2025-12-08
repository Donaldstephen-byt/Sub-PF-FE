import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar.tsx";
import Home from "./assets/pages/Home.tsx";
import About from "./assets/pages/About.tsx";
import Projects from "./assets/pages/Projects.tsx";
import Contact from "./assets/pages/contact.tsx";
import PageTransition from "./components/PageTransition.tsx";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Navbar always stays here */}
      <Navbar />

      {/* Page content with smooth transitions */}
      <PageTransition key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
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
