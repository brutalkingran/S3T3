import { validationResult } from "express-validator";
import { mostrarErroresController } from "../controllers/ejsController.mjs";

export const handleValidationErrors = (req, res, next) => {
    const errors = validationResult( req );

    if ( !errors.isEmpty() ) {
        // return res.status(400).json({ errors: errors.array() });
        return mostrarErroresController(errors);
    }

    next();
}