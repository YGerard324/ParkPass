const AdminRepositoryInterface = require("../interface/AdminRepositoryInterface");
const { Admin } = require("../data/dbContext");

class AdminRepository extends AdminRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    try {
      const row = await Admin.create(req);
      return row;
    } catch (error) {
      throw new Error("Erro ao criar um admin");
    }
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    try {
      const [rowCount, update] = await Admin.update(body, {
        where: { id },
        returning: true,
      });

      if (rowCount === 0) {
        throw new Error("Admin não encontrado");
      }

      return updatedAdmin;
    } catch (error) {
      throw new Error(`Erro ao atualizar o admin: ${error.message}`);
    }
  }

  async delete(req) {
    const { id } = req;
    try {
      const deletedRow = await Admin.destroy({
        where: { id },
        returning: true,
      });
      if (deletedRow === 0) throw new Error("Admin não encontrado");
    } catch (error) {
      throw new Error("Erro ao excluir o admin");
    }
  }

  async getById(id) {
    try {
      const get = await Admin.findOne({
        where: { id },
      });
      return get;
    } catch (error) {
      throw new Error("Erro ao encontrar o admin");
    }
  }

  async getAll() {
    try {
      const rows = await Admin.findAll();
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

module.exports = AdminRepository;
