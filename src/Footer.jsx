
import React from "react";
import MapComponent from "./MapComponent";
import Social from "./Social";
import './footer.css'
function Footer() {
  return (
    <footer className="footer">
      <h1>you can check bus lines in tetouan</h1>
      <div className="footer-content">
        <MapComponent />
        <Social />
      </div>
    </footer>
  );
}

export default Footer;
