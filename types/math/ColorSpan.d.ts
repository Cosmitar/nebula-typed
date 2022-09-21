/**
 * Class for storing and interacting with an array of colours.
 *
 */
export default class ColorSpan extends Span {
    /**
     * Constructs a ColorSpan instance.
     *
     * @param {string|array<string>} colors - A color or array of colors. If the
     * string 'random' is provided, a random color will be returned from getValue
     * @return void
     */
    constructor(colors: string | array<string>);
    /**
     * @desc Determines if a random color should be returned from the getValue method.
     * @type {boolean}
     */
    shouldRandomize: boolean;
    /**
     * @desc An array of colors to select from
     * @type {array<string>}
     */
    colors: array<string>;
    /**
     * Gets a color from the color array
     * or a random color if this.shouldRandomize is true.
     *
     * @return {string} a hex color
     */
    getValue(): string;
}
export function createColorSpan(colors: mixed): ColorSpan | null;
import Span from "./Span";
//# sourceMappingURL=ColorSpan.d.ts.map