// ApercuArticle.js
import React from 'react';
import { Link } from 'react-router-dom';

const ApercuArticle = ({ article }) => {
  return (
      <div className='ApercuArticle'>
        <div className="ApercuArticleContent">
          <h2 className='H2'>{article.titre}</h2>
          <p className='P'>{article.resume}</p>
          <Link to={"/Articles/" + article.lien}>
            <button className='ButtonApercu'>Lire la suite</button>
          </Link>
        </div>
      </div>
  );
};

export default ApercuArticle;
