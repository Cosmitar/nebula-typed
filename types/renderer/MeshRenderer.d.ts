/**
 * @requires THREE - { Mesh, BoxGeometry, MeshLambertMaterial }
 */
export default class MeshRenderer extends BaseRenderer {
    /**
     * @param {object} container - An Object3D container, usually a THREE.Scene
     * @param {object} THREE - THREE Api
     */
    constructor(container: object, THREE: object);
    container: any;
    _targetPool: Pool;
    _materialPool: Pool;
    _body: any;
    isThreeSprite(particle: any): any;
    onSystemUpdate(): void;
    rotate(particle: any): void;
    scale(particle: any): void;
}
import BaseRenderer from "./BaseRenderer";
import { Pool } from "../core";
//# sourceMappingURL=MeshRenderer.d.ts.map