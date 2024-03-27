import React from "react";
import ArticleTemplate from "./ArticleTemplate";
import homeImage from "@/assets/Articles/theme6-img/t6-img1.webp";

const content = [
    { title: `❓ En quoi consiste le social engineering ?`,
        text: `Les cybercriminels utilisent de nombreux stratagèmes pour parvenir à leurs fins et obtenir un maximum d’informations sur ses victimes. Parmi ces techniques ressort l’ingénierie sociale (ou “social engineering”), une pratique peu connue des potentiels victimes mais qui s'avère très efficace pour obtenir des informations.`},
    { title: `🎯 L'objectif du cybercriminel`,
        text: `L'objectif du cybercriminel est d'obtenir des informations de la part
        des individus ciblés ou de les manipuler sans qu’ils ne s’aperçoivent
        des conséquences.`},
    { title: `👨‍💻 Les démarches de l'attaquant`,
        text: `Pour s'en prendre à une cible, un cyberattaquant peut avoir recours à
        différentes techniques d'ingénierie sociale :<br/>
        <ul><br/>
            
            ➡️ Phishing : Le phishing est une forme de fraude et d'hameçonnage
            qui consiste à tromper les utilisateurs en leur faisant croire
            qu'ils se connectent à une source ou à un site Web sécurisé, alors
            qu'en réalité, ils sont engagés dans une activité frauduleuse. Les
            fraudeurs envoient des courriels, des textos, des messages
            instantanés et des messages sur les réseaux sociaux qui ressemblent
            à ceux provenant de sources légitimes, mais qui sont en fait des
            tentatives pour voler des informations personnelles ou des détails
            financiers. <br/><br/>
            
            
            ➡️ E-mail avec pièce-jointe vérolée : Les attaques par e-mail avec
            pièce jointe vérolée font partie de ces tentatives de phishing. Dans
            ces attaques, les fraudeurs envoient un e-mail qui semble provenir
            d'une source légitime, mais qui contient en réalité un fichier
            malveillant sous forme de pièce jointe. Lorsque les utilisateurs
            ouvrent la pièce jointe, ils sont vulnérables à des logiciels
            malveillants, des ransomwares et d'autres formes de logiciels
            malveillants. Les fichiers vérolés peuvent être utilisés pour
            prendre le contrôle des ordinateurs des utilisateurs et voler des
            informations confidentielles, telles que des mots de passe ou des
            informations bancaires.<br/><br/>
            
            ➡️ Clé USB : Une attaque par clé USB est une forme d'attaque
            informatique qui consiste à infecter un système informatique à
            l'aide d'un périphérique USB malveillant. Une telle attaque peut se
            produire lorsqu'un utilisateur insère un dispositif USB infecté dans
            un ordinateur ou un autre périphérique USB, ce qui permet à un
            logiciel malveillant d'accéder au système et d'exécuter des
            programmes malveillants sur le système.<br/><br/>
            
            ➡️ Talonnage : Une attaque de tailgating est une technique utilisée
            par des utilisateurs non autorisés pour accéder à des systèmes ou à
            des informations sensibles. Elle consiste à se faufiler derrière une
            personne autorisée à accéder à une zone sécurisée et à utiliser ses
            informations d'identification pour entrer dans la zone. Cette
            technique est également connue sous le nom de «porte-à-côté».
            
        </ul>`},
    { title: `✅ Les moyens de remédiation`,
        text: `<ol><br/>
                    <li>
                    Utiliser des outils de sécurité tels que des pare-feux, des
                    logiciels antivirus et des logiciels anti-spyware pour surveiller
                    l'activité réseau et bloquer les tentatives d'ingénierie sociale.
                    </li>
                    <li>
                    Former le personnel à la sensibilisation à la sécurité et à la
                    reconnaissance des tentatives d'ingénierie sociale.
                    </li>
                    <li>
                    Mettre en place des politiques et des procédures de sécurité pour
                    limiter les risques d'ingénierie sociale, notamment en limitant
                    l'accès à des informations sensibles aux personnes autorisées
                    uniquement.
                    </li>
                    <li>
                    Mettre en place un système de vérification à deux étapes pour
                    l'accès à des informations sensibles.
                    </li>
                    <li>
                    Désactiver le partage de fichiers et de dossiers entre les
                    utilisateurs, car cela peut faciliter le vol d'informations.
                    </li>
                    <li>
                    Utiliser des mots de passe complexes et les changer
                    régulièrement.
                    </li>
                    <li>
                    Limiter l'accès aux systèmes sensibles aux utilisateurs autorisés
                    uniquement.
                    </li>
                    <li>
                    Utiliser des techniques d'authentification à plusieurs facteurs
                    pour l'accès aux systèmes sensibles.
                    </li>
                    <li>
                    Utiliser des systèmes de détection d'intrusion pour surveiller
                    les activités réseau afin de repérer et de bloquer les tentatives
                    d'ingénierie sociale.
                    </li>
                    <li>
                    Configurer les systèmes de surveillance des réseaux de manière à
                    recevoir des alertes immédiates en cas d'activité suspecte.
                    </li>
        </ol>`},
    { title: `📘 Le point juridique`,
        text: `Plusieurs lois et règlements existent pour protéger les individus des
        pratiques d'ingénierie sociale :<br/><br/>
        <ul>
            <li>La plus importante est sans doute la Loi sur la protection des
            renseignements personnels et les documents électroniques, qui interdit
            à une entreprise de collecter des renseignements personnels sans le
            consentement du sujet, et impose des sanctions aux entreprises qui ne
            respectent pas cette loi.</li>
            <li>D'autres lois peuvent également protéger les individus des pratiques
            d'ingénierie sociale, notamment des lois sur le vol d'identité, la
            fraude informatique, le harcèlement et les pratiques commerciales
            trompeuses.</li>
        </ul>
        Il est important de prendre connaissance de ces lois et de comprendre comment elles peuvent protéger contre les pratiques d'ingénierie sociale.`},   
      
];

function Article6() {
    return <ArticleTemplate title="L’ingénierie sociale" introImageSrc={homeImage} content={content} />; 
}

export default Article6;
