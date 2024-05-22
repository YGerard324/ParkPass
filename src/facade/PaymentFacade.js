class PaymentFacade {
  constructor(PaymentApplication) {
    this.PaymentApplication = PaymentApplication;
  }

  async add(data) {
    return await this.PaymentApplication.add(data);
  }
  async getById(id) {
    return await this.PaymentApplication.getById(id);
  }

  async getAll() {
    return await this.PaymentApplication.getAll();
  }

  async update(data) {
    return await this.PaymentApplication.update(data);
  }

  async delete(id) {
    return await this.PaymentApplication.delete(id);
  }
}

module.exports = PaymentFacade;
