class PaymentApplication {
  constructor(PaymentRepository) {
    this.PaymentRepository = PaymentRepository;
  }

  async add(data) {
    return await this.PaymentRepository.add(data);
  }
  async getById(code) {
    return await this.PaymentRepository.getById(code);
  }

  async getAll() {
    return await this.PaymentRepository.getAll();
  }

  async update(data) {
    return await this.PaymentRepository.update(data);
  }

  async delete(code) {
    return await this.PaymentRepository.delete(code);
  }

  async makePayment(data) {
    console.log("Data price:" , data.price.value);
    console.log("Payment_type:",data.payment_type.type);
    console.log("Payment id:", data.register.payment_id);
    return await this.PaymentFactory.createPayment(data);
  }

}

module.exports = PaymentApplication;
