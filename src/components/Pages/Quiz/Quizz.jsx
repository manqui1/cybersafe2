// Quizz.jsx

import React, { useState } from 'react';
import Quiz from './Quiz';
import quiz from './question'; // Importation des questions depuis le fichier './question'
import "./Quiz.scss"

// Définition de la fonction Quizz
const Quizz = function () {
  // Déclaration d'un état local "quizResult" à l'aide de la fonction useState, initialisé à undefined
  const [quizResult, setQuizResult] = useState();

  // Retourne l'élément JSX représentant le composant Quizz
  return (
    <div className="Quiz">
      {/* Rendu du composant Quiz avec les paramètres suivantes */}
      <Quiz
        quiz={quiz}
        shuffle={true} // Mélange aléatoire des questions activé
        continueTillCorrect={true} // Continuation du quiz jusqu'à ce que la réponse correcte soit donnée activée
        disableSynopsis={false} // Synopsis du quiz non désactivé
        showInstantFeedback={true} // Affichage des retours instantanés activé
      />
    </div>
  );
};

// Exportation par défaut de la fonction Quizz
export default Quizz;
