export class Point {
    // private x: number; // field
    // private y: number;

    constructor(private _x?: number, private _y?: number) { // will generate field for us
        // this.x = x;
        // this.y = y;
    }

    draw() { // method default public
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    get x() {
        return this._x;
    }

    set x(value){
        if(value < 0)
            throw new Error('value cannot be less than 0.');

        this._x=value;
    }

    getDistance(another: Point) {
        // ... 
    }
}