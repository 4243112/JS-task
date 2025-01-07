"use strict";


class BankAccount {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${this.name}が${amount}円預金しました。\n残高:${this.balance}円`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.error(`残高が不足しています。\n残高:${this.balance}`);
        } else {
            this.balance -= amount;
            console.log(`${this.name}が${amount}円引き出しました。\n残高:${this.balance}`);
        }
    }

    checkBalance() {
        console.log(`現在の残高は${this.balance}円です。`);
    }
}

const account = new BankAccount('Taro');


while (true) {
    let action = parseInt(window.prompt('残高確認:1, 預金:2, 引き出し:3, 終了:0'));

    if (action === 1) {
        account.checkBalance();
    } else if (action === 2) {
        let amount = parseInt(window.prompt('預金額を入力してください:', '0'));
        if (!isNaN(amount) && amount > 0) {
            account.deposit(amount);
        } else {
            console.error('有効な金額を入力してください。');
        }
    } else if (action === 3) {
        let amount = parseInt(window.prompt('引き出し額を入力してください:', '0'));
        if (!isNaN(amount) && amount > 0) {
            account.withdraw(amount);
        } else {
            console.error('有効な金額を入力してください。');
        }
    } else if (action === 0) {
        console.log('操作を終了します。');
        break;
    } else {
        console.error('無効な選択です。');
    }
}
