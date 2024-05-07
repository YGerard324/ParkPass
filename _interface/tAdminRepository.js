const tAdmin = require('../_data/tAdmin');
const Sequelize = require('../_data/_config/dbContext').sequelize;
const DataTypes = require('../_data/_config/dbContext').DataTypes;
const IAdminRepository = require('../_interface/iAdminRepository');

class AdminRepository extends IAdminRepository {
    constructor() {
        super();
    }

    async addAdmin(name, email, password) {
        try {
            await Sequelize.authenticate();
            const row = await tAdmin(Sequelize, DataTypes).create({
                name: name,
                email: email,
                password: password
            });
            console.log("Adicionei um novo admin!");
            return row;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getAdminById(id) {
        try {
            const row = await tAdmin(Sequelize, DataTypes).findByPk(id);
            return row;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getAllAdmins() {
        try {
            const rows = await tAdmin(Sequelize, DataTypes).findAll();
            return rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

module.exports = AdminRepository;
