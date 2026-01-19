/**
 * generateHeure est un module de calcule automatique de l'heure
 */

// Je déclare la fonction qui retourne l'heure //

function monHeure() {
    let date = new Date();
    let heure = date.getHours();
    

    return heure;
}

function minute () {
    let date = new Date();
    let minutes = date.getMinutes();
   
    return minute;
}




// Je vais exporter la fonction monHeure() parceque je veux rendre la fonction accesible depuis un autre fichier JS
export default {
    monHeure
}

