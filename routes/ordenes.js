import express from 'express';
const router = express.Router();
import controladorOrdenes from '../controllers/controladorOrdenes.js';


router.post('/', controladorOrdenes.crear);
router.get('/', controladorOrdenes.leerTodas);
router.put('/:id', controladorOrdenes.actualizar);
router.delete('/:id', controladorOrdenes.eliminar);
router.get('/:id', controladorOrdenes.leerUna);
router.get('/search', controladorOrdenes.filtrar);

export default router