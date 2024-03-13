/*const User = {
    name:"Alexis",
    lastname: "Pascazio",
    email:"alexis03.pascazio@gmail.com",
    isActive:true

}

function creatUser({name:string,isPaid:boolean}) {}

let newUser = {name:"Alexis",isPaid:false,email:"alexis03.pascazio@gmail.com"}

creatUser(newUser)   

function createCourse():{name: string,price:number}{
    return {name: "Angular", price: 300}
}


type User = {
    name: string;
    lastname:string;
    email:string;
    isActive:boolean
}



function createUser (user: User){
return {name:"",lastname:"",email:"",isActive:true}
}


createUser({name:"",lastname:"",email:"",isActive:true})*/


type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number
}

let myUser: User = {
    _id: "Alexis",
    name: "h",
    email:"alexispascazio03@gmail.com",
    isActive:true,
  
}

type cardNumber =  {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}


myUser.email ="alexis03.pascazio@gmail.com"

export{}