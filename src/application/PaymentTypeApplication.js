class PaymentTypeApplication {
  constructor(PaymentTypeRepository) {
    this.PaymentTypeRepository = PaymentTypeRepository;
  }

  async add(data) {
    return await this.PaymentTypeRepository.add(data);
  }
  async getById(id) {
    return await this.PaymentTypeRepository.getById(id);
  }

  async getAll() {
    return await this.PaymentTypeRepository.getAll();
  }

  async update(data) {
    return await this.PaymentTypeRepository.update(data);
  }

  async delete(id) {
    return await this.PaymentTypeRepository.delete(id);
  }
}

module.exports = PaymentTypeApplication;
