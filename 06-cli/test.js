const { deepEqual } = require("assert");

const database = require("./database");

const DEFAULT_ITEM_REGISTER = {
  id: 1,
  name: "Flash",
  power: "Speed",
};

describe("Heros manipulation", () => {
  before(async () => {
    await database.register(DEFAULT_ITEM_REGISTER);
  });

  it("should to search a hero using files", async () => {
    const expected = DEFAULT_ITEM_REGISTER;

    const [result] = await database.list(expected.id);

    deepEqual(result, expected);
  });

  it("should register an hero using files", async () => {
    const expected = DEFAULT_ITEM_REGISTER;

    const result = await database.register(DEFAULT_ITEM_REGISTER);

    const [data] = await database.list(DEFAULT_ITEM_REGISTER.id);

    deepEqual(data, expected);
  });

  it("should remove hero by id", async () => {
    const expected = true;

    const result = await database.remove(DEFAULT_ITEM_REGISTER.id);

    deepEqual(result, expected);
  });
});
