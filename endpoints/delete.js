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
 *                 apellido:
 *                   type: string
 *                   example: La Joya del Paraíso
 *       404:
 *         description: Reserva no encontrada
 */
router.delete('/:id', (req, res) => {
    const deletedUser = { id: req.params.id, nombre: 'Beatriz Guajardo', hotel: 'La Joya del Paraíso' };
    res.status(200).json(deletedUser);
  });
  module.exports = router;