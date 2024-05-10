const { Endereco } = require('../data/dbContext'); 

class EnderecoRepository  {
  constructor() {}
  async add(endereco) {
    try {
      const newEndereco = await Endereco.create(endereco);
      return newEndereco;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getEnderecoById(id) {
    try {
      const foundEndereco = await endereco.findByPk(id);
      return foundEndereco;
    } catch (error) {
      throw new Error('Erro ao encontrar o endereço');
    }
  }

  async update(id, newData) {
    try {
      const [updatedRowsCount, updatedEndereco] = await endereco.update(newData, {
        where: { id },
        returning: true,
      });
      if (updatedRowsCount === 0) throw new Error('Endereço não encontrado');
      return updatedEndereco[0];
    } catch (error) {
      throw new Error('Erro ao atualizar o endereço');
    }
  }

  async delete(id) {
    try {
      const deletedRowCount = await endereco.destroy({ where: { id } });
      if (deletedRowCount === 0) throw new Error('Endereço não encontrado');
    } catch (error) {
      throw new Error('Erro ao excluir o endereço');
    }
  }

  async getAllEnderecos() {
    try {
      const allEnderecos = await endereco.findAll();
      return allEnderecos;
    } catch (error) {
      throw new Error('Erro ao obter todos os endereços');
    }
  }
}


module.exports = EnderecoRepository;