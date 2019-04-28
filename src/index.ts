interface cbAnyArray {
    (...param: any[]): void;
}

class Notifier {
    callbacks: cbAnyArray[];
    constructor() {
        this.callbacks = [] as any;
    }
    on(cb: cbAnyArray) {
        let index = this.callbacks.indexOf(cb);
        if (index < 0) this.callbacks.push(cb);
    }
    off(cb: cbAnyArray) {
        if (cb) this.callbacks = this.callbacks.filter(icb=>icb !== cb);
        return this.callbacks.length;
    }
    send(...param: any[]) {
        setTimeout(()=> this.callbacks.forEach(cb => cb && cb(...param)), 0);
    }
}

export class ZEvent {
    map: any;
    constructor(){
        this.map = new Map<string, Notifier>();
    };
    on(key: string, cb: cbAnyArray) {
        if (!key || !cb) return;
        let notifier = this.map[key];
        if (!notifier) {
            this.map[key] = new Notifier(); 
            notifier = this.map[key];
            notifier.on(cb);
        }
    };
    off(key: string, cb: cbAnyArray) {
        if (!key || !cb) return;
        let notifier = this.map[key];
        if (notifier) {
            let remain = notifier.off(cb);
            if (!remain) delete this.map[key];
        }
    };
    send(key: string, ...param: any[]) {
        if (!key) return;
        let notifier = this.map[key];
        if (notifier) {
            notifier.send(...param);
        }
    };
}