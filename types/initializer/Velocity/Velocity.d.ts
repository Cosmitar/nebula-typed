/**
 * Abstract class for Velocity initializers.
 *
 */
export default class Velocity extends Initializer {
    /**
     * Constructs a Velocity intitializer instance.
     *
     * @return void
     */
    constructor(type: any, isEnabled?: boolean);
    /**
     * @desc Directional vector
     * @type {Vector3D}
     */
    dirVec: Vector3D;
    normalize(vr: any): number;
    /**
     * Sets the particle's initial velocity.
     *
     * @singleton
     * @param {Particle} particle - the particle to initialize the property on
     * @return void
     */
    initialize: (particle: any) => any;
}
import Initializer from "../Initializer";
import { Vector3D } from "../../math";
//# sourceMappingURL=Velocity.d.ts.map