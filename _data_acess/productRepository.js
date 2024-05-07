const tProducts = require('../_data/tProducts');
const Sequelize = require('../_data/_config/dbContext').sequelize;
const DataTypes = require('../_data/_config/dbContext').DataTypes;
const IProductRepository = require('../_interface/iProductRepository');
class ProductRepository extends IProductRepository {
    
    constructor() {
        super();
    }
    async addProduct(name, value) {
        try {
            await Sequelize.authenticate();
            const row = await tProducts(Sequelize, DataTypes).create({
                name: name,
                value: value
            });
            console.log("passei aqui");
            return row;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getProduct(code) {
        try {
            const row = await this.db.productModel.findOne({
                where: {
                    code: code
                }
            });
            return row;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getAllProducts(){
        try {
            const rows = await this.db.productModel.findAll();
            return rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

module.exports = ProductRepository;