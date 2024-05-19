class PagamentoApplication {
  constructor(PagamentoRepository) {
    this.PagamentoRepository = PagamentoRepository;
  }

  async add(admin) {
    return await this.PagamentoRepository.add(admin);
  }
  async getById(code) {
    return await this.PagamentoRepository.getById(code);
  }

  async getAll() {
    return await this.PagamentoRepository.getAll();
  }

  async update(admin) {
    return await this.PagamentoRepository.update(admin);
  }

  async delete(code) {
    return await this.PagamentoRepository.delete(code);
  }
}

module.exports = PagamentoApplication;
