"use strict";

let count = 0;

document.getElementById('add').addEventListener('click', increment);
document.getElementById('sub').addEventListener('click', decrement);

function increment() {
    count++;
    document.getElementById('countNum').innerText = count;
}

function decrement() {
    count--;
    document.getElementById('countNum').innerText = count;
}
