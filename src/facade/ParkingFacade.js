class ParkingFacade {
  constructor(parkingApplication) {
    this.parkingApplication = parkingApplication;
  }

  async add(data) {
    return await this.parkingApplication.add(data);
  }
  async getById(id) {
    return await this.parkingApplication.getById(id);
  }

  async getAll() {
    return await this.parkingApplication.getAll();
  }

  async update(data) {
    return await this.parkingApplication.update(data);
  }

  async delete(id) {
    return await this.parkingApplication.delete(id);
  }
}

module.exports = ParkingFacade;
