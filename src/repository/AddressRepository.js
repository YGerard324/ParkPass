const AddressRepositoryInterface = require("../interface/AddressRepositoryInterface");
const { Address } = require("../data/dbContext");

class AddressRepository extends AddressRepositoryInterface {
  constructor() {
    super();
  }
  async add(req) {
    await Address.create(req);
  }

  async getById(id) {
    const address = await Address.findOne({
      where: { id },
    });
    return address;
  }

  async getAll() {
    const rows = await Address.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await Address.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    //const { id } = req;
    await Address.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = AddressRepository;
