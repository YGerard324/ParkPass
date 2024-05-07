module.exports = (sequelize, DataTypes) => {
    console.log("Também estive aqui!");

    const endereco = sequelize.define(
      'endereco',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
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
        // cliente_id: {
        //   foreignKey: 'cliente_id',
        // },
      },
      { timestamps: false }
    );
    return endereco;
  };
  