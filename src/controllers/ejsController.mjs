import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes } from "../services/superheroesService.mjs";

export const obtenerTodosLosSuperheroesController = async ( req, res ) => {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();

        const cambio = req.query.cambio ? JSON.parse(decodeURIComponent(req.query.cambio)) : null; // por si hay cambio en la URL

        res.render('dashboard', { superheroes, cambio });
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al obtener los superhéroes`,
            error: error.mensaje
        });
    }
}

export const modificarSuperheroeFormularioController = async ( req, res ) => {
    try {
        const { id } = req.params;
        const superheroeEditable = await obtenerSuperheroePorId( id );
        
        res.render('editSuperhero', { superheroeEditable });
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al cargar formulario`,
            error: error.mensaje
        });
    }
}