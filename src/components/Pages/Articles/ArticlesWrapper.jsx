import React from "react";
import { Link } from "react-router-dom";
import "./Articles.scss";

function ArticlesWrapper() {
  return (
    <div className="ArticlesWrapperDiv">
      <div className="ArticlesWrapper" id="articles">
        <div className="Art Art1">
          <Link to="/Articles/Phishing">
            <div className="ArtContent hidden">
              <h2>Phishing</h2>
              <p>Se protéger des e-mails frauduleux</p>
            </div>
          </Link>
        </div>

        <div className="Art Art2">
          <Link to="/Articles/Password">
            <div className="ArtContent hidden">
              <h2>Password</h2>
              <p>Sécurisation des mots de passe</p>
            </div>
          </Link>
        </div>

        <div className="Art Art3">
          <Link to="/Articles/Scam">
            <div className="ArtContent hidden">
              <h2>Scam</h2>
              <p>Éviter les arnaques sur Internet</p>
            </div>
          </Link>
        </div>

        <div className="Art Art4">
          <Link to="/Articles/Social">
            <div className="ArtContent hidden">
              <h2>Social</h2>
              <p>Se protéger sur les réseaux sociaux</p>
            </div>
          </Link>
        </div>

        <div className="Art Art5">
          <Link to="/Articles/Malware">
            <div className="ArtContent hidden">
              <h2>Malware</h2>
              <p>Reconnaître un programme malveillant</p>
            </div>
          </Link>
        </div>

        <div className="Art ArtQuiz">
          <Link to="/Quiz">
            <div className="ArtContent hidden">
              <h2>Quiz</h2>
              <p>Se tester via un quiz</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArticlesWrapper;
