const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserApplication {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async add(data) {
    return await this.userRepository.add(data);
  }
  async getById(id) {
    return await this.userRepository.getById(id);
  }

  async authenticate(email, password) {
    const users = await this.userRepository.getAll();
    const user = users.find((user) => user.email === email);
    if (!user) {
      throw new Error("O email informado não foi cadastrado");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Usuário ou senha errado!");
    }

    const token = jwt.sign(
      {
        email: user.email,
      },
      "key",
      { expiresIn: "1h" }
    );

    return token;
  }
  async getAll() {
    return await this.userRepository.getAll();
  }

  async update(data) {
    return await this.userRepository.update(data);
  }

  async delete(id) {
    return await this.userRepository.delete(id);
  }
}

module.exports = UserApplication;
