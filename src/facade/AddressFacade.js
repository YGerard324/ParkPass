class AddressFacade {
  constructor(AddressApplication) {
    this.AddressApplication = AddressApplication;
  }

  async add(data) {
    return await this.AddressApplication.add(data);
  }
  async getById(id) {
    return await this.AddressApplication.getById(id);
  }

  async getAll() {
    return await this.AddressApplication.getAll();
  }

  async update(data) {
    return await this.AddressApplication.update(data);
  }

  async delete(id) {
    return await this.AddressApplication.delete(id);
  }
}

module.exports = AddressFacade;
