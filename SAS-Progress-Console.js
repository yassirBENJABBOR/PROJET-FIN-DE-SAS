const apprenants = [
 {
 id: 1,
 nomComplet: "Sara Dev",
 ville: "Nador",
 resultats: [
 { jour: 1, exercicesTermines: 18,
 totalExercices: 20, challengeTermine: true },
 { jour: 2, exercicesTermines: 14,
 totalExercices: 20, challengeTermine: false }
 ]
 },
 {
 id: 2,
 nomComplet: "Yassine Code",
 ville: "Oujda",
 resultats: [
 { jour: 1, exercicesTermines: 12,
 totalExercices: 20, challengeTermine: false }
 ]
 }
];


const prompt = require('prompt-sync')();

let choix;
      console.log("---------SAS PROGRESS CONSOLE---------");
      console.log("1. Afficher le tableau de bord");
      console.log("2. Afficher la liste des apprenants");
      console.log("3. Ajouter un apprenant");
      console.log("4. Consulter un apprenant par identifiant");
      console.log("5. Ajouter ou modifier le résultat d'une journée");
      console.log("6. Rechercher un apprenant par nom");
      console.log("7. Filtrer les apprenants par niveau");
      console.log("8. Trier les apprenants par progression décroissante");
      console.log("9. Trier les apprenants par ordre alphabétique");
      console.log("0. QUITER");
do {
  choix = apprenants(prompt("Votre choix :"));
  switch (choix) {
    case 1:
      console.log("1. Afficher le tableau de bord");
      break;
    case 2:
      console.log("2. Afficher la liste des apprenants");
      break;
    case 3:
      console.log("3. Ajouter un apprenant");
      break;
    case 4:
      console.log("4. Consulter un apprenant par identifiant");
      break;
    case 5:
      console.log("5. Ajouter ou modifier le résultat d'une journée");
      break;
    case 6:
      console.log("6. Rechercher un apprenant par nom");
      break;
    case 7:
      console.log("7. Filtrer les apprenants par niveau");
      break;
    case 8:
      console.log("8. Trier les apprenants par progression décroissante");
      break;
    case 9:
      console.log("9. Trier les apprenants par ordre alphabétique");
      break;
    case 0:
      console.log("Au revoir !");
      break;
    default:
      console.log("Choix invalide, veuillez entrer un nombre entre 0 et 9.");
      break;
  }
} while (choix !== 0);