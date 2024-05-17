const { Vaga } = require("../data/dbContext");

class VagaRepository {
  constructor() {}

  async add(vaga) {
    try {
      const row = await Vaga.create(vaga);
      return row;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getVagaById(id) {
    try {
      const row = await Vaga(Sequelize, DataTypes).findByPk(id);
      return row;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getAll() {
    try {
      const rows = await Vaga.findAll();
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

module.exports = VagaRepository;
