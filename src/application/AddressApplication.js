class AddressApplication {
  constructor(addressRepository) {
    this.addressRepository = addressRepository;
  }

  async add(data) {
    return await this.addressRepository.add(data);
  }
  async getById(code) {
    return await this.addressRepository.getById(code);
  }

  async getAll() {
    return await this.addressRepository.getAll();
  }

  async update(data) {
    return await this.addressRepository.update(data);
  }

  async delete(code) {
    return await this.addressRepository.delete(code);
  }
}

module.exports = AddressApplication;
