/**
 * Map of particle IDs to integer ids
 */
export class UniqueList {
    constructor(max?: number);
    max: number;
    count: number;
    _items: {};
    add(item: any): void;
    find(item: any): any;
    destroy(): void;
}
//# sourceMappingURL=UniqueList.d.ts.map