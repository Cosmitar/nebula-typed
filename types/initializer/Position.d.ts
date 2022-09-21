/**
 * Sets the starting position property for initialized particles.
 * This is derived from a zone randomly chosen from those supplied to the constructor.
 *
 */
export default class Position extends Initializer {
    /**
     * Creates a Position initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from.
     * @param {string} json.zoneType - The type of zone to use for initial position
     * @return {Position}
     */
    static fromJSON(json: {
        zoneType: string;
    }): Position;
    /**
     * Constructs a Position initializer instance.
     *
     * @param {Zone|array<Zone>}
     * @return void
     */
    constructor(...args: any[]);
    /**
     * Resets the initializer properties.
     * Clears all previously set zones and resets the zones according to args passed.
     *
     * @param {Zone|array<Zone>}
     * @return void
     */
    reset(...args: any[]): void;
    zones: array<typeof Zone>;
    /**
     * Adds a zone or zones to this.zones.
     *
     * @param {Zone|array<Zone>}
     * @return void
     */
    addZone(...args: any[]): void;
    /**
     * Sets the particle's initial position.
     *
     * @param {Particle} particle - the particle to initialize the property on
     * @return void
     */
    initialize: (target: any) => void;
}
import Initializer from "./Initializer";
import * as Zone from "../zone";
//# sourceMappingURL=Position.d.ts.map