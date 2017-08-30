'use strict';
module.exports = function(sequelize, DataTypes) {
  var Chore = sequelize.define('Chore', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    completion: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Chore;
};