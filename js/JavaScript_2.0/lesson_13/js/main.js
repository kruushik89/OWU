// Task 1. Выведите массив a1 на страницу.
let a1 = {
    3: 'hello',
    'one': 'hi'
};

let str1 = '';
for (let key in a1) {
    str1 += `${key}: ${a1[key]} <br>`;
}

document.querySelector('.out-1').innerHTML = str1;

// Task 2. Выведите на страницу элементы из масиива a2 у которых символов больше 4.
let a2 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};
let str2 = '';

for (let key in a2) {
    if (a2[key].length > 4) {
        str2 += a2[key] + '<br>';
    }
}

document.querySelector('.out-2').innerHTML = str2;

// Task 3. Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.
let a3 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};

let str3 = '';

for (let key in a3) {
    if (key.length > 4) {
        str3 += a3[key];
    }
}

document.querySelector('.out-3').innerHTML = str3;

// Task 4. Выведите на страницу элементы из масиива a4 у которых значение - число.
let a4 = {
    3: 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};
let str4 = '';

for (let key in a4) {
    if (typeof a4[key] === "number") {
        str4 += a4[key] + '<br>';
    }
}

document.querySelector('.out-4').innerHTML = str4;

// Task 5. Дан ассоциативный массив a5. Найдите сумму элементов находящихся в нем.
let a5 = {
    a: 7,
    z: 4,
    45: 12,
    f: 6
};

let sum5 = 0;

for (let key in a5) {
    sum5 += a5[key];
}

document.querySelector('.out-5').innerHTML = `Сумма элементов находящихся в массиве а5 равна: ${sum5}!!!`;

// Task 6. Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height и значения любого
// персонажа. Выведите массив на страницу.
let a6 = {
    'name': 'Ryan',
    'age': 35,
    'sex': true,
    'height': 175,
};
let str6 = '';
for (let key in a6) {
    str6 += `${key}: ${a6[key]} <br>`;
}

document.querySelector('.out-6').innerHTML = str6;

// Task 7. Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. При нажатии кнопки
// добавляйте в массив новое значение с соответствующим ключем. Выводите массив на страницу.
let btn7 = document.querySelector('.btn-7');
let a7 = {};
btn7.onclick = function () {
    str7 = '';
    let inputKey7 = document.querySelector('.u7-key_input').value;
    let inputValue7 = document.querySelector('.u7-value_input').value;
    a7[inputKey7] = inputValue7;
    console.log(a7);
    for (let key in a7) {
        str7 += `${key}: ${a7[key]} <br>`;
    }
    document.querySelector('.out-7').innerHTML = `${str7}`;
};

// Task 8.Добавьте к предыдущей задачи input.u8-key__input и кнопку. При нажатии кнопки - удаляйте значение с
// соответствующим ключем. Выводите массив на страницу.
document.querySelector('.btn-8').onclick = () => {
    str8 = '';
    let inputKey8 = document.querySelector('.u8-key_input').value;
    delete a7[inputKey8];
    for (let key in a7) {
        str8 += `${key}: ${a7[key]} <br>`;
    }
    console.log(a7);
    document.querySelector('.out-8').innerHTML = `${str8}`;
};

// Task 9. Добавьте к предыдущей задачи input.u9-delete-value__input и кнопку. При нажатии кнопки - удаляйте записи с
// соответствующим значением. Выводите массив на страницу.
document.querySelector('.btn-9').onclick = () => {
    let str9 = '';
    let inputValue9 = document.querySelector('.u9-value_input').value;
    for (let key in a7) {
        if (inputValue9 === a7[key]) {
            str9 += `${key}: ${a7[key]} <br>`;
        }
    }
    document.querySelector('.out-9').innerHTML = str9;
};

// Task 10. Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. При нажатии кнопки - возвращайте true если 
// такой ключ есть в массиве, и false если нет.

document.querySelector('.btn-10').onclick = () => {
    str10 = '';
    let inputHasKey10 = document.querySelector('.u10-has-key_input').value;
    for (let key in a7) {
        if (inputHasKey10 === key) {
            str10 = true;
        } else {
            str10 = false;
        }
    }
    document.querySelector('.out-10').innerHTML = str10;
};

// Task 11. Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу.
let a11 = {
    "red": ['Академмістечко',
        'Житомирська',
        'Святошин',
        'Нивки',
        'Берестейська',
        'Шулявська',
        'Політех',
        'Вокзальна',
        'Унівеситет',
        'Театральна',
        'Хрещатик',
        'Арсенальна',
        'Дніпро',
        'Гідропарк',
        'Лівобережна',
        'Дарниця',
        'Чернігівська',
        'Лісова'],
    "green": ['Сирець',
        'Дорогожичі',
        'Лукянівська',
        'Золоті ворота',
        'Палац спорту',
        'Кловська',
        'Печерська',
        'Дружба народів',
        'Видубичі',
        'Славутич',
        'Осокорки',
        'Позняки',
        'Харківська',
        'Вирлиця',
        'Бориспільська',
        'Червоний хутір'],
    "blue": ['Героїв Дніпра',
        'Мінська',
        'Оболонь',
        'Почайна',
        'Тараса Шевченка',
        'Контрактова площа',
        'Поштова площа',
        'Майдан незалежності',
        'Площа Льва Толстого',
        'Олімпійська',
        'Палац "Україна"',
        'Либідська',
        'Деміївська',
        'Голосіївська',
        'Васильківська',
        'Виставковий центр',
        'Іподром',
        'Теремки']
};

