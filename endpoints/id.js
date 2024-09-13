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
 *       404:
 *         description: Faltan datos en la reserva.
 */
router.get('/:id', (req, res) => {
    const user = { id: req.params.id, nombre: 'Juan Hidalgo', hotel: 'Jaguar' };
    res.json(user);
  });
  module.exports = router;