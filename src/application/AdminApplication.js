class AdminApplication {
  constructor(AdminRepository) {
    this.AdminRepository = AdminRepository;
  }

  async add(admin) {
    return await this.AdminRepository.add(admin);
  }
  async getById(code) {
    return await this.AdminRepository.getById(code);
  }

  async getAll() {
    return await this.AdminRepository.getAll();
  }

  async update(admin) {
    return await this.AdminRepository.update(admin);
  }

  async delete(code) {
    return await this.AdminRepository.delete(code);
  }
}

module.exports = AdminApplication;
