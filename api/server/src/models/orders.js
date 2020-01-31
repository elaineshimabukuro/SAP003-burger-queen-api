'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    itens: DataTypes.STRING,
    status: DataTypes.STRING,
    clientName: DataTypes.STRING,
    table: DataTypes.INTEGER,
    total: DataTypes.DECIMAL
  }, {});
  Orders.associate = function(models) {
    Orders.hasMany(models.orderItens)
  };
  return Orders;
};