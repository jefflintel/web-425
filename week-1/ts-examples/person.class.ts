/* ============================================
 ; Title:  person.classts
 ; Author: Professor Krasso
 ; Date:   7 July 2020
 ; Modified by: Jeff Lintel
 ; Description: implements person Interface
 ===========================================*/

import { IPerson} from "./person.interface"

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Jeff", "Lintel");

console.log(`My name is ${myName.firstName} ${myName.lastName}.`);