class TipoPagamentoInterface {
  constructor(TipoPagamentoApplication) {
    this.TipoPagamentoApplication = TipoPagamentoApplication;
  }

  async add(admin) {
    return await this.TipoPagamentoApplication.add(admin);
  }
  async getById(code) {
    return await this.TipoPagamentoApplication.getById(code);
  }

  async getAll() {
    return await this.TipoPagamentoApplication.getAll();
  }

  async update(admin) {
    return await this.TipoPagamentoApplication.update(admin);
  }

  async delete(code) {
    return await this.TipoPagamentoApplication.delete(code);
  }
}

module.exports = TipoPagamentoInterface;
