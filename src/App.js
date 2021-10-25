import React, { useEffect } from "react";
import "./App.css";
import About from "./partials/About";
import Card from "./partials/Card";
import Footer from "./partials/Footer";
import Projects from "./partials/Projects";
import Skills from "./partials/Skills";
import data from "./assets/data";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card name={data.name} title={data.title} social={data.social} />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About title={data.about.title} description={data.about.description} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Footer github={data.social.github} />
      </div>
    </div>
  );
}
export default App;
