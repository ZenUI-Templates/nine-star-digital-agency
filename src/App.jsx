import React from "react";

// all components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Service from "./Components/Service";
import Portfolio from "./Components/Portfolio";
import Faq from "./Components/Faq";
import Team from "./Components/Team";
import Sponsers from "./Components/Sponsers";
import Contact from "./Components/Contact";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";
import MobileNav from "./Components/MobileNav";

const App = () => {
  return (
    <>
      <MobileNav />
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Faq />
      <Team />
      <Sponsers />
      <Contact />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default App;
