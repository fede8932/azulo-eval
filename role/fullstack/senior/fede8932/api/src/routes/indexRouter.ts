//Archivo con definición de rutas

const router = require("express").Router();
const Controlador = require('../controllers/indexController')

router.get("/airports/",Controlador.airports); // Busca todos los aeropuertos
router.get("/airports/:id",Controlador.airport); // Busca un aeropuerto por ID
router.put("/move/:AirportId",Controlador.airportMove); // Modifica el operador de un aeropuerto
router.put("/change/priority",Controlador.airportPriorityChange); // Modifica el orden de prioridad

export default router;