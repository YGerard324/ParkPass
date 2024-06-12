class ParkingSpaceApplication {
  constructor(parkingSpaceRepository) {
    this.parkingSpaceRepository = parkingSpaceRepository;
  }

  async add(data) {
    return await this.parkingSpaceRepository.add(data);
  }
  async getById(id) {
    return await this.parkingSpaceRepository.getById(id);
  }

  async getAll() {
    return await this.parkingSpaceRepository.getAll();
  }

  async update(data) {
    return await this.parkingSpaceRepository.update(data);
  }

  async delete(id) {
    return await this.parkingSpaceRepository.delete(id);
  }
}

module.exports = ParkingSpaceApplication;
