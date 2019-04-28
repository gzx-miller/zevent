# zevent
very clear and  high performance event 
Welcome to the zevent wiki!

This is a clean and high performance event.

Firstly, install
npm zevent

Then, write code like this:

let event = new ZEvent();
let onEv1 = (a, b)=>{
    console.log("event coming: ev-1", a, b);
}
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

Console show:

event on: ev-1, onEv1
event send: ev-1 123, abc
event coming: ev-1 123 abc
event off: ev-1, onEv1
event send: ev-1 456, def
