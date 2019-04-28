interface cbAnyArray {
    (...param: any[]): void;
}
export declare class ZEvent {
    map: any;
    constructor();
    on(key: string, cb: cbAnyArray): void;
    off(key: string, cb: cbAnyArray): void;
    send(key: string, ...param: any[]): void;
}
export {};
