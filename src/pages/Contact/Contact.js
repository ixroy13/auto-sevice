import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Contact.css";
import Table from "../../components/OpenTime/Table";

export default function Contact() {
  return (
    <div>
      <section className="contact-header">
        <div className="info-box">
          <div className="adres">
            <FontAwesomeIcon icon={faLocationDot} />
            <div>
              <p>Winnerstraat 26C</p>
              <p>6031NL Nederweert</p>
            </div>
          </div>
          <div className="phone">
            <a href="tel:+31627566079">
              <FontAwesomeIcon icon={faPhone} />
              <span>+31 627566079</span>
            </a>
          </div>
          <div className="mail">
            <a href="mailto:infonksservice@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>infonksservice@gmail.com</span>
            </a>
          </div>
        </div>
        <Table />
      </section>
    </div>
  );
}
