// PageNotFound.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.scss';

const PageNotFound = () => {
  return (
    <div className="ContentErro404">
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page non trouvée</h1>
            <p>Désolé, la page que vous recherchez est introuvable.</p>
            <p>Retourner à <Link to="/">la page d'accueil</Link>.</p>
            <p>La cybersécurité est comme chercher une page web non trouvée. <br/>
                Parfois, vous pensez être en sécurité, mais votre page n'est pas là où vous la pensez. <br/>
                Restez vigilant et évitez de cliquer sur des liens suspects, sinon vous risquez de vous retrouver dans un '404 Cyber Error Zone' où même les experts se perdent !</p>
        </div>
    </div>
  );
}

export default PageNotFound;
