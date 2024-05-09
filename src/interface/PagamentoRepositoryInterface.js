const { pagamento } = require('../models/tPagamneto.js'); 

const PagamentoRepository = {
  async createPagamento(valor) {
    try {
      const newPagamento = await pagamento.create({ valor });
      return newPagamento;
    } catch (error) {
      throw new Error('Erro ao criar um pagamento');
    }
  },

  async getPagamentoById(id) {
    try {
      const foundPagamento = await pagamento.findByPk(id);
      return foundPagamento;
    } catch (error) {
      throw new Error('Erro ao encontrar o pagamento');
    }
  },

  async updatePagamento(id, newData) {
    try {
      const [updatedRowsCount, updatedPagamento] = await pagamento.update(newData, {
        where: { id },
        returning: true,
      });
      if (updatedRowsCount === 0) throw new Error('Pagamento não encontrado');
      return updatedPagamento[0];
    } catch (error) {
      throw new Error('Erro ao atualizar o pagamento');
    }
  },

  async deletePagamento(id) {
    try {
      const deletedRowCount = await pagamento.destroy({ where: { id } });
      if (deletedRowCount === 0) throw new Error('Pagamento não encontrado');
    } catch (error) {
      throw new Error('Erro ao excluir o pagamento');
    }
  },

  async getAllPagamentos() {
    try {
      const allPagamentos = await pagamento.findAll();
      return allPagamentos;
    } catch (error) {
      throw new Error('Erro ao obter todos os pagamentos');
    }
  },
};

module.exports = PagamentoRepository;
