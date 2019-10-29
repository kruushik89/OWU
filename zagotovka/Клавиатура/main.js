let result = document.querySelector('.result');
let b = document.querySelectorAll('.letter');
let num = document.querySelectorAll('.num');
let caps = document.querySelector('.caps');
let btn = document.querySelector('#btn');
let enter = document.querySelector('.enter');
let backspace = document.querySelector('.backspace');
let i = 0;
for (let key of b) {
    key.onclick = function () {
        result.value += this.innerText;
    }
}
for (let i = 1; i <= 10; i++) {
    num[i].onclick = function () {
        if (i == 10) {
            result.value += 0;
            return true;
        }
        result.value += i;
    }
}
caps.onclick = function () {
    if (i % 2 == 0) {
        for (key of b) {
            key.innerText = key.innerText.toLowerCase();
        }
        i++;
    }
    else {
        for (key of b) {
            key.innerText = key.innerText.toUpperCase();
        }
        i++;
    }
}
enter.onclick = function () {
    result.value += '\n';
}
let chLetter = {
    q: 'й'
    , w: 'ц'
    , e: 'у'
    , r: 'к'
    , t: 'е'
    , y: 'н'
    , u: 'г'
    , i: 'ш'
    , o: 'щ'
    , p: 'з'
    , a: 'ф'
    , s: 'ы'
    , d: 'в'
    , f: 'а'
    , g: 'п'
    , h: 'р'
    , j: 'о'
    , k: 'л'
    , l: 'д'
    , z: 'я'
    , x: 'ч'
    , c: 'с'
    , v: 'м'
    , b: 'и'
    , n: 'т'
    , m: 'ь'
    , Q: 'Й'
    , W: 'Ц'
    , E: 'У'
    , R: 'К'
    , T: 'Е'
    , Y: 'Н'
    , U: 'Г'
    , I: 'Ш'
    , O: 'Щ'
    , P: 'З'
    , A: 'Ф'
    , S: 'Ы'
    , D: 'В'
    , F: 'А'
    , G: 'П'
    , H: 'Р'
    , J: 'О'
    , K: 'Л'
    , L: 'Д'
    , Z: 'Я'
    , X: 'Ч'
    , C: 'С'
    , V: 'М'
    , B: 'И'
    , N: 'Т'
    , M: 'Ь'
}
btn.onclick = function () {
    if (btn.innerText == 'RUS') {
        btn.innerText = 'EN';
        for (key of b) {
            key.innerText = chLetter[key.innerText];
        }
    }
    else if (btn.innerText == 'EN') {
        btn.innerText = 'RUS';
        if (i % 2 == 0) {
            for (let k = 0; k < b.length; k++) {
                b[k].innerText = Object.keys(chLetter)[k + 26];
            }
        }
        else {
            for (let k = 0; k < b.length; k++) {
                b[k].innerText = Object.keys(chLetter)[k];
            }
        }
    }
}
backspace.onclick = function () {
    result.value = result.value.slice(0, result.value.length - 1);
}
