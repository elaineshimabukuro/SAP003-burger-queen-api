'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tables = sequelize.define('Tables', {
    idOrder: DataTypes.INTEGER
  }, {});
  Tables.associate = function(models) {
    // associations can be defined here
  };
  return Tables;
};