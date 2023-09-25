import React from 'react'
import "./MainMenu.css"
import { Link } from "react-router-dom"

export default function MainMenu() {
  return (
    <div className="main-menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/informatie">Informatie</Link>
        </li>
        <li>
          <Link to="/prijzen">Prijzen</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
