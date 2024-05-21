const VagaRepositoryInterface = require("../interface/VagaRepositoryInterface");
const { Vaga } = require("../data/dbContext");

class VagaRepository extends VagaRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    try {
      const row = await Vaga.create(req);
      return row;
    } catch (error) {
      throw new Error("Erro ao criar um Vaga");
    }
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [rowCount, update] = await Vaga.update(body, {
        where: { id },
        returning: true,
      });
      if (rowCount === 0) throw new Error("Vaga não encontrado");
      return update[0];
    } catch (error) {
      throw new Error("Erro ao atualizar o Vaga");
    }
  }

  async delete(req) {
    const { id } = req;
    try {
      const deletedRow = await Vaga.destroy({
        where: { id },
        returning: true,
      });
      if (deletedRow === 0) throw new Error("Vaga não encontrado");
    } catch (error) {
      throw new Error("Erro ao excluir o Vaga");
    }
  }

  async getById(id) {
    try {
      const get = await Vaga.findOne({
        where: { id },
      });
      return get;
    } catch (error) {
      throw new Error("Erro ao encontrar o Vaga");
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
