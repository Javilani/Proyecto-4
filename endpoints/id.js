const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtiene una reserva por ID
 *     description: Retorna una reserva específica basado en el ID proporcionado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Datos de la reserva
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
 *                   example: Juan Gonzalez
 *                 hotel:
 *                   type: string
 *                   example: Jaguar
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
 *         description: Faltan datos en la reserva.
 */
router.get('/:id', (req, res) => {
    const user = { 
      id: req.params.id, 
      nombre: 'Juan Hidalgo', 
      hotel: 'Jaguar',
      tipoHabitacion: "Doble",
      huespedes: 3,
      checkin: "18-10-2024",
      checkout: "23-10-2024" };
    res.json({
      mensaje: 'Reserva obtenida con éxito.',
      data: user,
  });
  });
  module.exports = router;