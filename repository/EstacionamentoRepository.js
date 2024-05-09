const { Estacionamento } = require("../data/dbContext"); 

class EstacionamentoRepository  {
  constructor() {}  
  async add(estacionamento) {
    try {
      const newEstacionamento = await Estacionamento.create(estacionamento);
      return newEstacionamento;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getEstacionamentoById(id) {
    try {
      const foundEstacionamento = await Estacionamento.findByPk(id);
      return foundEstacionamento;
    } catch (error) {
      throw new Error('Erro ao encontrar o estacionamento');
    }
  }

  async update(id, newData) {
    try {
      const [updatedRowsCount, updatedEstacionamento] = await Estacionamento.update(newData, {
        where: { id },
        returning: true,
      });
      if (updatedRowsCount === 0) throw new Error('Estacionamento não encontrado');
      return updatedEstacionamento[0];
    } catch (error) {
      throw new Error('Erro ao atualizar o estacionamento');
    }
  }

  async delete(id) {
    try {
      const deletedRowCount = await Estacionamento.destroy({ where: { id } });
      if (deletedRowCount === 0) throw new Error('Estacionamento não encontrado');
    } catch (error) {
      throw new Error('Erro ao excluir o estacionamento');
    }
  }

  async getAllEstacionamentos() {
    try {
      const allEstacionamentos = await Estacionamento.findAll();
      return allEstacionamentos;
    } catch (error) {
      throw new Error('Erro ao obter todos os estacionamentos');
    }
  }
}

module.exports = EstacionamentoRepository;
