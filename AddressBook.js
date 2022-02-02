
class Contact
{
    

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
      
}
get firstName(){ 
    return this._firstName
}
set firstName(firstName){
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");
    if(nameRegex.test(firstName))
        this._firstName = firstName
    else throw "Incorrect First Name"
}
get lastName(){ 
    return this._lastName
}
set lastName(lastName){
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");
    if(nameRegex.test(lastName))
        this._lastName = lastName
    else throw "Incorrect Last Name"
}
get address(){
     return this._address
    }
set address(address){
    let regex = RegExp("^[A-Za-z]{4,}$");
    if(regex.test(address))
        this._address = address
    else throw "Incorrect Address"
}
get city(){
     return this._city
    }
set city(city){
    let regex = RegExp("[a-zA-Z0-9 ,]{4,}");
    if(regex.test(city))
        this._city = city
    else throw "Incorrect City"
}
get state(){ 
    return this._state}

set state(state){
    let regex = RegExp("[a-zA-Z0-9 ,]{4,}");
    if(regex.test(state))
        this._state = state
    else throw "Incorrect State"
}
get zip(){
     return this._zip
    }
set zip(zip){
    let zipRegex = RegExp("^[0-9]{3}[ ]*[0-9]{3}$");
    if (zipRegex.test(zip))
        this._zip = zip
    else throw "Incorrect Zip"
}
get phoneNunber(){ return this._phoneNo}
set phoneNumber(phoneNumber){
    let regex = RegExp("[0-9]{2}\\s[0-9]{10}");
    if(regex.test(phoneNumber))
        this._phoneNo = phoneNumber
    else throw "Incorrect Phone Number"
}
get email(){ return this._email}
set email(email){
    let regex = RegExp("^[a-z]+([_+-.]?[a-z0-9]+)*[@][a-z0-9]+[.]([a-z]+){2,}([.]?[a-z]{2})?$");
    if(regex.test(email))
        this._email = email
    else throw "Incorrect Email"
}


toString(){
    return ("FirstName: " + this.firstName + " LastName: " + this.lastName + " Address: " + this.address + " City: " + this.city +
            " State: " + this.state + " Zip: " + this.zip + " PhoneNumber: " + this.phoneNumber + " Email: " + this.email);
}
}

let AddressBook = new Array();
//uc3
function AddContact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    try {
        let newcontact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
        // UC7 Checks for Duplicate contacts.
        if (AddressBook.find(person => person.firstName == newcontact.firstName && person.email == newcontact.email)) {
            throw "Contact Already Exists.";
        } else {
            AddressBook.push(newcontact);
            console.log("Contact Added Successfully.");
        }
    }
    catch (e) {
        console.error(e);
    }
}
// UC5 Delete Contact
function DeleteContact(firstName, lastName)
{
    for(let index = 0; index < AddressBook.length; index++)
    {
        if(AddressBook[index].firstName == firstName && AddressBook[index].lastName == lastName)
        {
            AddressBook.splice(index, 1 );
        }
    }
}
//uc6
function CountContact(){
    let addressBookCount = AddressBook.reduce((count) => count= count + 1, 0);
    console.log("Contact Count is: " + addressBookCount);
}

function Main() {

    AddContact(
      "Bala",
      "Chandar",
      "Rtccc",
      "Machilipatanamo",
      "AndhraPradesh",
      "524894",
      "91 8596486541",
      "bala123@gmail.com"
    );
    AddContact(
      "Dinesh",
      "Kumar",
      "Hitechcity",
      "Hyderabad",
      "Telangana",
      "542004",
      "91 9812287593",
      "dinesh9@gmail.com"
    );
    AddContact(
      "Pandu",
      "Rangarao",
      "Thane",
      "Mumbai",
      "Mumbai",
      "561004",
      "91 9854280202",
      "pandui11@gmail.com"
    );
    
  
  AddressBook.forEach((contact) => console.log(contact.toString()));
  // UC4 
  AddressBook.filter(contact => contact.firstName == "Bala" && contact.lastName == "Chandar").forEach(contact =>{ contact.address = "RajajiNagar"; contact.city = "Banagalore";})
  AddressBook.forEach(contact=>console.log(contact.toString()));
  // UC5 
  console.log("Deletes the contact from AddressBook Array.");
  
  DeleteContact("Bala", "Chandar");
  AddressBook.forEach(contact=>console.log(contact.toString()));
}
Main();
CountContact();