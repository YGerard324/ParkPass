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
    const admin = await Admin.findOne({
      where: { id },
    });
    return admin;
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

  async delete(id) {
    //const { id } = req;
    await Admin.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = AdminRepository;
