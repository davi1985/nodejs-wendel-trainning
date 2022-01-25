const service = require("./service");

async function main() {
  try {
    const result = await service.getPeople("a");

    const names = [];

    console.time("for-time");
    for (let i = 0; i < result.results.length; i++) {
      const person = result.results[i];
      names.push(person.name);
    }

    console.timeEnd("for-time");

    console.time("for-in-time");
    for (let i in result.results) {
      const person = result.results[i];

      names.push(person.name);
    }
    console.timeEnd("for-in-time");

    console.time("for-of-time");
    for (person of result.results) {
      names.push(person.name);
    }
    console.timeEnd("for-of-time");

    console.log(names);
  } catch (error) {
    console.error("error", error);
  }
}

main();
