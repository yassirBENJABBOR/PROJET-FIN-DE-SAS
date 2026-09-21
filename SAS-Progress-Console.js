const prompt = require('prompt-sync')();

const apprenants = [
    {
        id: 1,
        nomComplet: "Sara Dev",
        ville: "Nador",
        resultats: [
            {
                jour: 1, exercicesTermines: 9,
                totalExercices: 20, challengeTermine: true
            },
            {
                jour: 2, exercicesTermines: 14,
                totalExercices: 20, challengeTermine: false
            }
        ]
    },
    {
        id: 2,
        nomComplet: "Yassine Code",
        ville: "Oujda",
        resultats: [
            {
                jour: 1, exercicesTermines: 15,
                totalExercices: 20, challengeTermine: false
            }
        ]
    }, {
        id: 3,
        nomComplet: "Ahmed Pro",
        ville: "Oujda",
        resultats: [
            {
                jour: 1, exercicesTermines: 19,
                totalExercices: 20, challengeTermine: false
            }
        ]
    },
];



//TABLEAU DE BORDE 
let choix;

do {
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
    choix = parseInt(prompt("Votre choix :"));
    switch (choix) {
        case 1:
            afficherTableauDeBord(apprenants)
            break;
        case 2:
            afficherListeApprenants(apprenants)
            break;
        case 3:
            console.log(ajouterApprenant())
            break;
        case 4:
            console.log(rechercherParId());
            break;
        case 5:
            console.log(enregistrerResultat());
            break;
        case 6:
            console.log(rechercherParNom());
            break;
        case 7:
            let resultats = filtrerParNiveau(apprenants);
            console.log(resultats);
            break;
        case 8:
            trierParProgression();
            break;
        case 9:
            trierParAlphabetique()
            break;
        case 0:
            console.log("Au revoir !");
            break;
        default:
            console.log("Choix invalide, veuillez entrer un nombre entre 0 et 9.");
            break;
    }
} while (choix !== 0);


//LES FUNCTION 
function normaliserNom(nomComplet) {
    return nomComplet.trim().toLowerCase()

}
// check  la presence d un item au tableau 
function validateID(id, persones) {
    if (id === 0 || isNaN(id)) {
        console.log("Error! il doit etre nombre ou superieure a 0")
        return false;
    }
    let isValid = true;
    for (i = 0; i < persones.length; i++) {

        if (persones[i].id == id) {
            console.log(`Error! id ${id} Existe deja`)

            isValid = false;
        }
    }
    return isValid
}
function ajouterApprenant() {

    let id = null;
    do {
        id = parseInt(prompt("veiller saisire votr id: "));

    } while (!validateID(id, apprenants))


    nom = prompt("veiller saisire le nom compler: ");
    ville = prompt("veiller saisire votre vill: ");

    let nouvelApprenant = {
        id: id,
        nomComplet: normaliserNom(nom),
        ville: ville,
        resultats: []
    }
    apprenants.push(nouvelApprenant)
    console.log("Apprenant ajoute avec succes !");
    return nouvelApprenant

}

function validerResultat(jour, exercicesTermines, totalExercices) {
    var totalExercices = 20;

    jour = parseInt(prompt("veuiller saisire numero de la journer: "))
    while (isNaN(jour) || jour < 1 || jour > 7) {
        jour = parseInt(prompt("veuiller saisire la journer correcte entre 1 et 7 : "))
    }
    exercicesTermines = parseInt(prompt("veuiller saisire combien d'exercices terminer : "))
    while (isNaN(exercicesTermines) || exercicesTermines < 0 || exercicesTermines > totalExercices) {
        exercicesTermines = parseInt(prompt("veuiller saisire combien d'exercices terminer entre 1 et 20 : "))
    }

    return {
        resultats: [
            {
                jour: jour,
                exercicesTermines: exercicesTermines,
                totalExercices: totalExercices
            },
        ]
    }

}
function rechercherApprenant(id) {
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenants[i].id == id) {
            return apprenants[i];
        }
    }
    return "Apprenant introuvable";
}

