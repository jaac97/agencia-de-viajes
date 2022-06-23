import express from 'express';
import Router from './routes/index.js'
import db from './config/db.js';
const app = express();

const port = process.env.PORT || 4000;

// Connectar DB
db.authenticate()
.then(() => console.log("Base conectada"))
.catch(error => console.log(error))

// Agregar Router
app.use('/', Router)
// Definir carpeta publica
// app.use(express.static('../client/public'));



app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});