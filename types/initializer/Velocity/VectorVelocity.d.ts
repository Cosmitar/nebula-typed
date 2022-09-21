/**
 * Sets the velocity property on initialized particles.
 *
 */
export default class VectorVelocity extends Velocity {
    /**
     * Creates a VectorVelocity initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @param {number} json.x - The velocity x axis direction
     * @param {number} json.y - The velocity y axis direction
     * @param {number} json.z - The velocity z axis direction
     * @param {number} json.theta - The velocity theta
     * @return {VectorVelocity}
     */
    static fromJSON(json: {
        x: number;
        y: number;
        z: number;
        theta: number;
    }): VectorVelocity;
    /**
     * Constructs a VectorVelocity initializer.
     *
     * @param {Vector3D} vector3d - The directional vector for the velocity
     * @param {number} theta - The theta angle to use
     * @return void
     */
    constructor(vector3d: Vector3D, theta: number, isEnabled?: boolean);
    /**
     * @desc Velocity radius span.
     * @type {Span}
     */
    radiusPan: Span;
    /**
     * @desc Direction vector.
     * @type {Vector3D}
     */
    dir: Vector3D;
    /**
     * @desc Theta.
     * @type {number}
     */
    tha: number;
    /**
     * @desc Determines whether to use the directional vector or not.
     * @type {boolean}
     */
    _useV: boolean;
}
import Velocity from "./Velocity";
import { Vector3D } from "../../math";
//# sourceMappingURL=VectorVelocity.d.ts.map