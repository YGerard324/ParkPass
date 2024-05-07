module.exports = (sequelize, DataTypes) => {
    console.log("Também estive aqui!");

    const estacionamento = sequelize.define(
      'estacionamento',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cnpj: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        logradouro: {
          type: DataTypes.STRING,
        },
        bairro: {
          type: DataTypes.STRING,
        },
        cidade: {
          type: DataTypes.STRING,
        },
        cep: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        // admin_id: {
        //   foreignKey: 'admin_id',
        // },
      },
      { timestamps: false }
    );
    return estacionamento;
  };
  