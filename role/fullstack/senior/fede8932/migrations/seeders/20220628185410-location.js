'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('location', [{
      //Aeroparque
      Country: 'Argentina',
      Province_or_state: 'Buenos Aires',
      Latitude: -34.55796863015798,
      Longitude: -58.41690151340143,
    },{
      //Ezeiza
      Country: 'Argentina',
      Province_or_state: 'Buenos Aires',
      Latitude: -34.814916296641826,
      Longitude: -58.534463621345665,
    },{
      //Mar del Plata
      Country: 'Argentina',
      Province_or_state: 'Buenos Aires',
      Latitude: -37.93209688032998,
      Longitude: -57.58163250295409,
    },{
      //Cordoba
      Country: 'Argentina',
      Province_or_state: 'Buenos Aires',
      Latitude: -31.315330727839434,
      Longitude: -64.21374414415908,
    },{
      //bariloche
      Country: 'Argentina',
      Province_or_state: 'Buenos Aires',
      Latitude: -41.14577965748578,
      Longitude: -71.16155594391702,
    },{
      //Jujuy
      Country: 'Argentina',
      Province_or_state: 'Buenos Aires',
      Latitude: -24.385073804035667,
      Longitude: -65.09407223265424,
    },{
      //santa fe
      Country: 'Argentina',
      Province_or_state: 'Buenos Aires',
      Latitude: -31.709043943917706,
      Longitude: -60.80609531531489,
    },{
      //Misiones
      Country: 'Argentina',
      Province_or_state: 'Buenos Aires',
      Latitude: -27.512449366858075,
      Longitude: -55.124437952512935,
    },{
      //corrientes
      Country: 'Argentina',
      Province_or_state: 'Buenos Aires',
      Latitude: -27.448140580929405,
      Longitude: -58.7585142670903,
    },{
      //Chubut
      Country: 'Argentina',
      Province_or_state: 'Buenos Aires',
      Latitude:-42.53006291919411,
      Longitude: -65.16650426486193,
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('locations', null, {});
  }
};