const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('comida', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredientes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
