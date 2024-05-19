class ClienteInterface {
  constructor(ClienteApplication) {
    this.ClienteApplication = ClienteApplication;
  }

  async add(admin) {
    return await this.ClienteApplication.add(admin);
  }
  async getById(code) {
    return await this.ClienteApplication.getById(code);
  }

  async getAll() {
    return await this.ClienteApplication.getAll();
  }

  async update(admin) {
    return await this.ClienteApplication.update(admin);
  }

  async delete(code) {
    return await this.ClienteApplication.delete(code);
  }
}

module.exports = ClienteInterface;
