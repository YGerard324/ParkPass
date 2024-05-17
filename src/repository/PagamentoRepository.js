const { Pagamento } = require("../data/dbContext");

class PagamentoRepository {
  constructor() {}

  async add(pagamento) {
    try {
      const row = await Pagamento.create(pagamento);
      return row;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getPagamentoById(id) {
    try {
      const row = await Pagamento(Sequelize, DataTypes).findByPk(id);
      return row;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getAll() {
    try {
      const rows = await pagamento.findAll();
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

module.exports = PagamentoRepository;
