import React from "react";
import "./Socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faWhatsapp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function () {
  return (
    <div className="social-media flex">
      <div className="tiktok">
        <a href="https://tiktok.com/@nksservice">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
      <div className="whatsapp">
        <a href="https://api.whatsapp.com/send?phone=31627566079">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <div className="facebook">
        <a href="https://facebook.com/people/NKS-Service/100031026924635/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <div className="instagram">
        <a href="https://instagram.com/nks_service">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}
