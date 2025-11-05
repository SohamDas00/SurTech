import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Title from "./components/Title";
import OrganizingBody from "./components/OrganizingBody";
import PaperSubmission from "./components/PaperSubmission";
import Contact from "./components/Contact";
import ConferenceTracks from "./components/ConferenceTracks";
import Footer from "./components/Footer";
import HorizontalInfiniteScroll from "./components/HorizontalInfiniteScroll";
const App = () => {
  return (
    <>
      <Navbar />
      <HorizontalInfiniteScroll />
      <Title />
      <section id="about" className="section">
        <About />
      </section>
      <section id="organizingbody" className="section">
        <OrganizingBody />
      </section>
      <section id="papersubmission" className="section">
        <PaperSubmission />
      </section>
      <section id="conferencetracks" className="section">
        <ConferenceTracks />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>

      <Footer />
    </>
  );
};

export default App;
