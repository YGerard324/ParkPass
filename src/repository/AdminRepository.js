const AdminRepositoryInterface = require("../interface/AdminRepositoryInterface");
const { Admin } = require("../data/dbContext");

class AdminRepository extends AdminRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    await Admin.create(req);
  }

  async getById(id) {
    await Admin.findOne({
      where: { id },
    });
  }

  async getAll() {
    const rows = await Admin.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await Admin.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(req) {
    const { id } = req;
    await Admin.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = AdminRepository;
