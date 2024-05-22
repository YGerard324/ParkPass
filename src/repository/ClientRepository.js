const ClientRepositoryInterface = require("../interface/ClientRepositoryInterface");
const { Client } = require("../data/dbContext");

class ClientRepository extends ClientRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    await Client.create(req);
  }

  async getById(id) {
    const client = await Client.findOne({
      where: { id },
    });
    return client;
  }

  async getAll() {
    const rows = await Client.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await Client.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    //const { id } = req;
    await Client.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = ClientRepository;
