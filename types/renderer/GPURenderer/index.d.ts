/**
 * Performant particle renderer that uses THREE.Points to propagate particle (postiion, rgba etc.,) properties to
 * vertices in a ParticleBufferGeometry.
 * Uses a dynamic texture atlas to support systems with mutliple sprites in a performant way.
 *
 * NOTE! This is an experimental renderer and is currently not covered by tests, coverage will be added when the API
 * is more stable. Currently only compatible with sprite/texture based systems. Meshes are not yet supported.
 *
 * @author thrax <manthrax@gmail.com>
 * @author rohan-deshpande <rohan@creativelifeform.com>
 */
export default class GPURenderer extends BaseRenderer {
    constructor(container: any, THREE: any, options?: {
        blending: string;
        baseColor: number;
        depthTest: boolean;
        depthWrite: boolean;
        transparent: boolean;
        maxParticles: number;
        shouldDebugTextureAtlas: boolean;
        shouldForceDesktopRenderer: boolean;
        shouldForceMobileRenderer: boolean;
    });
    isFloatingPointTextureSupported(): boolean;
}
import BaseRenderer from "../BaseRenderer";
//# sourceMappingURL=index.d.ts.map