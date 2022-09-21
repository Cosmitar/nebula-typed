/**
 * Sets the body property to be a THREE.Sprite with a texture map on initialized particles.
 *
 */
export default class Texture extends Initializer {
    /**
     * Creates a Texture initializer from JSON.
     *
     * @param {object} json - The JSON to construct the instance from
     * @param {object} THREE - The Web GL API we are using eg., THREE
     * @param {Texture} json.loadedTexture - The loaded sprite texture
     * @param {object} json.materialProperties - The sprite material properties
     * @return {BodySprite}
     */
    static fromJSON(json: object, THREE: object): BodySprite;
    /**
     * Constructs an Texture initializer.
     *
     * @param {object} THREE - The Web GL API we are using eg., THREE
     * @param {string} texture - The sprite texture
     * @param {object|undefined} materialProperties - The sprite material properties
     * @param {?Texture} loadedTexture - Preloaded THREE.Texture instance
     */
    constructor(THREE: object, loadedTexture: Texture | null, materialProperties?: object | undefined, isEnabled?: boolean);
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
import Initializer from "./Initializer";
//# sourceMappingURL=Texture.d.ts.map