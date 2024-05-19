class RegistroInterface {
  constructor(RegistroApplication) {
    this.RegistroApplication = RegistroApplication;
  }

  async add(admin) {
    return await this.RegistroApplication.add(admin);
  }
  async getById(code) {
    return await this.RegistroApplication.getById(code);
  }

  async getAll() {
    return await this.RegistroApplication.getAll();
  }

  async update(admin) {
    return await this.RegistroApplication.update(admin);
  }

  async delete(code) {
    return await this.RegistroApplication.delete(code);
  }
}

module.exports = RegistroInterface;
