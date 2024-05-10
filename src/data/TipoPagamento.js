module.exports = (sequelize, DataTypes) => {
    console.log("Também estive aqui!");

    const tipoPagamento = sequelize.define(
      'tipoPagamento',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        descrição: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      { timestamps: false, freezeTableName: true }
    );
    return tipoPagamento;
  };
  