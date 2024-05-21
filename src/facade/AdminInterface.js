class AdminInterface {
  constructor(AdminApplication) {
    this.AdminApplication = AdminApplication;
  }

  async add(admin) {
    return await this.AdminApplication.add(admin);
  }
  async getById(code) {
    return await this.AdminApplication.getById(code);
  }

  async getAll() {
    return await this.AdminApplication.getAll();
  }

  async update(admin) {
    return await this.AdminApplication.update(admin);
  }

  async delete(code) {
    return await this.AdminApplication.delete(code);
  }
}

module.exports = AdminInterface;
