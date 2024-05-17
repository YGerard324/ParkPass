const Pagamento = require("./Pagamento");

module.exports = (sequelize, DataTypes) => {

    const Registro = sequelize.define(
      "registro",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        entrada: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        saida: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        vaga_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        cliente_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        pagamento_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      { timestamps: false, freezeTableName: true }
    );
    return Registro;
  };
  