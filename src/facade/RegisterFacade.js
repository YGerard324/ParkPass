class RegisterFacade {
  constructor(RegisterApplication) {
    this.RegisterApplication = RegisterApplication;
  }

  async add(data) {
    return await this.RegisterApplication.add(data);
  }
  async getById(id) {
    return await this.RegisterApplication.getById(id);
  }

  async getAll() {
    return await this.RegisterApplication.getAll();
  }

  async update(data) {
    return await this.RegisterApplication.update(data);
  }

  async delete(id) {
    return await this.RegisterApplication.delete(id);
  }
}

module.exports = RegisterFacade;
