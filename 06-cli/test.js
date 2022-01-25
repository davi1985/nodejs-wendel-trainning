const { deepEqual } = require("assert");

const database = require("./database");

const DEFAULT_ITEM_REGISTER = {
  id: 1,
  name: "Flash",
  power: "Speed",
};

const DEFAULT_ITEM_UPDATE = {
  id: 2,
  name: "Laterna Verde",
  power: "Energia do Anel",
};

describe("Heros manipulation", () => {
  before(async () => {
    await database.register(DEFAULT_ITEM_REGISTER);
    await database.register(DEFAULT_ITEM_UPDATE);
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

  it.only("should update hero by id", async () => {
    const expected = {
      ...DEFAULT_ITEM_UPDATE,
      name: "Batman",
      power: "Money",
    };

    const newData = {
      name: "Batman",
      power: "Money",
    };

    await database.update(DEFAULT_ITEM_UPDATE.id, newData);

    const [result] = await database.list(DEFAULT_ITEM_UPDATE.id);

    deepEqual(result, expected);
  });
});
