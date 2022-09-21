export default class EventDispatcher {
    set listeners(arg: any);
    get listeners(): any;
    _listeners: any;
    addEventListener(type: any, listener: any): any;
    removeEventListener(type: any, listener: any): void;
    removeAllEventListeners(type: any): void;
    dispatchEvent(eventName: any, eventTarget: any): boolean;
    hasEventListener(type: any): boolean;
}
//# sourceMappingURL=EventDispatcher.d.ts.map