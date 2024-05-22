class ClientFacade {
  constructor(ClientApplication) {
    this.ClientApplication = ClientApplication;
  }

  async add(data) {
    return await this.ClientApplication.add(data);
  }
  async getById(id) {
    return await this.ClientApplication.getById(id);
  }

  async getAll() {
    return await this.ClientApplication.getAll();
  }

  async update(data) {
    return await this.ClientApplication.update(data);
  }

  async delete(id) {
    return await this.ClientApplication.delete(id);
  }
}

module.exports = ClientFacade;
