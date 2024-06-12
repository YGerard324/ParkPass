class ParkingSpaceFacade {
  constructor(parkingSpaceApplication) {
    this.parkingSpaceApplication = parkingSpaceApplication;
  }

  async add(data) {
    return await this.parkingSpaceApplication.add(data);
  }
  async getById(id) {
    return await this.parkingSpaceApplication.getById(id);
  }

  async getAll() {
    return await this.parkingSpaceApplication.getAll();
  }

  async update(data) {
    return await this.parkingSpaceApplication.update(data);
  }

  async delete(id) {
    return await this.parkingSpaceApplication.delete(id);
  }
}

module.exports = ParkingSpaceFacade;
