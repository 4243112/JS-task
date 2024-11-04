"use strict";

let a = 30;
let d = 0;

while (a >= 0) {
    let b = Math.floor(Math.random() * (6 + 1 - 1) + 1);
    console.log(`サイコロの出目は${b}です。${b}マス進みます。`);
    let c = Math.floor(Math.random() * 4);
    // let d = 0;
    d = d + b;
    a = a - b;
    if (c === 0) {
        b = Math.floor(Math.random() * (6 + 1 - 1) + 1);
        console.log(`進むマスに停まった！${b}マス進む！`);
        d = d + b;
        a = a - b;
    }

    console.log(`現在${d}マス進んでいます。あと${a}マスでゴールです！`);
}

console.log('ゴールしました！');