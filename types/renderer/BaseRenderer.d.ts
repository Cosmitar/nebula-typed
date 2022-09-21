export default class BaseRenderer {
    constructor(type?: string);
    /**
     * @desc The class type.
     * @type {string}
     */
    type: string;
    init(system: any): void;
    system: any;
    remove(): void;
    /**
     * @abstract
     */
    onParticleCreated(particle: any): void;
    /**
     * @abstract
     */
    onParticleUpdate(particle: any): void;
    /**
     * @abstract
     */
    onParticleDead(particle: any): void;
    /**
     * @abstract
     */
    onSystemUpdate(system: any): void;
    /**
     * Logs the renderer type being used when in development mode.
     *
     * @return void
     */
    logRendererType(): void;
}
//# sourceMappingURL=BaseRenderer.d.ts.map