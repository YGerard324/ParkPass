class PagamentoRepositoryInterface {

  constructor() {
    if (new.target === PagamentoRepositoryInterface) {
        throw new Error("Não foi possível instanciar PagamentoRepositoryInterface.");
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

module.exports = PagamentoRepositoryInterface;
