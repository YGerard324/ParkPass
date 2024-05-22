class ClientApplication {
  constructor(ClientRepository) {
    this.ClientRepository = ClientRepository;
  }

  async add(data) {
    return await this.ClientRepository.add(data);
  }
  async getById(id) {
    return await this.ClientRepository.getById(id);
  }

  async getAll() {
    return await this.ClientRepository.getAll();
  }

  async update(data) {
    return await this.ClientRepository.update(data);
  }

  async delete(id) {
    return await this.ClientRepository.delete(id);
  }
}

module.exports = ClientApplication;
