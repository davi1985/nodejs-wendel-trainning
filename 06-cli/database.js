const { readFile } = require("fs");
const { promisify } = require("util");

const readFileAsync = promisify(readFile);

class Database {
  constructor() {
    this.FILE_NAME = "heros.json";
  }

  async getDataFromFile() {
    const file = await readFileAsync(this.FILE_NAME, "utf8");

    return JSON.parse(file.toString());
  }

  writeInFile() {}

  async list(id) {
    const data = await this.getDataFromFile();

    const filteredData = data.filter((item) => (id ? item.id === id : true));

    return filteredData;
  }
}

module.exports = new Database();
