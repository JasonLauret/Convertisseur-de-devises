const zoneMessageErreur = document.getElementById('zoneMessageErreur');
const montantSaisie = document.getElementById('montant');
const responses = document.getElementById('responses');



function messageErreur(valeur){
    let newMessage = document.createElement('h5');
    newMessage.setAttribute("id", "contenuMessage");
    newMessage.textContent = valeur;
    zoneMessageErreur.appendChild(newMessage);
}

function convertir(){
    let montant = document.getElementById('montant').value;
    let contenuMessage = document.getElementById('contenuMessage');
    if (montant <= 0) {
        if (contenuMessage){
            //zoneMessageErreur.removeChild(contenuMessage);
            zoneMessageErreur.innerHTML = "";
            messageErreur("Veuillez saisir un nombre superieur à 0.");
        } else{
            messageErreur("Veuillez saisir un nombre superieur à 0.");
        }

    } else if(devise1() === "" || devise2() === "" || devise1() === devise2()){
        zoneMessageErreur.innerHTML = "";
        messageErreur('Les devises ne sont pas correctement remplit.');

    } else {
        responses.textContent = montant;
        console.log(montant);
        montantSaisie.value = "";
        if (contenuMessage){
            zoneMessageErreur.innerHTML = "";
        }
    }
    convertion(devise1(), devise2(), montant);
}

function devise1(){
    let selectDevise1 = document.getElementById("divise_One_select");
    let choiceDevise1 = selectDevise1.selectedIndex;
    let valeurDevise1 = selectDevise1.options[choiceDevise1].value;
    return valeurDevise1;
}

function devise2(){
    let selectDevise2 = document.getElementById("divise_two_select");
    let choiceDevise2 = selectDevise2.selectedIndex;
    let valeurDevise2 = selectDevise2.options[choiceDevise2].value;
    return valeurDevise2;
}

function convertion(devise1, devise2, montant){
    let montantConverti;
    if(devise1 === "euro" && devise2 === "dollar"){
        montantConverti = montant * 1.054115 / 1;
        responses.innerText = montantConverti.toFixed(2) + "$";
        //responses.innerText = 'Changer '+ montant +' € en Dollar';

    } else if(devise1 === "euro" && devise2 === "livreSterling"){
        montantConverti = montant * 0.85908 / 1;
        responses.innerText = montantConverti.toFixed(2) + "£";
        //responses.innerText = 'Changer '+ montant +' € en Livre Sterling';

    } else if(devise1 === "euro" && devise2 === "canadaDollar"){
        montantConverti = montant * 1.363336 / 1;
        responses.innerText = montantConverti.toFixed(2) + "£";
        //responses.innerText = 'Changer '+ montant +' $ en Livre Sterling';

    } else if(devise1 === "dollar" && devise2 === "euro"){
        montantConverti = montant * 0.948202 / 1;
        responses.innerText = montantConverti.toFixed(2) + "€";
        //responses.innerText = 'Changer '+ montant +' $ en Euro';

    } else if(devise1 === "dollar" && devise2 === "livreSterling"){
        montantConverti = montant * 0.814879 / 1;
        responses.innerText = montantConverti.toFixed(2) + "£";
        //responses.innerText = 'Changer '+ montant +' $ en Livre Sterling';

    } else if(devise1 === "dollar" && devise2 === "canadaDollar"){
        montantConverti = montant * 1.292294 / 1;
        responses.innerText = montantConverti.toFixed(2) + "€";
        //responses.innerText = 'Changer '+ montant +' £ en Euro';

    } else if(devise1 === "livreSterling" && devise2 === "euro"){
        montantConverti = montant * 1.16361 / 1;
        responses.innerText = montantConverti.toFixed(2) + "€";
        //responses.innerText = 'Changer '+ montant +' £ en Euro';

    } else if(devise1 === "livreSterling" && devise2 === "dollar"){
        montantConverti = montant * 1.22605 / 1;
        responses.innerText = montantConverti.toFixed(2) + "$";
        // responses.innerText = 'Changer '+ montant +' £ en Dollar';

    } else if(devise1 === "livreSterling" && devise2 === "canadaDollar"){
        montantConverti = montant * 1.585629 / 1;
        responses.innerText = montantConverti.toFixed(2) + "$";
        // responses.innerText = 'Changer '+ montant +' £ en Dollar';

    } else if(devise1 === "canadaDollar" && devise2 === "euro"){
        montantConverti = montant * 0.7334948978094907 / 1;
        responses.innerText = montantConverti.toFixed(2) + "€";
        //responses.innerText = 'Changer '+ montant +' £ en Euro';

    } else if(devise1 === "canadaDollar" && devise2 === "dollar"){
        montantConverti = montant * 0.7738180463216697 / 1;
        responses.innerText = montantConverti.toFixed(2) + "$";
        // responses.innerText = 'Changer '+ montant +' £ en Dollar';

    } else if(devise1 === "canadaDollar" && devise2 === "livreSterling"){
        montantConverti = montant * 0.6306647810957826 / 1;
        responses.innerText = montantConverti.toFixed(2) + "$";
        // responses.innerText = 'Changer '+ montant +' £ en Dollar';
    }
}
