// Rutas de la API
// rutas API para superhéroes
// 7)

import express from 'express';
import { obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller, crearSuperheroeController, actualizarSuperheroeController, borrarSuperheroeIDController, borrarSuperheroeNombreController } from '../controllers/superheroesController.mjs';
import { deleteByIdValidationRules, deleteByNameValidationRules, registerValidationRules, updateValidationRules } from '../validations/validationRules.mjs';
import { handleValidationErrors } from '../validations/errorMiddleware.mjs';
import { crearSuperHeroeFormularioController, indexController, modificarSuperheroeFormularioController, obtenerTodosLosSuperheroesController } from '../controllers/ejsController.mjs';

const router = express.Router();

// ejs
router.get('/index', indexController);
router.get('/dashboard', obtenerTodosLosSuperheroesController);
router.get('/formulario/crear-heroe-formulario', crearSuperHeroeFormularioController);
router.get('/formulario/modificar-heroe-formulario/:id', modificarSuperheroeFormularioController);

router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.post('/heroes/crear-heroe', registerValidationRules(), handleValidationErrors, crearSuperheroeController);

router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

router.put('/heroes/modificar-heroe', updateValidationRules(), handleValidationErrors, actualizarSuperheroeController);

router.delete('/heroes/borrar-id/:id', deleteByIdValidationRules(), handleValidationErrors, borrarSuperheroeIDController);
router.delete('/heroes/borrar-nombre/:nombre', deleteByNameValidationRules(), handleValidationErrors, borrarSuperheroeNombreController);

export default router;