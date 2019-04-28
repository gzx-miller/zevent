let { ZEvent } = require('../index');

let ev1 = "ev-1";

let main = () => {
    let event = new ZEvent();
    let onEv1 = (a, b)=>{
        console.log(`event coming: ${ev1}`, a, b);
    }
    console.log(`event on: ${ev1}, onEv1`);
    event.on(ev1, onEv1);

    console.log(`event send: ${ev1} 123, abc`);
    event.send(ev1, 123, "abc");

    setTimeout(() => {
        console.log(`event off: ${ev1}, onEv1`);
        event.off(ev1, onEv1);

        console.log(`event send: ${ev1} 456, def`);
        event.send(ev1, 456, "def");
    }, 200);
}

main();