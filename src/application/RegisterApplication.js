class RegisterApplication {
  constructor(registerRepository) {
    this.registerRepository = registerRepository;
  }

  async add(data) {
    return await this.registerRepository.add(data);
  }
  async getById(id) {
    return await this.registerRepository.getById(id);
  }

  async getAll() {
    return await this.registerRepository.getAll();
  }

  async update(data) {
    return await this.registerRepository.update(data);
  }

  async delete(id) {
    return await this.registerRepository.delete(id);
  }
}

module.exports = RegisterApplication;
