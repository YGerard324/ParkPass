module.exports = (sequelize, DataTypes) => {
    const Estacionamento = sequelize.define(
      "estacionamento",
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
        logradouro: {
          type: DataTypes.STRING,
        },
        bairro: {
          type: DataTypes.STRING,
        },
        cidade: {
          type: DataTypes.STRING,
        },
        cep: {
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
    return Estacionamento;
  };
  