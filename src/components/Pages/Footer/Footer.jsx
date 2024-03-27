import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import QRcodeCyberSafe from "@/assets/Footer/QrCodeCyberSafeDLS.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="GridFooter">
        <Link to="https://www.instagram.com/cybersafe_dls/" className="LinkInstagramText">
          <div className="ImgFooter">
            <img className="QRcodeCyberSafe" src={QRcodeCyberSafe}></img>
          </div>
        </Link>
        <ul className="FooterGroup">
          <Link to="/">
            <li className="FooterItem">Accueil</li>
          </Link>
          <Link to="/a-propos">
            <li className="FooterItem">A Propos</li>
          </Link>
          <Link to="/mentions-legales-cgu">
            <li className="FooterItem">Mentions Légales</li>
          </Link>
          <a href="mailto:cybersafe-dls@protonmail.com">
            <li className="FooterItem">Contact</li>
          </a>
          <span className="Copyright">Copyright © cybersafe-dls.fr - Tous droits réservés</span>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
