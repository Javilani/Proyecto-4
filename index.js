const express = require('express');
const router = require('./routes/ordenes.js');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;
const swaggerSetup = require('./swagger.js');
swaggerSetup(app);

const usersRouter = require('./endpoints/users.js');

app.use('/users', usersRouter);

app.use(express.json());

app.use('/api/reservas', router);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);   
    console.log(`Documentación de Swagger disponible en http://localhost:${port}/api-docs`); 
});