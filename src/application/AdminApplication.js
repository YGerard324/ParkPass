class AdminApplication {
  constructor(AdminRepository) {
    this.AdminRepository = AdminRepository;
  }

  async add(data) {
    return await this.AdminRepository.add(data);
  }
  async getById(id) {
    
    return await this.AdminRepository.getById(id);
  }

  async getAll() {
    return await this.AdminRepository.getAll();
  }

  async update(data) {
    return await this.AdminRepository.update(data);
  }

  async delete(id) {
    return await this.AdminRepository.delete(id);
  }
}

module.exports = AdminApplication;
