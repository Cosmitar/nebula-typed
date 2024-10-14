/**
 * Sets the body property to be a THREE.Sprite on initialized particles.
 *
 * NOTE The texture map MUST be set on the SpriteMaterial in the TextureLoader.load
 * callback. Not doing so will cause WebGL buffer errors.
 */
export default class BodySprite extends Initializer {
    /**
     * Creates a BodySprite initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from
     * @param {object} THREE - The Web GL API we are using eg., THREE
     * @param {string} json.texture - The sprite texture
     * @param {object} json.materialProperties - The sprite material properties
     * @return {BodySprite}
     */
    static fromJSON(json: object, THREE: object): BodySprite;
    static fromJSON(json: object): Behaviour;
    /**
     * Constructs a BodySprite initializer.
     *
     * @param {object} THREE - The Web GL API we are using eg., THREE
     * @param {string} texture - The sprite texture
     * @param {object} materialProperties - The sprite material properties
     * @throws {Error} If the TextureLoader fails to load the supplied texture
     * @return void
     */
    constructor(THREE: object, texture: string, materialProperties?: object, isEnabled?: boolean);
    /**
     * @desc The material properties for this object's SpriteMaterial
     * NOTE This is required for testing purposes
     * @type {object}
     */
    materialProperties: object;
    /**
     * @desc The texture for the THREE.SpriteMaterial map.
     * @type {Texture}
     */
    texture: Texture;
    /**
     * @desc THREE.SpriteMaterial instance.
     * @type {SpriteMaterial}
     */
    material: any;
    /**
     * @desc THREE.Sprite instance.
     * @type {Sprite}
     */
    sprite: any;
}
import { Behaviour } from "../behaviour";
import Initializer from "./Initializer";
import Texture from "./Texture";
//# sourceMappingURL=BodySprite.d.ts.map