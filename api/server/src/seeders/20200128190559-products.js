'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
     

      Example: */

    return queryInterface.bulkInsert('Products', [
      {
        name: 'Café Americano',
        is_breakfast: true,
        price: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Café com Leite',
        is_breakfast: true,
        price: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Misto Quente',
        is_breakfast: true,
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Suco de fruta natural',
        is_breakfast: true,
        price: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hambúrguer simples',
        is_breakfast: false,
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hambúrguer simples',
        is_breakfast: false,
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hambúrguer simples',
        is_breakfast: false,
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hambúrguer duplo',
        is_breakfast: false,
        price: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Batata frita',
        is_breakfast: false,
        price: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Anéis de cebola',
        is_breakfast: false,
        price: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Água 500ml',
        is_breakfast: false,
        price: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Água 750ml',
        is_breakfast: false,
        price: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Refrigerante 500ml',
        is_breakfast: false,
        price: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Refrigerante 750ml',
        is_breakfast: false,
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
    return queryInterface.bulkDelete('Products', null, {});

  }
};
