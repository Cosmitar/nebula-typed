/**
 * Dynamic texture atlas for performant support of systems with multiple emitters and textures.
 *
 */
export default class TextureAtlas {
    constructor(renderer: any, shouldDebug: any);
    ctx: CanvasRenderingContext2D;
    shouldDebug: any;
    rendererType: any;
    indexData: Float32Array;
    canvas: HTMLCanvasElement;
    entries: any[];
    atlasIndex: any;
    atlasTexture: any;
    /**
     * Logs to the console when in dev mode.
     *
     */
    log(...args: any[]): void;
    /**
     * Debugs the texture atlas by rendering it to a canvas in the DOM.
     *
     */
    debug(): void;
    /**
     * Adds a texture to the texture atlas and flags that the atlas needs to be updated.
     *
     */
    addTexture(texture: any): void;
    needsUpdate: boolean;
    /**
     * Updates the texture atlas. Will only rebuild the atlas if all images are loaded.
     *
     */
    update(): void;
    /**
     * Disposes of the textures used by the texture atlas.
     *
     * @return void
     */
    destroy(): void;
}
//# sourceMappingURL=index.d.ts.map