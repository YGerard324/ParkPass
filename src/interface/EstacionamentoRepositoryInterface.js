const { estacionamento } = require('../models/tEstacionemneto.js'); 

const EstacionamentoRepository = {
  async createEstacionamento(name, cnpj, logradouro, bairro, cidade, cep) {
    try {
      const newEstacionamento = await estacionamento.create({ name, cnpj, logradouro, bairro, cidade, cep });
      return newEstacionamento;
    } catch (error) {
      throw new Error('Erro ao criar um estacionamento');
    }
  },

  async getEstacionamentoById(id) {
    try {
      const foundEstacionamento = await estacionamento.findByPk(id);
      return foundEstacionamento;
    } catch (error) {
      throw new Error('Erro ao encontrar o estacionamento');
    }
  },

  async updateEstacionamento(id, newData) {
    try {
      const [updatedRowsCount, updatedEstacionamento] = await estacionamento.update(newData, {
        where: { id },
        returning: true,
      });
      if (updatedRowsCount === 0) throw new Error('Estacionamento não encontrado');
      return updatedEstacionamento[0];
    } catch (error) {
      throw new Error('Erro ao atualizar o estacionamento');
    }
  },

  async deleteEstacionamento(id) {
    try {
      const deletedRowCount = await estacionamento.destroy({ where: { id } });
      if (deletedRowCount === 0) throw new Error('Estacionamento não encontrado');
    } catch (error) {
      throw new Error('Erro ao excluir o estacionamento');
    }
  },

  async getAllEstacionamentos() {
    try {
      const allEstacionamentos = await estacionamento.findAll();
      return allEstacionamentos;
    } catch (error) {
      throw new Error('Erro ao obter todos os estacionamentos');
    }
  },
};

module.exports = EstacionamentoRepository;
