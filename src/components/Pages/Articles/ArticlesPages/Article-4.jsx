import React from "react";
import ArticleTemplate from "./ArticleTemplate";
import homeImage from "@/assets/Articles/theme4-img/t4-img1.webp";

const content = [
    { title: `🎯 L'objectif du cybercriminel`,
        text: `Les objectifs des pirates sur internet est de récupérer au maximum des informations sur leurs "victimes". Le but est de divulguer ou de propager vos données personnelles. Les enfants et adolescents courent déjà un risque sur les réseaux sociaux, mais les adultes, les pouvoirs publics, les banques et même les grandes entreprises ne sont pas à l’abri des risques.
        <br /> Les réseaux sociaux sont remplis de pirates, cybercriminels et de vendeurs de données. Facebook, Instagram, Linkedin etc.. Ils contiennent également d’autres dangers dont vous devriez vous en protéger.`},
    { title: `👨‍💻 Les démarches de l'attaquant`,
        text: `Les méthodes utilisées par un attaquant dépendent de la plateforme du réseau social visé.<br /> 
        Facebook permet aux utilisateurs de garder leurs images et leurs commentaires privés, de sorte qu'un attaquant va vouloir devenir ami avec les amis d'un utilisateur ciblé pour accéder à ses publications.
        <br /> Si un attaquant peut se connecter à plusieurs amis de l'utilisateur ciblé, il est plus probable que ce dernier accepte la demande d'ami.<br/>
        Si un attaquant cible une entreprise, Linkedin est un excellent réseau social pour collecter des emails professionnels en vue d'une attaque de phishing. Une grande entreprise peut avoir plusieurs employés en réseau qui indiquent leur employeur et leur titre.<br/>
        La collecte d'informations pour voler des données n'est pas la seule raison d'utiliser les réseaux sociaux pour la reconnaissance. Les informations publiées sur les réseaux sociaux peuvent être utilisées pour obtenir des mots de passe ou se faire passer pour des utilisateurs professionnels.<br/>
        Avec suffisamment d'informations provenant des publications sur les réseaux sociaux, un attaquant pourrait deviner la réponse à ces questions de sécurité en se basant sur les informations privées publiées par un utilisateur ciblé.<br/>
        Avec suffisamment d'informations recueillies, un attaquant peut se faire passer pour une marque commerciale afin d'inciter les utilisateurs à envoyer de l'argent, à divulguer des informations privées ou à lui fournir des identifiants de compte.`},
    { title: `✅ Les moyens de remédiation`,
        text: `<h3>Quelles mesures prendre ?</h3><br/>
        Les réseaux sociaux comportent des dangers qui peuvent avoir des conséquences profondes. En outre, les mesures suivantes sont souvent utiles :<br/><br/>
        <ul>
            <li>
              Définissez votre vie privée de façon à ce que seuls vos amis y
              aient accès.
            </li>
            <li>
              Évitez l’affichage de données personnelles, de projets de
              vacances et d'informations personnelles.
            </li>
            <li>
              N’acceptez pas les demandes ou les messages provenant de comptes
              que vous ne connaissez pas.
            </li>
            <li>Évitez de cliquer sur une URL raccourci. </li>
            <li>Signalez les comptes suspects ou menaçants. </li>
            <li>
              Comptes privés et comptes professionnels strictement séparés.
            </li>
            <li>
              Formation aux réseaux sociaux pour les employés, en particulier
              dans le domaine de la sécurité des données.
            </li>
          </ul>`},
    { title: `📘 Le point juridique`,
        text: `<h3>La liberté d’expression et les réseaux sociaux</h3><br/>Actuellement, il n'existe aucune législation spécifique aux réseaux
        sociaux en France. Nous pourrions donc concevoir que la liberté
        d'expression sur les réseaux sociaux soit régie par la déclaration des
        droits de l'homme et du citoyen.<br/>
      
        Source :
        <a href="https://www.legifrance.gouv.fr/contenu/menu/droit-national-en-vigueur/constitution/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789">
          legifrance.gouv.fr <br/>
        </a><br/>
        <h3>Les droits d'auteur et les réseaux sociaux</h3><br/>
        Les réseaux sociaux traitent la question du droit d'auteur au sein de leurs conditions générales d'utilisation (CGU), notamment celles de Facebook et Twitter, elles indiquent que l'utilisateur du réseau conserve ses droits sur les contenus dont il est l'auteur.<br/>
        Source :
        <a href="https://www.economie.gouv.fr/apie/propriete-intellectuelle-publications/droit-auteur-image-numerique-6">
            economie.gouv.fr <br/>
        </a><br/>
        <h3>Le droit à l’image et les réseaux sociaux</h3><br/>
        La diffusion d’images et de vidéos est monnaie courante sur les réseaux sociaux. Toutefois, les images ne peuvent pas être toutes partagées. Le droit à l’image s’applique sur les réseaux sociaux. Il s’agit du droit d’une personne à disposer de son image. Cela signifie que son approbation est indispensable avant la diffusion de son image sur les réseaux sociaux, même si la personne a accepté d’être prise en photo.
        <br />
        Source :
        <a href="https://www.service-public.fr/particuliers/vosdroits/F32103">
            service-public.fr
        </a>`}
]

function Article4() {
    return <ArticleTemplate title="La dangerosité des réseaux" introImageSrc={homeImage} content={content} />;
}

export default Article4;