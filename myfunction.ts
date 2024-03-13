 function addTwo(num: number) {
    //return num + 2
    return "hello"
}

function getUpper(val: string){
    return val.toUpperCase()
}
function singUpUser(name:string,lastname:string,email:string,password:string,isPaid:boolean){}

let loginUser = (name:string,lastname:string,email:string,isPaid:boolean = false) => {}

let myValue = addTwo(5)
getUpper("Alexis")

singUpUser("Alexis","Pascazio","alexis03.pascazio@gmail.com","Alexis23045",false)
loginUser("Alexis","Pascazio","alexis03.pascazio@gmail.com",true)

/*function getValue(myVal: number):boolean{
    if(myVal > 5) {
        return true
    }

return "200 OK"

}*/


const getHello= (s: string):string => {
return ""
}


const heros = ["thor","spiderman","ironman"]

heros.map(hero => {
    return 2
})

function consoloeError(errmsg:string):void{
    console.log(errmsg);
    
}

function handleError(errmsg: string):never {
    throw new consoloeError(errmsg);
    
}

export{}