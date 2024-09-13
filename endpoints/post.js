const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crea una nueva reserva
 *     description: Añade una nueva reserva a la lista.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Juan Perez
 *               hotel:
 *                 type: string
 *                 example: O'Higgins
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 3
 *                 nombre:
 *                   type: string
 *                   example: Juan Perez
 *                 hotel:
 *                   type: string
 *                   example: O'Higgins
 *       404:
 *         description: Reserva no encontrada
 */
router.post('/', (req, res) => {
    const newUser = {
        id: Date.now(),
        nombre: req.body.nombre,
        hotel: req.body.hotel
    };
    res.status(201).json(newUser);
});
module.exports = router;