class AddressFacade {
  constructor(addressApplication) {
    this.addressApplication = addressApplication;
  }

  async add(data) {
    return await this.addressApplication.add(data);
  }
  async getById(id) {
    return await this.addressApplication.getById(id);
  }

  async getAll() {
    return await this.addressApplication.getAll();
  }

  async update(data) {
    return await this.addressApplication.update(data);
  }

  async delete(id) {
    return await this.addressApplication.delete(id);
  }
}

module.exports = AddressFacade;
