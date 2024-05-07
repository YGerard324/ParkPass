module.exports = (sequelize, DataTypes) => {
    console.log("Também estive aqui!");

    const admin = sequelize.define(
      'admin',
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
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      { timestamps: false }
    );
    return admin;
  };
  