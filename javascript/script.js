


function bonjour(){
    document.getElementById("reponseBonjour").innerHTML = "hallo";
}

const direBonjours = document.querySelector("#direBonjours");

direBonjours.addEventListener("click", () => {

    document.getElementById("reponseBonjour").innerHTML = "bonjours";
});

function exoGuide(){
    let userFirstName = document.getElementById("userFirstName").value;
    let userName = document.getElementById("userName").value;
    const retExoGuide = document.getElementById("retExoGuide")

    retExoGuide.innerHTML = "bonjour " +  userFirstName + " " + userName + "!";
    retExoGuide.classList .add("exoGuide")
}
function button(){
let prenom=prompt("entrer prenom")
let nom=prompt("entrter nom")
alert("bonjour " + prenom + " " + nom + " " + "!\ncomment allez vous")
}
function agex(){
let age = document.getElementById("age").value;
let maj = 18
const reponse1 = document.getElementById("reponse1")

if (age >= maj) {
    reponse1.innerHTML = "vous etes ok"
}
else
    reponse1.innerHTML = "vous etes pas ok"
}


function resulta() {
    let prix = document.getElementById("prix").value;
    let nombre = document.getElementById("nombre").value;
    const reponse = document.getElementById("reponse")
    let total = prix * nombre;

    reponse.innerHTML = total;
    
}