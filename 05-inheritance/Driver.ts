import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 20);
// console.log(myShape.getInfo());

let myCircle = new Circle(10, 20, 100);
// console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 100, 200);
// console.log(myRectangle.getInfo());

//array
let shapes: Shape[] = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);

console.log("for-of loop:");
for (let shape of shapes) {
    console.log(shape.getInfo());
}


