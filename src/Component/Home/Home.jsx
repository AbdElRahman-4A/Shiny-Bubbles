import Header from "../Header/Header";
import Packages from "../Packages/Packages";
import Gallery from "../Gallery/Gallery";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Bubbles from "../Bubble/Bubbles";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [lounding, setLounding] = useState(false);

  useEffect(() => {
    setLounding(true);
    setTimeout(() => {
      setLounding(false);
    }, 5000);
  }, []);
  return (
    <>
      {lounding ? (
        <Bubbles />
      ) : (
        <div>
          <Header />
          <Packages />
          <Gallery />
          <AboutUs />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
