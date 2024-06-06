module.exports = (sequelize, DataTypes) => {
  const Register = sequelize.define(
    "register",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      entry: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      exit: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      parking_space_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      payment_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false, freezeTableName: true }
  );
  return Register;
};
