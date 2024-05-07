const { endereco } = require('../models/tEndereco.js'); 

const EnderecoRepository = {
  async createtEndereco(logradouro, bairro, cidade, cep) {
    try {
      const newEndereco = await endereco.create({ logradouro, bairro, cidade, cep });
      return newEndereco;
    } catch (error) {
      throw new Error('Erro ao criar um endereço');
    }
  },

  async getEnderecoById(id) {
    try {
      const foundEndereco = await endereco.findByPk(id);
      return foundEndereco;
    } catch (error) {
      throw new Error('Erro ao encontrar o endereço');
    }
  },

  async updateEndereco(id, newData) {
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
  },

  async deleteEndereco(id) {
    try {
      const deletedRowCount = await endereco.destroy({ where: { id } });
      if (deletedRowCount === 0) throw new Error('Endereço não encontrado');
    } catch (error) {
      throw new Error('Erro ao excluir o endereço');
    }
  },

  async getAllEnderecos() {
    try {
      const allEnderecos = await endereco.findAll();
      return allEnderecos;
    } catch (error) {
      throw new Error('Erro ao obter todos os endereços');
    }
  },
};

module.exports = EnderecoRepository;
