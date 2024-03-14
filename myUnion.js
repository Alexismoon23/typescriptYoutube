"use strict";
let score = 33;
score = 44;
score = "55";
/*type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id:number
}

let alexis: User | Admin = {name: "Alexis", id:334}

alexis = {username: "pascazio", id:334}


/*function getDbId(id: number | string ) {
    console.log("DB id is: ${id}");
}*/
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id == "string") {
        id.toLowerCase();
    }
}
// array
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = ["1", "2", "3", 4, true];
/*let seatAllotment = "aisle" | "middle" | "window"

seatAllotment = "aisle"
seatAllotment = "crew"*/
