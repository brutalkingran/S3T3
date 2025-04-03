import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superheroeRoutes from './routes/superheroesRoutes.mjs';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url); // Get the resolved path to the file
const __dirname = path.dirname(__filename); // Get the name of the directory

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // ajustar ruta

// Middleware para procesar datos de formulario
app.use(bodyParser.urlencoded({ extended: true })); // Para formularios URL-encoded
app.use(express.json());
// app.use('/controllers', express.static(path.join(__dirname, 'controllers')));
// app.use('/src', express.static('src'));
app.use(methodOverride('_method')); // Middleware para usar PUT o DELETE desde formularios

// conexión a mongoDB
connectDB();

// Configuración de rutas
app.use('/api', superheroeRoutes);
app.get('/greeting', (req, res) => {
    const name = "John";
    res.render('greeting', { name });
});

// manejo de errores para rutas no encontradas
app.use( (req, res) => res.status(404).send({ mensaje: "Ruta no encontrada" }));

// Iniciar sv
app.listen( PORT, () => {
    console.log( `Servidor escuchando en el puerto ${PORT}` );
});