// a exploiter sur isidvalide li kayna ajouter apprenant 
function enregistrerResultat() {
    let idApprenant
    let Apprenant
    do {
        idApprenant = prompt("veiller saisire id de apprenant: ")
        Apprenant = rechercherApprenant(idApprenant);
        if(Apprenant=== "Apprenant introuvable"){
            console.log("Erreur ! Apprenant introuvable")
        }
    } while (Apprenant === "Apprenant introuvable")
    let jour = parseInt(prompt("Saisir le jour de 1 a 7: "));
    while (isNaN(jour) || jour < 1 || jour > 7) {
        jour = parseInt(prompt("Erreur ! Veuillez saisir un jour valide entre 1 et 7 : "));
    }
    let totalExercices = 20;
    let exercicesTermines = parseInt(prompt("Saisir exercices termines sur 20 : "));
    while (isNaN(exercicesTermines) || exercicesTermines < 0 || exercicesTermines > totalExercices) {
        exercicesTermines = parseInt(prompt("Erreur ! Veuillez saisir un nombre entre 0 et 20 : "));
    }

    let reponseChallenge = prompt("Est-ce que le Challenge est termine ? (oui/non) : ").toLowerCase();
    while (reponseChallenge !== "oui" && reponseChallenge !== "non") {
        reponseChallenge = prompt("Erreure! Veuillez repondre par 'oui' ou 'non' : ").toLowerCase();
    }
    let challengeTermine = (reponseChallenge === "oui");
    let updated =false ;
    for (let i = 0; i < Apprenant.resultats.length; i++) {
        if (Apprenant.resultats[i].jour === jour) {
            Apprenant.resultats[i].exercicesTermines = exercicesTermines;
            Apprenant.resultats[i].challengeTermine = challengeTermine;
            updated= true ;
        }
    }
    if (!updated){
    const nouveauResultat = {
        jour: jour,
        exercicesTermines: exercicesTermines,
        totalExercices: totalExercices,
        challengeTermine: challengeTermine,
    }

    Apprenant.resultats.push(nouveauResultat)
    }
    return `Résultat ${updated ? "modifie" : "ajoute"} avec succès`

}

function rechercherParNom() {
    nomComplet = prompt("Veuillez saisir le nom de l'apprenant : ");
    if (!nomComplet) {
        console.log("Erreur : Le nomComplet ne peut pas etre vide.");
        return;
    }
    for (let i = 0; i < apprenants.length; i++) {
        if (normaliserNom(apprenants[i].nomComplet).includes(normaliserNom(nomComplet))) {
            return apprenants[i];

        }
    }
    console.log("Aucun apprenant trouve pour : " + nomComplet);

}

function rechercherParId() {

    const id = parseInt(prompt("veuiller saisire ID pou le verifier : "))
    for (let i = 0; i < apprenants.length; i++) {
        while (apprenants[i].id == id) {
            console.log("Apprenant trouvable")
            return apprenants[i];
        }
    }
    return "Apprenant introuvable";
}
function calculerProgression(apprenants) {

    let TotaleExsSemain = 0;
    let TotalExercicesFaits = 0;
    let TotalChallengesValides = 0;
    for (let i = 0; i < apprenants.length; i++) {
        for (let j = 0; j < apprenants[i].resultats.length; j++) {
            TotalExercicesFaits += apprenants[i].resultats[j].exercicesTermines;
            TotaleExsSemain += apprenants[i].resultats[j].totalExercices;

            if (apprenants[i].resultats[j].challengeTermine == true) {
                TotalChallengesValides++;
            }
        }
    }

    let Progretion = Math.floor((TotalExercicesFaits / TotaleExsSemain) * 100);
    let statut = "A renforcer";

    if (Progretion >= 80) {
        statut = "Solide";
    } else if (Progretion >= 50) {
        statut = "En progression";
    }
    return {
        exercicesFaits: TotalExercicesFaits,
        challengesValides: TotalChallengesValides,
        pourcentage: Progretion,
        statut: statut

    };


}

