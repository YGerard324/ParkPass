class AddressApplication {
  constructor(AddressRepository) {
    this.AddressRepository = AddressRepository;
  }

  async add(data) {
    return await this.AddressRepository.add(data);
  }
  async getById(code) {
    return await this.AddressRepository.getById(code);
  }

  async getAll() {
    return await this.AddressRepository.getAll();
  }

  async update(data) {
    return await this.AddressRepository.update(data);
  }

  async delete(code) {
    return await this.AddressRepository.delete(code);
  }
}

module.exports = AddressApplication;
