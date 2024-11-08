"use strict";


let a = ["商品A", "商品B", "商品C", "商品D", "商品E"];
let b = [0,0,0,0,0];
for (let i = 0; i < 5; i++) {
    b.push(0);
}
console.log(b);
while (true) {
    let c = window.prompt('投票を入力してください。\n（0: 商品A ～ 4: 商品E、終了する場合は -1 を入力）');
    if (parseInt(c) === -1) {
        break;
    }
    if(c >= 0 && c <= 4) {
        b[c]++;
    } else {
        window.alert('0～4の範囲で入力してください。');
    }

}
let d = 0;
let e = 0;
for (let i = 0; i < b.length; i++) {
    if (a[i] > d) {
        d = b[i];
        e = i;
    }
}
window.alert(`最も人気があった商品は${a[e]}です。`);