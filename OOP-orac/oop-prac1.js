"use strict";
// Personクラスの定義
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`私は${this.name}です。${this.age}歳です。`);
    }
}

const person1 = new Person('Taro', 20);
const person2 = new Person('Hanako', 30);


person1.introduce();
person2.introduce();
