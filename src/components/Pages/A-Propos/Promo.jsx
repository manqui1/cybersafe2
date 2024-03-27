import React from "react";
import "./APropos.scss";
import Promo2021 from "@/assets/Promo/Promo2021.webp";

function Promo({ promoValue }) {
  switch (promoValue) {
    case "1":
      return (
        <>
          <p>
            Nous sommes une équipe composée de 5 étudiants en 2ème année de BTS
            SIO (<em>Services Informatiques aux Organisations</em>).
          </p>
          <img
            className="CenteredImg"
            src={Promo2021}
          ></img>
        </>
      );
      break;

    case "2":
      return (
        <>
          <p>
            Nous sommes une équipe composée de 6 étudiants en 2ème année de BTS
            SIO (<em>Services Informatiques aux Organisations</em>).
          </p>
          <div className="PromoWrapper">
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Mathis <br />
                  Hervé
                </h2>
                <p>Chef de Projet</p>
              </div>
            </div>
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Dorian <br />
                  Biojout
                </h2>
                <p>Secrétaire / Rédacteur</p>
              </div>
            </div>
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Pierre-Louis <br />
                  Le Pouliquen
                </h2>
                <p>Rédacteur en chef</p>
              </div>
            </div>
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Nathan <br />
                  Boël
                </h2>
                <p>Rédacteur</p>
              </div>
            </div>
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Jimmy <br />
                  Le Goff
                </h2>
                <p>Développeur</p>
              </div>
            </div>
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Nicolas <br />
                  Le Tertre
                </h2>
                <p>Intégrateur / Développeur</p>
              </div>
            </div>
          </div>
        </>
      );
      break;
    default:
      return (
        <>
          <p className="Text">
            Nous sommes une équipe composée de 6 étudiants en 2ème année de BTS
            SIO (<em>Services Informatiques aux Organisations</em>).
          </p>
          <div className="PromoWrapper">
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Thomas <br />
                  Roget
                </h2>
                <p>Chef de Projet</p>
              </div>
            </div>
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Adrien <br />
                  Goubert
                </h2>
                <p>Secrétaire / Rédacteur</p>
              </div>
            </div>
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Maxime <br />
                  Desevedavy
                </h2>
                <p>Rédacteur en chef</p>
              </div>
            </div>
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Nathan <br />
                  Guenifet
                </h2>
                <p>Rédacteur</p>
              </div>
            </div>
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Singuila <br />
                  Mbaye-Amadou
                </h2>
                <p>Développeur</p>
              </div>
            </div>
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Enzo <br />
                  Orain
                </h2>
                <p>Intégrateur / Développeur</p>
              </div>
            </div>
          </div>
        </>
      );
      break;
  }
}
export default Promo;
