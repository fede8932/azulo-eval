//Archivo con controladores

const Services = require('../services/indexServices');

class Controller {
  // Controlador para listar todos los aeropuertos
  static async airports(req:any, res:any) {
    const respuesta = await Services.airports(req);
    return respuesta ? res.status(200).json(respuesta) : res.status(500).send('No hay resultados');
  }
  //Controlador para encontrar un aeropuerto por ID (pasado por req.params)
  static async airport(req:any, res:any) {
    const respuesta = await Services.airport(req);
    return respuesta ? res.status(200).json(respuesta) : res.status(500).send('No hay resultados');
  }
  //Controlador para modificar operador a un aeropuerto (Id del aeropuerto por req.params y datos del operador por req.body)
  static async airportMove(req:any, res:any) {
    const respuesta = await Services.airpotMove(req);
    return respuesta ? res.status(200).json(respuesta) : res.status(500).send('No hay resultados');
  }
  //Controlador para modificar el orde de prioridad
  static async airportPriorityChange(req:any, res:any) {
    const respuesta = await Services.airportPriorityChange(req);
    return respuesta ? res.status(200).json(respuesta) : res.status(500).send('No hay resultados');
  }
}
module.exports = Controller;