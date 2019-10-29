// let car = {
//     mark: null,
//     engine: null,
//     owner: null,
//     price: null,
//     year: null
// };
//
// let user = {
//     name: null,
//     age: null,
//     experience: null
// };
//
// let cars = [];
//
// user.name = "Petro";
// user.age = 23;
// user.experience = 4;
//
// car.mark = "Volvo";
// car.engine = 3.2;
// car.owner = user;
// car.price = 15000;
// car.year = 7;
//
// cars.push(car);
//
//
//
// user.name = "Ivan";
// user.age = 33;
// user.experience = 10;
//
// car.mark = "BMW";
// car.engine = 2.2;
// car.owner = user;
// car.price = 10000;
// car.year = 10;
//
//
// cars.push(car);
//
// console.log(cars);
// //
// // let count = +prompt("Input cars number.", 0);
// // if (count) {
//
//     // for (let i = 0; i < cars.length; i++) {
//     //     user.name = prompt("Input your name.");
//     //     user.age = +prompt("Input your age.");
//     //     user.experience = +prompt("Input your experience in full years.");
//     //
//     //     car.mark = prompt("Input your cars mark.");
//     //     car.engine = +prompt("Input your engine.");
//     //     car.owner = user;
//     //     car.price = +prompt("Input your cars price.");
//     //     car.year = +prompt("Input your cars years.");
//     //
//     //     cars.push(car);
//     // }
// // TODO: use reduce method for calculate sum of the cars prices
//     for (let i = 0; i+2 < cars.length; i+2) {
//         // let currentCar = cars[i];
//         cars[i].engine *= 1.1;
//     }
//
//     console.log(cars);
//
// // }


// // let a = 0;
// // if (a === 0) {
// //     console.log("Вірно");
// // } else {
// //     console.log("Невірно");
// // }
//
//
// // let min;
// // if (min <= 15){
// //     console.log("Перша чверть");
// // } else if(min > 15 && min <=30){
// //     console.log("Друга чверть");
// // } else if(min > 30 && min <=45){
// //     console.log("Третя чверть");
// // } else if(min > 45 && min <=59){
// //     console.log("Четверта чверть");
// // }
// // console.log(min);
//
//
// // Practice
//
// let a = +prompt('Вивести число а');
// let b = +prompt('Вивести число b');
// let c = +prompt('Вивести число c');
// // if (a > b && a > c){
// //     console.log(+a, +b, +c)
// // } else  if (b > a && b > c) {
// //     console.log(50);
// // }  else if(c < a && c >b) {
// //     console.log("Вітаю ви перемогли");
// // }=else {
// //     console.log(100);
// // }
//
// if (a>b&&a>c) console.log(a);
// if (b>a&&b>c) console.log(b);
// if (c>b&&c>a) console.log(c);
//
// // 2.
// // let svt = 'Yellow';
// // if(svt === 'Green'){
// //     console.log("You can go");
// // }else  if(svt === 'Yellow'){
// //     console.log("Wait!!!");
// // }else if(svt ==='Red'){
// //     console.log("Stop!!!");
// // }else{
// //     console.log("Do what you want");
// // }
//
// // let isRoadClear = prompt('Светофор зеленый и машин нет');
// // confirm
// // if(isRoadClear === 'Green' && isRoadClear === 'no cars'){
// //     console.log("Go");
// // } else if (isRoadClear === 'Green' && isRoadClear === 'there is car') {
// //     console.log("wait until the perpetrators pass");
// // }else {
// //     console.log("ll");
// // }
// // console.log(isRoadClear);


let car1 = [{
    brand: 'BMW',
    power: 3,
    owner:{
        name: "Vasya",
        age: 25,
        experience: 7
    },
    price: 15000,
    age:5
},
    {
        brand: 'Volvo',
        power: 2.5,
        owner:{
            name: "Vova",
            age: 30,
            experience: 10
        },
        price: 18500,
        age:6
    },
    {
        brand: 'Mazda',
        power: 2,
        owner:{
            name: "Mykola",
            age: 32,
            experience: 13
        },
        price: 8500,
        age:4
    },
    {
        brand: 'Opel',
        power: 1.6,
        owner:{
            name: "Oleksandr",
            age: 29,
            experience: 11
        },
        price: 6500,
        age:8
    },
    {
        brand: 'Shkoda',
        power: 1.2,
        owner:{
            name: "Evgeniy",
            age: 33,
            experience: 15
        },
        price: 7500,
        age:6
    },
    {
        brand: 'Citroen',
        power: 1.2,
        owner:{
            name: "Natalya",
            age: 32,
            experience: 14
        },
        price: 14500,
        age:1
    },
    {
        brand: 'Lada',
        power: 1.4,
        owner:{
            name: "Petya",
            age: 26,
            experience: 18
        },
        price: 2500,
        age:12
    }
];
console.log(car1);




