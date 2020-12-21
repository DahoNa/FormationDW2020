let nbSaisie // Ce qui nous permet d'entrer des nombres

let nbArray = [] // Ceci est notre tableau 

let nbTotal = 0 // On initialise à 0 car on veux que cette variable stock le total des nombres saisies (nombre)

let nbSomme = 0 // On initialise à 0 car on veux que cette variable stock la somme total (nombre)

let nbMoyenne = 0 // On initialise à 0 car on veux que cette variable stock la moyenne (nombre)

let nbMin = Number.MAX_VALUE // On compare nbMin avec le plus petit nombre possible

let nbMax = -Number.MAX_VALUE // On compare nbMax avec le plus grand nombre possible

let i = 0;


// Ici je renvois un objet de type Element qui représente la propriété de l' ID 
let nombre = document.getElementById("nombre");

let nbResult = document.getElementById('btnResult');

let nbAdd = document.getElementById('btnAdd');

let btnClear = document.getElementById('btnClear');


//Ici grâce a la fonction addNumber qui est sur l'INPUT #nbAdd, je rentre les nombres dans le tableau 
function addNumber () {
    
    nbSaisie = document.getElementById('nombre').value; // Ici j'utilise la méthode 'value' pour lui assigner une valeur numérique

    document.getElementById('nombre').value = ''; 

    if(nbSaisie == '') { // Si l'utilisateur n'entre pas de nombre, je ne le prend pas en compte

        alert('Veuillez saisir un nombre');

    }

    nbArray.push(parseInt(nbSaisie)); // Avec cette methode j'entre les nombres dans le tableau

    console.log(nbArray)

        
}

function stats(){

    // Ici je lance une boucle pour trouver le nombre le plus petit, le nombre le plus grand et après la somme totale et le total de nombre saisis
    for ( i = 0; i < nbArray.length; i++ ) {

        if(nbArray[i]>nbMax){

            nbMax = nbArray[i];
        }
        
        if(nbArray[i]<nbMin) {

            nbMin = nbArray[i];
        }
        nbSomme = nbSomme + parseInt(nbArray[i]);
        nbTotal = nbArray.length;
    };
        
    
    //Ici après avoir eu tout les résultats des opérations ci-dessus,je fais la moyenne totale des nombres saisis
    nbMoyenne = (nbSomme/nbTotal).toFixed(1);

 
}




function showResult (){// Cette fonction va me permettre d'afficher mes résultats sur la page HTML et aussi sur ma console.

    stats();

    console.log(`Vous avez saisis : ${nbTotal} nombres.`);

    console.log(`La somme de ces nombres est de : ${nbSomme}`);

    console.log(`La moyenne des nombres saisis est de : ${nbMoyenne}`);

    console.log(`Le nombre le plus petit saisi est : ${nbMin}`);

    console.log(`Le nombre le plus grand saisi est : ${nbMax}`);

    document.getElementById('showTotal').innerHTML = nbTotal;
    document.getElementById('showSum').innerHTML = nbSomme;
    document.getElementById('showAverage').innerHTML = nbMoyenne;
    document.getElementById('showMin').innerHTML = nbMin;
    document.getElementById('showMax').innerHTML = nbMax;

}


function nbClear (){ // Ici en utilisant la fonction nbClear qui est sur l'INPUT #btnClear on efface le tableau 
    clear();
    
}

function clear() {// Cette fonction me permet de réinitialiser mon tableau
    
    
    while (nbArray.length>0) { 
        nbArray.pop(parseInt(nbSaisie));

        nbSaisie 
        
        nbArray = [] 
    
        nbTotal = 0 
    
        nbSomme = 0 
    
        nbMoyenne = 0 
    
        nbMin = Number.MAX_VALUE 
    
        nbMax = -Number.MAX_VALUE 
        
    }
    
    document.getElementById('showTotal').innerHTML = '';
    document.getElementById('showSum').innerHTML = '';
    document.getElementById('showAverage').innerHTML = '';
    document.getElementById('showMin').innerHTML = '';
    document.getElementById('showMax').innerHTML = '';
}
