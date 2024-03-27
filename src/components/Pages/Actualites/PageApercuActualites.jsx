// PageApercuArticle.jsx

import React from 'react';
import RssReader from './GetFluxRss';
import "./rssReader.scss";

// Affichage des actualités
function ApercuArticle() {
  return (
    <div className='Content'>
      <RssReader />
    </div>
  );
}

export default ApercuArticle;
