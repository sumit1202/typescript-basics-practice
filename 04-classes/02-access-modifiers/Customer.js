"use strict";
var Customer = /** @class */ (function () {
    //public access modifier by default
    // private _firstname: string;
    // private _lastname: string;
    // constructor(firstname: string, lastname: string) {
    //     this._firstname = firstname;
    //     this._lastname = lastname;
    // }
    //shorthand for constructor
    function Customer(_firstname, _lastname) {
        this._firstname = _firstname;
        this._lastname = _lastname;
    }
    Object.defineProperty(Customer.prototype, "firstname", {
        // accessors - get/set
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        set: function (value) {
            this._lastname = value;
        },
        enumerable: false,
        configurable: true
    });
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
