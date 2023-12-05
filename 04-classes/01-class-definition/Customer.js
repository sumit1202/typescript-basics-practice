var Customer = /** @class */ (function () {
    function Customer(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return Customer;
}());
var myCustomer2 = new Customer("Harry", "Brook");
console.log(myCustomer2);
console.log(myCustomer2.firstname);
console.log(myCustomer2.lastname);
// let myCustomer=new Customer();
// myCustomer.firstname = "Martin";
// myCustomer.lastname = "Luther";
// console.log(myCustomer);
// console.log(myCustomer.firstname);
// console.log(myCustomer.lastname);
