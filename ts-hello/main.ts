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
let message = 'abc';
let log = function(message){
    console.log(message);
}

let doLog = (message) => console.log(message);

// interface Point {
//     x: number,
//     y: number,
//     draw: () => void // interface cannot have implementation
// }

// let drawPoint = (point: Point) => {
//     // inline annotation
//     // ...
// }

// let getDistance = (pointA: Point, pointB: Point) => {
//     // ...
// }

import {Point} from './point'; // modules

let point = new Point(1,2);
let x = point.x; // property
point.x = 10;
point.draw();

/**
* Components
* - Create a component
* - Register it in a module
* - Add an element in an HTML markup
*/