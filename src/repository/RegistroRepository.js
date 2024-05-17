const RegistroRepositoryInterface = require("../interface/RegistroRepositoryInterface");
const { Registro } = require("../data/dbContext");


class RegistroRepository extends RegistroRepositoryInterface {
  constructor() {
    super();
  }

  async add(registro) {
    try {
      const row = await Registro.create(registro);
      return row;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getById(id) {
    try {
      const row = await Registro(Sequelize, DataTypes).findByPk(id);
      return row;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getAll() {
    try {
      const rows = await Registro.findAll();
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

module.exports = RegistroRepository;
