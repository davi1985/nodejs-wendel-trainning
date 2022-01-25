const { get } = require("axios");

const URL = "https://swapi.dev/api/people";

async function getPersons(name) {
  const result = await get(`${URL}/?search=${name}&format=json`);

  return result.data.results.map(personsMapped);
}

function personsMapped(item) {
  return {
    name: item.name,
    weight: item.height,
  };
}

module.exports = { getPersons };
