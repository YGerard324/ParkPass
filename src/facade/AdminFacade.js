class AdminFacade {
  constructor(AdminApplication) {
    this.AdminApplication = AdminApplication;
  }

  async add(data) {
    return await this.AdminApplication.add(data);
  }
  async getById(id) {
    return await this.AdminApplication.getById(id);
  }

  async getAll() {
    return await this.AdminApplication.getAll();
  }

  async login(email, password) {
    return await this.AdminApplication.authenticate(email, password); 
  }

  async update(data) {
    return await this.AdminApplication.update(data);
  }

  async delete(id) {
    return await this.AdminApplication.delete(id);
  }
}

module.exports = AdminFacade;
