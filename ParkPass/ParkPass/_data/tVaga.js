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
        tipoVaga: {
          type: DataTypes.ENUM('MOTO', 'CARRO'),
          allowNull: false,
        },
        cobertura: {
          type: DataTypes.BOOL,
          allowNull: false,
        },
        // estacionamento_id: {
        //   foreignKey: 'estacionamento_id',
        // },
      },
      { timestamps: false }
    );
    return vaga;
  };
  