// selection des elements
document.forms["SAV"].addEventListener("submit", function(e) {
    
    let erreur; erreur1; erreur2; erreur3; erreur4; erreur5; erreur6; erreur7;
    erreur8; erreur9; erreur10; erreur11;
    
    let carValid   = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;  
    let regDate    = /(19|20)[0-9][0-9]/;
    let regMail    = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let regGlobale = /^([0-9a-z'àâéèêôùûçÀÂÉÈÔÙÛÇ\s-]{1,50})$/;
    let regChiffre = /^[0-9]{5}$/;
    let inputs     = this;
    
    // traitement cas par cas (input unique)
    
    // Nom
    if (carValid.test(inputs["nom"].value)== false) {
        erreur1 = "Veuillez saisir des caractères valides";
        document.getElementById("erreur1").innerHTML = erreur1;
    }
    
    // Prenom
    if (carValid.test(inputs["prenom"].value)== false) {
        erreur2 = "Veuillez saisir des caractères valides";
        document.getElementById("erreur2").innerHTML = erreur2;
    }
    
    // Sexe 
    radiocheck = false;
    for (let i= 2; i < 5; i++) {
        if (inputs[i].checked) {
        radiocheck = true;
        }
    }
    if (radiocheck == false) {
    erreur3 = "Veuillez selectionner votre genre";
    document.getElementById("erreur3").innerHTML = erreur3;
    }  
    // Date
    if (regDate.test(inputs["date"].value)== false) {
        erreur4 = "Veuillez saisir une date valide";
        document.getElementById("erreur4").innerHTML = erreur4;
    }
    
    // Code postal
    if (regChiffre.test(inputs["poste"].value)== false) {
        erreur5 = "Veuillez saisir des chiffres";
        document.getElementById("erreur5").innerHTML = erreur5;
    }
    
    // Adresse
    if (regGlobale.test(inputs["adresse"].value)== false) {
        erreur6 = "Veuillez saisir des caractères valides";
        document.getElementById("erreur6").innerHTML = erreur6;
    }
    
    // Ville
    if(carValid.test(inputs["ville"].value)== false) {
        erreur7 = "Veuillez saisir des caractères valides";
        document.getElementById("erreur7").innerHTML = erreur7;
    }
    
    // Email
    if (regMail.test(inputs["email"].value)== false) {
        erreur8 = "Veuillez saisir une adresse email valide";
        document.getElementById("erreur8").innerHTML = erreur8;
    }
    
    // Sujet
    if (inputs["sujet"].value == "") {
        erreur9 = "Veuillez séléctionnez le sujet de votre demande";
        document.getElementById("erreur9").innerHTML = erreur9;
    }
    
    // Question
    if(regGlobale.test(inputs["question"].value)== false) {
        erreur10 = "Veuillez entrez des caractères valides";
        document.getElementById("erreur10").innerHTML = erreur10;
    }
    
    // Validation du formulaire
    if (inputs["traitement"].checked) {
    } else {
        erreur11 = "Veuillez cocher la case, s\'il vous plaît";
        document.getElementById("erreur11").innerHTML = erreur11;
    }
    
    // Traitement générique
    for (let i = 0; i < inputs.length; i++) {
        inputs[i];
    if (!inputs[i].value) {
        e.preventDefault();
        erreur = "Veuillez renseigner tous les champs";
        document.getElementById("erreur").innerHTML = erreur;
    }
    }
    });
    
    document.forms["SAV"].addEventListener("reset", function() {
    
        inputs["nom"].value = "";
        inputs["prenom"].value = "";
        inputs["feminin"].value = "";
        inputs["masculin"].value = "";
        inputs["neutre"].value = "";
        inputs["date"].value = "";
        inputs["poste"].value = "";
        inputs["adresse"].value = "";
        inputs["ville"].value = "";
        inputs["email"].value = "";
        inputs["sujet"].value = "";
        inputs["question"].value = "";
        inputs["traitement"].value = "";
    });