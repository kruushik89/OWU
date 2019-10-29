// function hello (name) {
//     return 'Helo' + name;
// }
//
// let helloName = hello(' Sashko');
// console.log(helloName);
// console.log(hello(' Vasya'));

// function hello(name) {
//     return `Hello ${name}`;
// }
//         console.log(hello('Vasya'));


// function minNumber(a, b, c) {
//     let min = Math.min(a, b, c);
//     let max = Math.max(a, b, c);
//     console.log(max);
//     return min;
// }
//
// let minRes = minNumber(15, 25, 3);
// console.log(minRes);

// function minNumber() {
//     console.log(arguments);
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i=0; arguments.length > i; i++) {
//         if (min > arguments[i]){
//             min = arguments[i];
//         }
//         if (max < arguments[i]){
//             max = arguments;
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// let res = minNumber(52, 23, 65, 154, 263);
// console.log(res);

let arr = [225, 25, 35, 46];

function minNumber(arr) {
    let min = Math.min(...arr);

    return min;
}

let minResul = minNumber(arr);
console.log(minResul);