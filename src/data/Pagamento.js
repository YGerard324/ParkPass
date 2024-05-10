module.exports = (sequelize, DataTypes) => {
    console.log("Também estive aqui!");

    const pagamento = sequelize.define(
      'pagamento',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        valor: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        registros_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        tipoPagamento_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      { timestamps: false, freezeTableName: true }
    );
    return pagamento;
  };
  