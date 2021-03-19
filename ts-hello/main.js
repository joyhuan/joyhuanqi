// function doSomething(){
//    for(let i = 0; i< 5; i++){
//        console.log(i);
//    }
//    console.log('Finally: ' + i);
// }
// doSomething();
/**
* Types
*/
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1, true, 'a', false];
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2; 
// enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3}
// let backGroundColor = Color.Red;
/**
* Type Assertions
*/
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
var message = 'abc';
var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
// interface Point {
//     x: number,
//     y: number,
//     draw: () => void // interface cannot have implementation
// }
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ... 
    };
    return Point;
}());
var drawPoint = function (point) {
    // inline annotation
    // ...
};
var getDistance = function (pointA, pointB) {
    // ...
};
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
