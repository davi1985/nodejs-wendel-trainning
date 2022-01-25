const { deepEqual } = require("assert");

const database = require("./database");

const DEFAULT_ITEM_REGISTER = {
  id: 1,
  name: "Flash",
  power: "Speed",
};

describe("Heros manipulation", () => {
  it("should to search a hero using files", async () => {
    const expected = DEFAULT_ITEM_REGISTER;

    const [result] = await database.list(expected.id);

    deepEqual(result, expected);
  });

  // it("should register an hero using files", async () => {
  //

  //   ok(null, expected);
  // });
});
