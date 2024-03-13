interface User {
    email:string,
    userId: number
    googleId?: string
    //startTrail: () => string
    startTrail(): (string | number)
    getCoupon(couponame : string,value:number): number //number = return type in questo caso
}                                                                                                                                                                              
interface User {
    githubToken: string
}

interface Admin extends User {
role: "admin" | "ta" | "learner"
}

const alexis: Admin = {
email: "alexispascazio03@gmail.com",
userId: 2211,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "trial has started"
},
getCoupon:(name: "alexis10",off: 10) => {
    return 10 //ten is the scount you obtain
}
}
alexis.email = "alexis03.pascazio@gmail.com"
