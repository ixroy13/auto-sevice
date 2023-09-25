import React from "react";
import "./Home.css";
import About from "../../components/AboutUs/About";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Background from "../../components/Background/Webcontent";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <section className="home-sec">
          <div className="hero flex">
            <div className="title">
              <h1>Welkom bij NKS Service</h1>
            </div>
            <div className="subtitle">
              <h3>Reparatie & onderhoud</h3>
              <h3>Chiptuning & Standalone ecu tuning</h3>
              <h3>Motorrevisie & tuning</h3>
              <h3>Airco service</h3>
              <h3>Oldtimers</h3>
            </div>
          </div>
          <About />
        </section>
        <Background />
        <Footer />
      </div>
    </div>
  );
}
