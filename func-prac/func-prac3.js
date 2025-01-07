"use strict";

function f(a){
    if (a === 0 || a === 1){
        return 1;
    }
    return a * f(a -1);
}

let num = Math.floor(Math.random() * (20-3+1)+3);
let sum = f(num);
console.log(`1～${num}までの階乗：${sum}`);
