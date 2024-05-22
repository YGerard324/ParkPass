class ParkingFacade {
  constructor(ParkingApplication) {
    this.ParkingApplication = ParkingApplication;
  }

  async add(data) {
    return await this.ParkingApplication.add(data);
  }
  async getById(id) {
    return await this.ParkingApplication.getById(id);
  }

  async getAll() {
    return await this.ParkingApplication.getAll();
  }

  async update(data) {
    return await this.ParkingApplication.update(data);
  }

  async delete(id) {
    return await this.ParkingApplication.delete(id);
  }
}

module.exports = ParkingFacade;
