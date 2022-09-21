/**
 * Sets the velocity property on initialized particles.
 *
 */
export default class PolarVelocity extends Velocity {
    /**
     * Creates a PolarVelocity initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @param {number} json.polarRadius - The Polar3D radius
     * @param {number} json.polarTheta - The Polar3D theta
     * @param {number} json.polarPhi - The Polar3D phi
     * @param {number} json.velocityTheta - The velocity theta
     * @return {PolarVelocity}
     */
    static fromJSON(json: {
        polarRadius: number;
        polarTheta: number;
        polarPhi: number;
        velocityTheta: number;
    }): PolarVelocity;
    /**
     * Constructs a PolarVelocity initializer.
     *
     * @param {Polar3D} polar3d - The polar vector for the velocity
     * @param {number} theta - The theta angle to use
     * @return void
     */
    constructor(polar3d: Polar3D, theta: number, isEnabled?: boolean);
    /**
     * @desc Theta.
     * @type {number}
     */
    tha: number;
    /**
     * @desc Directional vector
     * @type {Vector3D}
     */
    dirVec: Vector3D;
    /**
     * @desc Determines whether to use the directional vector or not.
     * @type {boolean}
     */
    _useV: boolean;
}
import Velocity from "./Velocity";
import { Polar3D } from "../../math";
//# sourceMappingURL=PolarVelocity.d.ts.map