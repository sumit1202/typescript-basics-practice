class Customer {

    //public access modifier by default
    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

}

let myCustomer2 = new Customer("Harry", "Brook");
console.log(myCustomer2);
console.log(myCustomer2.firstname);
console.log(myCustomer2.lastname);

// let myCustomer=new Customer();

// myCustomer.firstname = "Martin";
// myCustomer.lastname = "Luther";

// console.log(myCustomer);
// console.log(myCustomer.firstname);
// console.log(myCustomer.lastname);

