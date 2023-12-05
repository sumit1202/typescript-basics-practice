class Customer {

    //public access modifier by default
    // private _firstname: string;

    // private _lastname: string;

    // constructor(firstname: string, lastname: string) {
    //     this._firstname = firstname;
    //     this._lastname = lastname;
    // }

    //shorthand for constructor
    constructor(private _firstname: string, private _lastname: string) {
    }

    // accessors - get/set
    public get firstname(): string {
        return this._firstname;
    }
    public set firstname(value: string) {
        this._firstname = value;
    }

    public get lastname(): string {
        return this._lastname;
    }
    public set lastname(value: string) {
        this._lastname = value;
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

