/**
 * Sets the velocity property on initialized particles.
 *
 */
export default class RadialVelocity extends Velocity {
  /**
   * Creates a RadialVelocity initializer from JSON.
   *
   * @param {object} json - The JSON to construct the instance from.
   * @param {number} json.radius - The velocity radius
   * @param {number} json.x - The velocity x axis direction
   * @param {number} json.y - The velocity y axis direction
   * @param {number} json.z - The velocity z axis direction
   * @param {number} json.theta - The velocity theta
   * @return {RadialVelocity}
   */
  static fromJSON(json: {
    radius: number;
    x: number;
    y: number;
    z: number;
    theta: number;
  }): RadialVelocity;
  static fromJSON(json: object): Behaviour;
  /**
   * Constructs a RadialVelocity initializer.
   *
   * @param {number|Span} radius - The velocity radius
   * @param {Vector3D} vector3d - The directional vector for the velocity
   * @param {number} theta - The theta angle to use
   * @return void
   */
  constructor(
    radius: number | Span,
    vector3d: Vector3D,
    theta: number,
    isEnabled?: boolean
  );
  /**
   * @desc Velocity radius span.
   * @type {Span}
   */
  radiusPan: Span;
  /**
   * @desc Direction vector.
   * @type {Vector3D}
   */
  dir: Vector3D;
  /**
   * @desc Theta.
   * @type {number}
   */
  tha: number;
  /**
   * @desc Determines whether to use the directional vector or not.
   * @type {boolean}
   */
  _useV: boolean;
}
import Velocity from './Velocity';
import { Span, Vector3D } from '../../math';
import { Behaviour } from '../../behaviour';
//# sourceMappingURL=RadialVelocity.d.ts.map
