"use strict";

function FizzBuzz(nam){
    if(nam % 3 === 0 && nam % 5 === 0 ){
        return 'fizzbuzz';
    } if(nam % 3 === 0){
        return 'fizz';
    } if(nam % 5 === 0){
        return 'buzz';
    } else {
        return nam
    }
}
        


for (let i = 1; i <= 30; i++){
    console.log(FizzBuzz(i));
}
