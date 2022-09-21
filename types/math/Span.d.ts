export default class Span {
    /**
     * Span Class. Get a random Number from a to b. Or from c-a to c+b
     * @param {Number|Array} a - min number
     * @param {Number} b - max number
     * @param {Number} center - the center's z value
     * @example
     * var span = new Span(0,30);
     * or
     * var span = new Span(["#fff","#ff0","#000"]);
     * or
     * var span = new Span(5,1,"center");
     * @extends {Zone}
     * @constructor
     */
    constructor(a: number | any[], b: number, center: number);
    _isArray: boolean;
    /**
     * @desc The class type.
     * @type {string}
     */
    type: string;
    a: any;
    b: any;
    _center: any;
    /**
     * Span.getValue function
     * @name get a random Number from a to b. Or get a random Number from c-a to c+b
     * @param {number} INT or int
     * @return {number} a random Number
     */
    getValue(INT: number): number;
}
export function createSpan(a: any, b: any, c: any): Span;
//# sourceMappingURL=Span.d.ts.map