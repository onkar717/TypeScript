"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeeting = " Helllo Hitesh";
var mynum = 6;
greeeting.toUpperCase();
console.log(mynum);
console.log(greeeting);
//number
var userId = 334455;
userId.toFixed();
//boolean 
var isLoggedIn = false;
// Any 
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
console.log(hero);
// function 
function addTwo(num) {
    // num.toUpperCase();
    return num + 2;
}
function getupper(val) {
    return val.toUpperCase();
}
function singupuser(name, email, passoword, ispaid) { }
var loginUser = function (name, emial, ispaid) { };
function sumtwo(num) {
    // return "hello"
    return num + 2;
}
var result = sumtwo(5);
function getvalue(Myval) {
    if (Myval > 5) {
        return true;
    }
    else {
        return "200 : ok";
    }
}
var gethello = function (s) {
    return " hello";
};
addTwo(5);
getupper("hitesh");
singupuser("Onkar", "gmail", 3, true);
loginUser("hi", "onkar", true);
// const heros = ["Thor","Spiderman","ironman"];
var heros = [1, 2, 3];
heros.map(function (her) {
    return "Hero is ".concat(her);
});
