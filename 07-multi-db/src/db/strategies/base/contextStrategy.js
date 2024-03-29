const ICrud = require("../interfaces/interface-crud");

class ContextStrategy extends ICrud {
  constructor(strategy) {
    super();

    this._database = strategy;
  }

  create(item) {
    this._database.create(item);
  }

  read(item) {
    this._database.read(item);
  }

  update(id, item) {
    return this._database.update(id, item);
  }

  delete(id) {
    return this._database.delete(id);
  }
}

module.exports = ContextStrategy;
