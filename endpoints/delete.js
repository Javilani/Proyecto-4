const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Elimina una reserva por ID
 *     description: Elimina una reserva específica basado en el ID proporcionado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Reserva eliminada con éxito.
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
 *                   example: Beatriz Guajardo
 *                 hotel:
 *                   type: string
 *                   example: La Joya del Paraíso
 *                 tipoHabitacion: 
 *                   type: string
 *                   example: Single
 *                 huespedes:
 *                   type: integer
 *                   example: 1
 *                 checkin:
 *                   type: date
 *                   example: 23-12-2024
 *                 checkout:
 *                   type: date
 *                   example: 26-12-2024
 *       404:
 *         description: Reserva no encontrada
 */
router.delete('/:id', (req, res) => {
    res.status(200).json({ mensaje: 'Reserva eliminada con éxito.' });
  });
  module.exports = router;