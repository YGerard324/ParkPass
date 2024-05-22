class ParkingSpaceApplication {
  constructor(ParkingSpaceRepository) {
    this.ParkingSpaceRepository = ParkingSpaceRepository;
  }

  async add(data) {
    return await this.ParkingSpaceRepository.add(data);
  }
  async getById(id) {
    return await this.ParkingSpaceRepository.getById(id);
  }

  async getAll() {
    return await this.ParkingSpaceRepository.getAll();
  }

  async update(data) {
    return await this.ParkingSpaceRepository.update(data);
  }

  async delete(id) {
    return await this.ParkingSpaceRepository.delete(id);
  }
}

module.exports = ParkingSpaceApplication;
