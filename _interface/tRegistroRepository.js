const { registro } = require('../models');

const RegistroRepository = {
  async createRegistro(entrada, saida) {
    try {
      const newRegistro = await registro.create({ entrada, saida });
      return newRegistro;
    } catch (error) {
      throw new Error('Erro ao criar um registro');
    }
  },

  async getRegistroById(id) {
    try {
      const foundRegistro = await registro.findByPk(id);
      return foundRegistro;
    } catch (error) {
      throw new Error('Erro ao encontrar o registro');
    }
  },

  async updateRegistro(id, newData) {
    try {
      const [updatedRowsCount, updatedRegistro] = await registro.update(newData, {
        where: { id },
        returning: true,
      });
      if (updatedRowsCount === 0) throw new Error('Registro não encontrado');
      return updatedRegistro[0];
    } catch (error) {
      throw new Error('Erro ao atualizar o registro');
    }
  },

  async deleteRegistro(id) {
    try {
      const deletedRowCount = await registro.destroy({ where: { id } });
      if (deletedRowCount === 0) throw new Error('Registro não encontrado');
    } catch (error) {
      throw new Error('Erro ao excluir o registro');
    }
  },

  async getAllRegistros() {
    try {
      const allRegistros = await registro.findAll();
      return allRegistros;
    } catch (error) {
      throw new Error('Erro ao obter todos os registros');
    }
  },
};

module.exports = RegistroRepository;
