/**
 * Behaviour that causes particles to spring.
 *
 */
export default class Spring extends Behaviour {
    /**
     * Returns a new instance of the behaviour from the JSON object passed.
     *
     * @param {object} json - JSON object containing the required constructor properties
     * @return {Spring}
     */
    static fromJSON(json: object): Spring;
    /**
     * Constructs a Spring behaviour instance.
     *
     * @param {number} x - X axis spring
     * @param {number} y - Y axis spring
     * @param {number} z - Z axis spring
     * @param {number} spring - Spring factor
     * @param {number} friction - Spring friction
     * @param {number} life - The life of the behaviour
     * @param {function} easing - The easing equation to use for transforms
     * @param {boolean} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(x: number, y: number, z: number, spring: number, friction: number, life: number, easing: Function, isEnabled?: boolean);
    /**
     * Resets the behaviour properties.
     *
     * @param {number} x - X axis spring
     * @param {number} y - Y axis spring
     * @param {number} z - Z axis spring
     * @param {number} spring - Spring factor
     * @param {number} friction - Spring friction
     * @return void
     */
    reset(x: number, y: number, z: number, spring: number, friction: number): void;
    pos: Vector3D;
    spring: number;
    friction: number;
}
import Behaviour from "./Behaviour";
import { Vector3D } from "../math";
//# sourceMappingURL=Spring.d.ts.map