import { body } from 'express-validator';
import { formatearArray } from '../views/responseView.mjs';

export const deleteByIdValidationRules = () => [
    param('id')
        .notEmpty().withMessage('El ID es obligatorio.')
        .isInt({ min: 1 }).withMessage('El ID debe ser un número entero positivo.')
];

export const registerValidationRules = () => [
    // nombreSuperheroe debe validarse que sea requerido, no tenga espacios en blanco(trim), una longitud minima de 3 caracteres y una longitud maxima de 60
    body('nombreSuperHeroe')
        .trim()
        .notEmpty().withMessage("Campo 'nombreSuperHeroe' obligatorio.")
        .isLength({ min : 3, max : 60}).withMessage('Ingrese un nombre de superhéroe válido con una longitud entre 3 y 60 caracteres.'),

    // nombreReal debe validarse que sea requerido, no tenga espacios en blanco(trim), una longitud minima de 3 caracteres y una longitud maxima de 60
    body('nombreReal')
        .trim()
        .notEmpty().withMessage("Campo 'nombreReal' obligatorio.")
        .isLength({ min : 3, max : 60}).withMessage('Ingrese un nombre de superhéroe válido con una longitud entre 3 y 60 caracteres.'),

    //  edad debe validarse que sea requerido, que sea un numero, no tenga espacios en blanco(trim), valor minimo 0 (no admite edad negativa)
    body('edad')
        .trim()
        .notEmpty().withMessage("campo 'edad' obligatorio")
        .isInt({ min: 0 }).withMessage("Ingrese un número entero no negativo."),

    //  poderes debe validarse que sea requerido, que sea un array de string cuyo tamaño no sea 0, cada elemento no tenga espacios en blanco, cada elemento una longitud minima de 3 caracteres y una longitud maxima de 60
    body('poderes')
        .optional()
        .customSanitizer(formatearArray)
        .isArray().withMessage('El campo "poderes" debe ser un array.')
        .custom((poderes) => {
            if (poderes.length === 0) {
                throw new Error('El campo "poderes" debe contener por lo menos un poder.');
            }

            for (const poder of poderes) {
                if (typeof poder !== 'string' || poder.trim().length < 3 || poder.trim().length > 60) {
                    throw new Error("Cada poder debe ser una cadena de texto con una longitud entre 3 y 60 caracteres, sin espacios en blanco");
                }
            }

            return true;
        }),

    body('aliados')
        .optional()
        .customSanitizer(formatearArray)
        .isArray().withMessage('El campo "aliados" debe ser un array.')
        .custom((aliados) => {
            if (aliados.length === 0) {
                throw new Error('El campo "aliados" debe contener por lo menos un aliado.');
            }

            for (const aliado of aliados) {
                if (typeof aliado !== 'string' || aliado.trim().length < 3 || aliado.trim().length > 60) {
                    throw new Error("Cada aliado debe ser una cadena de texto con una longitud entre 3 y 60 caracteres, sin espacios en blanco");
                }
            }
            
            return true;
        }),

    body('enemigos')
        .optional()
        .customSanitizer(formatearArray)
        .isArray().withMessage('El campo "enemigos" debe ser un array.')
        .custom((enemigos) => {
            if (enemigos.length === 0) {
                throw new Error('El campo "enemigos" debe contener por lo menos un enemigo.');
            }

            for (const enemigo of enemigos) {
                if (typeof enemigo !== 'string' || enemigo.trim().length < 3 || enemigo.trim().length > 60) {
                    throw new Error("Cada enemigo debe ser una cadena de texto con una longitud entre 3 y 60 caracteres, sin espacios en blanco");
                }
            }

            return true;
        }),
];