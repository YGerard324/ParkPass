class RegistroApplication {
  constructor(RegistroRepository) {
    this.RegistroRepository = RegistroRepository;
  }

  async add(admin) {
    return await this.RegistroRepository.add(admin);
  }
  async getById(code) {
    return await this.RegistroRepository.getById(code);
  }

  async getAll() {
    return await this.RegistroRepository.getAll();
  }

  async update(admin) {
    return await this.RegistroRepository.update(admin);
  }

  async delete(code) {
    return await this.RegistroRepository.delete(code);
  }
}

module.exports = RegistroApplication;
