// capa de persistencia
// interfaz crud
// implementacion crud de superheroe. SEPARA LÓGICA DE ACCESO DE BASE DE DATOS
// actúa como un intermediario entre la base de datos y la lógica de la aplicación
// 3)

import superHeroe from "../models/SuperHeroe.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroeRepository extends IRepository {
    async obtenerPorId(id) {
        // const superheroFiltered = await superHeroe.findById(id);
        // return superheroFiltered;

        return await superHeroe.findById(id);
    }

    async obtenerTodos() {
        return await superHeroe.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        return await superHeroe.find( { [atributo] : valor } );
    }

    async obtenerMayoresDe30() {
        // return await superHeroe.find( { edad : { $gt : 30 } } );
        return await superHeroe.find( { $and : [
            { edad : { $gt : 30 } },
            { planetaOrigen : "Tierra" },
            { $expr: { $gt: [{ $size: "$poderes" }, 2] } } 
        ] } );
    }

    async crearHeroe( nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador ) {
        return await superHeroe.insertOne( {
            nombreSuperHeroe: nombreSuperHeroe,
            nombreReal: nombreReal,
            edad: edad,
            planetaOrigen: planetaOrigen,
            debilidad: debilidad,
            poderes: poderes,
            aliados: aliados,
            enemigos: enemigos,
            creador: creador
        });
    };

    async actualizarHeroe( nombre, cambio ) {
        return await superHeroe.findOneAndUpdate({ nombreSuperHeroe : nombre }, cambio, { new: true }); // devuelve documento actualizado
    }

    async borrarheroeID( id ) {
        return await superHeroe.findByIdAndDelete(id);
    }

    async borrarheroeNombre( nombre ) {
        return await superHeroe.findOneAndDelete ({
            nombreSuperHeroe : nombre
        })
    }
}

export default new SuperHeroeRepository();
