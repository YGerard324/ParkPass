module.exports = (sequelize, DataTypes) => {

    const Vaga = sequelize.define(
      "vaga",
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
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        estacionamento_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      { timestamps: false, freezeTableName: true }
    );
    return Vaga;
  };
  