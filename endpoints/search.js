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
 *       404:
 *         description: Reserva no encontrada.
 */
router.get('/search', (req, res) => {
    const { nombre, hotel } = req.query;
    const updatedUser = { 
        id: "4",
        nombre: nombre || 'Daniel Alvarado', 
        hotel: hotel || "O'Higgins" };
    res.json(updatedUser);
  });

module.exports = router;
