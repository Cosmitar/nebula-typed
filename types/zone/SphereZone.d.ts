/**
 * A spherical zone for particles to be emitted within.
 *
 */
export default class SphereZone extends Zone {
    /**
     * @constructs {SphereZone}
     *
     * @param {number} centerX - the sphere's center x coordinate
     * @param {number} centerY - the sphere's center y coordinate
     * @param {number} centerZ - the sphere's center z coordinate
     * @param {number} radius - the sphere's radius value
     * @return void
     */
    constructor(centerX: number, centerY: number, centerZ: number, radius: number);
    x: number;
    y: number;
    z: number;
    radius: number;
    the: number;
    phi: number;
    /**
     * Warns that this zone does not support the _cross method.
     *
     * @return void
     */
    _cross(): void;
    getPosition(): {
        new (): {
            random: number;
        };
    };
}
import Zone from "./Zone";
//# sourceMappingURL=SphereZone.d.ts.map