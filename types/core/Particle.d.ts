/**
 * A Particle is an object that is emitted by an emitter.
 *
 */
export default class Particle {
    /**
     * Constructs a Particle instance.
     *
     * @param {object} properties - The properties to instantiate the particle with
     * @property {number} properties.life - The particle's life
     * @property {number} properties.age - The particle's age
     * @property {number} properties.energy - The particle's energy loss
     * @property {boolean} properties.dead - Determines if the particle is dead or not
     * @property {boolean} properties.sleep - Determines if the particle is sleeping or not
     * @property {object} properties.target - The particle's target
     * @property {object} properties.body - The particle's body
     * @property {number} properties.mass - The particle's mass
     * @property {number} properties.radius - The particle's radius
     * @property {number} properties.alpha - The particle's alpha
     * @property {number} properties.scale - The particle's scale
     * @property {number} properties.rotation - The particle's rotation
     * @property {string|number} properties.color - The particle's color
     * @property {function} properties.easing - The particle's easing
     * @property {Vector3D} properties.position - The particle's position
     * @property {Vector3D} properties.velocity - The particle's velocity
     * @property {Vector3D} properties.acceleration - The particle's acceleration
     * @property {array} properties.behaviours - The particle's behaviours array
     * @property {object} properties.transform - The particle's transform collection
     * @return void
     */
    constructor(properties: object);
    /**
     * @desc The particle's unique id
     * @type {number}
     */
    id: number;
    /**
     * @desc The class type.
     * @type {string}
     */
    type: string;
    /**
     * @desc The particle's life
     * @type {number}
     */
    life: number;
    /**
     * @desc The particle's age
     * @type {number}
     */
    age: number;
    /**
     * @desc The particle's energy loss
     * @type {number}
     */
    energy: number;
    /**
     * @desc Determines if the particle is dead or not
     * @type {number}
     */
    dead: number;
    /**
     * @desc Determines if the particle is sleeping or not
     * @type {number}
     */
    sleep: number;
    /**
     * @desc The particle's body
     * @type {object}
     */
    body: object;
    /**
     * @desc The particle's parent
     * @type {?Emitter}
     */
    parent: Emitter;
    /**
     * @desc The particle's mass
     * @type {number}
     */
    mass: number;
    /**
     * @desc The particle's radius
     * @type {number}
     */
    radius: number;
    /**
     * @desc The particle's alpha
     * @type {number}
     */
    alpha: number;
    /**
     * @desc The particle's scale
     * @type {number}
     */
    scale: number;
    /**
     * @desc Determines whether to use color or not
     * @type {boolean}
     */
    useColor: boolean;
    /**
     * @desc Determines whether to use alpha or not
     * @type {boolean}
     */
    useAlpha: boolean;
    /**
     * @desc The particle's easing
     * @type {string}
     */
    easing: string;
    /**
     * @desc The particle's position
     * @type {Vector3D}
     */
    position: Vector3D;
    /**
     * @desc The particle's velocity
     * @type {Vector3D}
     */
    velocity: Vector3D;
    /**
     * @desc The particle's acceleration
     * @type {Vector3D}
     */
    acceleration: Vector3D;
    /**
     * @desc The particle's last position, velocity and acceleration
     * @type {Vector3D}
     */
    old: Vector3D;
    /**
     * @desc The particle's behaviours array
     * @type {array}
     */
    behaviours: any[];
    /**
     * @desc The particle's transform collection
     * @type {object}
     */
    transform: object;
    /**
     * @desc The particle's color store
     * @type {object}
     */
    color: object;
    /**
     * @desc The particle's rotation
     * @type {number}
     */
    rotation: number;
    /**
     * @desc The particle's distance to the camera, only set by the GPURenderer for depth sorting purposes.
     * @type {number}
     */
    distanceToCamera: number;
    /**
     * Gets the particle's current direction.
     *
     * @return {number}
     */
    getDirection(): number;
    /**
     * Resets the particle's default properties and clear's its particle's position,
     * velocity, acceleration, color and rotation. Also destroy's the particle's
     * transform collection & removes all behaviours.
     *
     * @return {Particle}
     */
    reset(): Particle;
    /**
     * Updates the particle's properties by applying each behaviour to the particle.
     * Will also update the particle's energy, unless it's age is greater than it's life
     * in which case it will be destroyed.
     *
     * @param {number} time - Integration time
     * @param {integer} index - Particle index
     * @return void
     */
    update(time: number, index: integer): void;
    /**
     * Adds a behaviour to the particle.
     *
     * @param {Behaviour} behaviour - The behaviour to add to the particle
     * @return void
     */
    addBehaviour(behaviour: Behaviour): void;
    /**
     * Adds multiple behaviours to the particle.
     *
     * @param {array<Behaviour>} behaviours - An array of behaviours to add to the particle
     * @return void
     */
    addBehaviours(behaviours: array<Behaviour>): void;
    /**
     * Removes the behaviour from the particle.
     *
     * @param {Behaviour} behaviour - The behaviour to remove from the particle
     * @return void
     */
    removeBehaviour(behaviour: Behaviour): void;
    /**
     * Removes all behaviours from the particle.
     *
     * @return void
     */
    removeAllBehaviours(): void;
    /**
     * Destroys the particle.
     *
     * @return void
     */
    destroy(): void;
}
import { Vector3D } from "../math";
//# sourceMappingURL=Particle.d.ts.map