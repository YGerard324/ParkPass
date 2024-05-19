const PagamentoRepositoryInterface = require("../interface/PagamentoRepositoryInterface");
const { Pagamento } = require("../data/dbContext");


class PagamentoRepository extends PagamentoRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {

    try {
      const row = await Pagamento.create(req);
      return row;
    } catch (error) {
      throw new Error("Erro ao criar um Pagamento");
    }
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [rowCount, update] = await Pagamento.update(body, {
        where: { id },
        returning: true,
      });
      if (rowCount === 0) throw new Error("Pagamento não encontrado");
      return update[0];
    } catch (error) {
      throw new Error("Erro ao atualizar o Pagamento");
    }
  }

  async delete(req) {
    const { id } = req;
    try {
      const deletedRow = await Pagamento.destroy({
        where: { id },
        returning: true,
      });
      if (deletedRow === 0) throw new Error("Pagamento não encontrado");
    } catch (error) {
      throw new Error("Erro ao excluir o Pagamento");
    }
  }

  async getById(id) {
    try {
      const get = await Pagamento.findOne({
        where: { id },
      });
      return get;
    } catch (error) {
      throw new Error("Erro ao encontrar o Pagamento");
    }
  }

  async getAll() {
    try {
      const rows = await Pagamento.findAll();
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

module.exports = PagamentoRepository;
