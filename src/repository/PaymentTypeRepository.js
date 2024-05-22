const PaymentTypeRepositoryInterface = require("../interface/PaymentTypeRepositoryInterface");
const { PaymentType } = require("../data/dbContext");

class PaymentTypeRepository extends PaymentTypeRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    await PaymentType.create(req);
  }

  async getById(id) {
    await PaymentType.findOne({
      where: { id },
    });
  }

  async getAll() {
    const rows = await PaymentType.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await PaymentType.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(req) {
    const { id } = req;
    await PaymentType.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = PaymentTypeRepository;
