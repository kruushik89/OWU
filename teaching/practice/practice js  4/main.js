// const  user = [{name: 'Taras', surname: 'Shevchenko', year: 1844}];
//
// let userReturn = user.filter(function (value) {
//     return value.name === 'Taras' && value.surname === 'Shevchenko';
// });
//
// console.log(userReturn);



{
    class Figura{
        constructor(name) {
            this.name = name;
        }
    }

    class Square extends Figura{
        constructor(name, height){
            super(name);
            this.height = height;
        }

        calcArea() {
            return this.height * this.height;
        }

        get area() {
            return this.calcArea();
        }

        set setHeight(value) {
            this.height = value;
        }

    }

    const mySquare = new Square('My squre', 20)
    console.log(mySquare);
    console.log(mySquare.area);
    mySquare.setHeight = 30;
    console.log(mySquare.area);


    class Kolo extends Figura {
        constructor(name, radius) {
            super(name);
            this.radius = radius;
        }

        radArea() {
            return Math.PI * this.radius ** 2;
        }

        get areaCircle() {
            return this.radArea();
        }

        set setRadius(value) {
            this.radius = value;
        }
    }

    const myRadius = new Kolo('My radius', 5);
    console.log(myRadius.areaCircle);
    myRadius.setRadius = 10;
    console.log(myRadius.areaCircle);
    console.log(myRadius);
    
    
    
    
}
