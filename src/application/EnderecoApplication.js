class EnderecoApplication {
  constructor(EnderecoRepository) {
    this.EnderecoRepository = EnderecoRepository;
  }

  async add(admin) {
    return await this.EnderecoRepository.add(admin);
  }
  async getById(code) {
    return await this.EnderecoRepository.getById(code);
  }

  async getAll() {
    return await this.EnderecoRepository.getAll();
  }

  async update(admin) {
    return await this.EnderecoRepository.update(admin);
  }

  async delete(code) {
    return await this.EnderecoRepository.delete(code);
  }
}

module.exports = EnderecoApplication;
