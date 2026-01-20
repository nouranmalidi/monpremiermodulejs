// Ici je réunirai tous les modules de mon projet // 

// J'importe la fonction monHeure()

import generateHeure from "./generateHeure.js";



console.log("Main - mon heure " , generateHeure.monHeure());

let jour = new Date();


// Pour afficher l'heure sur html
let spanHeure = document.querySelector("#heure").textContent = generateHeure.monHeure() + " heures";

// Pour afficher les minutes 
let spanMinutes = document.querySelector("#minutes").textContent = jour.getMinutes() + " minutes";

// Pour afficher les secodes 
let spanSecondes = document.querySelector("#secondes").textContent = jour.getSeconds() + " secondes";

// J'importe l'objet user

import user from "./user.js";

console.log("Mon objet" , user.utilisateur); // Pas de parenthèse () car c'est pas une fonction.

// Pour afficher l'objet utilisateur

let spanUtilisateur = document.querySelector("#utilisateur");
spanUtilisateur.innerHTML = 
    `${user.utilisateur.nom}<br>${user.utilisateur.prenom}<br>${user.utilisateur.email}<br>${user.utilisateur.motDePasse}`;

