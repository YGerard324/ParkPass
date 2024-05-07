const { cliente } = require('../models/tCliente.js'); 

const ClienteRepository = {
  async createCliente(name, email, password, documento, tipoDocumento, telefone) {
    try {
      const newCliente = await cliente.create({ name, email, password, documento, tipoDocumento, telefone });
      return newCliente;
    } catch (error) {
      throw new Error('Erro ao criar um cliente');
    }
  },

  async getClienteById(id) {
    try {
      const foundCliente = await cliente.findByPk(id);
      return foundCliente;
    } catch (error) {
      throw new Error('Erro ao encontrar o cliente');
    }
  },

  async updateCliente(id, newData) {
    try {
      const [updatedRowsCount, updatedCliente] = await cliente.update(newData, {
        where: { id },
        returning: true,
      });
      if (updatedRowsCount === 0) throw new Error('Cliente não encontrado');
      return updatedCliente[0];
    } catch (error) {
      throw new Error('Erro ao atualizar o cliente');
    }
  },

  async deleteCliente(id) {
    try {
      const deletedRowCount = await cliente.destroy({ where: { id } });
      if (deletedRowCount === 0) throw new Error('Cliente não encontrado');
    } catch (error) {
      throw new Error('Erro ao excluir o cliente');
    }
  },

  async getAllClientes() {
    try {
      const allClientes = await cliente.findAll();
      return allClientes;
    } catch (error) {
      throw new Error('Erro ao obter todos os clientes');
    }
  },
};

module.exports = ClienteRepository;
