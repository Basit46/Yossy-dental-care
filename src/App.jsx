import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="px-[20px] sm:px-[60px] overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />

      <Loader />
    </div>
  );
}

export default App;
