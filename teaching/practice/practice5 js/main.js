// function counter() {
//     let count = 0;
//     return function() {
//         return count++;
//     }
// }
//
// let myCounter = counter();
// myCounter();
// myCounter();
// myCounter();
// console.log(myCounter());

// function multiply(a) {
//     return function (b) {
//         return a * b;
//     }
// }
// let multiplyByTwo = multiply(2);
// console.log(multiplyByTwo(6));

// --------------------------------------------------------
// --------------------------------------------------------



// const user = (function () {
//     let name = 'Kolyan';
//
//     function getName() {
//         return name;
//     }
//
//     function setName(value) {
//         name = value;
//     }
//
//     return {
//         getName: getName,
//         setName: setName
//     };
// })();
//
// console.log(user.getName());
// user.setName('Vasyl');
// console.log(user.getName());

// -------------------------------------
// -------------------------------------


const xxx = function () {
    let number = 0;

    function increment() {
        number++;
    }

    function decrement() {
        number--;
    }

    function getNum() {
        return number;
    }

    return {
        increment: increment,
        decrement: decrement,
        getNum: getNum
    }
};

let a = xxx();
console.log(a.getNum());



console.log(xxx.getNum());

xxx.increment();
console.log(xxx.getNum());

xxx.decrement();
console.log(xxx.getNum());














