import React from "react";
import ArticleTemplate from "./ArticleTemplate";
import homeImage from "@/assets/Articles/theme5-img/t5-img1.webp";

const content = [
    { title: `❓ Problématique du thème`,
        text: `La dangerosité des programmes malveillants sur internet se renforce de plus en plus avec l’utilisation des outils informatiques par le grand public. Quel genre de programme malveillant pourriez-vous rencontrer ?`},
    { title: `🎯 L'objectif du cybercriminel`,
        text: `L'objectif des cybercriminels à utiliser des programmes malveillants est le plus souvent pour de l’escroquerie, du vols de données à caractère personnel, rançons, blocage de système informatique. Pour une finalité, souvent de l'argent ou la revente de données à des fin de profits.`},
    { title: `👨‍💻 Les démarches de l'attaquant`,
        text: `Comment les logiciels malveillants se propagent-ils ?
        Les logiciels malveillants peuvent s'introduire dans votre ordinateur de différentes façons. Voici quelques exemples courants :
        <ul><br/>
            ➡️ Vous téléchargez un logiciel gratuit sur Internet, dissimulant un logiciel malveillant.<br/><br/>
            ➡️ Vous téléchargez un logiciel fiable dissimulant un logiciel malveillant.<br/><br/>
            ➡️ Vous visitez un site Web infecté par un logiciel malveillant.<br/><br/>
            ➡️ Vous cliquez sur un faux message d'erreur ou une fenêtre pop-up, ce qui génère le téléchargement d'un logiciel malveillant.<br/><br/>
            ➡️ Vous ouvrez une pièce jointe d'un e-mail contenant un logiciel malveillant.<br/><br/>
        </ul>
        Les logiciels malveillants peuvent se propager de différentes façons. Cela ne signifie pas que vous n'avez aucun moyen de les bloquer. Maintenant que vous savez en quoi consiste les logiciels malveillants et ce qu'ils sont susceptibles de faire, nous vous proposons quelques mesures pratiques pour vous protéger.<br/>
        Il existe une multitude de types de programmes malveillants différents. Les attaques d’appareils mobiles ont augmenté de 50% en un an ! Elles incluent autant de menaces que sur les ordinateurs de bureau : ransomwares, fraude aux clics publicitaires, vers etc...<br/><br>
        <u>Voici quelques types de programmes malveillants :</u><br><br/>
        <b><u>Le ransomware</u></b><br/><br/>
        Apparus pour la première fois en 2012, ces chevaux de Troie sont redoutables. Ils infectent votre ordinateur et chiffrent vos fichiers. Sans la clé de déchiffrement, vos fichiers sont pris en otage. Vous recevez ensuite une demande de rançon à verser contre l’obtention de la clé de déchiffrement qui vous rendra vos données. En aucun cas vous avez la certitude que vous aurez cette clé, alors vous ne devez pas payer ! D’une part, rien ne certifie que vous allez récupérer vos fichiers si vous payez, et d’autre part, si plus personne ne paie, cela décourage le cybercriminel de faire de même chez d’autres victimes.<br/><br/>

        <b><u>Les Virus</u></b><br/><br/>
        Un virus est un morceau de code, un programme qui s’insère dans une application et s’exécute lorsque celle-ci est ouverte. Il a la particularité de s’autoreproduire en infectant d’autres programmes. Une fois à l’intérieur d’un réseau, il peut être utilisé pour voler des données sensibles, lancer des attaques DDOS.<br/><br/>
        
        <b><u>Les spywares ou logiciels espions</u></b><br/><br/>
        Les logiciels espions ou « espiogiciels » permettent de connaître et de collecter toute l’activité de l’utilisateur sur son ordinateur les informations à son insu ou sans son consentement.
        Mots de passe, informations de paiement ou messages, tout ce qui est tapé sur votre ordinateur est enregistré.<br/><br/>

        <b><u>Le cheval de Troie</u></b><br/><br/>
        Le cheval de Troie est un logiciel en apparence légitime, mais qui contient une fonctionnalité malveillante. Son but est de faire entrer cette fonctionnalité malveillante sur l'ordinateur et de l'installer à l'insu de l'utilisateur.<br/><br/>

        <b><u>Les vers</u></b><br/><br/>
        Les vers ciblent les vulnérabilités des systèmes d’exploitation pour s’installer dans les réseaux. Plus faciles à programmer qu’un virus, ils utilisent internet sous toutes ses formes pour se propager via des emails ou des sites web.
        Une fois en place, les vers peuvent être utilisés par les cybercriminels pour lancer des attaques DDOS, voler des données sensibles ou mener des attaques de ransomware.`},
    { title: `✅ Les moyens de remédiation`,
        text: `<b>Comment éviter les logiciels malveillants ?</b>
        <ul><br/>
            <li> Mettre régulièrement à jour votre ordinateur et vos logiciels.</li>
            <li> Dans la mesure du possible, utiliser un compte non-administrateur.</li>
            <li> Réfléchir avant de cliquer sur des liens ou de télécharger un fichier.</li>
            <li> Être prudent lors de l'ouverture de pièces jointes ou d'images contenues dans un e-mail.</li>
            <li> Se méfier des fenêtres pop-up qui vous invitent à télécharger un logiciel.</li>
            <li> Limiter le partage de vos fichiers.</li>
            <li> Utilisez un logiciel antivirus.</li>
            <li> Lire les évaluations des utilisateurs.</li>
            <li> Vérifier le nombre de téléchargements.</li>
            <li> Vérifier les autorisations demandées.</li>
            <li> Ne pas cliquer sur des liens non vérifiés.</li>
            <li> Être prudent lors de l’utilisation d’une connexion Wi-Fi gratuite (privilégier d'utilisation d'un VPN).</li>
            <li> Ne jamais utiliser de supports USB inconnus.
        </ul>`},
    { title: `📘 Le point juridique`,
        text: `Le nouvel article 323-3-1 du Code pénal, introduit par la loi sur l’économie numérique (LEN), est conçu pour lutter contre la prolifération des virus sur les réseaux informatiques. Pour accentuer la répression, il n’est plus nécessaire que l’intrusion soit réalisée pour qu’il y ait poursuite au pénale !<br/>
        Source : <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000028345220">legifrance.gouv.fr</a>`},
]

function Article5() {
    return <ArticleTemplate title="Les programmes malveillants" introImageSrc={homeImage} content={content} />;
}
export default Article5;
