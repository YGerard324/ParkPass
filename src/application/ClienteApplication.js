class ClienteApplication {
  constructor(ClienteRepository) {
    this.ClienteRepository = ClienteRepository;
  }

  async add(admin) {
    return await this.ClienteRepository.add(admin);
  }
  async getById(code) {
    return await this.ClienteRepository.getById(code);
  }

  async getAll() {
    return await this.ClienteRepository.getAll();
  }

  async update(admin) {
    return await this.ClienteRepository.update(admin);
  }

  async delete(code) {
    return await this.ClienteRepository.delete(code);
  }
}

module.exports = ClienteApplication;
