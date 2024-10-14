/**
 * Class for storing items of mixed type and fetching a randomised
 * value from these items.
 *
 */
export default class ArraySpan extends Span {
    /**
     * Constructs an ArraySpan instance.
     *
     * @param {mixed|array<mixed>} items - Items
     * @return void
     */
    constructor(items: any[]);
    /**
     * @desc An array of colors
     * @type {array}
     */
    items: any[];
    /**
     * Gets a random item.
     *
     * @return {mixed}
     */
    getValue(): any;
}
export function createArraySpan(items: any): ArraySpan | null;
import Span from "./Span";
//# sourceMappingURL=ArraySpan.d.ts.map