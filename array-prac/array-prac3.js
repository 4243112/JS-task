"use strict";

function room() {
    let a = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
     while (true) {
        let b = prompt('会員IDを入力してください');
        if (b === '-1'){
            break;
        }

        b = parseInt(b);
        let c = b % 10;
        let d = c;
        let e = false;
        while(a[c] !== -1) {
            c = (c + 1) % 10;
            if (c === d){
                e = true;
                break;
            }
        }
        if (e) {
            alert('満室です');
            break;
        }else{
            a[c] = b;
            alert(`会員ID：${b}は、${c}号室に割り当てました。`);

        }
     }
}

room();