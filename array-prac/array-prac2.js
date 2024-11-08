"use strict";



let a = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100+ 1 - 1) + 1);


console.log(a);


let max = -Infinity;
let sum = 0;

for (let i of a) {
  if (i > max) {
    max = i;
  }
  sum += i;
}


let average = sum / a.length;

console.log("最大値:", max);
console.log("合計値:", sum);
console.log("平均値:", average.toFixed(2));
