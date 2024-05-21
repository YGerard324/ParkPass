class VagaApplication {
  constructor(VagaRepository) {
    this.VagaRepository = VagaRepository;
  }

  async add(admin) {
    return await this.VagaRepository.add(admin);
  }
  async getById(code) {
    return await this.VagaRepository.getById(code);
  }

  async getAll() {
    return await this.VagaRepository.getAll();
  }

  async update(admin) {
    return await this.VagaRepository.update(admin);
  }

  async delete(code) {
    return await this.VagaRepository.delete(code);
  }
}

module.exports = VagaApplication;
