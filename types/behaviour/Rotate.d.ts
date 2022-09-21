/**
 * Behaviour that rotates particles.
 */
export default class Rotate extends Behaviour {
    static fromJSON(json: any): Rotate;
    /**
     * Constructs a Rotate behaviour instance.
     *
     * @param {number} x - X axis rotation
     * @param {number} y - Y axis rotation
     * @param {number} z - Z axis rotation
     * @param {number} life - The life of the behaviour
     * @param {function} easing - The easing equation to use for transforms
     * @param {boolean} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(x: number, y: number, z: number, life: number, easing: Function, isEnabled?: boolean);
    /**
     * Sets the rotation type.
     *
     * @param {string}
     * @return void
     */
    set rotationType(arg: string);
    /**
     * Gets the rotation type.
     *
     * @return {string}
     */
    get rotationType(): string;
    /**
     * @desc The rotation type. ENUM of ['same', 'set', 'to', 'add'].
     * @type {string}
     */
    _rotationType: string;
    /**
     * Resets the behaviour properties.
     *
     * @param {number} x - X axis rotation
     * @param {number} y - Y axis rotation
     * @param {number} z - Z axis rotation
     * @param {number} life - the life of the behaviour
     * @param {function} easing - the easing equation to use for transforms
     * @return void
     */
    reset(x: number, y: number, z: number, life: number, easing: Function): void;
    /**
     * @desc X axis rotation.
     * @type {number|Span}
     */
    x: number | Span;
    /**
     * @desc Y axis rotation.
     * @type {number|Span}
     */
    y: number | Span;
    /**
     * @desc Z axis rotation.
     * @type {number|Span}
     */
    z: number | Span;
    /**
     * Sets the particle's rotation prior to the behaviour being applied.
     *
     * NOTE It's hard to see here, but this is mutating the particle's rotation
     * even though the particle is not being passed in directly.
     *
     * NOTE the else if below will never be reached because the value being passed in
     * will never be of type Vector3D.
     *
     * @param {Vector3D} particleRotation - the particle's rotation vector
     * @param {string|number} value - the value to set the rotation value to, if 'random'
     * rotation is randomised
     * @return void
     */
    _setRotation(particleRotation: Vector3D, value: string | number): void;
}
import Behaviour from "./Behaviour";
import { Vector3D } from "../math";
//# sourceMappingURL=Rotate.d.ts.map