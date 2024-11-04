"use strict";


let a;
let random = Math.floor(Math.random() * 101);

while (a !== random) { 
     a =parseInt(window.prompt('数当てゲーム!数字を入力してください。'));
     console.log(random);
    if (a === random) {
        window.alert('あたり!');
    }else if (a < random) {
        window.alert('残念！もっと大きいです。');
    }else if (a > random) {
        window.alert('残念！もっと小さいです。');
    }
}
