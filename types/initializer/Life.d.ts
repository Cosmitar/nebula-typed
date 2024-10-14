/**
 * Sets the life property on initialized particles.
 *
 */
export default class Life extends Initializer {
  /**
   * Creates a Life initializer from JSON.
   *
   * @param {object} json - The JSON to construct the instance from.
   * @param {number} json.min - The minimum life time
   * @param {number} json.max - The maximum life time
   * @param {number} json.center - The center of the life time
   * @param {boolean} [json.isEnabled=true] - Determines if the initializer should be enabled or not
   * @return {Life}
   */
  static fromJSON(json: {
    min: number;
    max: number;
    center: number;
    isEnabled?: boolean;
  }): Life;
  static fromJSON(json: object): Behaviour;
  /**
   * Constructs a Life property instance.
   *
   * @param {number} min - The minimum life
   * @param {number} max - The maximum life
   * @param {boolean} [center] - Determines whether to average the life value
   * @param {boolean} [isEnabled=true] - Determines if the initializer should be enabled or not
   * @return void
   */
  constructor(min: number, max: number, center?: boolean, isEnabled?: boolean);
  /**
   * @desc The life span of the particle.
   * @type {Span}
   */
  lifePan: Span;
}
import { Behaviour } from '../behaviour';
import { Span } from '../math';
import Initializer from './Initializer';
//# sourceMappingURL=Life.d.ts.map
