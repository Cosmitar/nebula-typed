/**
 * GPURenderer for mobile devices that do not support floating point textures.
 *
 * @author thrax <manthrax@gmail.com>
 * @author rohan-deshpande <rohan@creativelifeform.com>
 */
export default class MobileGPURenderer extends BaseRenderer {
    constructor(container: any, three: any, options?: {
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
    three: any;
    camera: any;
    targetPool: Pool;
    uniqueList: UniqueList;
    particleBuffer: ParticleBuffer;
    buffer: THREE.InterleavedBuffer;
    stride: number;
    geometry: any;
    material: any;
    points: any;
    shouldDebugTextureAtlas: boolean;
    /**
     * Pools the particle target if it does not exist.
     * Updates the target and maps particle properties to the point.
     *
     * @param {Particle}
     */
    onParticleCreated(particle: any): void;
    /**
     * Maps particle properties to the point if the particle has a target.
     *
     * @param {Particle}
     */
    onParticleUpdate(particle: any): void;
    /**
     * Resets and clears the particle target.
     *
     * @param {Particle}
     */
    onParticleDead(particle: any): void;
    /**
     * Maps all mutable properties from the particle to the target.
     *
     * @param {Particle}
     * @return {GPURenderer}
     */
    updateTarget(particle: any): GPURenderer;
    /**
     * Entry point for mapping particle properties to buffer geometry points.
     *
     * @param {Particle} particle - The particle containing the properties to map
     * @return {GPURenderer}
     */
    mapParticleTargetPropsToPoint(particle: Particle): GPURenderer;
    /**
     * Updates the point's position according to the particle's target position.
     *
     * @param {Particle} particle - The particle containing the target position.
     * @return {GPURenderer}
     */
    updatePointPosition(particle: Particle): GPURenderer;
    /**
     * Updates the point's size relative to the particle's target scale and radius.
     *
     * @param {Particle} particle - The particle containing the target scale.
     * @return {GPURenderer}
     */
    updatePointSize(particle: Particle): GPURenderer;
    /**
     * Updates the point's rotation.
     *
     * @param {Particle} particle - The particle containing the target rotation.
     * @return {GPURenderer}
     */
    updatePointRotation(particle: Particle): GPURenderer;
    /**
     * Updates the point's color attribute according with the particle's target color.
     *
     * @param {Particle} particle - The particle containing the target color and alpha.
     * @return {GPURenderer}
     */
    updatePointColor(particle: Particle): GPURenderer;
    /**
     * Updates the point alpha attribute with the particle's target alpha.
     *
     * @param {Particle} particle - The particle containing the target alpha.
     * @return {GPURenderer}
     */
    updatePointAlpha(particle: Particle): GPURenderer;
    /**
     * Updates the point texture attribute with the particle's target texture.
     *
     * @param {Particle} particle - The particle containing the target texture.
     * @return {GPURenderer}
     */
    updatePointTextureIndex(particle: Particle): GPURenderer;
    getTextureID(texture: any, debug: any): any;
    textureAtlas: TextureAtlas;
    destroy(): void;
}
import BaseRenderer from "../../BaseRenderer";
import { Pool } from "../../../core";
import { UniqueList } from "../common";
import { ParticleBuffer } from "../common";
import { TextureAtlas } from "../common";
//# sourceMappingURL=index.d.ts.map