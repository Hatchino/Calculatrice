function addition() {
    return nombreUn + nombreDeux;
}

function soustraction() {
     return nombreUn - nombreDeux;
}

function division() {
    if(nombreDeux == 0) {
        throw new Error("Impossible de diviser par 0 !");
    }
    return nombreUn / nombreDeux;
}

function multiplication() {
    return nombreUn * nombreDeux;  
}

let recommencer = false; //Par défaut le programme se relance pas
do {
    do {
        var choix = Number(prompt("Que souhaitez-vous faire ? Saisir le chiffre correspondant : \n\n 1 - Addition\n 2- Soustraction\n 3-Multiplication\n 4-Division"));
    } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);
    
    do {
        var nombreUn = Number(prompt("Choisir un premier nombre: "));
        var nombreDeux = Number(prompt("Choisir un second nombre: "));
    } while ((isNaN(nombreDeux)) || (isNaN(nombreUn)));
    
    
    try {
        switch (choix) {
            case 1:
                var resultat = addition();
            break;
            
            case 2:
                var resultat = soustraction();
            break;
                
            case 3:
                var resultat = multiplication();
            break;
        
            case 4:
                var resultat = division();
            break;
        
            default:
                throw new Error("Une erreur est survenue.")     
        }
        alert ("Le résultat : " + resultat)
    
    } catch (error) {
        alert(error)
    }
    
    recommencer = confirm("Souhaitez-vous recommencer ?");

} while (recommencer);


    


