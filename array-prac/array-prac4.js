"use strict";

let a = ["商品A", "商品B", "商品C", "商品D", "商品E"];
let b = [0, 0, 0, 0, 0];

while (true) {
    let c = window.prompt('投票を入力してください。\n（0: 商品A ～ 4: 商品E、終了する場合は -1 を入力）');
    if (parseInt(c) === -1) {
        break;
    }
    if (c >= 0 && c <= 4) {
        b[c]++;
    } else {
        window.alert('0～4の範囲で入力してください。');
    }
}

let maxVotes = 0;
let maxIndex = 0;
for (let i = 0; i < b.length; i++) {
    if (b[i] > maxVotes) {
        maxVotes = b[i];
        maxIndex = i;
    }
}

window.alert(`最も人気があった商品は${a[maxIndex]}です。`);
