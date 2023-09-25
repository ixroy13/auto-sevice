import React from "react";
import "./Footer.css"
import Socials from "../Socials/Socials";
import MainMenu from "../MainMenu/MainMenu";

export default function Footer() {
  return (
    <footer>
      <div className="flex footer-content">
        <div className="media">
            <Socials />
        </div>
        <div className="menu">
            <MainMenu />
        </div>
        <div className="copyright">
          <p>© 2023 NKS Service</p>
        </div>
      </div>
    </footer>
  );
}
