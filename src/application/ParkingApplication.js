class ParkingApplication {
  constructor(ParkingRepository) {
    this.ParkingRepository = ParkingRepository;
  }

  async add(admin) {
    return await this.ParkingRepository.add(admin);
  }
  async getById(id) {
    return await this.ParkingRepository.getById(id);
  }

  async getAll() {
    return await this.ParkingRepository.getAll();
  }

  async update(admin) {
    return await this.ParkingRepository.update(admin);
  }

  async delete(id) {
    return await this.ParkingRepository.delete(id);
  }
}

module.exports = ParkingApplication;
