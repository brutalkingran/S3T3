// Rutas de la API
// rutas API para superhéroes
// 7)

import express from 'express';
import { obtenerSuperheroePorIdController, obtenerTodosLosSuperheroesController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller, crearSuperheroeController, actualizarSuperheroeController, borrarSuperheroeIDController, borrarSuperheroeNombreController } from '../controllers/superheroesController.mjs';
import { registerValidationRules } from '../validations/validationRules.mjs';
import { handleValidationErrors } from '../validations/errorMiddleware.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

router.get('/heroes/crear-heroe', (req, res) => {
    res.render('addSuperhero'); 
});
router.post('/heroes/crear-heroe', registerValidationRules(), handleValidationErrors, crearSuperheroeController);

router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.put('/heroes/modificar-heroe', actualizarSuperheroeController);
router.delete('/heroes/borrar-id/:id', borrarSuperheroeIDController);
router.delete('/heroes/borrar-nombre/:nombre', borrarSuperheroeNombreController);

export default router;