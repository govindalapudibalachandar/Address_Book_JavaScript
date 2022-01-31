
class Contact
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;

    constructor(firstName , lastName, address, city, state, zip, phoneNo, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNo = phoneNo;
        this.email = email;
    }
}
let contact1 = new Contact("Bala", "Chandar", "rtc colony", "machilipatanamo", "andhraPradesh",500021,9493750386, "balachandar@gmail.com")
console.log(contact1);