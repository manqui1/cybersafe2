import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from "@pages/Header/Header";
import Footer from "@pages/Footer/Footer";
import PageNotFound from "@pages/PageNotFound/PageNotFound"; // import du composant de page 404
import Main from "@pages/App/App";
import Article1 from "@pages/Articles/ArticlesPages/Article-1";
import Article2 from "@pages/Articles/ArticlesPages/Article-2";
import Article3 from "@pages/Articles/ArticlesPages/Article-3";
import Article4 from "@pages/Articles/ArticlesPages/Article-4";
import Article5 from "@pages/Articles/ArticlesPages/Article-5";
import Article6 from "@pages/Articles/ArticlesPages/Article-6";
import Article7 from "@pages/Articles/ArticlesPages/Article-7";
import PageApercuArticle from "@pages/Articles/ApercuArticles/PageApercuArticle";
import PageApercuActualites from "@pages/Actualites/PageApercuActualites";
import MentionsLegales from "@pages/Mentions Légales/MentionsLegales";
import APropos from "@pages/A-Propos/APropos";
import Quizz from "@pages/Quiz/Quizz";

function DeclaredRoute() {
  return (
    <div>
      <Router>
        <Header />
        <Suspense fallback={<h1>Chargement...</h1>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Articles/Phishing" element={<Article1 />} />
            <Route path="/Articles/Password" element={<Article2 />} />
            <Route path="/Articles/Scam" element={<Article3 />} />
            <Route path="/Articles/Social" element={<Article4 />} />
            <Route path="/Articles/Malware" element={<Article5 />} />
            <Route path="/Articles/Social-Engineering" element={<Article6 />} />
            <Route path="/Articles/DCP" element={<Article7 />} />
            <Route path="/Articles" element={<PageApercuArticle />} />
            <Route path="/Actualites" element={<PageApercuActualites />} />
            <Route path="/Mentions-legales-cgu" element={<MentionsLegales />} />
            <Route path="/A-propos" element={<APropos />} />
            <Route path="/Quiz" element={<Quizz />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DeclaredRoute />
  </React.StrictMode>
);
