export default class LineZone extends Zone {
    /**
     * LineZone is a 3d line zone
     * @param {Number|Vector3D} x1 - the line's start point of x value or a Vector3D Object
     * @param {Number|Vector3D} y1 - the line's start point of y value or a Vector3D Object
     * @param {Number} z1 - the line's start point of z value
     * @param {Number} x2 - the line's end point of x value
     * @param {Number} y2 - the line's end point of y value
     * @param {Number} z2 - the line's end point of z value
     * @example
     * var lineZone = new System.LineZone(0,0,0,100,100,0);
     * or
     * var lineZone = new System.LineZone(new System.Vector3D(0,0,0),new System.Vector3D(100,100,0));
     * @extends {Zone}
     * @constructor
     */
    constructor(x1: number | Vector3D, y1: number | Vector3D, z1: number, x2: number, y2: number, z2: number);
    x1: any;
    y1: any;
    z1: any;
    x2: any;
    y2: any;
    z2: any;
    getPosition(): Vector3D;
}
import Zone from "./Zone";
import Vector3D from "../math/Vector3D";
//# sourceMappingURL=LineZone.d.ts.map