const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

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

  async authenticate(email, password) {
    const admins = await this.AdminRepository.getAll();
    const admin = admins.find(admin => admin.email === email);
    console.log("Admin : ", admin.id, admin.name, admin.email, admin.password);
    if (!admin) {
      throw new Error("O email informado não foi cadastrado");
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      throw new Error("Usuário ou senha errado!");
    }

    const token = jwt.sign(
      {
        email: admin.email,
      },
      "key",
      { expiresIn: "1h" }
    );

    return token;
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
