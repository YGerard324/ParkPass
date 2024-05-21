const RegistroRepositoryInterface = require("../interface/RegistroRepositoryInterface");
const { Registro } = require("../data/dbContext");


class RegistroRepository extends RegistroRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    try {
      const row = await Registro.create(req);
      return row;
    } catch (error) {
      throw new Error("Erro ao criar um Registro");
    }
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;    try {
      const [rowCount, update] = await Registro.update(body, {
        where: { id },
        returning: true,
      });
      if (rowCount === 0) throw new Error("Registro não encontrado");
      return update[0];
    } catch (error) {
      throw new Error("Erro ao atualizar o Registro");
    }
  }

  async delete(req) {
    const { id } = req;
    try {
      const deletedRow = await Registro.destroy({
        where: { id },
        returning: true,
      });
      if (deletedRow === 0) throw new Error("Registro não encontrado");
    } catch (error) {
      throw new Error("Erro ao excluir o Registro");
    }
  }

  async getById(id) {
    try {
      const get = await Registro.findOne({
        where: { id },
      });
      return get;
    } catch (error) {
      throw new Error("Erro ao encontrar o Registro");
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
