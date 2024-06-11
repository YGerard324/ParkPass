class RegisterFacade {
  constructor(registerApplication) {
    this.registerApplication = registerApplication;
  }

  async add(data) {
    return await this.registerApplication.add(data);
  }
  async getById(id) {
    return await this.registerApplication.getById(id);
  }

  async getAll() {
    return await this.registerApplication.getAll();
  }

  async update(data) {
    return await this.registerApplication.update(data);
  }

  async delete(id) {
    return await this.registerApplication.delete(id);
  }
}

module.exports = RegisterFacade;
