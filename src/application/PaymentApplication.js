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
}

module.exports = PaymentApplication;
