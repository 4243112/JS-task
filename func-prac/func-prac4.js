"use strict";


function number(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function TotalPrice() {
    let num = number(1, 5);
    console.log(`商品の数: ${num}`);

    let goods = [];
    for (let i = 0; i < num; i++) {
        let price = number(1000, 5000);
        let priceWith = Math.round(price * 1.1) 
        goods.push(priceWith);
    }

    let total = 0;
    goods.forEach((price, index) => {
        console.log(`商品${index + 1}の税込価格: ${price.toFixed(2)}円(税込)`);
        total += price;
    });

    console.log(`商品の合計金額: ${total.toFixed(2)}円(税込)`);
}

TotalPrice();

