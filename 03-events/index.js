const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const eventName = "user:click";

myEmitter.on(eventName, (click) => {
  console.log("um usuário clicou", click);
});

// myEmitter.emit(eventName, "barra de rolagem");
// myEmitter.emit(eventName, "ok");

// let count = 0;

// setInterval(() => {
//   myEmitter.emit(eventName, "ok", count++);
// }, 1000);

const stdin = process.openStdin();

function main() {
  return new Promise((resolve, reject) => {
    stdin.addListener("data", (value) => {
      console.log(`Voce digitou: ${value.toString().trim()}`);

      return resolve(value);
    });
  });
}

main().then((result) => console.log(result.toString().trim()));
