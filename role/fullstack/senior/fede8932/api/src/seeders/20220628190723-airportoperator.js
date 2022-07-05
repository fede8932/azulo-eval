'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('airport_operators', [{
      Name: 'Dora Toledo Andreu',
    },{
      Name: 'Berto Barral Baena',
    },{
      Name: 'Apolinar Andrés Aguado',
    },{
      Name: 'Marisela Santana Urrutia',
    },{
      Name: 'Lidia Andrea Peral Nogués',
    },{
      Name: 'Amelia Blanca Rodríguez Avilés',
    },{
      Name: 'Selena Castilla Suarez',
    },{
      Name: 'Encarnación Julieta Real Pina',
    },{
      Name: 'Mario de Marín',
    },{
      Name: 'Telmo Pinto Valero',
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('airport_operators', null, {});
  }
};