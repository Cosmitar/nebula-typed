export default class Polar3D {
    constructor(radius: any, theta: any, phi: any);
    /**
     * @desc The class type.
     * @type {string}
     */
    type: string;
    radius: any;
    phi: any;
    theta: any;
    set(radius: any, theta: any, phi: any): Polar3D;
    setRadius(radius: any): Polar3D;
    setPhi(phi: any): Polar3D;
    setTheta(theta: any): Polar3D;
    copy(p: any): Polar3D;
    toVector3D(): Vector3D;
    getX(): number;
    getY(): number;
    getZ(): number;
    normalize(): Polar3D;
    equals(v: any): boolean;
    clear(): Polar3D;
    clone(): Polar3D;
}
import Vector3D from "./Vector3D";
//# sourceMappingURL=Polar3D.d.ts.map