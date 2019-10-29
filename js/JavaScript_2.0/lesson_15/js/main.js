// Task 1. Создайте новый Set. Добавьте в него через add элементы. Выведите в консоль.
let a = new Set();
a.add('Set');
a.add(25);
a.add(6);
a.add('Hello');

console.log(a);


// Task 2. Создайте input куда пользователь может вводить элементы и кнопку. По нажатию на кнопку значение из input
// добавляется в set. Set выводится в консоль.

let input2 = document.querySelector('.u2-input');
let set2 = new Set();
document.querySelector('.u2-btn').onclick = () => {
    set2.add(input2.value);
    console.log(set2);
    input2.value = '';
};

// Task 3. Добавьте к предыдущему заданию кнопку удалить. При нажатии кнопки читаете содержимое input и удаляете его из
// Set. Если input пустой - выводите ошибку (alert).

let input3 = document.querySelector('.u3-input');
document.querySelector('.u3-btn').onclick = () => {
    set2.delete(input3.value);
    if (input3.value === '') {
        alert('Строка пуста!!!');
    }
    input3.value = '';
    console.log(set2);
};

// Task 4. Добавьте к предыдущему заданию кнопку проверить. При нажатии кнопки читаете содержимое input и проверяет его
// наличие в Set. Функция должна возвращать true или false.Действия запускаются при вызове функции t4.
let input4 = document.querySelector('.u4-input');
document.querySelector('.u4-btn').onclick = function () {
    t4(set2, input4.value)
    input4.value = '';
};

