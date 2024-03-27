// PageApercuArticles.js
import React from 'react';
import ApercuArticle from './ApercuArticle';
import articlesData from './articlesData'; // Suppose que vous avez vos données d'articles dans un fichier articlesData.js
import './ApercuArticles.scss'; // Importez le fichier CSS pour la mise en page

const PageApercuArticles = () => {
  return (
    <div className='Content'>
      <div className="ApercuArticles">
        <h1 className='TitreApercuArticles'>Aperçu des Articles</h1>
        <div className="GridContainer">
          {articlesData.map(article => (
            <ApercuArticle key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>

  );
};

export default PageApercuArticles;
