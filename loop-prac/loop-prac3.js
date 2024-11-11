"use strict";

let a = 100;
let b;
let c = 0;



while(a >= 0) {
    b = Math.floor(Math.random() * (30 + 1 - 1) + 1);
    a = a - b;
    console.log(`モンスターに${b}のダメージ!`);
    c = c + 1;
}

console.log(`${c}回でモンスターを倒した`);
