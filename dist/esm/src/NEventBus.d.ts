export declare class NEventBus {
    private static events;
    static isDebug: boolean;
    static fire(eventName: string, arg: any): void;
    static fireAsync(eventName: string, arg: any): Promise<void>;
    static subscribe(eventName: string, thisArg: any, handler: Function): void;
    static unsubscribe(eventName: string, thisArg: any): void;
    private static log;
}
