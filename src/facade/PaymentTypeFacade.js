class PaymentTypeFacade {
  constructor(PaymentTypeApplication) {
    this.PaymentTypeApplication = PaymentTypeApplication;
  }

  async add(data) {
    return await this.PaymentTypeApplication.add(data);
  }
  async getById(id) {
    return await this.PaymentTypeApplication.getById(id);
  }

  async getAll() {
    return await this.PaymentTypeApplication.getAll();
  }

  async update(data) {
    return await this.PaymentTypeApplication.update(data);
  }

  async delete(id) {
    return await this.PaymentTypeApplication.delete(id);
  }
}

module.exports = PaymentTypeFacade;
