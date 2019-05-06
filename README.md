# zevent
very clear and  high performance event 

This is a clean and high performance event.

1. npm install zevent
2. write code refer to the ./exampl/test.js.

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