function filtrerParNiveau(apprenants) {

    let niveau = prompt("veuiller saisire votre niveau A renforcer / Solide /En progression :")
    if (!niveau) return [];
    let resultats = [];
    for (let i = 0; i < apprenants.length; i++) {
        let info = calculerProgression([apprenants[i]]);
        if (info.statut.toLowerCase() === niveau.toLowerCase()) {
            resultats.push({
                id: apprenants[i].id,
                nomComplet: apprenants[i].nomComplet,
                progression: info.pourcentage,
                niveau: info.statut
            });


        }
    }
    return resultats;
}
// algoritme dyal babelsorte
function trierParProgression() {
    let n = apprenants.length;

    for (let i = 0; i <= n - 1; i++) {
        for (let j = i + 1; j < n; j++) {

            let progI = calculerProgression([apprenants[i]]).pourcentage;
            let progJ = calculerProgression([apprenants[j]]).pourcentage;

            if (progJ > progI) {
                let temp = apprenants[i];
                apprenants[i] = apprenants[j];
                apprenants[j] = temp;
            }
        }
    }
    console.log("=== APPRENANTS TRIES PAR PROGRESSION (DECROISSANT) ===");
    for (let k = 0; k < apprenants.length; k++) {
        let info = calculerProgression([apprenants[k]]);
        console.log((k + 1) + ". " + apprenants[k].nomComplet + " | Progression : " + info.pourcentage + "% (" + info.statut + ")");
    }

}
function trierParAlphabetique() {
    let n = apprenants.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {

            let nomI = normaliserNom(apprenants[i].nomComplet);
            let nomJ = normaliserNom(apprenants[j].nomComplet);

            if (nomI > nomJ) {
                let temp = apprenants[i];
                apprenants[i] = apprenants[j];
                apprenants[j] = temp;
            }
        }
    }
    console.log("=== APPRENANTS TRIES PAR ORDRE ALPHABETIQUE (A-Z) ===");
    for (let k = 0; k < apprenants.length; k++) {
        let info = calculerProgression([apprenants[k]]);
        console.log((k + 1) + ". " + apprenants[k].nomComplet + " | Progression : " + info.pourcentage + "% (" + info.statut + ")");
    }
}

function afficherTableauDeBord(apprenants) {
    console.log("======TABLEAU DE BORD GLOBAL======");
    let totalApprenants = apprenants.length;
    console.log("Nombre total d'apprenants : " + totalApprenants);

    if (totalApprenants === 0) {
        console.log("Aucun apprenant enregistre pour le moment.");
        return;
    }

    let sommePourcentages = 0;

    console.log("======DETAIL PAR APPRENANT======");
    for (let i = 0; i < totalApprenants; i++) {
        let info = calculerProgression([apprenants[i]]);
        sommePourcentages += info.pourcentage;

        console.log((i + 1) + ". " + apprenants[i].nomComplet + " (" + apprenants[i].ville + ")");
        console.log("   Progression : " + info.pourcentage + "% | Statut : " + info.statut);
        console.log("   Exercices faits : " + info.exercicesFaits + " | Challenges valides : " + info.challengesValides);
        console.log("    ==================   ");
    }

    let moyenneGroupe = Math.round(sommePourcentages / totalApprenants);

    console.log("\n Moyenne du progression de groupe : " + moyenneGroupe + "% \n");
}

function afficherListeApprenants(apprenants) {
    console.log("=======LISTE DES APPRENANTS=======");
    if (apprenants.length === 0) {
        console.log("Aucun apprenant enregistre dans la liste.");
        return;
    }

    for (let i = 0; i < apprenants.length; i++) {
        let info = calculerProgression([apprenants[i]]);

        console.log((i + 1) + ". ID: " + apprenants[i].id + " | Nom: " + apprenants[i].nomComplet + " | Ville: " + apprenants[i].ville);
        console.log("   Progression: " + info.pourcentage + "% | Statut: " + info.statut);
        console.log("-----------------------------------");
    }
}