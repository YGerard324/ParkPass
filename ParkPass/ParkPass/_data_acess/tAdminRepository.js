const { admin } = require('../models/tAdmin.js'); 

const tAdminRepository = {
  async createAdmin(name, email, password) {
    try {
      const newAdmin = await admin.create({ name, email, password });
      return newAdmin;
    } catch (error) {
      throw new Error('Erro ao criar um admin');
    }
  },

  async gettAdminById(id) {
    try {
      const foundAdmin = await admin.findByPk(id);
      return foundAdmin;
    } catch (error) {
      throw new Error('Erro ao encontrar o admin');
    }
  },

  async updatetAdmin(id, newData) {
    try {
      const [updatedRowsCount, updatedAdmin] = await admin.update(newData, {
        where: { id },
        returning: true,
      });
      if (updatedRowsCount === 0) throw new Error('Admin não encontrado');
      return updatedAdmin[0];
    } catch (error) {
      throw new Error('Erro ao atualizar o admin');
    }
  },

  async deletetAdmin(id) {
    try {
      const deletedRowCount = await admin.destroy({ where: { id } });
      if (deletedRowCount === 0) throw new Error('Admin não encontrado');
    } catch (error) {
      throw new Error('Erro ao excluir o admin');
    }
  },

  async getAlltAdmins() {
    try {
      const allAdmins = await admin.findAll();
      return allAdmins;
    } catch (error) {
      throw new Error('Erro ao obter todos os admins');
    }
  },
};

module.exports = AdminRepository;
