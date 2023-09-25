import React from "react";
import "./Navbar.css";
import mainLogo from "../../assets/images/logo.webp";
import MainMenu from "../MainMenu/MainMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex">
      <div className="logo-baner">
        <Link to="/">
          <img src={mainLogo} alt="NKS Service Logo" />
        </Link>
      </div>
      <MainMenu />
    </nav>
  );
}

//rfc
