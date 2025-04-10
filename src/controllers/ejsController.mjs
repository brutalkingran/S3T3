import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes } from "../services/superheroesService.mjs";

export const indexController = async ( req, res ) => {
    try {
        res.render('index'); 
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al acceder a index`,
            error: error.mensaje
        });
    }
}

export const crearSuperHeroeFormularioController = async ( req, res ) => {
    try {
        res.render('addSuperhero'); 
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al acceder a Dashboard`,
            error: error.mensaje
        });
    }
}

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