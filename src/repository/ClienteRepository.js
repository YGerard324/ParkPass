const ClienteRepositoryInterface = require("../interface/ClienteRepositoryInterface");
const { Cliente } = require("../data/dbContext");

class ClienteRepository extends ClienteRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    try {
      const row = await Cliente.create(req);
      return row;
    } catch (error) {
      throw new Error("Erro ao criar um Cliente");
    }
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [rowCount, update] = await Cliente.update(body, {
        where: { id },
        returning: true,
      });
      if (rowCount === 0) throw new Error("Cliente não encontrado");
      return update[0];
    } catch (error) {
      throw new Error("Erro ao atualizar o Cliente");
    }
  }

  async delete(req) {
    const { id } = req;
    try {
      const deletedRow = await Cliente.destroy({
        where: { id },
        returning: true,
      });
      if (deletedRow === 0) throw new Error("Cliente não encontrado");
    } catch (error) {
      throw new Error("Erro ao excluir o Cliente");
    }
  }

  async getById(id) {
    try {
      const get = await Cliente.findOne({
        where: { id },
      });
      return get;
    } catch (error) {
      throw new Error("Erro ao encontrar o Cliente");
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
