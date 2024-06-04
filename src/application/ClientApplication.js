class ClientApplication {
  constructor(ClientRepository) {
    this.ClientRepository = ClientRepository;
  }

  async add(data) {
    return await this.ClientRepository.add(data);
  }
  async getById(id) {
    return await this.ClientRepository.getById(id);
  }

  async authenticate(email, password) {
    const clients = await this.clientRepository.getAll();
    const client = clients.find((client) => client.email === email);
    console.log("client : ", client.id, client.name, client.email, client.password);
    if (!client) {
      throw new Error("O email informado não foi cadastrado");
    }

    const isPasswordValid = await bcrypt.compare(password, client.password);
    if (!isPasswordValid) {
      throw new Error("Usuário ou senha errado!");
    }

    const token = jwt.sign(
      {
        email: client.email,
      },
      "key",
      { expiresIn: "1h" }
    );

    return token;
  }

  async getAll() {
    return await this.ClientRepository.getAll();
  }

  async update(data) {
    return await this.ClientRepository.update(data);
  }

  async delete(id) {
    return await this.ClientRepository.delete(id);
  }
}

module.exports = ClientApplication;
