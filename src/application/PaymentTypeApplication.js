class PaymentTypeApplication {
  constructor(PaymentTypeFactory) {
    this.PaymentTypeFactory = PaymentTypeFactory;
  }

  async add(data) {
    return await this.PaymentTypeFactory.create(data);
  }
  async getById(id) {
    return await this.PaymentTypeFactory.getById(id);
  }

  async getAll() {
    return await this.PaymentTypeFactory.getAll();
  }

  async update(data) {
    return await this.PaymentTypeFactory.update(data);
  }

  async delete(id) {
    return await this.PaymentTypeFactory.delete(id);
  }
}

module.exports = PaymentTypeApplication;
