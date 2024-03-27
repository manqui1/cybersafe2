// question.jsx

import image1 from '@/assets/Quiz/1.png';
import image2 from '@/assets/Quiz/2.jpg';
import image3 from '@/assets/Quiz/3.webp';
import image4 from '@/assets/Quiz/4.jpg';
import image5 from '@/assets/Quiz/5.jpeg';
import image6 from '@/assets/Quiz/6.jpg';
import image7 from '@/assets/Quiz/7.jpg';
import image8 from '@/assets/Quiz/8.png';
import image9 from '@/assets/Quiz/9.jpg';
import image10 from '@/assets/Quiz/10.webp';



// Collection qui contient toutes les questions
const quiz = {
    quizTitle: "CyberQuiz",
    quizSynopsis:
      "C'est un quiz pour tester vos connaissances en matière de cybersécurité.",
    nrOfQuestions: "10",
    questions: [
      {
        question:
          "Selon vous, quelle(s) est/sont la/les bonne(s) pratique(s) parmis les suivantes :",
        questionType: "text",
        questionPic:
        image1, // if you need to display Picture in Question
        answerSelectionType: "multiple",
        answers: [
          "Noter son mot de passe pour ne pas l’oublier",
          "Avoir un mot de passe différent pour chaques services",
          "Communiquer son mot de passe uniquement à ses connaissances",
          "Utiliser des mots de passe complexe",
        ],
        correctAnswer: [2, 4],
        messageForCorrectAnswer: "Bonne réponse",
        messageForIncorrectAnswer: "Mauvaise réponse",
        explanation:
          "Utiliser des mots de passe différent pour chaques services, c’est éviter les risques si votre mot de passe est découvert, de plus, en utiliser des complexes c’est affaiblir les chances qu’il soit découvert.",
        point: "20",
      },
      {
        question:
          "Mon mot de passe est bien sécurisé, je n’ai pas besoin de le changer sur chaques services.",
        questionType: "text",
        questionPic:
          image2,
        answerSelectionType: "multiple",
        answers: ["vrai", "faux"],
        correctAnswer: [2],
        messageForCorrectAnswer: "Bonne réponse",
        messageForIncorrectAnswer: "Mauvaise réponse",
        explanation:
          "Même un mot de passe bien sécurisé n’est pas infaillible, si il est découvert sur un service, le pirate aura aussi accès aux autres services.",
        point: "20",
      },
      {
        question:
          "Parmi ces 4 mots de passe, lesquels sont pour vous les deux plus sûrs ?",
        questionType: "text",
        questionPic:
          image3,
        answerSelectionType: "multiple",
        answers: [
          "azerty123",
          "Ch3v4L3Cr@nrId0",
          "chevalecranrideau",
          "jg1mdPsslsdlc!",
        ],
        correctAnswer: [3, 4],
        messageForCorrectAnswer: "Bonne réponse",
        messageForIncorrectAnswer: "Mauvaise réponse",
        explanation:
          " Un mot de passe ne doit pas être facilement trouvable par un humain ou une machine, il doit être facile à retenir et respecter les conseils de la CNIL (caractère spéciaux, chiffre, maj/min…)",
        point: "10",
      },
      {
        question:
          "Comment faire pour éviter de tomber dans le piège d’un hameçonnage ?",
        questionType: "text",
        questionPic:
          image4,
        answerSelectionType: "multiple",
        answers: [
          "Je vérifie l’envoyeur et lui demander confirmation via un appel si un doute existe",
          "Je fais attention en ouvrant les pièces jointes",
          "Quand le nom de l'envoyeur me semble familier, ça me semble ok",
          "Je fais en sorte que les mails suspects vont des mes spams et ne les ouvres pas",
        ],
        correctAnswer: [1, 2],
        messageForCorrectAnswer: "Bonne réponse",
        messageForIncorrectAnswer: "Mauvaise réponse",
        explanation:
          "Demander vérification, c’est être sûr que le mail provient de la bonne personne, de plus faire en sorte que les mails suspects vont dans les spams, c’est limiter les risques de tomber dans le piège.",
        point: "30",
      },
      {
        question: "Je suspecte ce mail d’être frauduleux, comment réagir ?",
        questionType: "text",
        questionPic:
          image5,
        answerSelectionType: "multiple",
        answers: [
          "J’ouvre le mail et j’ouvre la pièce-jointe pour vérifier son contenu",
          "Je supprime le mail sans l’ouvrir et je bloque l’expéditeur",
          "Je contacte le service ou la personne concernée pour demander confirmation que le mail est officiel",
        ],
        correctAnswer: [2, 3],
        messageForCorrectAnswer: "Bonne réponse",
        messageForIncorrectAnswer: "Mauvaise réponse",
        explanation:
          "Supprimer le mail pour ne pas tomber dans le piège et bloquer l’envoyeur pour qu’il ne recommence pas sont les meilleurs choses à faire, vous pouvez également demander une confirmation, pour être sûr qu’il soit bel et bien frauduleux.",
        point: "20",
      },
      {
        question:
          "Je me suis connecter sur un site qui me paraît “fake”/ai donner mes coordonnées bancaire et pense m’être fait avoir par une attaque de types hameçonnage/scam, je :",
        questionType: "text",
        questionPic:
          image6,
        answerSelectionType: "multiple",
        answers: [
          "Je vérifie mes comptes bancaires et préviens ma banque",
          "Je modifie les mots de passes de mes services",
          "J’attend de voir si quelque chose se passe",
          "Si mon ordinateur n’est pas bloqué c’est que ce n’est pas grave",
        ],
        correctAnswer: [1, 2],
        messageForCorrectAnswer: "Bonne réponse",
        messageForIncorrectAnswer: "Mauvaise réponse",
        explanation:
          "Vérifier ses comptes et contacter sa banque sont les meilleures choses à faire, et il faut les faire rapidement pour limiter les dégâts. De plus, il est impératif de changer ses mots de passe qui sont maintenant connus du pirate.",
        point: "20",
      },
      {
        question:
          "Puis-je me faire avoir par un attaquant qui utiliserait mes infos venant de mes réseaux sociaux ?",
        questionPic:
          image7,
        questionType: "text",
        answerSelectionType: "multiple",
        answers: [
          "Non, je ne suis pas assez bête pour mettre mes mots de passes dessus",
          "Oui c’est possible",
        ],
        correctAnswer: [2],
        messageForCorrectAnswer: "Bonne réponse",
        messageForIncorrectAnswer: "Mauvaise réponse",
        explanation:
          "Oui, il pourrait regarder qui sont vos amis/collègues de travail pour vous envoyer un mail malveillant en se faisant passer pour vous. Ce n’est qu’un exemple parmi tant d’autres…",
        point: "20",
      },
      {
        question:
          "Parmi les exemples suivants, lesquels sont des DCP (Données à caractères personnelles) ?",
        questionType: "text",
        questionPic:
          image8,
        answerSelectionType: "multiple",
        answers: [
          "Numéro de téléphone",
          "Fournisseur d’accès cloud",
          "Mot de passe",
          "Prénom",
        ],
        correctAnswer: [1, 3, 4],
        messageForCorrectAnswer: "Bonne réponse",
        messageForIncorrectAnswer: "Mauvaise réponse",
        explanation:
          "Une donnée à caractère personnel est une information qui permet d'identifier une personne directement ou indirectement, comme son nom, son adresse, son numéro de téléphone, ou toutes autres données qui lui est spécifique.",
        point: "20",
      },
      {
        question: "Qu’est ce qu’un cookie ?",
        questionType: "text",
        questionPic:
          image9,
        answerSelectionType: "multiple",
        answers: [
          "Biscuit rond, dont la pâte comporte des éclats de chocolat, de fruits secs. ",
          "Validation nécessaire pour avoir accès aux sites",
          "Petit fichier déposé sur le disque dur à l'insu de l'internaute, lors de la consultation de certains sites web, et qui conserve des informations en vue d'une connexion ultérieure",
        ],
        correctAnswer: [1, 3],
        messageForCorrectAnswer: "Bonne réponse",
        messageForIncorrectAnswer: "Mauvaise réponse",
        explanation:
          "Les cookies sont utilisés pour mémoriser des informations sur les interactions de l'utilisateur avec le site, telles que ses préférences, ses choix de langue, ou son panier d'achat. Ils servent à améliorer l'expérience de navigation et à personnaliser le contenu affiché en fonction des intérêts de l'utilisateur.",
        point: "20",
      },
      {
        question: "Comment éviter d’être infecté par un malware (virus) ?",
        questionType: "text",
        questionPic:
          image10,
        answerSelectionType: "multiple",
        answers: [
          "Je suis les consignes quand j’ai une alerte sur internet indiquant que mon pc est infecté",
          "Je mets régulièrement à jour mon ordinateur et mes logiciels",
          "Je réfléchis avant de cliquer sur des liens ou de télécharger un fichier        ",
          "J’installe la version piratée (gratuite) d’un logiciel payant pour économiser mon argent",
          "Si je trouve par hasard une clé USB, je la branche en faisant attention",
        ],
        correctAnswer: [2, 3],
        messageForCorrectAnswer: "Bonne réponse",
        messageForIncorrectAnswer: "Mauvaise réponse",
        explanation:
          "Les MAJ servent notamment à renforcer la sécurité de vos systèmes d’informations et à corriger des failles. Il faut également réfléchir à deux fois avant d’installer n’importe quoi sur le web. Vous pouvez vérifier sur un site comme virustotal si il y a probablement des virus dedans.",
        point: "20",
      },
    ],
  };
  export default quiz;