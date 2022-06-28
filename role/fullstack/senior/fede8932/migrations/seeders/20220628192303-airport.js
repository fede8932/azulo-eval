'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Airports', [{
      Name: 'Aeropuerto Internacional de Ezeiza',
      AirportOperatorId: 2,
      AirportCode: 'ARG-BSAS-02',
      LocationId: 2,
      PriorityOrder: 1
    },{
      Name: 'Aeropuerto Internacional Jorge Newbery',
      AirportOperatorId: 1,
      AirportCode: 'ARG-BSAS-01',
      LocationId: 1,
      PriorityOrder: 2
    },{
      Name: 'Aeropuerto Internacional de Mar del Plata',
      AirportOperatorId: 3,
      AirportCode: 'ARG-BSAS-03',
      LocationId: 3,
      PriorityOrder: 3
    },{
      Name: 'Aeropuerto Internacional de Cordoba',
      AirportOperatorId: 4,
      AirportCode: 'ARG-CORD-01',
      LocationId: 4,
      PriorityOrder: 4
    },{
      Name: 'Aeropuerto Internacional de Bariloche',
      AirportOperatorId: 5,
      AirportCode: 'ARG-RNEG-01',
      LocationId: 5,
      PriorityOrder: 5
    },{
      Name: 'Aeropuerto Internacional de Jujuy',
      AirportOperatorId: 6,
      AirportCode: 'ARG-JUJU-01',
      LocationId: 6,
      PriorityOrder: 6
    },{
      Name: 'Aeropuerto Internacional de Santa Fé',
      AirportOperatorId: 7,
      AirportCode: 'ARG-SAFE-01',
      LocationId: 7,
      PriorityOrder: 7
    },{
      Name: 'Aeropuerto Internacional de Misiones',
      AirportOperatorId: 8,
      AirportCode: 'ARG-MISI-01',
      LocationId: 8,
      PriorityOrder: 8
    },{
      Name: 'Aeropuerto Internacional de Corrientes',
      AirportOperatorId: 9,
      AirportCode: 'ARG-CORR-01',
      LocationId: 9,
      PriorityOrder: 9
    },{
      Name: 'Aeropuerto Internacional de Chubut',
      AirportOperatorId: 10,
      AirportCode: 'ARG-CHUB-01',
      LocationId: 10,
      PriorityOrder: 10
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Airports', null, {});
  }
};
