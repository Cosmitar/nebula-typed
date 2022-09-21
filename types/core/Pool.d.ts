/**
 * An object pool implementation. Used for pooling objects to avoid unnecessary
 * garbage collection.
 *
 */
export default class Pool {
    /**
     * @desc The class type.
     * @type {string}
     */
    type: string;
    /**
     * @desc Incrementing id that keeps a count of the number of objects created
     * @type {integer}
     */
    cID: integer;
    /**
     * @desc Map of pools in the format of PUID<String>: pool<Array>
     * @type {object}
     */
    list: object;
    /**
     * Attempts to create a new object either by creating a new instance or calling its
     * clone method.
     *
     * TODO COVERAGE - for the constructorArgs
     * @param {function|object} functionOrObject - The object to instantiate or clone
     * @return {object|undefined}
     */
    create(functionOrObject: Function | object, ...constructorArgs: any[]): object | undefined;
    /**
     * Determines if the object is able to be instantiated or not.
     *
     * @param {object} object - The object to check
     * @return {boolean}
     */
    canInstantiateObject(object: object): boolean;
    /**
     * Determines if the object is able to be cloned or not.
     *
     * @param {object} object - The object to check
     * @return {boolean}
     */
    canCloneObject(object: object): boolean;
    /**
     * Determines if a new object is able to be created.
     *
     * @param {object} object - The object to check
     * @return {boolean}
     */
    canCreateNewObject(object: object): boolean;
    /**
     * Gets a count of all objects in the pool.
     *
     * @return {integer}
     */
    getCount(): integer;
    /**
     * Gets an object either by creating a new one or retrieving it from the pool.
     *
     * @param {function|object} obj - The function or object to get
     * @param {array} args - The args to pass to the function on creation
     * @return {object}
     */
    get(obj: Function | object, ...args: any[]): object;
    /**
     * Pushes an object into the pool.
     *
     * @param {object} obj - The object to expire
     * @return {integer}
     */
    expire(obj: object): integer;
    /**
     * Destroys all pools.
     *
     * @return void
     */
    destroy(): void;
    /**
     * Gets the pool mapped to the UID.
     *
     * @param {string} uid - The pool uid
     * @return {array}
     */
    _getList(uid: string): any[];
}
//# sourceMappingURL=Pool.d.ts.map