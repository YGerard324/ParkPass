const RegisterRepositoryInterface = require("../interface/RegisterRepositoryInterface");
const { Register } = require("../data/dbContext");

class RegisterRepository extends RegisterRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    await Register.create(req);
  }

  async getById(id) {
    const register =await Register.findOne({
      where: { id },
    });
    return register;
  }

  async getAll() {
    const rows = await Register.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await Register.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    //const { id } = req;
    await Register.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = RegisterRepository;
