import { crearSuperHeroeFormularioController, indexController, modificarSuperheroeFormularioController, obtenerTodosLosSuperheroesController } from '../controllers/ejsController.mjs';

const router = express.Router();

// ejs
router.get('/', indexController);
router.get('/dashboard', obtenerTodosLosSuperheroesController);
router.get('/addSuphero', crearSuperHeroeFormularioController);
router.get('/modifyHero/:id', modificarSuperheroeFormularioController);

export default router;