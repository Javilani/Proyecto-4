const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users/search:
 *   get:
 *     summary: Filtra una reserva basada en los parámetros entregados
 *     description: Retorna una reserva especificada con los parámetros de búsqueda proporcionados.
 *     parameters:
 *       - in: query
 *         name: nombre
 *         schema:
 *           type: string
 *         description: Nombre en la reserva
 *       - in: query
 *         name: hotel
 *         schema:
 *           type: string
 *         description: Hotel en la reserva
 *       - in: query
 *         name: tipoHabitacion
 *         schema:
 *           type: string
 *         description: tipo de Habitacion de la reserva
 *       - in: query
 *         name: huespedes
 *         schema:
 *           type: integer
 *         description: Número de huespedes
 *       - in: query
 *         name: checkin
 *         schema:
 *           type: date
 *         description: Fecha de llegada
 *       - in: query
 *         name: checkout
 *         schema:
 *           type: date
 *         description: Fecha de salida
 *     responses:
 *       200:
 *         description: Datos de la reserva filtrada
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
 *                   example: Daniel Alvarado
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
 *         description: Reserva no encontrada.
 */
router.get('/search', (req, res) => {
    const { nombre, hotel, tipoHabitacion, huespedes, checkin, checkout } = req.query;
    const updatedUser = { 
        id: "4",
        nombre: nombre || 'Daniel Alvarado', 
        hotel: hotel || "O'Higgins",
        tipoHabitacion: tipoHabitacion || "Doble",
        huespedes: huespedes || 3,
        checkin: checkin || "02-11-2024",
        checkout: checkout || "05-11-2024"
      };
    res.json({
      mensaje: 'Reservas filtradas con éxito.',
      data: updatedUser,
  });
  });

module.exports = router;
