let score : number | string = 33;

score = 44;
score = "Onkar";
// score = true;



type user = {
    name: string ,
    id: number
}

type Admin = {
    username: string ,
    id: number
}

let hitesh: user | Admin = {name:"onkar" , id : 9696};

hitesh = {username:"omi" , id: 334}


// for function

getdata(3);
getdata("3");
function getdata(id : number | string){
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}

// for Array

const data : number [] = [12,3,4,5];
const data2 : string [] = ["1","2","3"];
const data3 : (string | number | boolean) [] = [1,2,3,"6",true,false];

