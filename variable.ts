let greeeting: string = " Helllo Hitesh";

let mynum = 6;

greeeting.toUpperCase()

console.log(mynum);
console.log(greeeting);

//number
let userId: number = 334455
userId.toFixed()

//boolean 
let isLoggedIn:boolean  = false


// Any 

let hero : string;
 
function getHero() {
    return "thor";
}

hero = getHero();
console.log(hero);


// function 

function addTwo(num: number){
    // num.toUpperCase();
    return num + 2;
}

function getupper(val: string){
    return val.toUpperCase()
}


function singupuser(name : string , email : string , passoword: number , ispaid: boolean){}

let loginUser = (name: string , emial: string , ispaid: boolean) => {}

function sumtwo(num : number): number{
    // return "hello"
    return num + 2;
}

let result = sumtwo(5);

function getvalue(Myval : number){
    if (Myval > 5) {
        return true;
    }
    else{
        return "200 : ok"
    }
}

const gethello = (s:string):string => {
     return " hello";
}

addTwo(5);
getupper("hitesh");
singupuser("Onkar","gmail",3,true);
loginUser("hi", "onkar" , true);



const heros = ["Thor","Spiderman","ironman"];
// const heros = [1,2,3];

heros.map((her) => {
    return `Hero is ${her}`;
})


function consoleError() {
    
}


export {};