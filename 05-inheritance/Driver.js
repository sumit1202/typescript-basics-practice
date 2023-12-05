"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 20);
// console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(10, 20, 100);
// console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(0, 0, 100, 200);
// console.log(myRectangle.getInfo());
//array
var shapes = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);
console.log("for-of loop:");
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.getInfo());
}
