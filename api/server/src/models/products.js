'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    is_breakfast: DataTypes.BOOLEAN,
    price: DataTypes.DECIMAL
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.orderItens)
  };
  return Products;
};