function t4(set, input) {

    if (set.has(input)) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

// Task 5. Выведите размер полученного в результате предыдущих операций Set. Выводить на страницу и возвращать в функции.
// Действия должны запускаться при вызове функции t5.

document.querySelector('.u5-btn').onclick = function () {
    t5(set2);
};

function t5(set) {
    document.querySelector('.out-5').innerHTML = `Размер полученного в результате предыдущих операций Set равна: ${set.size}`;
}

// Task 6. Есть массив a6 = [3,4,3,2,4,56,1,23]. Напишите функцию, которая возвращает и выводит на страницу
// количество уникальных элементов в массиве a6. Решение должно использовать set. Действия должны запускаться при
// вызове функции t6.

a6 = [3, 4, 3, 2, 4, 56, 1, 23];
let out6 = document.querySelector('.out-6');
document.querySelector('.u6-btn').onclick = function () {
    t6(a6, out6);
};

function t6(arr, out) {
    let str = '';
    let variable = new Set(arr);
    for (let x of variable) {
        str += x + ' ';
    }
    return out.innerHTML = str;
}


// Task 7. Создайте input куда пользователь может ввести пароль и кнопку - проверить. Проверяйте с помощью Set, чтобы
// пользователь использовал в пароле только не повторяющиеся символы. Логика решения - получаем строку из input - и
// преобразуем ее в массив (arr.split(')). Считаем длину массива. На основе массива создаем  Set. Сравниваем размеры массива и Set.

let input7 = document.querySelector('.u7-input');

document.querySelector('.u7-btn').onclick = () => {
    let str = input7.value;
    let newStr = str.split('');
    console.log(newStr);
    let set = new Set(newStr);
    console.log(set);
    if (newStr.length === set.size) {
        console.log('work');
    } else {
        console.log('dont work');
    }
};


//Task 8. Создайте набор set a8. Напишите функцию, которая принимает set в качестве параметра и четные элементы из набора
// добавляет в массив a8_res. После завершения операции - выводит a8_res на страницу. Запуск - по нажатию кнопки b-8.

let a8 = new Set([1, 9, 98, 56, 'hello', 'world']);

let out8 = document.querySelector('.out-8');
let a8_res = '';

function f(set, out) {
    for (let x of set) {
        if (x % 2 == 0) {
            a8_res += x + ' ';
        }
    }
    return out.innerHTML += a8_res;
}

document.querySelector('.b-8').onclick = function () {
    f(a8, out8);
};


// Task 9. Создайте набор set a9. Напишите функцию, которая принимает set в качестве параметра присваивает a9_res так, 
// что порядок элементов в a9_res обратный a9. Выведите a9_res на страницу. Действия должны запускаться при вызове функции t9.

let a9 = new Set([1, 2, 3, 4, 5]);

function t9(set) {
    let setArr = Array.from(set);
    let a9_res = setArr.reverse();
    document.querySelector('.out-9').innerHTML = a9_res;
}

t9(a9);


// Task 11.Эмулируем работу set. Пользователь может ввести значение в i-11. Напишите функцию, которая по нажатию b-11 
// запускает функцию t11. Функция получает введенное значение и добавляет его в массив a11_res. Добавление происхдит 
// если такого значения в массиве нет. После каждой операции выводите a11_res на страницу.

let input11 = document.querySelector('.i-11');
let a11 = [];
let a11_res = '';
document.querySelector('.b-11').onclick = t11;
function t11 () {
    if (a11.indexOf(input11.value) == -1) {
        a11.push(input11.value);
        console.log(a11);
        a11_res += a11 + '<br>';
    } else {
        console.log('dont work');
    }

    document.querySelector('.out-11').innerHTML = a11_res;
    input11.value = '';
}

// Task 12. Напишите функцию, которая принимает в качестве параметра набор set и преобразует его в массив, результат
// выводит на страницу и присваивает a12_res. Действия должны запускаться при вызове функции t12.
let a12 = new Set([11, 22, 33, 44, 55]);
function t12(set) {
    let a12_res = Array.from(set);
    for (let i = 0; i < a12_res.length; i++) {
        document.querySelector('.out-12').innerHTML += a12_res[i] + ' ';
    }
}

t12(a12);

// Task 13. Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как
// второй параметр. Действия должны запускаться при вызове функции t13.

let out13 = document.querySelector('.out-13');
let a13 = new Set(['Hello', 12, 'js', false, 55, 65, 2, 'world']); 

function t13(set, elem) {
    for (let item of set) {
        elem.innerHTML += item + ' ';
    }
}

t13(a13, out13);

// Task 14. Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как
// второй параметр. Третий параметр - разделитель. Действия должны запускаться при вызове функции t14. Т.е. ввели в
// качестве разделителя дефис и вывод на страницу 1-2-3- (без пробелов).

let out14 = document.querySelector('.out-14');
function t14(set, elem, separator) {
    for (let item of set) {
        elem.innerHTML += item + separator;
    }
}

t14(a13, out14, '-');

// Task 15. Дан массив arr15 = [ [1,0], [1,0], [2,0] ] . Добавьте вложенные в него массивы в набор. Изучите результат.
// Результирующий набор a15_res выведите на страницу. Добавление сделайте через цикл. Действия должны запускаться при 
// вызове функции t15. Результат операции запишите в a15_res.

let arr15 = [[1, 0], [1, 0], [2, 0]];
let a15_res = new Set(arr15);

function t15(set) {
    let str = '';
    for (let item of set) {
        str += '[' + item + '] ';
    }
    document.querySelector('.out-15').innerHTML = str;
}

t15(a15_res);


// Task 16. Дан массив a16 = [ { Ivan: 1 }, { Ivan: 1 }, { Ivan: 2 }, { Serg: 0 } ]. Добавьте вложенные в него массивы 
// в набор. Изучите результат. Результирующий набор выведите в консоль. Добавление сделайте через цикл. Действия должны
// запускаться при вызове функции t15. Результат операции запишите в a16_res.

let a16 = [
    {Ivan: 1},
    {Ivan: 1}, 
    {Ivan: 2}, 
    {Serg: 0}
    ];
let set16 = new Set(a16);
let a16_res = function t16() {
    for (let item of set16) {
        console.log(item);
    }
};

a16_res();

// Task 17. Создайте строку u17 = 'Primer'. Создайте новый набор с Set(u17). Выведите в консоль. Изучите результат. 
// Действия должны запускаться при вызове функции t17.

let u17 = 'Primer';

function t17() {
    let set17 = new Set(u17);
    console.log(set17);
    for (let item of set17) {
        console.log(item);
    }
}

t17();

// Task 18. Переберите массив a18 = [5, 7, 9, 11, 13, 15], c помощью цикла for of. Выведите на страницу в виде ключ -
// значение (разделены дефисом без пробелов). В конце строки - br. Результирующую строку присвойте a18_res. Действия
// должны запускаться при вызове функции t18.

let out18 = document.querySelector('.out-18');
let a18 = [5, 7, 9, 11, 13, 15];
function t18() {
    let a18_res = '';
    let count = 0;
    for (let item of a18) {
        a18_res += count + '-' + item + '<br>';
        count++;
    }
    out18.innerHTML = a18_res;
}

t18();

// Task 19. Создайте набор a19 и добавьте в него значения. Выведите на страницу каждый второй по счету элемент набора.
// Действия должны запускаться при вызове функции t19.
let a19 = new Set([24, 35, 3, 5, 8, 25, 99, 62, 1, 14]);

function t19(set) {
    let count = 0;
    let str = '';
    for (let item of set) {
        if (count % 2 == 0) {
            str += item + ' ';
        }
        count++;
        document.querySelector('.out-19').innerHTML = str;
    }
}

t19(a19);

// Task 20. Создайте функцию, которая принимает массив и четные по индексу элементы добавляет в набор s20_res в
// нечетные в набор s21_res. Выводите данные наборы в консоль.
let a20 = [24, 35, 3, 5, 8, 25, 99, 62, 1, 14];
function t20(arr) {
    let s20_res = new Set();
    let s21_res = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            s20_res.add(arr[i]);
        } else {
            s21_res.add(arr[i]);
        }
    }
    console.log(s20_res);
    console.log(s21_res);
}

t20(a20);
