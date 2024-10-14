/**
 * Sets the mass property on initialized particles.
 *
 */
export default class Mass extends Initializer {
  /**
   * Creates a Mass initializer from JSON.
   *
   * @param {object} json - The JSON to construct the instance from.
   * @property {number} json.min - The minimum mass
   * @property {number} json.max - The maximum mass
   * @property {number} json.center - The center of the mass
   * @return {Mass}
   */
  static fromJSON(json: object): Mass;
  static fromJSON(json: object): Behaviour;
  /**
   * Constructs a Mass initializer instance.
   *
   * @param {number} min - The minumum mass for the particle
   * @param {number} max - The maximum mass for the particle
   * @param {boolean} [center] - Determines whether to average the mass value
   * @return void
   */
  constructor(min: number, max: number, center?: boolean, isEnabled?: boolean);
  /**
   * @desc The mass span which is used to set the particle mass value.
   * @type {Span}
   */
  massPan: Span;
}
import { Behaviour } from '../behaviour';
import { Span } from '../math';
import Initializer from './Initializer';
//# sourceMappingURL=Mass.d.ts.map
