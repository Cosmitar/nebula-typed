declare namespace _default {
    function addEventListener(system: System, onSystemUpdated: Function): Debug;
    function drawZone(THREE: any, system: System, container: any, zone?: Zone): void;
    function drawEmitter(THREE: any, system: any, container: any, emitter: any, color: string): void;
    function renderInfo(system: any, style: any): void;
    const addInfo: {
        new (style: any): {
            _infoCon: HTMLDivElement;
            _infoType: number;
        };
    };
}
export default _default;
//# sourceMappingURL=Debug.d.ts.map