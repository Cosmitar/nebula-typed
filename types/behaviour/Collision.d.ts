/**
 * Behaviour that causes particles to move away from other particles they collide with.
 */
export default class Collision extends Behaviour {
    /**
     * Constructs a Collision behaviour instance.
     *
     * @param {Emitter} emitter - The emitter containing the particles to detect collisions against
     * @param {boolean} useMass - Determiens whether to use mass or not
     * @param {function} onCollide - Function to call when particles collide
     * @param {number} life - The life of the particle
     * @param {function} easing - The behaviour's decaying trend
     * @param {boolean} [isEnabled=true] - Determines if the behaviour will be applied or not
     * @return void
     */
    constructor(emitter: Emitter, useMass: boolean, onCollide: Function, life: number, easing: Function, isEnabled?: boolean);
    /**
     * Resets the behaviour properties.
     *
     * @param {Emitter} emitter - The emitter containing the particles to detect collisions against
     * @param {boolean} useMass - Determiens whether to use mass or not
     * @param {function} onCollide - Function to call when particles collide
     * @param {number} life - The life of the particle
     * @param {function} easing - The behaviour's decaying trend
     * @return void
     */
    reset(emitter: Emitter, useMass: boolean, onCollide: Function, life: number, easing: Function): void;
    emitter: Emitter;
    useMass: boolean;
    onCollide: Function;
    particles: any[];
    delta: Vector3D;
    /**
     * Gets the average mass of both particles.
     *
     * @param {Particle} particleA - The first particle
     * @param {Particle} particleB - The second particle
     * @return {number}
     */
    _getAverageMass(particleA: Particle, particleB: Particle): number;
    fromJSON(json: any): void;
}
import Behaviour from "./Behaviour";
import { Vector3D } from "../math";
//# sourceMappingURL=Collision.d.ts.map