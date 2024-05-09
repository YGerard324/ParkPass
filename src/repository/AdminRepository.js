const { Admin } = require("../data/dbContext");

class AdminRepository {
  constructor() {}

  async add(admin) {
    try {
      const row = await Admin.create(admin);
      return row;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getAdminById(id) {
    try {
      const row = await Admin(Sequelize, DataTypes).findByPk(id);
      return row;
    } catch (err) {
      console.error(err);
      throw err;
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
