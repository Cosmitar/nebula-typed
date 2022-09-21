export default class ScreenZone extends Zone {
    /**
     * ScreenZone is a 3d line zone
     * @param {Number|Vector3D} x1 - the line's start point of x value or a Vector3D Object
     * @param {Number|Vector3D} y1 - the line's start point of y value or a Vector3D Object
     * @param {Number} z1 - the line's start point of z value
     * @param {Number} x2 - the line's end point of x value
     * @param {Number} y2 - the line's end point of y value
     * @param {Number} z2 - the line's end point of z value
     * @example
     * var lineZone = new ScreenZone(0,0,0,100,100,0);
     * or
     * var lineZone = new ScreenZone(new Vector3D(0,0,0),new Vector3D(100,100,0));
     * @extends {Zone}
     * @constructor
     */
    constructor(camera: any, renderer: any, dis: any, dir: any);
    camera: any;
    renderer: any;
    dis: any;
    _dead(particle: any): void;
}
import Zone from "./Zone";
//# sourceMappingURL=ScreenZone.d.ts.map