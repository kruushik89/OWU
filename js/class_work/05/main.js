/* var rockFolder = ["queen", 'depp purple', 'pink floyd'];
var rapFolder = ['run dmc', 'coolio', '50 cent', 'eminem'];
var popFolder = ['britney sperarse', 'byonce'];

var flash = [rockFolder, rapFolder, popFolder];
console.log(flash[0][1]);
console.log(flash[2][1]);
console.log(flash[1][1]);
console.log("\n");

for (var i = 0; i < flash.length; i++) { // зовншній цикл розпочався
    var someFolder = flash[i];// створюємо змінну в яку почергово, в залежності від індекса вкладаємо відповідну папку
    console.log(someFolder);// виводимо цю папку повністю

//внутрішній цикл розпочався
    for (var j = 0; j < someFolder.length; j++) { // оскільки папка є массивом з піснями ми можемо по ній пройтись. беремо довжину кожної папки і вперед
        var someSinger = someFolder[j];// на кожному новому колі змінна someSinger буде приймати конкретного виконавця
        console.log(someSinger);// і ми будемо виводити цього виконавця

    }
//внутрішній цикл закінчився
}//зовншній цикл закінчився*/

/*var rockFolder = ["queen", "depp purple", "pink floyd"];
var rapFolder = ['run dmc', 'coolio', '50 cent', 'eminem'];
var popFolder = ['britney sperarse', 'byonce'];

var flash = [rockFolder, rapFolder, popFolder];
console.log(flash[0] [2]);

for (var i = 0; i < flash.length; i++) {// зовнішній цикл розпочався
    var someFolder = flash[i]; // створюємо змінну в яку почерговоб в залежності від індекса вкладаємо відповідну папку
    console.log(someFolder);// виводимо цю папку повністю
// внутрішній цикл розпочався
    for (var j = 0; j < someFolder.length; j++) { // оскільки папка є масивом з піснями то ми можемо по ній пройтися, беремо довжину кожноі папки і вперед
        someSinger = someFolder[j];// на кожному новому колі змінна someSinger буде приймати конкретного виконавця
        console.log(someSinger); // і ми будемо виводити цього виконавця

    }
// внутрішній цикл закінчився
}// зовнішній цикл закінчився*/

/*var audi = ["a3", "a4", "a5", "a6"];
var citroen = ["c3", "c4", "c5", "ds3", "ds4"];
var kia = ["cerato", "ceed", "sportage"];

var auto = [audi, citroen, kia];
// console.log(auto [1] [1]);
// console.log(auto [0] [1]);
// console.log(auto [2] [1]);

for (var i = 0; i < auto.length; i++) {
    var garaj = auto[i];
    console.log(garaj);
    for (var j = 0; j < garaj.length; j++) {
        var marka = garaj[j];
        console.log(marka);
    }
}*/

    /*var audi = ["a3", "a4", "a5", "a6"];
    var citroen = ["c3", "c4", "c5", "ds3", "ds4"];
    var kia = ["cerato", "ceed", "sportage"];

    var auto = [audi, citroen, kia];
    console.log(auto [1] [1]);
    console.log(auto [0] [1]);
    console.log(auto [2] [1]);

for (var i = 0; i < auto.length; i++) {
    var b = auto[i];
    console.log(b);
    for (var j = 0; j < b.length; j++) {
        a = b[j];
        console.log(a);
    }
}*/



var audi = ["a3", "a4", "a5", "a6"];
 var citroen = ["c3", "c4", "c5", "ds3", "ds4"];
 var kia = ["cerato", "ceed", "sportage"];

 var auto = [audi, citroen, kia];
 console.log(auto [1] [1]);
 console.log(auto [0] [1]);
 console.log(auto [2] [1]);

for (var i = 0; i < auto.length; i++) {
    var b = auto[i];
    console.log(b);
    for (var j = 0; j < b.length; j++) {
        a = b[j];
        console.log(a);
    }
}



 /*var audi = ["a3", "a4", "a5", "a6"];
 var citroen = ["c3", "c4", "c5", "ds3", "ds4"];
 var kia = ["cerato", "ceed", "sportage"];

 var auto = [audi, citroen, kia];
 console.log(auto [1] [1]);
 console.log(auto [0] [1]);
 console.log(auto [2] [1]);

for (var i = 0; i < auto.length; i++) {
    var b = auto[i];
    console.log(b);
    for (var j = 0; j < b.length; j++) {
        var c = b[j];
        console.log(c);
    }
}*/



 /*var rockFolder = ['queen', 'depp purple', 'pink floyd'];
var rapFolder = ['run dmc', 'coolio', '50 cent', 'eminem'];
var popFolder = ['britney spearse', 'byonce'];

var flash = [rockFolder, rapFolder, popFolder];

console.log(flash[0] [0]);
console.log(flash[1] [1]);
console.log(flash [2] [1]);

for (var i = 0; i < flash.length; i++) {
    var someFolder = flash[i];
    console.log(someFolder);
    for (var j = 0; j < someFolder.length; j++) {
        someSinger = someFolder[j];
        console.log(someSinger);
    }

}*/







