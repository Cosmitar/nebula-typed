/**
 * Behaviour that causes particles to be repelled from a target position.
 *
 */
export default class Repulsion extends Attraction {
    /**
     * Constructs an Repulsion behaviour instance.
     *
     * @param {Vector3D} targetPosition - The position the particles will be repelled from
     * @param {number} force - The repulsion force scalar multiplier
     * @param {number} radius - The repulsion radius
     * @param {number} life - The life of the particle
     * @param {function} easing - The behaviour's decaying trend
     * @return void
     */
    constructor(targetPosition: Vector3D, force: number, radius: number, life: number, easing: Function, isEnabled?: boolean);
}
import Attraction from "./Attraction";
import { Vector3D } from "../math";
//# sourceMappingURL=Repulsion.d.ts.map