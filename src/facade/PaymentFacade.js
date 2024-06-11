class PaymentFacade {
  constructor(paymentApplication) {
    this.paymentApplication = paymentApplication;
  }

  async add(data) {
    return await this.paymentApplication.add(data);
  }
  async getById(id) {
    return await this.paymentApplication.getById(id);
  }

  async getAll() {
    return await this.paymentApplication.getAll();
  }

  async update(data) {
    return await this.paymentApplication.update(data);
  }

  async delete(id) {
    return await this.paymentApplication.delete(id);
  }

  async registerPayment(data) {
    return await this.paymentApplication.registerPayment(data);
  }
}

module.exports = PaymentFacade;
