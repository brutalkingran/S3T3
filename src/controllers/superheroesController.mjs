// controladores
// gestiona solicitudes HTTP, llamando servicios correspondientes y utilizando las vistas para presentar los datos
// 5)

import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30, crearSuperheroe, actualizarSuperheroe, borrarSuperheroeID, borrarSuperheroeNombre } from "../services/superheroesService.mjs";
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';

export const obtenerSuperheroePorIdController = async ( req, res ) => {
    try {
        const { id } = req.params; // parámetros URL
        const superheroe = await obtenerSuperheroePorId(id);

        if (!superheroe) {
            return res.status(404).send({
                mensaje: `Superhéroe no encontrado`
            });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al obtener el superhéroe`,
            error: error.mensaje
        });
    }
}

export const obtenerTodosLosSuperheroesController = async ( req, res ) => {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();

        res.render('dashboard', { superheroes });
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al obtener los superhéroes`,
            error: error.mensaje
        });
    }
}

export const buscarSuperheroesPorAtributoController = async ( req, res ) => {
    try {
        const { atributo, valor } = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);

        if (superheroes.length === 0) {
            return res.status(404).send({
                mensaje: `No se encontraron superhéroes con este atributo`
            });
        }

        const superheroeFormateado = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al buscar lo/s superhéroe`,
            error: error.mensaje
        });
    }
}

export const obtenerSuperheroesMayoresDe30Controller = async ( req, res ) => {
    try {
        const superheroes = await obtenerSuperheroesMayoresDe30();

        if (superheroes.length === 0) {
            return res.status(404).send({
                mensaje: `No se encontraron superhéroes mayores de 30 años`
            });
        }

        const superheroeFormateado = renderizarListaSuperheroes(superheroes);

        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al obtener superhéroes mayores de 30`,
            error: error.mensaje
        });
    }
}

export const crearSuperheroeController = async ( req, res ) => {
    try {
        const { nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador } = req.body;
        
        const superheroeFormateado = await crearSuperheroe( nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador );

        res.status(201).json(superheroeFormateado); // 201 indica que se ha creado un recurso.
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al crear superhéroe`,
            error: error.mensaje
        });
    }
}

export const modificarSuperheroeFormularioController = async ( req, res ) => {
    try {
        const { heroeID } = req.params;
        const superheroeEditable = await obtenerSuperheroePorIdController( heroeID );
        
        res.render('editSuperhero', { superheroeEditable });
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al encontrar formulario`,
            error: error.mensaje
        });
    }
}

export const actualizarSuperheroeController = async ( req, res ) => {
    try {
        const { nombre, cambio } = req.body; // parámetros POST o PUT

        const superheroeFormateado = await actualizarSuperheroe( nombre, cambio );

        res.status(200).json(superheroeFormateado); // 200 indica actualización exitosa
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al actualizar superhéroe`,
            error: error.mensaje
        });
    }
}

export const borrarSuperheroeIDController = async ( req, res ) => {
    try {
        const { id } = req.params;

        const superheroeBorrado = await borrarSuperheroeID( id );

        res.status(200).json(superheroeBorrado);
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al eliminar superhéroe por ID`,
            error: error.mensaje
        });
    }
}

export const borrarSuperheroeNombreController = async ( req, res ) => {
    try {
        const { nombre } = req.params;

        const superheroeBorrado = await borrarSuperheroeNombre( nombre );

        res.status(200).json(superheroeBorrado); // 204 indica eliminación exitosa (no hay nada que devolver)
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al eliminar superhéroe por nombre de superhéroe`,
            error: error.mensaje
        });
    }
}
