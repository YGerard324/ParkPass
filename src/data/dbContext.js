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

const Admin = require("../data/AdminModel")(sequelize, DataTypes);
const Client = require("../data/ClientModel")(sequelize, DataTypes);
const Address = require("../data/AddressModel")(sequelize, DataTypes);
const Parking = require("../data/ParkingModel")(sequelize, DataTypes);
const Payment = require("../data/PaymentModel")(sequelize, DataTypes);
const Register = require("../data/RegisterModel")(sequelize, DataTypes);
const PaymentType = require("../data/PaymentTypeModel")(sequelize, DataTypes);
const ParkingSpace = require("../data/ParkingSpaceModel")(sequelize, DataTypes);

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

Admin.hasMany(Parking, {
  foreignKey: "admin_id",
  as: "parkings", // alias para a relação
});
Parking.belongsTo(Admin, {
  foreignKey: "admin_id",
  as: "admin", // alias para a relação
});

Parking.hasMany(ParkingSpace, {
  foreignKey: "parking_id",
  as: "parkingspaces", // alias para a relação
});
ParkingSpace.belongsTo(Parking, {
  foreignKey: "parking_id",
  as: "parkings", // alias para a relação
});

ParkingSpace.hasMany(Register, {
  foreignKey: "parking_space_id",
  as: "registers", // alias para a relação
});
Register.belongsTo(ParkingSpace, {
  foreignKey: "parking_space_id",
  as: "parkingspace", // salias para a relação
});

Register.hasMany(Payment, {
  foreignKey: "register_id",
  as: "payments", // alias para a relação
});
Payment.belongsTo(Register, {
  foreignKey: "register_id",
  as: "registers", // alias para a relação
});

Client.hasMany(Register, {
  foreignKey: "client_id",
  as: "registers", // alias para a relação
});
Register.belongsTo(Client, {
  foreignKey: "client_id",
  as: "clients", // alias para a relação
});

PaymentType.hasMany(Payment, {
  foreignKey: "payment_type_id",
  as: "payments", // alias para o relacionamento
});
Payment.belongsTo(PaymentType, {
  foreignKey: "payment_type_id",
  as: "payment_types", // alias para o relacionamento
});

Client.hasMany(Address, {
  foreignKey: "client_id",
  as: "addresses", // alias para a relacionamento
});
Address.belongsTo(Client, {
  foreignKey: "client_id",
  as: "clients", // alias para a relacionamento
});

module.exports = {
  Admin,
  Parking,
  Address,
  Client,
  Payment,
  Register,
  PaymentType,
  ParkingSpace,
};
