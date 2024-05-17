const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

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
const Cliente = require("../data/Cliente")(sequelize, DataTypes);
const Endereco = require("../data/Endereco")(sequelize, DataTypes);
const Estacionamento = require("../data/Estacionamento")(sequelize, DataTypes);
const Pagamento = require("../data/Pagamento")(sequelize, DataTypes);
const Registro = require("../data/Registro")(sequelize, DataTypes);
const TipoPagamento = require("../data/TipoPagamento")(sequelize, DataTypes);
const Vaga = require("../data/Vaga")(sequelize, DataTypes);



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
    foreignKey: "admin_id",
    as: "estacionamentos", // alias para a relação
  });
  Estacionamento.belongsTo(Admin, {
    foreignKey: "admin_id",
    as: "admin", // alias para a relação
  });

  Estacionamento.hasMany(Vaga, {
    foreignKey: "estacionamento_id",
    as: "vagas", // alias para a relação
  });
  Vaga.belongsTo(Estacionamento, {
    foreignKey: "estacionamento_id",
    as: "estacionamento", // alias para a relação
  });

  Vaga.hasMany(Registro, {
    foreignKey: "vaga_id",
    as: "registros", // alias para a relação
  });
  Registro.belongsTo(Vaga, {
    foreignKey: "vaga_id",
    as: "vaga", // alias para a relação
  });
  
  Registro.hasMany(Pagamento, {
    foreignKey: "registro_id",
    as: "pagamentos", // alias para a relação
  });
  Pagamento.belongsTo(Registro, {
    foreignKey: "registro_id",
    as: "registro", // alias para a relação
  });
  
  Cliente.hasMany(Registro, {
    foreignKey: "cliente_id",
    as: "registros", // alias para a relação
  });
  Registro.belongsTo(Cliente, {
    foreignKey: "cliente_id",
    as: "cliente", // alias para a relação
  });

  Pagamento.hasMany(TipoPagamento, {
    foreignKey: "pagamento_id",
    as: "tiposPagamento", // alias para a relacionamento
  });
  TipoPagamento.belongsTo(Pagamento, {
    foreignKey: "pagamento_id",
    as: "pagamento", // alias para a relacionamento
  });

  Cliente.hasMany(Endereco, {
    foreignKey: "cliente_id",
    as: "enderecos", // alias para a relacionamento
  });
  Endereco.belongsTo(Cliente, {
    foreignKey: "cliente_id",
    as: "cliente", // alias para a relacionamento
  }); 
  































module.exports = { Admin, Estacionamento, Endereco, Cliente, Pagamento, Registro, TipoPagamento, Vaga };
