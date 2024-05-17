const { TipoPagamento } = require("../data/dbContext");

class TipoPagamentoRepository {
  constructor() {}

  async add(tipoPagamento) {
    try {
      const row = await TipoPagamento.create(tipoPagamento);
      return row;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getTipoPagamentoById(id) {
    try {
      const row = await TipoPagamento(Sequelize, DataTypes).findByPk(id);
      return row;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getAll() {
    try {
      const rows = await TipoPagamento.findAll();
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

module.exports = TipoPagamentoRepository;
