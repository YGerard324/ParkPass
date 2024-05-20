module.exports = (sequelize, DataTypes) => {

    const Endereco = sequelize.define(
      "endereco",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        logradouro: {
          type: DataTypes.STRING,
        },
        bairro: {
          type: DataTypes.STRING,
        },
        cep: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cliente_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      { timestamps: false, freezeTableName: true }
    );
    return Endereco;
  };
  