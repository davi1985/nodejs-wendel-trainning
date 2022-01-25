const assert = require("assert");
const { getPersons } = require("./service");

describe("Star Wars Tests", () => {
  it("should get the r2d2 with correct format", async () => {
    const expected = [{ name: "R2D2", height: "96" }];

    const nameBase = `r2-d2`;

    constresult = await getPersons(nameBase);

    assert.deepEqual(result, expected);
  });
});
