const RegisterFacade = require("../facade/RegisterFacade");
const PaymentFactory = require("../factory/PaymentFactory");
const RegisterFactory = require("../factory/RegisterFactory");

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

    const { price, payment_type, register } = data;
    const { value } = price;
    const { type } = payment_type;
    const { entry, exit , parking_space_id, user_id, payment_id } = register;

    await new RegisterFactory(entry, exit, parking_space_id, user_id);
    await new PaymentFactory(type, value).createPayment();
  }
}



module.exports = PaymentApplication;
