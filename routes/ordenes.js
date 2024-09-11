//import express from 'express';
const express = require('express');
//import controladorOrdenes from '../controllers/controladorOrdenes.js';
const controladorOrdenes = require('../controllers/controladorOrdenes.js')
const router = express.Router();

router.post('/', controladorOrdenes.crear);
router.get('/', controladorOrdenes.leerTodas);
router.put('/:id', controladorOrdenes.actualizar);
router.delete('/:id', controladorOrdenes.eliminar);
router.get('/search', controladorOrdenes.filtrarOrdenes);
router.get('/:id', controladorOrdenes.leerUna);

//export default router
module.exports = router;