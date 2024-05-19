class VagaInterface {
  constructor(VagaApplication) {
    this.VagaApplication = VagaApplication;
  }

  async add(admin) {
    return await this.VagaApplication.add(admin);
  }
  async getById(code) {
    return await this.VagaApplication.getById(code);
  }

  async getAll() {
    return await this.VagaApplication.getAll();
  }

  async update(admin) {
    return await this.VagaApplication.update(admin);
  }

  async delete(code) {
    return await this.VagaApplication.delete(code);
  }
}

module.exports = VagaInterface;
