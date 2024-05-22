module.exports = (sequelize, DataTypes) => {
  const PaymentType = sequelize.define(
    "payment_type",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      payment: {
        type: DataTypes.ENUM(
          "DINHEIRO",
          "CARTAO DE CREDITO",
          "BOLETO",
          "PIX",
          "CARTAO DE DEBITO",
          "OUTROS"
        ),
        allowNull: false,
      },
    },
    { timestamps: false, freezeTableName: true }
  );
  return PaymentType;
};
