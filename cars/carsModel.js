const db = require("../data/dbConfig.js");

module.exports = {
  add,
  update,
  remove,
  getAll,
  findById,
};

async function add(car) {
  return null;
}

async function update(id, changes) {
  return null;
}

async function remove(id) {
  return null;
}

async function getAll() {
  return db("cars");
}

async function findById() {
  return null;
}
