const TipoPagamentoRepositoryInterface = require("../interface/TipoPagamentoRepositoryInterface");
const { TipoPagamento } = require("../data/dbContext");

class TipoPagamentoRepository extends TipoPagamentoRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    try {
      const row = await TipoPagamento.create(req);
      return row;
    } catch (error) {
      throw new Error("Erro ao criar um TipoPagamento");
    }
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [rowCount, update] = await TipoPagamento.update(body, {
        where: { id },
        returning: true,
      });
      if (rowCount === 0) throw new Error("TipoPagamento não encontrado");
      return update[0];
    } catch (error) {
      throw new Error("Erro ao atualizar o TipoPagamento");
    }
  }

  async delete(req) {
    const { id } = req;
    try {
      const deletedRow = await TipoPagamento.destroy({
        where: { id },
        returning: true,
      });
      if (deletedRow === 0) throw new Error("TipoPagamento não encontrado");
    } catch (error) {
      throw new Error("Erro ao excluir o TipoPagamento");
    }
  }

  async getById(id) {
    try {
      const get = await TipoPagamento.findOne({
        where: { id },
      });
      return get;
    } catch (error) {
      throw new Error("Erro ao encontrar o TipoPagamento");
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
