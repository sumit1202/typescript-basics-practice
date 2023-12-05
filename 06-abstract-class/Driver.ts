import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(0, 2, 10);
let myRectangle = new Rectangle(0, 5, 10, 20);

//array
let shapes: Shape[] = [];

shapes.push(myCircle);
shapes.push(myRectangle);

console.log("for-of loop:\n");
for (let shape of shapes) {
    console.log("info: " + shape.getInfo());
    console.log("area: " + shape.calculateArea());
    console.log();
}


