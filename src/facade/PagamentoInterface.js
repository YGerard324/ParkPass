class PagamentoInterface {
  constructor(PagamentoApplication) {
    this.PagamentoApplication = PagamentoApplication;
  }

  async add(admin) {
    return await this.PagamentoApplication.add(admin);
  }
  async getById(code) {
    return await this.PagamentoApplication.getById(code);
  }

  async getAll() {
    return await this.PagamentoApplication.getAll();
  }

  async update(admin) {
    return await this.PagamentoApplication.update(admin);
  }

  async delete(code) {
    return await this.PagamentoApplication.delete(code);
  }
}

module.exports = PagamentoInterface;
