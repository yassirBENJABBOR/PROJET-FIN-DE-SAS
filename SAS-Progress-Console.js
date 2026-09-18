const prompt = require('prompt-sync')();

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




//LES FUNCTION 
function normaliserNom(nomComplet){
    return nomComplet.trim().toLowerCase()

}
function ajouterApprenant(id,nom,ville){
     id = parseInt(prompt("veiller saisire votr id: "));
    for(let i=0; i<apprenants.length; i++){
     while (isNaN(id) || apprenants[i].id==id) {
        id = parseInt(prompt(`Erreur : Cet ID existe deja ou il n'est pas un nombre veiller saisire une autre id : `));
        }
    }
      nom = prompt("veiller saisire le nom compler: ");
      ville = prompt("veiller saisire votre vill: ");

    var nouvelApprenant= {
        id:id,
        nomComplet :normaliserNom(nom),
        ville :ville,
        resultats: []
 }
 apprenants.push(nouvelApprenant)
 console.log("Apprenant ajoute avec succes !");
 return nouvelApprenant

}

function validerResultat(jour, exercicesTermines, totalExercices){
    var totalExercices =20;

    jour = parseInt(prompt("veuiller saisire numero de la journer: "))
    while (isNaN(jour) || jour < 1 || jour > 7) {
        jour = parseInt(prompt("veuiller saisire la journer correcte entre 1 et 7 : "))
    }
    exercicesTermines = parseInt(prompt("veuiller saisire combien d'exercices terminer : "))
    while (isNaN(exercicesTermines) || exercicesTermines < 0 || exercicesTermines > totalExercices) {
        exercicesTermines = parseInt(prompt("veuiller saisire combien d'exercices terminer entre 1 et 20 : "))
    }

    return{
        resultats: [
 { jour:jour, 
   exercicesTermines: exercicesTermines,
   totalExercices: totalExercices},
 ]
 }
 
}
function rechercherApprenant(id) {
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenants[i].id !== id) {
            return apprenants[i];
        }
    }
    return "Apprenant introuvable"; 
}

function enregistrerResultat(idApprenant, jour, exercicesTermines, totalExercices, challengeTermine){
    idApprenant = prompt("veiller saisire id de apprenant: ")

    let Apprenant = rechercherApprenant(idApprenant)
    while (Apprenant === null) {
        idApprenant = prompt("Erreur: Apprenant non trouve. Veuillez saisir un ID valide : ");
        Apprenant = rechercherApprenant(idApprenant);
    }
    jour = parseInt(prompt("Saisir le jour de 1 a 7: "));
    while (isNaN(jour) || jour < 1 || jour > 7) {
        jour = parseInt(prompt("Erreur ! Veuillez saisir un jour valide entre 1 et 7 : "));
    }
    totalExercices = 20;
    exercicesTermines = parseInt(prompt("Saisir exercices termines sur 20 : "));
    while (isNaN(exercicesTermines) || exercicesTermines < 0 || exercicesTermines > totalExercices) {
        exercicesTermines = parseInt(prompt("Erreur ! Veuillez saisir un nombre entre 0 et 20 : "));
    }

    let reponseChallenge = prompt("Est-ce que le Challenge est termine ? (oui/non) : ").toLowerCase();
    while (reponseChallenge !== "oui" && reponseChallenge !== "non") {
        reponseChallenge = prompt("Erreure! Veuillez repondre par 'oui' ou 'non' : ").toLowerCase();
    }
    challengeTermine = (reponseChallenge === "oui");

    for (let i = 0; i < Apprenant.resultats.length; i++) {
        if (Apprenant.resultats[i].jour === jour) {
            Apprenant.resultats[i].exercicesTermines = exercicesTermines;
            Apprenant.resultats[i].challengeTermine = challengeTermine;             
        }
    }
    const nouveauResultat = {
        jour : jour,
        exercicesTermines : exercicesTermines,
        totalExercices : totalExercices,
        challengeTermine : challengeTermine,
    }

    Apprenant.resultats.push(nouveauResultat)
    return "Résultat ajouté avec succès"

}

function calculerProgression(apprenant){
    let totalExercices =0;
    let totalProposes = 0
    let challengecount =0
    let jours= apprenant.resultats.length;

    for(let i=0; i<jours; i++){
        let res = apprenant.resultats[i];
        totalExercices += res.exercicesTermines
        totalProposes += res.totalExercices;
        totalProposes += res.totalExercices;
        if(res.challengeTermine){
            challengecount ++;
        }
    }


}
function rechercherParNom(nomComplet){
    let completNom = nomComplet;
    let arrnom = [];
    for (let i = 0 ; i < apprenants.length ; i++){
        if(apprenants[i].nomComplet.toLowerCase().includes(completNom)){
            arrnom.push(apprenants[i])
        }
    }
    return arrnom;
}


console.log(apprenants)


//TABLEAU DE BORDE 
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
  choix = parseInt(prompt("Votre choix :"));
  switch (choix) {
    case 1:
      console.log("1. Afficher le tableau de bord");
      break;
    case 2:
      console.log("2. Afficher la liste des apprenants");
      break;
    case 3:
       console.log(ajouterApprenant())
      break;
    case 4:
      console.log(rechercherApprenant());
      break;
    case 5:
      console.log(enregistrerResultat());
      break;
    case 6:
      console.log(rechercherParNom());
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
