class TipoPagamentoApplication {
  constructor(TipoPagamentoRepository) {
    this.TipoPagamentoRepository = TipoPagamentoRepository;
  }

  async add(admin) {
    return await this.TipoPagamentoRepository.add(admin);
  }
  async getById(code) {
    return await this.TipoPagamentoRepository.getById(code);
  }

  async getAll() {
    return await this.TipoPagamentoRepository.getAll();
  }

  async update(admin) {
    return await this.TipoPagamentoRepository.update(admin);
  }

  async delete(code) {
    return await this.TipoPagamentoRepository.delete(code);
  }
}

module.exports = TipoPagamentoApplication;
