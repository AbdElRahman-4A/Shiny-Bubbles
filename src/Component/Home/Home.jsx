import Header from "../Header/Header";
import Packages from "../Packages/Packages";
import Gallery from "../Gallery/Gallery";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Bubbles from "../Bubble/Bubbles";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <Bubbles visible={loading} />
      <div style={{ transition: "all .5s ease-in-out", opacity: "0" }} className={`${loading ? '' : 'opacity-100'}`}>
        <Header />
        <Packages />
        <Gallery />
        <AboutUs />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
