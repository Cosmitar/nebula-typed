/**
 * Behaviour that forces particles along a specific axis.
 *
 */
export default class Force extends Behaviour {
    /**
     * Creates a Force initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @return {Force}
     */
    static fromJSON(json: object): Force;
    /**
     * Constructs a Force behaviour instance.
     *
     * @param {number} fx - the x axis force
     * @param {number} fy - the y axis force
     * @param {number} fz - the z axis force
     * @param {number} life - the life of the particle
     * @param {function} easing - The behaviour's decaying trend
     * @param {boolean} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(fx: number, fy: number, fz: number, life: number, easing: Function, isEnabled?: boolean);
    /**
     * Resets the behaviour properties.
     *
     * @param {number} fx - the x axis force
     * @param {number} fy - the y axis force
     * @param {number} fz - the z axis force
     */
    reset(fx: number, fy: number, fz: number): void;
    /**
     * @desc The normalized force to exert on the particle in
     * @type {Vector3D}
     */
    force: Vector3D;
}
import Behaviour from "./Behaviour";
import { Vector3D } from "../math";
//# sourceMappingURL=Force.d.ts.map