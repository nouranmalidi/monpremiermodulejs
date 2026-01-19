// Ici je réunirai tous les modules de mon projet // 

// J'importe la fonction monHeure()

import generateHeure from "./generateHeure.js";



console.log("Main - mon heure " , generateHeure.monHeure());

let jour = new Date();


// Pour afficher l'heure sur html
let spanHeure = document.querySelector("#heure").textContent = generateHeure.monHeure();

// Pour afficher les minutes 
let spanMinutes = document.querySelector("#minutes").textContent = jour.getMinutes();

// Pour afficher les secodes 
let spanSecondes = document.querySelector("#secondes").textContent = jour.getSeconds();

