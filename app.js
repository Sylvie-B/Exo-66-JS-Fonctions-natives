// console.log(random());

let nbrEnt = document.getElementById("entier");

let nbrAVir = document.getElementById("flottant");

let notANbr = document.getElementById("non-numerique");

let alea = document.getElementById("random");

let avecVir = document.getElementById("trunc");

let newText = document.getElementById("replace");

let operande = 10;

/** 1   multiplier #entier par operande */
nbrEnt.innerHTML = parseInt(nbrEnt.innerHTML) * operande;

/** 2  #flotant x operande + #entier */
nbrAVir.innerHTML = parseFloat(nbrAVir.innerHTML) *operande + parseInt(nbrEnt.innerHTML);

/** 3    test sur le type de valeur */
if(isNaN(notANbr.innerHTML)){
    notANbr.innerHTML = 0;
}

/** 4  nombre random */
let nbr = Math.random() * 100;
console.log(nbr);
alea.innerText = Math.floor(nbr);

/** 5  flotant --> entier  */
avecVir.innerHTML = Math.trunc(parseFloat(avecVir.innerHTML));

/** 6   remplacer par reponse de l'utilisateur */
let name = prompt("entrez votre nom");
let surName = prompt("entrez votre prénom");

newText.innerHTML = name + " " + surName;
