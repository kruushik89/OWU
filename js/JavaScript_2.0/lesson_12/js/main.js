// Task 1. Создайте массив a. Выведите его на страницу. Элементы внутри вложенных массивов разделяйте пробелом, между
// вложенными массивами - перенос строки!

const a = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [4, 5, 6],
    ['d', 'e', 'f'],
    [7, 8, 9],
];
let out1 = document.querySelector('.out-1');
let str1 = '';

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
        str1 += a[i][j] + ' ';
    }
    str1 += '<br>';
}
out1.innerHTML = str1;

// Task .2 Выведите на страницу символ 3 из массива a.
document.querySelector('.out-2').innerHTML = a[0][2];

// Task 3. Выведите на страницу символ e из массива a.
document.querySelector('.out-3').innerHTML = a[3][1];

// Task 4. Выведите на страницу содержимое третьего вложенного массива в массиве a.
let str4 = '';
for (let i = 0; i < a.length; i++) {
    str4 = a[2];
}
document.querySelector('.out-4').innerHTML = str4;

// Task 5. Выведите на страницу только первые элементы вложенных массивов массива a.
let str5 = '';
for (let i = 0; i < a.length; i++) {
    str5 += a[i][0] + ' ';
}
document.querySelector('.out-5').innerHTML = str5;

// Task 6. Выведите на страницу только четные вложенные массивы массива a.
let str6 = '';
for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
        if (k % 2 == 0) {
            str6 += a[i][k] + ' ';
        }
    }
    str6 += '<br>'
}

document.querySelector('.out-6').innerHTML = str6;

// Task 7. Выведите на страницу только числа из массива a.
let str7 = '';
for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
        if (typeof a[i][k] === "number") {
            str7 += a[i][k] + ' ';
        }
    }
    str7 += '<br>';
}
document.querySelector('.out-7').innerHTML = str7;

// Task 8. Выведите на страницу длины вложенных массивов в массив a.
let str8 = '';
for (let i = 0; i < a.length; i++) {
    str8 = a[i].length;
}

document.querySelector('.out-8').innerHTML = `На странице длины вложенных массивов в массив a равна: ${str8}`;

// Task 9. Выведите на страницу элементы массива a в обратном порядке!
let str9 = '';

for (let i = a.length - 1; i > 0; i--) {
    for (let k = a[i].length - 1; k >= 0; k--) {
        str9 += a[i][k] + ' ';
    }
    str9 += ' - ';
}

document.querySelector('.out-9').innerHTML = str9;

// Task 10. Выведите на страницу элементы массива a, причем вложенные массивы должны выводиться в обратном порядке!
let str10 = '';
for (let i = 0; i < a.length; i++) {
    for (let k = a[i].length - 1; k >= 0; k--) {
        str10 += a[i][k] + ' ';
    }
    str10 += '<br>';
}

document.querySelector('.out-10').innerHTML = str10;

// Task 11. Создайте массив шахматную доску. Белые - 0, черные - 1. Выведите на страницу.
// let chess = ['white', 'black'];


// Task 12. Создайте массив шахматную доску. Белые - 0, черные - 1. Напишите функцию, которая выводит данный массив в
// виде шахматной доски - блоки div в нужном порядке, закранные цветом.


// Task 13. Создайте массив, который подходит под следующие условия:
// b[0][1] == 4;
// b[3][2] == 5;
console.log('----- Task13 -----');

const b = [[1, 4, 8], ['a', 'b', 'c'], ['d', 'e', 'f'], [10, 9, 5]];
console.log(b[0][1]);
console.log(b[3][2]);

// Task 14. Создайте массив, который подходит под следующие условия: <br>
// c[0][1] == 4; <br>
// c[2] == 5;
console.log('----- Task14 -----');

const c = [[1, 4, 8], 0, 5];
console.log(b[0][1]);
console.log(c[2]);


// Task 15. Создайте массив, который подходит под следующие условия:
// d[0][1] == 4;
// d[2][3] == 5
// d[6] = [4,5]
console.log('----- Task15 -----');

const d = [[1, 4], 2, ['js', false, 7, 5], true, 23, 55, [4, 5]];
console.log(d[0][1]);
console.log(d[2][3]);
console.log(d[6]);

