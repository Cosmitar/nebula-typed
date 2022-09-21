export default class BoxZone extends Zone {
    /**
     * BoxZone is a box zone
     * @param {Number|Vector3D} x - the position's x value or a Vector3D Object
     * @param {Number} y - the position's y value
     * @param {Number} z - the position's z value
     * @param {Number} w - the Box's width
     * @param {Number} h - the Box's height
     * @param {Number} d - the Box's depth
     * @example
     * var boxZone = new BoxZone(0,0,0,50,50,50);
     * or
     * var boxZone = new BoxZone(new Vector3D(0,0,0), 50, 50, 50);
     * @extends {Zone}
     * @constructor
     */
    constructor(a: any, b: any, c: any, d: number, e: any, f: any);
    x: any;
    y: any;
    z: any;
    width: any;
    height: any;
    depth: number;
    friction: number;
    max: number;
    getPosition(): import("..").Vector3D;
    _dead(particle: any): void;
    _static(particle: any, axis: any): void;
}
import Zone from "./Zone";
//# sourceMappingURL=BoxZone.d.ts.map