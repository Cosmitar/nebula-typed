import { System } from "../core";
import Zone from "../zone/Zone";

declare namespace Debug {
    function addEventListener(system: System, onSystemUpdated: Function): any;
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
export default Debug;
//# sourceMappingURL=Debug.d.ts.map