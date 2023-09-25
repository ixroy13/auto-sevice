import React from "react";
import "./Price.css";
import PriceTable from "../../components/PriceTable/PriceTable";
import Navbar from "../../components/Navbar/Navbar";
import Background from "../../components/Background/Webcontent";
import Footer from "../../components/Footer/Footer";
export default function () {
  return (
    <>
      <Navbar />
      <div className="container">
        <section id="price">
          <h1>Prijslijst Algemeen</h1>
          <p>
            Alle prijzen staan hier inclusief BTW 21%. Wij doen nog veel meer
            dan wat er op deze prijslijst staat maar dat is moeilijk te zeggen,

            voren met u bespreken.
          </p>
          <PriceTable />
        </section>
        <Background />
        <Footer />
      </div>
    </>
  );
}
