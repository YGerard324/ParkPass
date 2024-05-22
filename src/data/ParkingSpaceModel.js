module.exports = (sequelize, DataTypes) => {
  const ParkingSpace = sequelize.define(
    "parking_space",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      vacancy_type: {
        type: DataTypes.ENUM("MOTO", "CARRO"),
        allowNull: false,
      },
      roof: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      parking_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false, freezeTableName: true }
  );
  return ParkingSpace;
};
