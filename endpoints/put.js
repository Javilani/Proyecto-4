const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualiza una reserva por ID
 *     description: Retorna una reserva selecciona con el ID con los datos actualizados.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Maria Jimenez
 *               hotel:
 *                 type: string
 *                 example: Jaguar
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
 *       200:
 *         description: Datos de la reserva actualizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nombre:
 *                   type: string
 *                   example: Maria Jimenez
 *                 hotel:
 *                   type: string
 *                   example: Jaguar
 *       404:
 *         description: Reserva no encontrada.
 */
router.put('/:id', (req, res) => {
    const { nombre, hotel } = req.body;
    const updatedUser = { 
        id: req.params.id, 
        nombre: nombre, 
        hotel: hotel,
        tipoHabitacion: req.body.tipoHabitacion,
        huespedes: req.body.huespedes,
        checkin: req.body.checkin,
        checkout: req.body.checkout };
    res.json({
        mensaje: 'Reserva actualizada con éxito.',
        info: updatedUser,
    });
  });
  module.exports = router;