class PaymentTypeFacade {
  constructor(paymentTypeApplication) {
    this.paymentTypeApplication = paymentTypeApplication;
  }

  async add(data) {
    return await this.paymentTypeApplication.add(data);
  }
  async getById(id) {
    return await this.paymentTypeApplication.getById(id);
  }

  async getAll() {
    return await this.paymentTypeApplication.getAll();
  }

  async update(data) {
    return await this.paymentTypeApplication.update(data);
  }

  async delete(id) {
    return await this.paymentTypeApplication.delete(id);
  }
}

module.exports = PaymentTypeFacade;
