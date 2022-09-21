/**
 * Behaviour that causes particles to be attracted to a target position.
 *
 */
export default class Attraction extends Behaviour {
    /**
     * Creates a Body initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @property {number} json.x - The target position x value
     * @property {number} json.y - The target position y value
     * @property {number} json.z - The target position z value
     * @property {number} json.force - The attraction force scalar multiplier
     * @property {number} json.life - The life of the particle
     * @property {string} json.easing - The behaviour's decaying trend
     * @return {Body}
     */
    static fromJSON(json: object): Body;
    /**
     * Constructs an Attraction behaviour instance.
     *
     * @param {Vector3D} targetPosition - The position the particles will be attracted to
     * @param {number} force - The attraction force scalar multiplier
     * @param {number} radius - The attraction radius
     * @param {number} [life=DEFAULT_LIFE] - The life of the particle
     * @param {function} [easing=DEFAULT_BEHAVIOUR_EASING] - The behaviour's decaying trend
     * @param {boolean} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(targetPosition?: Vector3D, force?: number, radius?: number, life?: number, easing?: Function, isEnabled?: boolean);
    /**
     * @desc The position the particles will be attracted to
     * @type {Vector3D}
     */
    targetPosition: Vector3D;
    /**
     * @desc The attraction radius
     * @type {number} - the attraction radius
     */
    radius: number;
    /**
     * @desc The attraction force scalar multiplier
     * @type {number}
     */
    force: number;
    /**
     * @desc The radius of the attraction squared
     * @type {number}
     */
    radiusSq: number;
    /**
     * @desc The attraction force in 3D space
     * @type {Vector3D}
     */
    attractionForce: Vector3D;
    /**
     * @desc The linear attraction force
     * @type {number}
     */
    lengthSq: number;
    /**
     * Resets the behaviour properties.
     *
     * @param {Vector3D} targetPosition - the position the particles will be attracted to
     * @param {number} force - the attraction force multiplier
     * @param {number} radius - the attraction radius
     * @param {number} life - the life of the particle
     * @param {function} easing - The behaviour's decaying trend
     * @return void
     */
    reset(targetPosition: Vector3D, force: number, radius: number, life: number, easing: Function): void;
}
import Behaviour from "./Behaviour";
import { Vector3D } from "../math";
//# sourceMappingURL=Attraction.d.ts.map