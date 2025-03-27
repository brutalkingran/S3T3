// Modelos de datos
// Modelo Superheroe
// 2)

import mongoose from "mongoose";

const superheroeSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0},
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creador: String,
    createdAt: { type: Date, default: Date.now }
});

const superHeroe = mongoose.model('SuperHeroe', superheroeSchema, 'Grupo-03');
export default superHeroe;