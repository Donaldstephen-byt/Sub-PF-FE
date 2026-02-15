import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./assets/pages/Home.tsx";
import About from "./assets/pages/About.tsx";
import Projects from "./assets/pages/Projects.tsx";
import Contact from "./assets/pages/contact.tsx";
import PageTransition from "./components/PageTransition.tsx";
import BuyMeCoffeeApple from "./components/CoffeeButton.tsx";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar.tsx";
import { BASE_URL } from "./components/config";
// import ConstructionPage from "./assets/pages/ConstructionPage.tsx";
import ConstructionScene from "./assets/pages/ConstructionPage.tsx";
function App() {
  const location = useLocation();

  // Analytics tracking for page views and duration
  useEffect(() => {
    const startTime = Date.now();

    const sendAnalytics = () => {
      navigator.sendBeacon(
        `${BASE_URL}/track`,
        JSON.stringify({
          page: window.location.pathname,
          referrer: document.referrer,
          duration: Math.floor((Date.now() - startTime) / 1000),
        })
      );
    };

    window.addEventListener("beforeunload", sendAnalytics);

    return () => {
      window.removeEventListener("beforeunload", sendAnalytics);
      sendAnalytics(); 
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className=" md:top-99 bottom-10 right-4 fixed z-60">
        {" "}
        <BuyMeCoffeeApple />
      </div>
      ;
      <PageTransition key={location.pathname}>
        <Routes>
          {/* <Route path="/construction" element={<ConstructionPage />} /> */}
          <Route path="/construction" element={<ConstructionScene />} />
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


