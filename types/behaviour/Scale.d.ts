/**
 * Behaviour that scales particles.
 *
 */
export default class Scale extends Behaviour {
    /**
     * Returns a new instance of the behaviour from the JSON object passed.
     *
     * @param {object} json - JSON object containing the required constructor properties
     * @return {Spring}
     */
    static fromJSON(json: object): Spring;
    /**
     * Constructs a Scale behaviour instance.
     *
     * @param {number} scaleA - the starting scale value
     * @param {?number} scaleB - the ending scale value
     * @param {number} life - the life of the behaviour
     * @param {function} easing - the easing equation to use for transforms
     * @param {boolean} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(scaleA: number, scaleB: number | null, life: number, easing: Function, isEnabled?: boolean);
    /**
     * Sets the _same property which determines if the scale props are the same.
     *
     * @param {boolean} same
     * @return {boolean}
     */
    set same(arg: boolean);
    /**
     * Gets the _same property which determines if the scale props are the same.
     *
     * @return {boolean}
     */
    get same(): boolean;
    /**
     * @type {boolean}
     */
    _same: boolean;
    /**
     * Resets the behaviour properties.
     *
     * @param {number} scaleA - the starting scale value
     * @param {?number} scaleB - the ending scale value
     * @param {number} life - the life of the behaviour
     * @param {function} easing - the easing equation to use for transforms
     * @return void
     */
    reset(scaleA: number, scaleB: number | null, life: number, easing: Function): void;
    reset(life?: number, easing?: Function): void;
    /**
     * @desc The starting scale.
     * @type {Span}
     */
    scaleA: Span;
    /**
     * @desc The ending scale.
     * @type {Span}
     */
    scaleB: Span;
}
import { Span } from "../math";
import Behaviour from "./Behaviour";
import Spring from "./Spring";
//# sourceMappingURL=Scale.d.ts.map