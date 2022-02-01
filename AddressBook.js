
class Contact
{
    // firstName;
    // lastName;
    // address;
    // city;
    // state;
    // zip;
    // phoneNo;
    // email;

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
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
get phoneNo(){ return this._phoneNo}
set phoneNo(phoneNo){
    let regex = RegExp("[0-9]{2}\\s[0-9]{10}");
    if(regex.test(phoneNo))
        this._phoneNo = phoneNo
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
    return "FirstName: " + this.firstName + " LastName: " + this.lastName + " Address: " + this.address + " City: " + this.city +
            " State: " + this.state + " Zip: " + this.zip + " PhoneNO: " + this.phoneNo + " Email: " + this.email;
}
}
//    let contacts = new Contact("Bala", "Chandar" ,"Rtcch","Machilipatanamo","Andhrapradesh","500211","91 9493750386",    "bala123@gamil.com");
//     console.log(contacts.toString());

let contact1 = new Contact("Bala", "Chandar", "Colony", "Machilipatanamo", "Andhrapradesh", "524894", "91 8596486541", "bala123@gmail.com")
let contact2 = new Contact("Dinesh", "Kumar", "HitechCity", "Hyderabad", "Telangana", "542004", "91 9812287593", "dinesh9@gmail.com")
let contact3 = new Contact("Pandu", "Rangarao", "Thane", "Mumbai", "Mumbai", "561004", "91 9854280202", "pandui11@gmail.com")

var contactArray = new Array()
contactArray.push(contact1)
contactArray.push(contact2)
contactArray.push(contact3)    

for(let i = 0; i < contactArray.length; i++){
    console.log(contactArray[i].toString())
}
//uc4
let index = contactArray.findIndex(Contact => Contact.firstName == "Dinesh");
console.log("\n contact found to edit"+index);
contactArray[index].city="Bandar";
console.log("\n after editing the contact");
contactArray.forEach((contact) => console.log(contact.toString()));
