"use strict";
class Invoce {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoce("asasd", "dkdhg wed", 3232);
const invTwo = new Invoce("sd", "dkdhg", 32);
console.log(invOne, invTwo);
