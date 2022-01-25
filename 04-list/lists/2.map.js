const service = require("./service");

Array.prototype.myMap = function (callback) {
  const newArrayMapped = [];

  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i);

    newArrayMapped.push(result);
  }

  return newArrayMapped;
};

async function main() {
  try {
    const results = await service.getPeople("a");
    // const names = [];

    // results.results.forEach((item) => {
    //   names.push(item.name);
    // });

    // const names = results.results.map((item) => item.name);

    const names = results.results.myMap(
      (person, index) => `[${index + 1}] - ${person.name}`
    );

    console.log("names", names);
  } catch (error) {
    console.log("error", error);
  }
}

main();
