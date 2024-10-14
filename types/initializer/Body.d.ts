/**
 * Sets the body property on initialized particles.
 *
 */
export default class Body extends Initializer {
    /**
     * Creates a Body initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @property {number} json.body - The color for the particle body
     * @property {number} json.width - The width of the particle body
     * @property {number} json.height - The height of the particle body
     * @return {Body}
     */
    static fromJSON(json: object): Body;
    static fromJSON(json: object): Behaviour;
    /**
     * Constructs a Body initalizer instance.
     *
     * @param {string|number|object} body - The content for the particle body, can
     * be a color or an object (mesh)
     * @param {?number} w - The width of the particle body
     * @param {?number} h - The height of the particle body
     * @return void
     */
    constructor(body: string | number | object, w: number | null, h: number | null, isEnabled?: boolean);
    /**
     * @desc The content for the particle body
     * @type {ArraySpan}
     */
    body: ArraySpan;
    /**
     * @desc The width of the particle Body
     * @type {number}
     */
    w: number;
    /**
     * @desc The height of the particle Body
     * @type {number}
     */
    h: number;
}
import { Behaviour } from "../behaviour";
import { ArraySpan } from "../math";
import Initializer from "./Initializer";
//# sourceMappingURL=Body.d.ts.map