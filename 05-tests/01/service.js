const { get } = require("axios");

const URL = "https://swapi.dev/api/people";

async function getPersons(name) {
  const results = await get(`${URL}/?search=${name}&format=json`);

  return results.data;
}

module.exports = { getPersons };
