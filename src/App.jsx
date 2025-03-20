import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import Contact from "./pages/Contact";

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CarLoader from "./components/CarLoader";

function App() {
  const location = useLocation(); // Get current route
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Show loader on route change

    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after delay
    }, 1700); // Adjust time as needed

    return () => clearTimeout(timer);
  }, [location.pathname]); // Run effect when route changes

  // Dark Mode Setup
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    
    <div className="overflow-x-hidden">
      {/* {loading ? (
        <CarLoader />
      ) : ( */}
        <>
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/cars" element={<Cars theme={theme}/>} />
            <Route path="/contact" element={<Contact theme={theme} />} />
          </Routes>
          <Footer />
        </>
       {/* )}  */}
    </div>
  );
}

export default App;
