export default class FollowEmitter extends Emitter {
    /**
     * The FollowEmitter class inherits from System.Emitter
     *
     * use the FollowEmitter will emit particle when mousemoving
     *
     * @class System.FollowEmitter
     * @constructor
     * @param {Element} mouseTarget mouseevent's target;
     * @param {Number} ease the easing of following speed;
     * @default 0.7
     * @param {Object} pObj the parameters object;
     */
    constructor(mouseTarget: Element, ease: number, pObj: any);
    mouseTarget: any;
    ease: any;
    _allowEmitting: boolean;
    initEventHandler(): void;
    mousemoveHandler: (e: any) => void;
    mousedownHandler: (e: any) => void;
    mouseupHandler: (e: any) => void;
    /**
     * start emit particle
     * @method emit
     */
    emit(): void;
    setCameraAndCanvas(camera: any, canvas: any): void;
    camera: any;
    canvas: any;
    mousemove(e: any): void;
}
import Emitter from "./Emitter";
//# sourceMappingURL=FollowEmitter.d.ts.map