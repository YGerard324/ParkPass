const ParkingRepositoryInterface = require("../interface/ParkingRepositoryInterface");
const { Parking } = require("../data/dbContext");

class ParkingRepository extends ParkingRepositoryInterface {
  constructor() {
    super();
  }
  async add(req) {
    await Parking.create(req);
  }

  async getById(id) {
    const parking = await Parking.findOne({
      where: { id },
    });
    return parking;
  }

  async getAll() {
    const rows = await Parking.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await Parking.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    //const { id } = req;
    await Parking.destroy({
      where: { id },
      returning: true,
    });
  }
}

module.exports = ParkingRepository;
