import express from 'express';
import Router from './routes/index.js'
const app = express();

const port = process.env.PORT || 4000;


// Agregar Router
app.use('/', Router)
// Definir carpeta publica
// app.use(express.static('../client/public'));
// Obtener año actual


app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});