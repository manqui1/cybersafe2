// Article1.jsx

import React from "react";
import ArticleTemplate from "./ArticleTemplate";
import introImage from "@/assets/Articles/theme1-img/t1-img1.webp";


const content = [
    { title: `❓ Qu'est-ce qu'un e-mail frauduleux ?`, 
        text: `L'hameçonnage (ou phishing en anglais) est une arnaque qui vise à voler des données personnelles en se faisant passer pour une personne de confiance.` },
    { title: `🎯 L'objectif du cybercriminel`, 
        text: `Récupérer vos données personnelles, professionnelles et/ou bancaires pour les revendre ou les utiliser frauduleusement. Soyez prudents ! <br/> <br/> 
        <h3>Exemples d'informations demandées :</h3><br/> 
                Des données personnelles (nom, prénom, adresse, téléphone, etc.), des identifiants de connexion (nom d'utilisateur, mot de passe), des informations bancaires (RIB, numéro de carte bancaire, cryptogramme).<br/> <br/><h3><u>Soyez prudents !</u></h3>` },
    { title: `👨‍💻 Les démarches de l'attaquant`, 
        text: `<u>Les cybercriminels se font passer pour des organismes connus :</u><br/><br/>
            <ul>
                <li>Banques (Crédit Agricole, etc.)</li>
                <li>Opérateurs télécom (Orange, etc.)</li>
                <li>Fournisseurs d'énergie (EDF, etc.)</li>
                <li>Sites de commerce en ligne (Amazon, etc.)</li>
                <li>Administrations (Trésor public, etc.)</li>
                <li>Services de messagerie (Cloud, etc.)</li>
                <li>Sociétés de livraison (Colissimo, etc.)</li><br/>
            </ul>
            <u>Méthode d'attaque :</u><br/><br/>
            <ol>
            <li>Envoi d'un email prétendant provenir d'un organisme de confiance.</li>
            <li>Lien dans l'email redirige vers un faux site ressemblant au vrai.</li>
            <li>Saisie de vos identifiants sur le faux site.</li>
            <li>Récupération de vos informations par le cybercriminel.</li>
            <h3><u>Soyez vigilants ! Ne cliquez jamais sur un lien dans un email suspect.<h3><u>
            </ol>`,
    },
    { title: `✅ Les moyens de remédiation`, 
        text: `Afin de vous sensibiliser sur les mails frauduleux, nous allons vous expliquer comment les reconnaître et vous en protégez. 
                Il est important d’apprendre à repérer les arnaques, et ce, avant même de cliquer sur le contenu du message. <br/><br/> 
                💡 <u>Conseil pour les liens :</u><br /><br/>
                Vous pouvez vérifier la destination du lien qui est caché derrière le mot \"Connexion\" en positionnant le curseur devant celui-ci sans cliquer dessus, vous pourrez ensuite voir le lien s'afficher en bas à gauche de votre navigateur.<br/><br/>
                ➡️ Le meilleur moyen reste de vous rendre manuellement le sur site officiel via l'adresse sur votre moteur de recherche au lieu de cliquer sur le lien du mail.` },
    { title: `📘 Le point juridique`, 
        text: `Que faire si vous êtes victime d'une arnaque sur internet ? <br/><br/> 
                <h3><u>Si l'auteur est identifiable :</u></h3><br/> 
                Saisir la juridiction civile pour obtenir le remboursement des sommes extorquées et des dommages et intérêts.<br/> 
                Porter plainte auprès d'un commissariat.<br/><br/><h3><u>Si l'auteur n'est pas identifiable :</u></h3><br/> Porter plainte contre X pour escroquerie. <br/><br/> 
                <h3><u>Le tribunal pénal peut :</u></h3> <br/> Sanctionner l'auteur.<br/> Octroyer des dommages et intérêts à la victime.` },

];

function Article1() {
    return <ArticleTemplate title="Hameçonnage (ou Phishing)" introImageSrc={introImage} content={content} />;
}

export default Article1;
