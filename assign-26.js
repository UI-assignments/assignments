class Shape {



    constructor(name, sides, sideLength) {
         this.name = name;
         this.sides = sides;
         this.sideLength = sideLength;
 
 
 
        this.calcPerimeter = function() {
             let peri = this.sides * this.sideLength;
             console.log(peri);
         }
     };
 }
 class Square extends Shape {
     constructor(sideLength) {
             super("square", 4, sideLength);
         }
     calcArea() {
         return (this.sideLength * this.sideLength);
     }
 
 
 
    calcPerimeter() {
         return (this.sides * this.sideLength);
     }
 
 
 
 }
 class Triangle extends Shape {
     constructor(sideLength) {
             super("Triangle", 3, sideLength);
         }
     calcArea() {
         return (this.sideLength * this.sideLength);
     }
     calcPerimeter() {
         return (this.sides * this.sideLength);
     }
 
 
 
 }
 let square = new Square(5);
 console.log(square.name);
 console.log(square.sides);
 console.log(square.calcArea());
 console.log(square.calcPerimeter());
 
 
 
 let triangle = new Triangle(3);
 console.log(triangle.name);
 console.log(triangle.sides);
 console.log(triangle.calcArea());
 console.log(triangle.calcPerimeter());