const { tipoPagamento } = require('../models'); 

const TipoPagamentoRepository = {
  async createTipoPagamento(descricao) {
    try {
      const newTipoPagamento = await tipoPagamento.create({ descricao });
      return newTipoPagamento;
    } catch (error) {
      throw new Error('Erro ao criar um tipo de pagamento');
    }
  },

  async getTipoPagamentoById(id) {
    try {
      const foundTipoPagamento = await tipoPagamento.findByPk(id);
      return foundTipoPagamento;
    } catch (error) {
      throw new Error('Erro ao encontrar o tipo de pagamento');
    }
  },

  async updateTipoPagamento(id, newData) {
    try {
      const [updatedRowsCount, updatedTipoPagamento] = await tipoPagamento.update(newData, {
        where: { id },
        returning: true,
      });
      if (updatedRowsCount === 0) throw new Error('Tipo de pagamento não encontrado');
      return updatedTipoPagamento[0];
    } catch (error) {
      throw new Error('Erro ao atualizar o tipo de pagamento');
    }
  },

  async deleteTipoPagamento(id) {
    try {
      const deletedRowCount = await tipoPagamento.destroy({ where: { id } });
      if (deletedRowCount === 0) throw new Error('Tipo de pagamento não encontrado');
    } catch (error) {
      throw new Error('Erro ao excluir o tipo de pagamento');
    }
  },

  async getAllTipoPagamentos() {
    try {
      const allTipoPagamentos = await tipoPagamento.findAll();
      return allTipoPagamentos;
    } catch (error) {
      throw new Error('Erro ao obter todos os tipos de pagamento');
    }
  },
};

module.exports = TipoPagamentoRepository;
