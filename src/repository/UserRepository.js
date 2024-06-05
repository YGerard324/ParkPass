const UserRepositoryInterface = require("../interface/UserRepositoryInterface");
const { User } = require("../data/dbContext");

class UserRepository extends UserRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    await User.create(req);
  }

  async getById(id) {
    const user = await User.findOne({
      where: { id },
    });
    return user;
  }

  async getAll() {
    const rows = await User.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await User.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    //const { id } = req;
    await User.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = UserRepository;
