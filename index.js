//import express from "express";
const express = require('express');
//import router from "./routes/ordenes.js";
const router = require('./routes/ordenes.js');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;
// const port = 3000;

app.use(express.json());

app.use('/api/reservas', router);

//app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))
//app.listen(process.env.PORT, () => console.log('Servidor ejecutandose en el puerto ' + process.env.PORT));
app.listen(port, () => {   console.log(`Servidor escuchando en http://localhost:${port}`);   console.log(`Documentación de Swagger disponible en http://localhost:${port}/api-docs`); });