let str11 = '';
for (let key in a11) {
    str11 += `${key}: ${a11[key]} <br>`
}
document.querySelector('.out-11').innerHTML = str11;

// Task 12. Добавьте к предыдущей задаче select.u12-branch и кнопку. Пользователь может выбрать цвет ветки и нажать
// кнопку, после чего на страницу будут выведены только станции данной ветки.

let option = document.querySelectorAll('option');
let out12 = document.querySelector('.out-12');
let str12 = '';

document.querySelector('.btn-12').onclick = () => {
    let select = document.querySelector('.u12-branch').value;
    console.log(out12);
    for (let key in a11) {
        if (select == 'red') {
            str12 = a11.red + ' ';
            break;
        } else if (select == 'green') {
            str12 = a11.green;
            break;
        } else if (select == 'blue') {
            str12 = a11.blue;
            break;
        }
    }
    out12.innerHTML = str12;
};

// Task 13. Добавьте к предыдущей задаче кнопку button.u13-reverse которая при нажатии выводит станции ветки в обратном
// порядке. Внимание! Все подобные задачи не меняют массив, а меняют только вывод!!!

let str13 = '';
document.querySelector('.u13-reverse').onclick = () => {
    let select = document.querySelector('.u12-branch').value;
    for (let key in a11) {
        if (select == 'red') {
            str13 = a11.red.reverse();
        } else if (select == 'green') {
            str13 = a11.green.reverse();
        } else if (select == 'blue') {
            str13 = a11.blue.reverse();
        }
    }
    out12.innerHTML = str13;
};

// Task 14. Добавьте к предыдущей задаче select.u14-find-station и кнопку. В select - пользователь может выбрать
// станцию, а вы перебирая массив - вывести ветку на которой эта станция находится.

let str14 = '';
let findStation14 = document.querySelector('#u14-find-station');
findStation14.onchange = function () {
    if (findStation14.value === 'red') {
        str14 = ` Эта станция красной ветки!!!`;
    } else if (findStation14.value === 'green') {
        str14 = `Эта станция зелёной ветки!!!`;
    } else if (findStation14.value === 'blue') {
        str14 = `Эта станция синей ветки!!!`;
    } else {
        str14 = 'Выберите станцию!!!';
    }
    document.querySelector('.out-14').innerHTML = str14;
};

// Task 15. Добавьте к предыдущему заданию 2 select где пользователь может выбрать 2 станции, и если они на одной ветке
// - то по нажатию на кнопку будет показано сколько станций между ними (сами станции не включаем. Если это соседние станции - то 0).

document.querySelector('.btn-15').onclick = () => {
    let str15 = '';
    let out15 = document.querySelector('.out-15');
    let select15A = document.querySelector('#select-15-a');
    let select15B = document.querySelector('#select-15-b');
    if (select15A.value == select15B.value && select15B.selectedIndex > select15A.selectedIndex) {
        str15 = `Между станциями: ${(select15B.selectedIndex - select15A.selectedIndex) - 1} станции!!!`;
    } else if (select15A.value == select15B.value && select15B.selectedIndex < select15A.selectedIndex) {
        str15 = `Между станциями: ${(select15A.selectedIndex - select15B.selectedIndex - 1) * 1} станции!!!`;
    } else if (select15A.value == select15B.value && select15B.selectedIndex == select15A.selectedIndex) {
        str15 = `Вы знаходитесь на этой станции!!!`;
    } else {
        str15 = 'Неверный ввод!!!';
    }
    out15.innerHTML = str15;
};

// Task 16. Добавьте 3 radiobutton.u16-radio которые содержат value = red, green, blue - в соотвтествии с цветом веток
// метро. Добавьте пустой select.u16-select. При выборе radio - программа должна в select добавлять option с названиями
// станций метро. Т.е. выбрали radio(value="green") то внутрь select должны быть записаны option со станциями зеленой
// ветки. Выбрали red - select должен быть очищен и добавлены option со станциями красной ветки.
let radio16 = document.querySelectorAll('.u16-radio');
let newSelect = document.querySelector('.new-select');
for (let i = 0; i < radio16.length; i++) {
    let select16 = document.querySelectorAll('.u16-select');
    radio16[i].onchange = function () {
        if (radio16[i].checked) {
            newSelect.innerHTML = select16[i].innerHTML;
        }
    }

}


// Task 19. Создайте ассоциативный массив где ключами являются страны азии, а вложенными массивами - ассоциативный массив
// содержащий название столицы, количество населения, площадь. Выведите его на страницу.

let obj19 = {
    'Китай': {
        'Столица': 'Пекин',
        'Население': 1386000000,
        'Площадь кв.км': 9597000
    },
    'Иран': {
        'Столица': 'Тегеран',
        'Население': 78408412,
        'Площадь кв.км': 967000
    }
};

let str19 = '';
for (let key in obj19) {
    str19 += key + ': ' +  '<br>';
    for (let key2 in obj19[key]) {
        str19 += (`${key2}: ${obj19[key][key2]} <br>`);
    }
    str19 += '<br>';
}
document.querySelector('.out-19').innerHTML = str19;






















