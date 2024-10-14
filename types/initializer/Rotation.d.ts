/**
 * Sets the rotation property on initialized particles.
 *
 */
export default class Rotation extends Initializer {
  static fromJSON(json: any): Rotation;
  static fromJSON(json: object): Behaviour;
  /**
   * Constructs a Rotation property instance.
   *
   * @param {number} x - X axis rotation
   * @param {number} y - Y axis rotation
   * @param {number} z - Z axis rotation
   * @param {boolean} [useEmitterRotation=true] - Determines if we should use the emitter's rotation as the starting rotation
   * @param {boolean} [isEnabled=true] - Determines if the initializer should be enabled or not
   * @return void
   */
  constructor(
    x: number,
    y: number,
    z: number,
    useEmitterRotation?: boolean,
    isEnabled?: boolean
  );
  rotation: Vector3;
  useEmitterRotation: boolean;
}
import Initializer from './Initializer';
import { Vector3 } from '../core/three';
import { Behaviour } from '../behaviour';
//# sourceMappingURL=Rotation.d.ts.map
