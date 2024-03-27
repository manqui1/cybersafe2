// ArticleTemplate.js

import React from "react";
import "../Articles.scss";
import ScrollToTopButton from "@default/ScrollToTopButton";

function ArticleTemplate({ title, introImageSrc, content }) {
    const containsList = (text) => {
        const regex = /<ul>|<li>/;
        return regex.test(text);
    };

    const formatTextWithSpaces = (text) => {
        // Ajouter une classe à la balise <br>
        const formattedText = text.replace(/<br\s*\/?>/gi, '<br class="br-margin" />');
    
        // Ajouter une classe à chaque retour à la ligne (\n)
        let replacedText = formattedText.replace(/\n/g, '<span class="span-margin" /> \n');
    
        return replacedText;
    };    
    
    return (
        <div className="Content">
            <ScrollToTopButton />
            <h1 className="TitleArticle">{title}</h1>
            {introImageSrc && <img className="IntroImage" src={introImageSrc} alt={`Image d'introduction pour l'article "` + title + `"`} />}
            {content.map((section, index) => (
                <div key={index}>
                    {section.image && <img className="ContentImg" src={section.image} alt={title} />}
                    {section.title && section.text && (
                        <div className="CategoryContentDiv">
                            <div className={`CategoryContent ${containsList(section.text) ? 'ArticleList' : ''}`}>
                                <h2 className="TitleSection">{section.title}</h2>
                                <div className="TextContentSection" dangerouslySetInnerHTML={{ __html: formatTextWithSpaces(section.text) }} />
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ArticleTemplate;
