class UserApplication {
  constructor(UserRepository) {
    this.UserRepository = UserRepository;
  }

  async add(data) {
    return await this.UserRepository.add(data);
  }
  async getById(id) {
    return await this.UserRepository.getById(id);
  }

  async authenticate(email, password) {
    const users = await this.UserRepository.getAll();
    const user = users.find((user) => user.email === email);
    console.log("user : ", user.id, user.name, user.email, user.password);
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
    return await this.UserRepository.getAll();
  }

  async update(data) {
    return await this.UserRepository.update(data);
  }

  async delete(id) {
    return await this.UserRepository.delete(id);
  }
}

module.exports = UserApplication;
