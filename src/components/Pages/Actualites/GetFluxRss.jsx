// GetFluxRss.jsx

import React, { Component } from "react";
import { Link } from 'react-router-dom';

class RssReader extends Component {
  // État initial du composant
  state = {
    items: [], // Tableau des éléments du flux RSS
    loading: true, // Indicateur de chargement
    error: null, // Message d'erreur en cas de problème
  };

  // Méthode appelée après le montage du composant
  componentDidMount() {
    // URL du flux RSS
    const rssFeedUrl = "http://feeds.feedburner.com/ZatazNews";

    // Récupération des données du flux RSS via une requête fetch avec un proxy local
    fetch(`http://localhost:3000/proxy?url=${rssFeedUrl}`)
      // Traitement de la réponse au format texte
      .then((response) => response.text())
      // Traitement des données XML pour extraire les éléments du flux RSS
      .then((xmlData) => {
        // Création d'un parseur XML
        const parser = new DOMParser();
        // Analyse du texte XML pour obtenir un document XML
        const xmlDoc = parser.parseFromString(xmlData, "text/xml");
        // Extraction des éléments "item" du flux RSS et création d'un tableau d'objets
        const items = Array.from(xmlDoc.querySelectorAll("item")).map((item) => ({
          title: item.querySelector("title").textContent, // Titre de l'élément
          link: item.querySelector("link").textContent, // Lien de l'élément
          description: item.querySelector("description").textContent, // Description de l'élément
        }));
        // Mise à jour de l'état avec les éléments extraits et indication que le chargement est terminé
        this.setState({ items, loading: false });
      })
      // Gestion des erreurs lors du chargement des données
      .catch((error) => {
        console.error("Erreur lors du chargement des données:", error);
        // Mise à jour de l'état avec l'erreur survenue et indication que le chargement est terminé
        this.setState({ error, loading: false });
      });
  }

  // Rendu du composant
  render() {
    const { items, loading, error } = this.state;

    // Si le chargement est en cours, afficher un message de chargement
    if (loading) {
      return <div>Chargement en cours...</div>;
    }

    // Si une erreur est survenue, afficher un message d'erreur
    if (error) {
      return <div>Erreur: {error.message}</div>;
    }

    // Si aucune erreur n'est survenue et que les données sont chargées, afficher les éléments du flux RSS
    return (
      <div>
        {/* Titre du lecteur de flux RSS */}
        <h1 className="TitreApercuActualites">Actu cyber</h1>
        {/* Conteneur pour les éléments du flux RSS */}
        <div className="GridActualites">
          {/* Mapping des éléments du flux RSS pour les afficher */}
          {items.map((item, index) => (
            <div className="ApercuAcutalites" key={index}>
              {/* Contenu de chaque élément du flux RSS */}
              <div className="ApercuActualitesContent">
                {/* Titre de l'élément */}
                <h3 className="H22">
                  {item.title}
                </h3>
                {/* Description de l'élément */}
                <p className="PP">{item.description}</p>
                {/* Lien vers l'élément complet */}
                <Link to={item.link}>
                  <button className='ButtonApercuActualites'>Voir plus</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// Exportation du composant RssReader par défaut
export default RssReader;
