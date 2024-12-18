"use strict";

class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
}

const rectangle = new Rectangle(5, 10);
const square = new Square(10);


console.log(`縦5と横10の面積：${rectangle.area()}`);  
console.log(`縦10と横10の面積：${square.area()}`);     
