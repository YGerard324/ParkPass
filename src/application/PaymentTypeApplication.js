class PaymentTypeApplication {
  constructor(paymentTypeRepository) {
    this.paymentTypeRepository = paymentTypeRepository;
  }

  async add(data) {
    return await this.paymentTypeRepository.create(data);
  }
  async getById(id) {
    return await this.paymentTypeRepository.getById(id);
  }

  async getAll() {
    return await this.paymentTypeRepository.getAll();
  }

  async update(data) {
    return await this.paymentTypeRepository.update(data);
  }

  async delete(id) {
    return await this.paymentTypeRepository.delete(id);
  }
}

module.exports = PaymentTypeApplication;
