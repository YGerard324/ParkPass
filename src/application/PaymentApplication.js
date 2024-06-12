const PaymentFactory = require("../factory/PaymentFactory");
class PaymentApplication {
  constructor(paymentRepository, paymentTypeRepository, userRepository, parkingSpaceRepository) {
    this.paymentRepository = paymentRepository;
    this.paymentTypeRepository = paymentTypeRepository;
    this.userRepository = userRepository;
    this.parkingSpaceRepository = parkingSpaceRepository;
  }

   async add(data) {
    return await this.paymentRepository.add(data);
  }

  async getById(code) {
    return await this.paymentRepository.getById(code);
  }

  async getAll() {
    return await this.paymentRepository.getAll();
  }

  async update(data) {
    return await this.paymentRepository.update(data);
  }

  async delete(code) {
    return await this.paymentRepository.delete(code);
  }

  async registerPayment(data) {
    const { price, payment_type } = data;

    if (!price || !payment_type) {
      throw new Error("Missing required payment data");
    }

    const { value } = price;
    const { paymentType } = payment_type;

    if (!paymentType) {
      throw new Error("Missing payment type");
    }

    let paymentTypeId = await this.paymentTypeRepository.getById(paymentType);
    let paymentFactory = new PaymentFactory(paymentTypeId, value);
    let object = await paymentFactory.createPayment();

    return object;
  }

  async proofOfPayment() {}

  async makePayment() {
    let data = await this.registerPayment();
    return proofOfPayment(data);
  }
}

module.exports = PaymentApplication;
