module.exports = (sequelize, DataTypes) => {

    const cliente = sequelize.define(
      "cliente",
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
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        documento: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        tipoDocumento: {
          type: DataTypes.ENUM('CPF', 'CNPJ'),
          allowNull: false,
        },
        telefone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      { timestamps: false, freezeTableName: true }
    );
    return cliente;
  };
  