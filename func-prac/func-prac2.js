"use strict";

function f(num){
    if (num === 0){
        return 0;
    }
    return num + f(num -1);
}

let random = Math.floor(Math.random() * (10-3+1)+3);
let sum = f(random);
console.log(`1～${random}までの総和：${sum}`);


