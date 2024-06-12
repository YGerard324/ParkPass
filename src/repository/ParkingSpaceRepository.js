const ParkingSpaceRepositoryInterface = require("../interface/ParkingSpaceRepositoryInterface");
const { ParkingSpace } = require("../data/dbContext");

class ParkingSpaceRepository extends ParkingSpaceRepositoryInterface {
  constructor() {
    super();
  }

  async add(req) {
    await ParkingSpace.create(req);
  }

  async getById(id) {
    const parkingSpace = await ParkingSpace.findOne({
      where: { id },
    });
    return parkingSpace;
  }

  async getAll() {
    const rows = await ParkingSpace.findAll();
    return rows;
  }

  async update(req) {
    const { id } = req.params;
    const { body } = req;

    await ParkingSpace.update(body, {
      where: { id },
      returning: true,
    });
  }

  async delete(id) {
    //const { id } = req;
    await ParkingSpace.destroy({
      where: { id },
      returning: true,
    });
  }
}
module.exports = ParkingSpaceRepository;
