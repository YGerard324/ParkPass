const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

console.log("Dialeto: " + dbConfig.DIALECT);

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USERNAME,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: dbConfig.PORT,
  }
);

const Admin = require("../data/Admin")(sequelize, DataTypes);
const Estacionamento = require("../data/Estacionamento")(sequelize, DataTypes);
const Endereco = require("../data/Endereco")(sequelize, DataTypes);
const Cliente = require("../data/Cliente")(sequelize, DataTypes);



sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((err) => {
    console.log("Erro ao tentar conectar: " + err);
  });

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Tabelas criadas com sucesso!");
  })
  .catch((err) => {
    console.log("Erros: " + err);
  });

  Admin.hasMany(Estacionamento, {
    foreignKey: 'admin_id',
  });

  Estacionamento.belongsTo(Admin, {
    foreignKey: 'id',
  });
  
  Cliente.hasMany(Endereco, {
    foreignKey: 'cliente_id',
  });

  Endereco.belongsTo(Cliente, {
    foreignKey: 'id',
  });

module.exports = { Admin, Estacionamento, Endereco, Cliente};
