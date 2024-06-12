const PaymentRepositoryInterface = require("../interface/PaymentRepositoryInterface");
const { Payment } = require("../data/dbContext");

class PaymentRepository extends PaymentRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    await Payment.create(req);
  }

  async getById(id) {
    const payment = await Payment.findOne({
      where: { id },
    });
    return payment;
  }

  async getAll() {
    const rows = await Payment.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await Payment.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    //const { id } = req;
    await Payment.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = PaymentRepository;
