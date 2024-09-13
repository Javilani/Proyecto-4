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
 *               tipoHabitacion: 
 *                 type: string
 *                 example: Matrimonial
 *               huespedes:
 *                 type: integer
 *                 example: 2
 *               checkin:
 *                 type: date
 *                 example: 05-12-2024
 *               checkout:
 *                 type: date
 *                 example: 07-12-2024
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
 *                 tipoHabitacion: 
 *                   type: string
 *                   example: Matrimonial
 *                 huespedes:
 *                   type: integer
 *                   example: 2
 *                 checkin:
 *                   type: date
 *                   example: 05-12-2024
 *                 checkout:
 *                   type: date
 *                   example: 07-12-2024
 *       404:
 *         description: Reserva no encontrada
 */
router.post('/', (req, res) => {
    const newUser = {
        id: Date.now(),
        nombre: req.body.nombre,
        hotel: req.body.hotel,
        tipoHabitacion: req.body.tipoHabitacion,
        huespedes: req.body.huespedes,
        checkin: req.body.checkin,
        checkout: req.body.checkout
    };
    res.status(201).json({
        mensaje: "Reserva creada exitosamente",
        info: newUser,
    });
});
module.exports = router;