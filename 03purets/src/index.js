"use strict";
/*onsole.log("typescript is here still")
console.log("typescript is amazing")*/
/*class User {
    email:string
    name:string
    readonly city: string = "Bari"
   constructor(email: string,name:string) {
    this.email = email;
    this.name = name
   }
}*/
class User {
    //   public city = ( string | number),
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Bari";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return "apple${this.email}";
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const alexis = new User("alexispascazio03@gmail.com", "alexis", "moon_lexi");
/**alexis.city = "Bari"

alexis.city = 4*/
//alexis.deleteToken()
