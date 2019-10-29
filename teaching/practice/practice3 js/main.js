const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// 1
// let filterInventors = inventors.filter(function (inventor) {
//     if (inventor.year >= 1500 && inventor.year < 1600) {
//         return inventor;
//     }
// });
//
// console.log(filterInventors);


// 2
// let filterInventors = inventors.filter(function (inventor) {
//     if (inventor.year >= 1800 && inventor.year < 1900) {
//         return inventor;
//     }
// });
//
// let inventorsName = filterInventors.map(function (abc) {
//     return abc.first;
// });
//
// console.log(filterInventors);


// 3
// let inventorsFirstLast = inventors.map(function (value) {
//     return value.first + " " + value.last;
// });
// console.log(inventorsFirstLast);

// let years = inventors.sort(function (a, b) {
//     return (a.passed - a.year) - (b.passed - b.year);
// });
// console.log(years);



const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// let sortedBySurname = people.sort(function (first, second) {
//     let firstSurname = first.split(', ')[1];
//     let secondSurname = second.split(', ')[1];
//     if (firstSurname > secondSurname) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
//
// console.log(sortedBySurname);

// let years = inventors.some(function (value) {
//     return value.year === 1878;
// });
//
// console.log(years);

// let totalYears = inventors.reduce(function (total, inventor) {
//    return total + (inventor.passed - inventor.year)
// }, 0);
//
// console.log(totalYears);




























