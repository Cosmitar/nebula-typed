/**
 * Behaviour that allows for specific functions to be called on particles when
 * they interact with a zone.
 *
 */
export default class CrossZone extends Behaviour {
    /**
     * Creates a CrossZone initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @return {CrossZone}
     */
    static fromJSON(json: object): CrossZone;
    /**
     * Constructs a CrossZone behaviour instance.
     *
     * @param {Zone} zone - the zone used to apply to particles with this behaviour
     * @param {string} [crossType=DEFAULT_CROSS_TYPE] - enum of cross types, valid strings include 'dead', 'bound', 'cross'
     * @param {number} life - The life of the particle
     * @param {function} easing - The behaviour's decaying trend
     * @param {boolean} [isEnabled=true] - Determines if the behaviour will be applied or not
     */
    constructor(zone: typeof Zone, crossType?: string, life: number, easing: Function, isEnabled?: boolean);
    /**
     * Resets the behaviour properties.
     *
     * @param {Zone} zone - the zone used to apply to particles with this behaviour
     * @param {string} [crossType=DEFAULT_CROSS_TYPE] - enum of cross types, valid strings include 'dead', 'bound', 'cross'
     * @param {number} life - The life of the particle
     * @param {function} easing - The behaviour's decaying trend
     */
    reset(zone: typeof Zone, crossType?: string, life: number, easing: Function): void;
    /**
     * @desc The zone used to apply to particles with this behaviour
     * @type {Zone}
     */
    zone: typeof Zone;
}
import Behaviour from "./Behaviour";
import * as Zone from "../zone";
//# sourceMappingURL=CrossZone.d.ts.map