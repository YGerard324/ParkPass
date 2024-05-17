class ClienteRepositoryInterface {
  constructor() {
    if (new.target === ClienteRepositoryInterface) {
      throw new Error("Não foi possível instanciar ClienteRepositoryInterface.");
    }
  }

  async add() {
    throw new Error("Metodo 'add()' precisa ser implementado.");
  }

  async getById() {
    throw new Error("Metodo 'getById()' precisa ser implementado.");
  }

  async getAll() {
    throw new Error("Metodo 'getAll()' precisa ser implementado.");
  }
}

module.exports = ClienteRepositoryInterface;
