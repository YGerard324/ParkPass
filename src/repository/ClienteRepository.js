const ClienteRepositoryInterface = require("../interface/ClienteRepositoryInterface");
const { Cliente } = require("../data/dbContext");

class ClienteRepository extends ClienteRepositoryInterface {
  constructor() {
    super();
  }

  async add(cliente) {
    try {
      const row = await Cliente.create(cliente);
      return row;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getById(id) {
    try {
      const row = await Cliente(Sequelize, DataTypes).findByPk(id);
      return row;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getAll() {
    try {
      const rows = await Cliente.findAll();
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

module.exports = ClienteRepository;
