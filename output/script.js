"use strict";
//My first typescript code
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 4));
//Explicit and union types
// let a: string[] = [];
// a.push("Fahim");
//a.push(1) it will show error
let a = [];
//normal variable
let x;
//Object
let c;
c = {
    name: "sumit",
    age: 32,
    adult: true,
};
let y;
y = [1, 2, 3, 4];
console.log(y);
//Dynamic type
let f = [];
f.push("Bangladesh");
f.push("Lost to pakistan by 3-0");
f.push(3);
f.push(false);
console.log(f);
