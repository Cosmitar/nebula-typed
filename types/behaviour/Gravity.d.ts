/**
 * Behaviour that forces particles down the y axis.
 *
 */
export default class Gravity extends Force {
    static fromJSON(json: any): Gravity;
    /**
     * Constructs a Gravity behaviour instance.
     *
     * @param {number} gravity - the force to pull the particle down the y axis
     * @param {number} life - the life of the particle
     * @param {string} easing - the easing equation to use
     * @param {boolean} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(gravity: number, life: number, easing: string, isEnabled?: boolean);
}
import Force from "./Force";
//# sourceMappingURL=Gravity.d.ts.map