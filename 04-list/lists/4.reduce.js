const { getPeople } = require("./service");

Array.prototype.myReduce = function (callback, initialValue) {
  let finalValue = typeof initialValue !== undefined ? initialValue : this[0];

  for (let i = 0; i <= this.length - 1; i++) {
    finalValue = callback(finalValue, this[i], this);
  }

  return finalValue;
};

async function main() {
  try {
    const { results } = await getPeople("a");

    const heights = results.map((item) => parseInt(item.height));

    // const total = heights.reduce((previous, next) => {
    //   return previous + next;
    // }, 0);

    const myList = [
      ["Eric", "Wendel"],
      ["NodeBR", "Nerdzão"],
    ];

    const total = myList
      .myReduce((previous, next) => {
        return previous.concat(next);
      }, [])
      .join(",");

    console.log("total", total);
  } catch (error) {
    console.error("deu ruim", error);
  }
}

main();
