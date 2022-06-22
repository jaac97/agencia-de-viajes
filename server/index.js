import express from 'express';
import Router from './routes/index.js'
const app = express();

const port = process.env.PORT || 4000;


// Agregar Router
app.use('/', Router)

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});