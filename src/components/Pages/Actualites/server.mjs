// server.mjs

import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour gérer les CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Autoriser les requêtes de tous les domaines
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Méthodes HTTP autorisées
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // En-têtes autorisés
  next();
});

// Route du proxy
app.get("/proxy", async (req, res) => {
  try {
    // Récupérer l'URL du flux RSS à partir des paramètres de requête
    const rssFeedUrl = req.query.url;

    // Faire une requête vers l'URL du flux RSS réel
    const response = await fetch(rssFeedUrl);
    const data = await response.text(); // Utiliser .text() pour récupérer le contenu texte du flux RSS

    // Envoyer les en-têtes CORS
    res.setHeader("Content-Type", "application/xml"); // Spécifier le type de contenu du flux RSS
    res.setHeader("Access-Control-Allow-Origin", "*"); // Autoriser les requêtes de tous les domaines

    // Envoyer la réponse de la requête proxy au client
    res.send(data);
  } catch (error) {
    console.error("Erreur lors de la requête proxy:", error);
    res
      .status(500)
      .json({ error: "Une erreur est survenue lors de la requête proxy." });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
