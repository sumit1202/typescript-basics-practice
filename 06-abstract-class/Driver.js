"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(0, 2, 10);
var myRectangle = new Rectangle_1.Rectangle(0, 5, 10, 20);
//array
var shapes = [];
shapes.push(myCircle);
shapes.push(myRectangle);
console.log("for-of loop:\n");
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log("info: " + shape.getInfo());
    console.log("area: " + shape.calculateArea());
    console.log();
}
