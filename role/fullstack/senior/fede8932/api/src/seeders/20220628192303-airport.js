'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('airports', [{
      Name: 'Aeropuerto Internacional de Ezeiza',
      airportOperatorId: 2,
      AirportCode: 'ARG-BSAS-02',
      locationId: 2,
      PriorityOrder: 1
    },{
      Name: 'Aeropuerto Internacional Jorge Newbery',
      airportOperatorId: 1,
      AirportCode: 'ARG-BSAS-01',
      locationId: 1,
      PriorityOrder: 2
    },{
      Name: 'Aeropuerto Internacional de Mar del Plata',
      airportOperatorId: 3,
      AirportCode: 'ARG-BSAS-03',
      locationId: 3,
      PriorityOrder: 3
    },{
      Name: 'Aeropuerto Internacional de Cordoba',
      airportOperatorId: 4,
      AirportCode: 'ARG-CORD-01',
      locationId: 4,
      PriorityOrder: 4
    },{
      Name: 'Aeropuerto Internacional de Bariloche',
      airportOperatorId: 5,
      AirportCode: 'ARG-RNEG-01',
      locationId: 5,
      PriorityOrder: 5
    },{
      Name: 'Aeropuerto Internacional de Jujuy',
      airportOperatorId: 6,
      AirportCode: 'ARG-JUJU-01',
      locationId: 6,
      PriorityOrder: 6
    },{
      Name: 'Aeropuerto Internacional de Santa Fé',
      airportOperatorId: 7,
      AirportCode: 'ARG-SAFE-01',
      locationId: 7,
      PriorityOrder: 7
    },{
      Name: 'Aeropuerto Internacional de Misiones',
      airportOperatorId: 8,
      AirportCode: 'ARG-MISI-01',
      locationId: 8,
      PriorityOrder: 8
    },{
      Name: 'Aeropuerto Internacional de Corrientes',
      airportOperatorId: 9,
      AirportCode: 'ARG-CORR-01',
      locationId: 9,
      PriorityOrder: 9
    },{
      Name: 'Aeropuerto Internacional de Chubut',
      airportOperatorId: 10,
      AirportCode: 'ARG-CHUB-01',
      locationId: 10,
      PriorityOrder: 10
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('airports', null, {});
  }
};