// Task 16. Создайте массив, который подходит под следующие условия:
//     e[0][1] == 4;
//     e[2][3] == 5
//     e[6][0][1] = 6;
console.log('----- Task16 -----');

const e = [[1, 4], 2, ['js', false, 7, 5], true, 23, 55, [[1, 6], 100]];
console.log(e[0][1]);
console.log(e[2][3]);
console.log(e[6][0][1]);

// Task 17. Создайте массив, который подходит под следующие условия:
//     f[0][1][3] == 4;
//     f[2][1][1] == 5
//     f[6][0][1] = 6;
console.log('----- Task17 -----');
const f = [[1, ['world', 8, 7, 4]], 2, ['js', ['hello', 5], 7], true, 23, 55, [[1, 6], 100]];

console.log(f[0][1][3]);
console.log(f[2][1][1]);
console.log(f[6][0][1]);

// Task 18. Создайте массив, который подходит под следующие условия:
//     g[0][1][3] == 4;
//     g[2][1][3] == 5
//     g[6][0][1] = 6;
//     g[3] == g[5];
console.log('----- Task18 -----');

const g = [[1, ['world', 8, 7, 4]], 2, ['js', ['hello', 7, 6, 5]], true, 23, 55, [[1, 6], 100]];
g[3] = g[5];
console.log(g[0][1][3]);
console.log(g[2][1][3]);
console.log(g[6][0][1]);
console.log(g[3]);

// Task 19. Выведите на страницу сумму элементов массива a (только чисел).
let sum19 = 0;
for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
        if (typeof a[i][k] === "number") {
            sum19 += a[i][k];
        }
    }
}

document.querySelector('.out-19').innerHTML = `Сумма элементов массива a равна: ${sum19}`;

// Task 20. Создайте массив, который эмулирует доску для крестиков - ноликов, напишите все возможные выиграшные
// let cell = document.querySelectorAll('.cell');

// комбинации, т.е. a[0][0], a[0][1], a[0][2] - занята первая линия, и т.д.
let cellIn = document.querySelectorAll('.cell-in');
let btn = document.querySelector('.btn-cell');
let out20 = document.querySelector('.out-20');


// for (let i = 0; i < cellIn.length; i++) {
//     cellIn[i].onclick = function () {
//         this.classList.add('bg-red');
//         this.innerHTML = 'X';
//     };
// }

// let comb1 = [[0][0], [0][1], [0][2]];
// let comb2 = [[1][0], [1][1], [1][2]];
// let comb3 = [[2][0], [2][1], [2][2]];
// let comb4 = [[0][0], [1][0], [2][0]];
// let comb5 = [[0][1], [1][1], [2][1]];
// let comb6 = [[0][2], [1][2], [2][2]];
// let comb7 = [[0][0], [1][1], [2][2]];
// let comb8 = [[2][2], [1][1],[0][0]];
// let comb9 = [[0][2], [1][1], [2][0]];
// let comb10 = [[2][0], [1][1], [0][2]];

// function game() {
//     for (let i = 0; i < cell.length; i++) {
//         for (let k = 0; k < cellIn.length; k++) {
//
//         }
//     }
// }
// game();


// Task 20.1.

// let arr20 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//
// let comb1 = [[0][0], [0][1], [0][2]];
// let comb2 = [[1][0], [1][1], [1][2]];
// let comb3 = [[2][0], [2][1], [2][2]];
// let comb4 = [[0][0], [1][0], [2][0]];
// let comb5 = [[0][1], [1][1], [2][1]];
// let comb6 = [[0][2], [1][2], [2][2]];
// let comb7 = [[0][0], [1][1], [2][2]];
// let comb8 = [[2][2], [1][1],[0][0]];
// let comb9 = [[0][2], [1][1], [2][0]];
// let comb10 = [[2][0], [1][1], [0][2]];
//
// for (let i = 0; i < arr20.length; i++) {
//     for (let k = 0; k < arr20[i].length; k++) {
//         if (comb1) {
//             console.log('Win');
//         } else if (comb2) {
//             console.log('Win 2');
//         }
//     }
// }




