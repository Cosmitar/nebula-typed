/**
 * Behaviour that applies an alpha transition effect to particles.
 *
 */
export default class Alpha extends Behaviour {
    /**
     * Creates a Body initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @property {number} json.alphaA - The starting alpha value
     * @property {number} json.alphaB - The ending alpha value
     * @property {number} json.life - The life of the behaviour
     * @property {string} json.easing - The easing equation to use for transforms
     * @return {Body}
     */
    static fromJSON(json: object): Body;
    /**
     * Constructs an Alpha behaviour instance.
     *
     * @param {number} alphaA - The starting alpha value
     * @param {?number} alphaB - The ending alpha value
     * @param {number} life - The life of the behaviour
     * @param {function} easing - The easing equation to use for transforms
     * @param {boolean} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(alphaA: number, alphaB: number | null, life: number, easing: Function, isEnabled?: boolean);
    /**
     * @desc The starting alpha value
     * @type {number|Span}
     */
    alphaA: number | Span;
    /**
     * @desc The ending alpha value
     * @type {number|Span}
     */
    alphaB: number | Span;
    /**
     * Sets the _same property which determines if the alpha are the same.
     *
     * @param {boolean} same
     * @return {boolean}
     */
    set same(arg: boolean);
    /**
     * Gets the _same property which determines if the alpha are the same.
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
     * @param {number} alphaA - the starting alpha value
     * @param {?number} alphaB - the ending alpha value
     * @param {number} life - the life of the behaviour
     * @param {function} easing - the easing equation to use for transforms
     * @return void
     */
    reset(alphaA: number, alphaB: number | null, life: number, easing: Function): void;
    reset(life?: number, easing?: Function): void;
}
import { Span } from "../math";
import Behaviour from "./Behaviour";
//# sourceMappingURL=Alpha.d.ts.map