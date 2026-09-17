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
        if (apprenants[i].id === id) {
            return apprenants[i]; 
        }
    return null; 
    }
}




function enregistrerResultat(idApprenant, jour, exercicesTermines, totalExercices, challengeTermine){
    // console.log ("Ajouter votre avancement");
    // for(let i=0; i<apprenants.length; i++){
    //     while(apprenants[i].id!==id){
    //         console.log("Apprenant non trouvé");       
    //         break;
    //     }
    // jour = parseInt(prompt("Veuiller saisire votre joure entre 1 et 7 : "));
        
    // }
    let id = parseInt(prompt("Veuillez saisir l'ID de l'apprenant : "));
    for (let i = 0; i < apprenants.length; i++){
        if (isNaN(jour) || jour < 1 || jour > 7) {
                console.log("Erreur : Le jour doit etre entre 1 et 7.");
                return;
            }
    }
}


function calculerProgression(apprenant){
    let totalExercices =0;
    let totalProposes = 0
    let challengecount =0
    let joursRs= apprenant.resultats.length;

    for(let i=0; i<joursRs; i++){
        let res = apprenant.resultats[i];
        totalExercices += res.exercicesTermines
        totalProposes += res.totalExercices;
        totalProposes += res.totalExercices;
        if(res.challengeTermine){
            challengecount ++;
        }
    }


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
      console.log("4. Consulter un apprenant par identifiant");
      break;
    case 5:
      console.log(enregistrerResultat());
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


