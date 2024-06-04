class PaymentApplication {
  constructor(PaymentFactory) {
    this.PaymentFactory = PaymentFactory;
  }

  async getPaid(data) {
    return await this.PaymentFactory.createPayment(data);
  }
  async getById(code) {
    return await this.PaymentFactory.getById(code);
  }

  async getAll() {
    return await this.PaymentFactory.getAll();
  }

  async update(data) {
    return await this.PaymentFactory.update(data);
  }

  async delete(code) {
    return await this.PaymentFactory.delete(code);
  }

}

module.exports = PaymentApplication;
