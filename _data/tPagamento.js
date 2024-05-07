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
        // registros_id: {
        //   foreignKey: 'registros_id',
        // },
        // tipoPagamento_id: {
        //   foreignKey: 'tipoPagamento_id',
        // },
      },
      { timestamps: false }
    );
    return pagamento;
  };
  