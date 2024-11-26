"use strict";

function f(a){
    if (a === 0){
        return 0;
    }
    return num + f(a -1);
}

let num = Math.floor(Math.random() * (10-3+1)+3);
let sum = f(num);
console.log(`1～${num}までの総和：${sum}`);


