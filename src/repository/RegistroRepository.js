const { Registro } = require("../data/dbContext");

class RegistroRepository {
  constructor() {}

  async add(registro) {
    try {
      const row = await Registro.create(registro);
      return row;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getRegistroById(id) {
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
