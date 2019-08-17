/* 
Contact management
Author: Stéphanie Merle
*/

// Create a class named Contacts
class Contacts{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  print(){
    console.log(`Last Name: ${this.lastName}, First Name: ${this.firstName}`);
  }
};

// Create and push the 2 initial contacts in an array named contactList
const contact1 = new Contacts("Carole","Lévisse");
const contact2 = new Contacts("Mélodie","Nelsonne");
let contactList = [];
contactList.push(contact1, contact2);

let theName ="";
let theSurname ="";

const menuList = "\n1: Your contact list \n2: Add a new contact \n0: Quit";
console.log(`Welcome to contact management ${menuList}`);
const choice = 'Choose an option:';

// event listener on click OK
document.getElementById("validation").onclick = menu;

// event listenenr on press ENTER simulate click OK event
document.getElementById("inputValue").addEventListener("keyup", function(event) {
  // Enter key === 13
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the click button
    document.getElementById("validation").click();
  }
});

// Choice 1 || 2 || 0
function menu(){
  let inputValue = document.getElementById("inputValue").value;
  document.getElementById("inputValue").value = "";
  if(inputValue === "1"){
    console.log("Your contact list:");
    for(contact of contactList){
      contact.print();
    } 
    console.log(menuList);
  }else if(inputValue === "2"){
    creationContact();
  }else if(inputValue === "0"){
    console.log("Goodbye");
    // break
    document.write('');
  }else{
    console.log("Value not accepted");
    document.getElementById("inputValue").value = "";
    console.log(menuList);
  }
};

// Input "2" waiting for new contact first name
function creationContact(){
  document.getElementById("question").innerHTML = "New contact first name:" ;
  document.getElementById("inputValue").value = "";
  document.getElementById("validation").onclick = pushFirstName;
};

// Get first name, waiting for last name
function pushFirstName(){
  theName = document.getElementById("inputValue").value;
  document.getElementById("inputValue").value = "";
  document.getElementById("question").innerHTML = "New contact last name:" ;
  document.getElementById("validation").onclick = pushLastName;
};

// Get last name, confirm the new contact creation and reload menu choice
function pushLastName(){
  theSurname = document.getElementById("inputValue").value;
  document.getElementById("inputValue").value = "";
  console.log(`You added a new contact:  ${theName} ${theSurname}`);
  let newContact = new Contacts(theName, theSurname);
  contactList.push(newContact);
  console.log(menuList);
  document.getElementById("question").innerHTML = choice;
  document.getElementById("validation").onclick = menu;
};

// If click on CANCEL
function reset(){
  document.getElementById("inputValue").value = "";
  document.getElementById("question").innerHTML = choice;
  console.log(menuList);
  document.getElementById("validation").onclick = menu;
}