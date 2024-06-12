module.exports = (sequelize, DataTypes) => {
    const Parking = sequelize.define(
      "parking",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cnpj: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        public_place: {
          type: DataTypes.STRING,
        },
        neighborhood: {
          type: DataTypes.STRING,
        },
        city: {
          type: DataTypes.STRING,
        },
        zip_code: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        admin_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      { timestamps: false, freezeTableName: true }
    );
    return Parking;
  };
  