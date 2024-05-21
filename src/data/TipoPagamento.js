module.exports = (sequelize, DataTypes) => {

    const TipoPagamento = sequelize.define(
      "tipoPagamento",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        forma_pagamento: {
          type: DataTypes.ENUM('DINHEIRO', 'CARTAO DE CREDITO', 'BOLETO', 'PIX', 'CARTAO DE DEBITO', 'OUTROS'),
          allowNull: false,
        },
      },
      { timestamps: false, freezeTableName: true }
    );
    return TipoPagamento;
  };
  