"use strict";
function getFortune() {
    const nickname = document.getElementById('nickname').value;
    const resultDiv = document.getElementById('result');

    const fortunes = [
        { text: '大吉', img: 'images/daikichi.png' },
        { text: '吉', img: 'images/kichi.png' },
        { text: '中吉', img: 'images/chukichi.png' },
        { text: '小吉', img: 'images/shokichi.png' },
        { text: '末吉', img: 'images/suekichi.png' },
        { text: '凶', img: 'images/kyou.png' },
        { text: '大凶', img: 'images/daikyou.png' },
    ];
    

    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const selectedFortune = fortunes[randomIndex];

    resultDiv.innerHTML = `<h2>${nickname}さんの運勢は${selectedFortune.text}です！</h2><img src="${selectedFortune.img}" alt="${selectedFortune.text}">`;

    document.getElementById('nickname').value = '';
}
