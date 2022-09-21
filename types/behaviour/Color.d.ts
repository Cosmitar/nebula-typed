/**
 * A behaviour which mutates the color of a particle over time.
 *
 */
export default class Color extends Behaviour {
    /**
     * Creates a Color initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @property {number} json.colorA - The starting color
     * @property {number} json.colorB - The ending color
     * @property {number} json.life - The life of the particle
     * @property {string} json.easing - The behaviour's decaying trend
     * @return {Color}
     */
    static fromJSON(json: object): Color;
    /**
     * Constructs a Color behaviour instance.
     *
     * @param {number|string} colorA - the starting color
     * @param {number|string} colorB - the ending color
     * @param {number} life - the life of the particle
     * @param {function} easing - The behaviour's decaying trend
     * @param {boolean} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(colorA: number | string, colorB: number | string, life: number, easing: Function, isEnabled?: boolean);
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
    reset(colorA: any, colorB: any, life: any, easing: any): void;
    colorA: import("../math").ColorSpan;
    colorB: import("../math").ColorSpan;
    initialize(particle: any): void;
    mutate(particle: any, time: any, index: any): void;
}
import Behaviour from "./Behaviour";
//# sourceMappingURL=Color.d.ts.map