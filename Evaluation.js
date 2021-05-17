// Exe 1 : Calcul du nombre de jeunes, de moyens et de vieux //

let j=0;
let a=0;
let v=0;
let personnes;
do {
  personnes = prompt("Entrez votre age");
  if ( personnes < 20) {
    j++;
  }
  if ((personnes >= 20 ) && (personnes <= 40)) {
    a++;
  }
  if ((personnes > 40) && (personnes <= 99)) {
    v++;
  }
}
while (personnes < 100);
 
alert("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + "" + v + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");


// Exe 2 : Table de multiplication //

function TableMultiplication() {
let i;
let nombre = window.prompt("Entrez le numéro de la table : ");
for (i = 1; i <= 10; i++) {
  resultat = nombre*i;
  document.write(nombre +" x "+ i +" = "+ nombre*i +"<br>");
}
}
TableMultiplication();


// Exe 3 : Recherche d'un prénom //

let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent",
 "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

{
let saisie = window.prompt(`Veuillez choisir un prénom parmi : ${[...tab]}.`);
let idx = tab.indexOf(saisie);

if (tab.includes(saisie)) {
    tab.splice(idx,1);
    tab.push("");
    alert(tab)
}

else {
    alert ("Mauvais prénom")
}
}


// Exe 4 : Total d'une commande //

let PU = prompt("Veuillez saisir le prix unitaire du produit : ");
let QTECOM = prompt("Veuillez saisir la quantité commandée : ");
let PAP = (PU*QTECOM);

if (PAP >=100 && PAP <= 200) {
  var REM = PAP*0.05;
}
else if (PAP > 200) {
  REM = PAP*0.1;
}
else {
  REM = 0;
}

if (PAP - REM >= 500) {
 var PORT = 0;
}
else {
  PORT = Math.round(PAP-REM)*0.02;
  if (PORT <= 6) {
  PORT = 6;
  }
}

alert("Le prix unitaire est de "+ PU +" €, la quantité est égal à "+QTECOM+ " , remise "+REM+ " €, soit "+(PAP-REM)+" € ,frais de port "+PORT+" €, prix final "+ Math.round(PAP-REM+PORT)+ " € ");

// !!! Exe 5 : Voir fichier : verification_formulaire.js !!! //