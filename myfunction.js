"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //return num + 2
    return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function singUpUser(name, lastname, email, password, isPaid) { }
let loginUser = (name, lastname, email, isPaid = false) => { };
let myValue = addTwo(5);
getUpper("Alexis");
singUpUser("Alexis", "Pascazio", "alexis03.pascazio@gmail.com", "Alexis23045", false);
loginUser("Alexis", "Pascazio", "alexis03.pascazio@gmail.com", true);
/*function getValue(myVal: number):boolean{
    if(myVal > 5) {
        return true
    }

return "200 OK"

}*/
const getHello = (s) => {
    return "";
};
const heros = ["thor", "spiderman", "ironman"];
heros.map(hero => {
    return 2;
});
function consoloeError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new consoloeError(errmsg);
}
