/* 
Activité : gestion des contacts
Auteur: Stéphanie Merle
*/

// Create class
class Contacts{
  constructor(prenom, nom){
    this.prenom = prenom;
    this.nom = nom;
  }
  print(){
    console.log(`Nom: ${this.nom}, prénom: ${this.prenom}`);
  }
};

// Create and push contacts in Array
const contact1 = new Contacts("Carole","Lévisse");
const contact2 = new Contacts("Mélodie","Nelsonne");
let contactList = [];
contactList.push(contact1, contact2);

let theName ="";
let theSurname ="";

const menuList = "\n1: Lister les contacts \n2: Ajouter un contact \n0: Quitter";
console.log(`Bienvenue dans le gestionnaire de contact ${menuList}`);

document.getElementById("validation").onclick = menu;
// Choice 1 || 2 || 0
function menu(){
  let inputValue = document.getElementById("inputValue").value;
  document.getElementById("inputValue").value = "";
  if(inputValue === "1"){
    console.log("Voici la liste de tous vos contacts:");
    for(contact of contactList){
      contact.print();
    } 
    console.log(menuList);
  }else if(inputValue === "2"){
    creationContact();
  }else if(inputValue === "0"){
    console.log("Aurevoir");
    // fin programme
    document.write('');
  }else{
    console.log("Valeur non acceptee");
    document.getElementById("inputValue").value = "";
    console.log(menuList);
  }
};

// Input "2" create a new contact
function creationContact(){
  document.getElementById("question").innerHTML = "Le Prenom de votre nouveau contact:" ;
  document.getElementById("inputValue").value = "";
  document.getElementById("validation").onclick = pushPrenom;
};

function pushPrenom(){
  theName = document.getElementById("inputValue").value;
  document.getElementById("inputValue").value = "";
  document.getElementById("question").innerHTML = "Le Nom de votre nouveau contact:" ;
  document.getElementById("validation").onclick = pushNom;
};

function pushNom(){
  theSurname = document.getElementById("inputValue").value;
  document.getElementById("inputValue").value = "";
  console.log(`Vous avez un nouveau contact:  ${theName} ${theSurname}`);
  let newContact = new Contacts(theName, theSurname);
  contactList.push(newContact);
  console.log(menuList);
  document.getElementById("question").innerHTML ="Choisissez une option:";
  document.getElementById("validation").onclick = menu;
};

function reset(){
  document.getElementById("inputValue").value = "";
  document.getElementById("question").innerHTML ="Choisissez une option:";
  console.log(menuList);
  document.getElementById("validation").onclick = menu;
}