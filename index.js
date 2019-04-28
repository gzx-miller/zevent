"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Notifier = /** @class */ (function () {
    function Notifier() {
        this.callbacks = [];
    }
    Notifier.prototype.on = function (cb) {
        var index = this.callbacks.indexOf(cb);
        if (index < 0)
            this.callbacks.push(cb);
    };
    Notifier.prototype.off = function (cb) {
        if (cb)
            this.callbacks = this.callbacks.filter(function (icb) { return icb !== cb; });
        return this.callbacks.length;
    };
    Notifier.prototype.send = function () {
        var _this = this;
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        setTimeout(function () { return _this.callbacks.forEach(function (cb) { return cb && cb.apply(void 0, param); }); }, 0);
    };
    return Notifier;
}());
var ZEvent = /** @class */ (function () {
    function ZEvent() {
        this.map = new Map();
    }
    ;
    ZEvent.prototype.on = function (key, cb) {
        if (!key || !cb)
            return;
        var notifier = this.map[key];
        if (!notifier) {
            this.map[key] = new Notifier();
            notifier = this.map[key];
            notifier.on(cb);
        }
    };
    ;
    ZEvent.prototype.off = function (key, cb) {
        if (!key || !cb)
            return;
        var notifier = this.map[key];
        if (notifier) {
            var remain = notifier.off(cb);
            if (!remain)
                delete this.map[key];
        }
    };
    ;
    ZEvent.prototype.send = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        if (!key)
            return;
        var notifier = this.map[key];
        if (notifier) {
            notifier.send.apply(notifier, param);
        }
    };
    ;
    return ZEvent;
}());
exports.ZEvent = ZEvent;
//# sourceMappingURL=c:/CCode/nodejs/zevent/index.js.map