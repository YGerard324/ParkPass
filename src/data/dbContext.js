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

const User = require("../data/UserModel")(sequelize, DataTypes);
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

Parking.hasMany(ParkingSpace, {
  foreignKey: "parking_id",
  as: "parkingspaces", 
});
ParkingSpace.belongsTo(Parking, {
  foreignKey: "parking_id",
  as: "parkings",
});

ParkingSpace.hasMany(Register, {
  foreignKey: "parking_space_id",
  as: "registers", 
});
Register.belongsTo(ParkingSpace, {
  foreignKey: "parking_space_id",
  as: "parkingspace", 
});

Register.hasMany(Payment, {
  foreignKey: "register_id",
  as: "payments", 
});

User.hasMany(Register, {
  foreignKey: "user_id",
  as: "registers", 
});
Register.belongsTo(User, {
  foreignKey: "user_id",
  as: "users", 
});

PaymentType.hasMany(Payment, {
  foreignKey: "payment_type_id",
  as: "payments", 
});
Payment.belongsTo(PaymentType, {
  foreignKey: "payment_type_id",
  as: "payment_types", 
});

User.hasMany(Address, {
  foreignKey: "user_id",
  as: "addresses", 
});
Address.belongsTo(User, {
  foreignKey: "user_id",
  as: "users", 
});

module.exports = {
  Parking,
  Address,
  User,
  Payment,
  Register,
  PaymentType,
  ParkingSpace,
};
