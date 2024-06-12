class ParkingApplication {
  constructor(parkingRepository) {
    this.parkingRepository = parkingRepository;
  }

  async add(admin) {
    return await this.parkingRepository.add(admin);
  }
  async getById(id) {
    return await this.parkingRepository.getById(id);
  }

  async getAll() {
    return await this.parkingRepository.getAll();
  }

  async update(admin) {
    return await this.parkingRepository.update(admin);
  }

  async delete(id) {
    return await this.parkingRepository.delete(id);
  }
}

module.exports = ParkingApplication;
