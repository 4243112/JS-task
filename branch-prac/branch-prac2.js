let a = parseInt(window.prompt('目的地の駅を入力してください。\n1:A駅\n2:B駅\n3:C駅'))
if (a === 1){
    window.alert('快速電車が停まります。');
}else if(a === 2){
    window.alert('快速電車と急速電車が停まります。');
}else if (a === 3){
    window.alert('特急電車が停まります。');
}