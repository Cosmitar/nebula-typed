/**
 * Creates and provides performant buffers for mapping particle properties to geometry vertices.
 *
 * @author thrax <manthrax@gmail.com>
 * @author rohan-deshpande <rohan@creativelifeform.com>
 * @see https://threejs.org/examples/?q=buffe#webgl_buffergeometry_points_interleaved
 * @see https://threejs.org/examples/?q=points#webgl_custom_attributes_points
 */
export default class ParticleBuffer {
    constructor(maxParticles: number, three: any);
    maxParticles: number;
    /**
     * Creates the interleaved buffer that will be used to write data to the GPU.
     *
     * @return {ParticleBuffer}
     */
    createInterleavedBuffer(): ParticleBuffer;
    interleavedBuffer: any;
    /**
     * Sets the geometry's buffer attributes.
     *
     * NOTE Each attribute needs to be set at the right index in the buffer right after the previous
     * attribute that occupies a set amount of size in the buffer.
     *
     * @return {ParticleBufferGeometry}
     */
    createBufferGeometry(): ParticleBufferGeometry;
    geometry: any;
    /**
     * Gets the publicly accessible interleaved buffer.
     *
     * @return {THREE.InterleavedBuffer} buffers - The interleaved buffer
     */
    get buffer(): THREE.InterleavedBuffer;
    get stride(): number;
}
//# sourceMappingURL=index.d.ts.map