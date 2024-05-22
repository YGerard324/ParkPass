class ParkingSpaceFacade {
  constructor(ParkingSpaceApplication) {
    this.ParkingSpaceApplication = ParkingSpaceApplication;
  }

  async add(data) {
    return await this.ParkingSpaceApplication.add(data);
  }
  async getById(id) {
    return await this.ParkingSpaceApplication.getById(id);
  }

  async getAll() {
    return await this.ParkingSpaceApplication.getAll();
  }

  async update(data) {
    return await this.ParkingSpaceApplication.update(data);
  }

  async delete(id) {
    return await this.ParkingSpaceApplication.delete(id);
  }
}

module.exports = ParkingSpaceFacade;
