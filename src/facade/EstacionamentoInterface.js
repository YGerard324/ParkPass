class EstacionamentoInterface {
  constructor(EnderecoApplication) {
    this.EnderecoApplication = EnderecoApplication;
  }

  async add(admin) {
    return await this.EnderecoApplication.add(admin);
  }
  async getById(code) {
    return await this.EnderecoApplication.getById(code);
  }

  async getAll() {
    return await this.EnderecoApplication.getAll();
  }

  async update(admin) {
    return await this.EnderecoApplication.update(admin);
  }

  async delete(code) {
    return await this.EnderecoApplication.delete(code);
  }
}

module.exports = EstacionamentoInterface;
