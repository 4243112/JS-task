"use strict";

function f(num){
    if (num === 0 || num === 1){
        return 1;
    }
    return num * f(num -1);
}

let random = Math.floor(Math.random() * (20-3+1)+3);
let sum = f(random);
console.log(`1～${random}までの階階乗：${sum}`);
