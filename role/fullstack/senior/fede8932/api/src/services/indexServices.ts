import db from '../models';
import  { ResAirportsAttributes , ResAirportAttributes }  from '../types';

class Services {
    static async airports(_req:any) {
        try {
            const airports : Array<ResAirportsAttributes>= await db.airports.findAll();
            return airports;
        } catch (err) {
            throw err;
        }
    }
    static async airport(req:any) {
        try {
            const airport : ResAirportAttributes= await db.airports.findOne({
                where:{
                    id:Number(req.params.id),
                },
                include:[{
                    model: db.airport_operators,
                    atributes: ['name'],
                },{
                    model: db.locations,
                    atributes: ['province_or_state','country'],
                }],
            });
            return airport;
        } catch (err) {
            throw err;
        }
    }
    static async airpotMove(req:any) {
        try {
            await db.airports.update(req.body, {
                where: {
                    id: Number(req.params.AirportId),
                }
            });
            return 'ok';
        } catch (err) {
            throw err;
        }
    }
    static async airportPriorityChange(req:any) {
        try{
            for (let propiedad in req.body) {
                const airport : ResAirportAttributes= await db.airports.findOne({
                    where:{
                        airportCode:propiedad,
                    }
                })
                await db.airports.update({priorityOrder:airport.priorityOrder}, {
                    where: {
                        priorityOrder:req.body[propiedad],
                    }
                });
                await db.airports.update({priorityOrder:req.body[propiedad]}, {
                    where: {
                        airportCode:propiedad,
                    }
                });
            }
            return "Actualización OK!"
        }catch (err) {
            throw err;
        }
    }

}
module.exports = Services;