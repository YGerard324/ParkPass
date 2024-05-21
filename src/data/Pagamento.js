module.exports = (sequelize, DataTypes) => {
  
    const pagamento = sequelize.define(
      "pagamento",
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
        tipoPagamento_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      { timestamps: false, freezeTableName: true }
    );
    return pagamento;
  };
  