class UserFacade {
  constructor(UserApplication) {
    this.UserApplication = UserApplication;
  }

  async add(data) {
    return await this.UserApplication.add(data);
  }
  async getById(id) {
    return await this.UserApplication.getById(id);
  }

  async getAll() {
    return await this.UserApplication.getAll();
  }

  async login(email, password) {
    return await this.AdminApplication.authenticate(email, password); 
  }

  async update(data) {
    return await this.UserApplication.update(data);
  }

  async delete(id) {
    return await this.UserApplication.delete(id);
  }
}

module.exports = UserFacade;
