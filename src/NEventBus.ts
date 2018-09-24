import { IEvent } from "./IEvent";

export class NEventBus {

    private static events: IEvent[] = [];

    public static isDebug: boolean;

    public static fire(eventName: string, arg: any) : void {
        this.log(`begin fire '${eventName}' with arg '${arg}'`);
        var events = this.events.filter(x => x.name === eventName);
        events.forEach(x => x.handler.apply(x.thisArg, [arg]));
        this.log(`end fire '${eventName}' with arg '${arg}'`);
    }

    public static async fireAsync(eventName: string, arg: any) : Promise<void> {
        this.log(`begin fire '${eventName}' with arg '${arg}'`);
        var events = this.events.filter(x => x.name === eventName);
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            await event.handler.apply(event.thisArg, [arg]);
        }
        this.log(`end fire '${eventName}' with arg '${arg}'`);
    }

    public static subscribe(eventName: string, thisArg: any, handler: Function) {
        this.events.push({ name: eventName, thisArg, handler } as IEvent);
        this.log(`'${thisArg}' was subscribed to event '${eventName}' with handler '${handler}'`);
    }

    public static unsubscribe(eventName: string, thisArg: any) {
        this.events = this.events.filter(x => x.name !== eventName && x.thisArg !== thisArg);
        this.log(`'${thisArg}' was unsubscribed from event '${eventName}'`);  
    }

    private static log(msg: string) {
        if (this.isDebug)
            console.log(`EventBus: ${msg}`);
    }
}