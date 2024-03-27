import React from "react";
import ArticleTemplate from "./ArticleTemplate";
import homeImage from "@/assets/Articles/theme7-img/t7-img1.webp";

const content = [
    { title: `❓ Comment limiter les cookies et protéger ses données à caractère
    personnel ?`,
        text: `Les cookies sont de petits fichiers texte enregistrés sur l'ordinateur de l'utilisateur lorsqu'il visite un site web. Ils sont généralement utilisés pour stocker des informations comme les préférences de l'utilisateur, le contenu du panier et le suivi des informations d'identification pour ainsi améliorer leur expérience de navigation.<br/>Une donnée à caractère personnel (DCP), c’est toute information relative à une personne physique qui permettent de l’identifier directement ou indirectement. Les informations pouvant être considérées comme des données à caractère personnel incluent le nom, l'adresse, le numéro de téléphone, l'adresse e-mail et les données biométriques.`},
    { title: `🎯 L'objectif du cybercriminel`,
        text: `Le but de cybercriminel est de voler les cookies afin de pouvoir
        récupérer des informations sensibles sur l’utilisateur et ainsi les
        revendre, mais également pouvoir dans certains cas, se procurer un
        accès à la session de l’utilisateur.`},
    { title: `👨‍💻 Les démarches de l'attaquant`,
        text: `Lorsqu’un individu se connecte à une application Web, le serveur va créer un cookie de session temporaire dans le navigateur qui contiendra les informations utilisées lors de la connexion et permettra au site de vous garder connecter.<br/>Si un attaquant venait à se procurer ce cookie de session temporaire, celui-ci pourrait alors utiliser la session de l’utilisateur et ainsi voler des informations personnelles, et ainsi les revendre.<br/>
        Un cyberattaquant peut s'y prendre de différentes manières pour voler
        des cookies :<br/>
        <ul><br/>
        
          ➡️ La méthode la plus courante est d'utiliser des logiciels
          malveillants pour infecter un ordinateur cible et voler des cookies
          qui sont stockés dans le navigateur du système. Ces logiciels
          malveillants peuvent être injectés dans le système à l'aide de
          campagnes de phishing, de liens malveillants ou même par le biais de
          logiciels légitimes infectés. <br/><br/>
       
          ➡️ Une autre méthode consiste à utiliser des techniques d'injection
          SQL pour accéder à la base de données d'un site Web et voler les
          cookies qui y sont enregistrés. <br/><br/>
       
       
          ➡️ Les cyberattaquants peuvent également utiliser des outils de
          piratage tels que le Wi-Fi sniffing pour observer les paquets qui
          transitent sur un réseau et ainsi voler les cookies d'autres
          utilisateurs connectés à un réseau Wi-Fi non sécurisé.
        
      </ul>`},
    { title: `✅ Les moyens de remédiation`,
        text: `<ul><br/>
        
          ➡️ Limiter l’utilisation des cookies en refusant les cookies
          non-essentiels ou en paramétrant son navigateur afin de le faire
          automatiquement <br/><br/>
       
       
          ➡️ Effacer les cookies présents sur l’ordinateur via l’historique du
          navigateur <br/><br/>
        
        ➡️ Ne pas cliquer sur des liens suspects <br/><br/>
        ➡️ Ne pas utiliser de réseau Wi-Fi public <br/><br/>
        
          ➡️ Ne pas stocker d’informations sensibles comme le mot de passe, ou
          la carte bancaire avec le navigateur
       
      </ul>`},
    { title: `📘 Le point juridique`,
        text: `En cas d’infraction frauduleuse dans un système de traitement automatisé de données, l’article 323-3 du code pénal prévoit une peine de deux ans d’emprisonnement et de 60 000€ d’amende.<br/>
        S’il y a eu modification ou suppression de données contenues dans le système, la peine est de trois ans d’emprisonnement et de 100 000€ d’amende.<br/>
        En cas d’infraction commise envers un système de traitement automatisé de données à caractère personnel mis en œuvre par l'Etat, la peine sera ici de cinq ans d’emprisonnement et de 150 000€ d’amende.<br/>
        Source :
        <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030939438">
            legifrance.gouv.fr
        </a>`}  
]

function Article7() {
    return <ArticleTemplate title="Les cookies et les DCP" introImageSrc={homeImage} content={content} />; 
}

export default Article7;