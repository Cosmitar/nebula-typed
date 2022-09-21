/**
 * Behaviour that causes particles to drift to random coordinates in 3D space.
 *
 */
export default class RandomDrift extends Behaviour {
    static fromJSON(json: any): RandomDrift;
    /**
     * Constructs a RandomDrift behaviour instance.
     *
     * @param {number} driftX - x axis drift
     * @param {number} driftY - y axis drift
     * @param {number} driftZ - z axis drift
     * @param {number} [delay=DEFAULT_RANDOM_DRIFT_DELAY] - drift delay
     * @param {number} life - The life of the particle
     * @param {function} easing - The behaviour's decaying trend
     * @return void
     */
    constructor(driftX: number, driftY: number, driftZ: number, delay?: number, life: number, easing: Function, isEnabled?: boolean);
    /**
     * @desc Internal time used for calculating drift vs internal delay.
     * @type {number}
     */
    time: number;
    /**
     * Resets the behaviour properties.
     *
     * @param {number} driftX - x axis drift
     * @param {number} driftY - y axis drift
     * @param {number} driftZ - z axis drift
     * @param {number} [delay=DEFAULT_RANDOM_DRIFT_DELAY] - drift delay
     * @param {number} life - The life of the particle
     * @param {function} easing - The behaviour's decaying trend
     */
    reset(driftX: number, driftY: number, driftZ: number, delay?: number, life: number, easing: Function): void;
    /**
     * @desc A Vector3D that stores the drift properties.
     * @type {Vector3D}
     */
    randomForce: Vector3D;
    /**
     * @desc A Span containing the delay supplied.
     * @type {Span}
     */
    delayPan: Span;
}
import Behaviour from "./Behaviour";
import { Vector3D } from "../math";
//# sourceMappingURL=RandomDrift.d.ts.map