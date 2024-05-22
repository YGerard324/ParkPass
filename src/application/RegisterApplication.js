class RegisterApplication {
  constructor(RegisterRepository) {
    this.RegisterRepository = RegisterRepository;
  }

  async add(data) {
    return await this.RegisterRepository.add(data);
  }
  async getById(id) {
    return await this.RegisterRepository.getById(id);
  }

  async getAll() {
    return await this.RegisterRepository.getAll();
  }

  async update(data) {
    return await this.RegisterRepository.update(data);
  }

  async delete(id) {
    return await this.RegisterRepository.delete(id);
  }
}

module.exports = RegisterApplication;
