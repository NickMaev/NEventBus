var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var NEventBus = (function () {
    function NEventBus() {
    }
    NEventBus.fire = function (eventName, arg) {
        this.log("begin fire '" + eventName + "' with arg '" + arg + "'");
        var events = this.events.filter(function (x) { return x.name === eventName; });
        events.forEach(function (x) { return x.handler.apply(x.thisArg, [arg]); });
        this.log("end fire '" + eventName + "' with arg '" + arg + "'");
    };
    NEventBus.fireAsync = function (eventName, arg) {
        return __awaiter(this, void 0, void 0, function () {
            var events, i, event;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.log("begin fire '" + eventName + "' with arg '" + arg + "'");
                        events = this.events.filter(function (x) { return x.name === eventName; });
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < events.length)) return [3, 4];
                        event = events[i];
                        return [4, event.handler.apply(event.thisArg, [arg])];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4:
                        this.log("end fire '" + eventName + "' with arg '" + arg + "'");
                        return [2];
                }
            });
        });
    };
    NEventBus.subscribe = function (eventName, thisArg, handler) {
        this.events.push({ name: eventName, thisArg: thisArg, handler: handler });
        this.log("'" + thisArg + "' was subscribed to event '" + eventName + "' with handler '" + handler + "'");
    };
    NEventBus.unsubscribe = function (eventName, thisArg) {
        this.events = this.events.filter(function (x) { return x.name !== eventName && x.thisArg !== thisArg; });
        this.log("'" + thisArg + "' was unsubscribed from event '" + eventName + "'");
    };
    NEventBus.log = function (msg) {
        if (this.isDebug)
            console.log("EventBus: " + msg);
    };
    NEventBus.events = [];
    return NEventBus;
}());
export { NEventBus };
//# sourceMappingURL=NEventBus.js.map