const { vaga } = require('../models'); 

const VagaRepository = {
  async createVaga(tipoVaga, cobertura) {
    try {
      const newVaga = await vaga.create({ tipoVaga, cobertura });
      return newVaga;
    } catch (error) {
      throw new Error('Erro ao criar uma vaga');
    }
  },

  async getVagaById(id) {
    try {
      const foundVaga = await vaga.findByPk(id);
      return foundVaga;
    } catch (error) {
      throw new Error('Erro ao encontrar a vaga');
    }
  },

  async updateVaga(id, newData) {
    try {
      const [updatedRowsCount, updatedVaga] = await vaga.update(newData, {
        where: { id },
        returning: true,
      });
      if (updatedRowsCount === 0) throw new Error('Vaga não encontrada');
      return updatedVaga[0];
    } catch (error) {
      throw new Error('Erro ao atualizar a vaga');
    }
  },

  async deleteVaga(id) {
    try {
      const deletedRowCount = await vaga.destroy({ where: { id } });
      if (deletedRowCount === 0) throw new Error('Vaga não encontrada');
    } catch (error) {
      throw new Error('Erro ao excluir a vaga');
    }
  },

  async getAllVagas() {
    try {
      const allVagas = await vaga.findAll();
      return allVagas;
    } catch (error) {
      throw new Error('Erro ao obter todas as vagas');
    }
  },
};

module.exports = VagaRepository;