/*var osin = ["september", "october", "november"];
var zima = ["december", "january", "february"];
var vesna = ["march", "april", "may"];
var lito = ["june", "july", "august"];

var pora = [osin, zima, vesna, lito];
console.log(pora[1] [2]);

for (var i = 0; i < pora.length; i++) {//зовнішній цикл розпочався
    var someFolder = pora[i];//створюємо змінну в яку почергово, в залежності від індекса вкладаємо відповідну папку
    console.log(someFolder);//виводимо цю папку повністю
    //внутрішній цикл розпочався
    for (var j = 0; j < someFolder.length; j++) {//оскільки папка є массивом з порами року ми можемо по ній пройтися, беремо довжину кожноі папки і вперед
        var yakasPora = someFolder[j];// на кожному новому колі змінна yakasPora буде приймати конкретну пору року
        console.log(yakasPora); //і ми будемо виводити цю пору року
    }
}*/

/*var audi = ["A3", "A4", "A5", "A6"];
var citroen = ["c3", "c4", "c5", "ds3", "ds4"];
var kia = ["cerato", "ceed", "sportage"];

var auto = [audi, citroen, kia];
console.log(auto [0] [3]);
console.log(auto [1] [2]);
console.log(auto [2] [0]);

for (var i = 0; i < auto.length; i++) {// зовнішній цикл розпочато
    var garag = auto[i]; // створюємо змінну в яку почергово, в залежності від індекса вкладаємо відповідну папку
    console.log(garag);// виводимо цю папку повністю
    for (var j = 0; j < garag.length; j++) {// оскільки папка є масивом з марками авто ми можемо по ній пройтися, беремо довжину кожної папки і вперед
        var markaAuto = garag[j];// на кожному новому колі змінна markaAuto буде приймати конкретну марку
        console.log(markaAuto);// і ми будемо виводити цю марку

    }

}*/


/*var audi = ["A3", "A4", "A5", "A6"];
var citroen = ["c3", "c4", "c5", "ds3", "ds4"];
var kia = ["cerato", "ceed", "sportage"];

var auto = [audi, citroen, kia];
console.log(auto [0] [3]);
console.log(auto [1] [2]);
console.log(auto [2] [0]);

for (var i = 0; i < auto.length; i++) {
    var garaj = auto[i];
    console.log(garaj);
    for (var j = 0; j < garaj.length; j++) {
        var s = garaj[j];
        console.log(s);
    }
}*/





















/*for (var year = 0; year < 2; year++) {
    for (var day = 1; day <= 365; day ++) {
        console.log(" year - " + year + ' day - ' + day  );

    }
}*/

/*for (var year = 0; year < 2; year++) {
    for (var day = 1; day < 365; day++) {
        console.log("year - " + year + "; day - " +day);
    }
}*/

/*for (var month = 0; month <= 12 ; month++) {
    for (var day = 0; day <= 30; day++) {
        console.log("month -" + month + "; day -" + day);
        
    }
}*/

/*for (var hours = 0; hours < 24; hours++) {
    for (var minut = 0; minut < 60; minut++) {
        console.log("hours - " + hours + "; minut - " + minut);
        
    }
    
}*/

/*for (var week = 1; week <= 4; week++) {
    for (var day = 1; day <= 7; day++) {
        console.log("week - " + week + "; day " + day);

    }

}*/

/*for (var lessons = 1; lessons <= 6; lessons++) {
    for (var minut = 1; minut <= 45; minut++) {
        console.log("lessons - " + lessons + "; minut - " + minut);
        
    }
    
}*/

/*for (var day = 1; day <= 7; day++) {
    for (var hours = 0; hours < 24; hours++) {
        console.log("day - " + day + " ; hours - " + hours);
        
    }
    
}*/

/*for (var year = 0; year < 2; year++) {
    for (var day = 1; day <= 365; day++) {
        console.log("year - " + year + "; day - " + day);
        
    }
    
}*/

/*

for (var day = 1; day < 2; day++) {
    for (var hours = 0; hours < 24; hours++) {
        console.log('day - ' + day + ' hours - ' + hours);
    }
}*/
























// 6 разів календар
// 6 двомірних масивів які необхідно перебрати + опис
// масив перебрати і вивести найбільше значення


/*var aaa = [100, 600,500];
var equal = aaa[0];
for (var i = 0; i < aaa.length; i++) {
    if(equal<aaa[i]){
        equal = aaa[i];
    }
}
console.log(equal);*/


// var a = [15, 2, 35, 16, 28];
// var b = a[0];
// for (var i = 0; i < a.length; i++) {
//     if (b < a[i]){
//         b = a[i];
//     }
//
// }
// console.log(b);

/*var a = [2, 45, 20, 100, 101, 3];
var b = a[0];
for (var i = 0; i < a.length; i++) {
    if(b < a[i]){
        b = a[i];
    }

}
console.log(b);*/

/*var a = [2, 5, 48, 54, 12, 68, 25];
var b = [0];
for (var i = 0; i < a.length; i++) {
    if(b < a[i]) {
        b = a[i];
    }
}
console.log(b);*/

/*var d = [5, 65, 12, 32, 44];
var s = [0];
for (var i = 0; i < d.length; i++) {
    if(s < d[i]){
        s = d[i];
    }
}
console.log(s);*/

/*var a = [1, 4, 7, 8, 9];

var b = a[0];
for (var i = 0; i < a.length; i++) {
    if(b > a[i]){
        b = a[i];
    }
}
console.log(b);*/

var a = [1, 2, 3, 4, 5, 6, 9, 8];
var b = a[0];
for (var i = 0; i < a.length; i++) {
    if(b < a[i]) {
        b = a[i];
    }
}
    console.log(b);


var sd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 22];
var ds = sd[0];
for (var i = 0; i < sd.length; i++) {
    if (ds < sd[i])
        ds = sd[i];
}
console.log(ds);







