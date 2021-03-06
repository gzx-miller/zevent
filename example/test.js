let { ZEvent } = require('../index');

let ev1 = "ev-1";
let onEv1 = (a, b)=>{
    console.log("event coming: ev-1", a, b);
}

let event = new ZEvent();

console.log("event on: ev-1, onEv1");
event.on(ev1, onEv1);

console.log("event send: ev-1 123, abc");
event.send(ev1, 123, "abc");

setTimeout(() => {
    console.log("event off: ev-1, onEv1");
    event.off(ev1, onEv1);

    console.log("event send: ev-1 456, def");
    event.send(ev1, 456, "def");
}, 200);
