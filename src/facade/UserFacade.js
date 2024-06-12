class UserFacade {
  constructor(userApplication) {
    this.userApplication = userApplication;
  }

  async add(data) {
    return await this.userApplication.add(data);
  }
  async getById(id) {
    return await this.userApplication.getById(id);
  }

  async getAll() {
    return await this.userApplication.getAll();
  }

  async login(email, password) {
    return await this.userApplication.authenticate(email, password); 
  }

  async update(data) {
    return await this.userApplication.update(data);
  }

  async delete(id) {
    return await this.userApplication.delete(id);
  }
}

module.exports = UserFacade;
