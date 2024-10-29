"use strict";

let random = Math.floor(Math.random() * 5)
if(random === 0){
    window.alert(`あなたの数値は${random}でした。大吉です！`);
}else if(random === 1){
    window.alert(`あなたの数値は${random}でした。中吉です！`);
}else if(random === 2){
    window.alert(`あなたの数値は${random}でした。吉です！`);
}else if(random === 3){
    window.alert(`あなたの数値は${random}でした。凶です！`);
}else if(random === 4){
    window.alert(`あなたの数値は${random}でした。大凶です！`)
}