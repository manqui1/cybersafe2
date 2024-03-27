import React, { useState, useRef } from "react";
import ArticlesWrapper from "../Articles/ArticlesWrapper";
import ScrollToTopButton from "../../Default/ScrollToTopButton";
import "./App.scss";
import Card from "./Card";
import family_logo from "@/assets/App/Card/family.png";
import news_logo from "@/assets/App/Card/news.png";
import learn_logo from "@/assets/App/Card/learn.png";
import quiz_logo from "@/assets/App/Card/quiz.png";

function Main() {
  const targetDivRef = useRef(null);

  const handleScrollToDiv = () => {
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Content">
      <ScrollToTopButton />
      <div className="TopMain">
        <div className="HeaderGrid">
          <ArticlesWrapper />
          <div className="TitleMain">
            <h1 className="TextDivTitle">
              <span className="StartTextH1">
                Vous pensez être <br />
                protégé sur <br />
              </span>
              <span className="TextColorH1">internet </span>
              <span className="StartTextH1">?</span>
              <br />
              <br />
              <span className="EndTextH1">
                Laissez-nous vous prouver le contraire !
              </span>
            </h1>
            <div className="DivButtonContinue">
            <button onClick={handleScrollToDiv} className="ButtonContinue">
              Continuer
            </button>
            </div>
          </div>
        </div>
      </div>
      <div className="BottomMain" ref={targetDivRef}>
        <div>
          <h2 className="TextH2Main">
            <span className="StartTextH2">Pourquoi </span>
            <span className="TextColorH2">Cybersafe </span>
            <span className="StartTextH2">?</span>
          </h2>
        </div>
        <div className="cardContainersWrapper">
        <Card
            title="Sécurité pour tous"
            text="Notre objectif est de simplifier un maximum le milieu fermé de la cybersécurité pour intégrer ses notions de bases à votre vocabulaire"
            image={family_logo}
          />
          <Card
            title="Restez informé"
            text="Tenez vous au courant des actualités, les menaces émergentes et les meilleures pratiques en cybersécurité grâce à notre page d'actualité"
            image={news_logo}
          />
          <Card
            title="Apprentissage accessible"
            text="Notre site propose des cours clairs et accessibles sur la cybersécurité, abordant des sujets du quotidien de manière simple et compréhensible pour tous"
            image={learn_logo}
          />
          <Card
            title="Testez-vous"
            text="Explorez vos connaissances en cybersécurité de manière ludique grâce à notre quiz interactif !"
            image={quiz_logo}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
