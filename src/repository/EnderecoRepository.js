const EnderecoRepositoryInterface = require("../interface/EnderecoRepositoryInterface");
const { Endereco } = require('../data/dbContext'); 

class EnderecoRepository extends EnderecoRepositoryInterface {
  constructor() {
    super();
  }
  async add(req) {
    try {
      const row = await Endereco.create(req);
      return row;
    } catch (error) {
      throw new Error("Erro ao criar um Endereco");
    }
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;
    try {
      const [rowCount, update] = await Endereco.update(body, {
        where: { id },
        returning: true,
      });
      if (rowCount === 0) throw new Error("Endereco não encontrado");
      return update[0];
    } catch (error) {
      throw new Error("Erro ao atualizar o Endereco");
    }
  }

  async delete(req) {
    const { id } = req;
    try {
      const deletedRow = await Endereco.destroy({
        where: { id },
        returning: true,
      });
      if (deletedRow === 0) throw new Error("Endereco não encontrado");
    } catch (error) {
      throw new Error("Erro ao excluir o Endereco");
    }
  }

  async getById(id) {
    try {
      const get = await Endereco.findOne({
        where: { id },
      });
      return get;
    } catch (error) {
      throw new Error("Erro ao encontrar o Endereco");
    }
  }

  async getAll() {
    try {
      const rows = await Endereco.findAll();
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}


module.exports = EnderecoRepository;