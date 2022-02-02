
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
// UC8 Search by city and state
function SearchByCity(city) {
    let sortByCity = AddressBook.filter(contact => contact.city == city);
    return sortByCity;
}
function SearchByState(state) {
    let sortByState = AddressBook.filter(contact => contact.state == state);
    return sortByState;
}
// UC9 Displays Contact By City.
function ViewContactByCity(){
    AddressBook.filter((contact) => contactsCityMap.set(contact.city, SearchByCity(contact.city)));
    return contactsCityMap;
}
// UC9 Displays Contact By State.
function ViewContactByState(){
    AddressBook.filter((contact) => contactsStateMap.set(contact.state, SearchByState(contact.state)));
    return contactsStateMap;
}
// UC10 Get Contact Count by city.
function ContactCountByCity(){
    AddressBook.filter((contact) => countCityMap.set(contact.city, SearchByCity(contact.city).length));
    return countCityMap;
}
// UC10 Get Contact Count by state.
function ContactCountByState(){
    AddressBook.filter((contact) => countStateMap.set(contact.state, SearchByState(contact.state).length));
    return countStateMap;
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
// UC8 Prints Contact by city.
console.log(SearchByCity("Telangana"));
// UC8 Prints Contact by state.
console.log(SearchByState("Mumbai"));
console.log("---- UC9 ViewsContacts By City----");
console.log(ViewContactByCity());
console.log("---- UC9 ViewsContacts By State----");
console.log(ViewContactByState());
console.log("----UC10 Contact count by City----");
console.log(ContactCountByCity());
console.log("----UC10 Contact count by State----");
console.log(ContactCountByState());
}
// Map to Contacts in a city.
let contactsCityMap = new Map();
// Map to Contacts in a state.
let contactsStateMap = new Map();
// Map to get contacts count by city.
let countCityMap = new Map();
// Map to get contacts count by state.
let countStateMap = new Map();
Main();
CountContact();