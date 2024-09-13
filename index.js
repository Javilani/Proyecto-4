const express = require('express');
const router = require('./routes/ordenes.js');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;
const swaggerSetup = require('./swagger.js');
swaggerSetup(app);

app.use(express.json());

const usersRouter = require('./endpoints/users.js');
const postsRouter = require('./endpoints/post.js');
const filteredRouter = require('./endpoints/search.js');
const updatedRouter = require('./endpoints/put.js');
const idRouter = require('./endpoints/id.js');
const deleteRouter = require('./endpoints/delete.js');

app.use('/users', usersRouter, postsRouter, filteredRouter, idRouter, deleteRouter, updatedRouter);


app.use('/api/reservas', router);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);   
    console.log(`Documentación de Swagger disponible en http://localhost:${port}/api-docs`); 
});