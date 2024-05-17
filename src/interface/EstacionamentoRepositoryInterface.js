class EstacionamentoRepositoryInterface  {
  constructor() {
    if (new.target === EstacionamentoRepositoryInterface) {
      throw new Error("Não foi possível instanciar EstacionamentoRepositoryInterface.");
    }
  }  
  async add() {
    throw new Error("Metodo 'add()' precisa ser implementado.");
  }

  async getById() {
    throw new Error("Metodo 'getById()' precisa ser implementado.");
  }

  async update() {
    throw new Error("Metodo 'update()' precisa ser implementado.");

  }

  async delete() {
    throw new Error("Metodo 'delete()' precisa ser implementado.");
  }

  async getAll() {
    throw new Error("Metodo 'getAll()' precisa ser implementado.");
  }
}

module.exports = EstacionamentoRepositoryInterface;
