const EstacionamentoRepositoryInterface = require("../interface/EstacionamentoRepositoryInterface");
const { Estacionamento } = require("../data/dbContext"); 

class EstacionamentoRepository extends EstacionamentoRepositoryInterface  {
  constructor() {
    super();
  }  
  async add(req) {
    try {
      const row = await Estacionamento.create(req);
      return row;
    } catch (error) {
      throw new Error("Erro ao criar um Estacionamento");
    }
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [rowCount, update] = await Estacionamento.update(body, {
        where: { id },
        returning: true,
      });
      if (rowCount === 0) throw new Error("Estacionamento não encontrado");
      return update[0];
    } catch (error) {
      throw new Error("Erro ao atualizar o Estacionamento");
    }
  }

  async delete(req) {
    const { id } = req;
    try {
      const deletedRow = await Estacionamento.destroy({
        where: { id },
        returning: true,
      });
      if (deletedRow === 0) throw new Error("Estacionamento não encontrado");
    } catch (error) {
      throw new Error("Erro ao excluir o Estacionamento");
    }
  }

  async getById(id) {
    try {
      const get = await Estacionamento.findOne({
        where: { id },
      });
      return get;
    } catch (error) {
      throw new Error("Erro ao encontrar o Estacionamento");
    }
  }

  async getAll() {
    try {
      const rows = await Estacionamento.findAll();
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

module.exports = EstacionamentoRepository;
