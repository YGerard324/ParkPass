module.exports = (sequelize, DataTypes) => {
    console.log("Também estive aqui!");

    const vaga = sequelize.define(
      'vaga',
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
      },
      { timestamps: false }
    );
    return vaga;
  };
  