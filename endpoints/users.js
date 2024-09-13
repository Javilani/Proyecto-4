const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene la lista de todas las reservas
 *     description: Retorna un array de reservas registradas.
 *     responses:
 *       200:
 *         description: Lista de reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: Jose Lopez
 *                   hotel:
 *                     type: string
 *                     example: Sheraton
 *                   tipoHabitacion: 
 *                     type: string
 *                     example: Matrimonial
 *                   huespedes:
 *                     type: integer
 *                     example: 2
 *                   checkin:
 *                     type: date
 *                     example: 05-12-2024
 *                   checkout:
 *                     type: date
 *                     example: 07-12-2024
 */
router.get('/', (req, res) => {
  const users = [
    { id: 1, 
      nombre: 'David Figueroa', 
      hotel: "O'Higgins", 
      tipoHabitacion: "Matrimonial",
      huespedes: 2,
      checkin: "05-12-2024",
      checkout: "07-12-2024"},
    { id: 2, 
      nombre: 'Ana Silva', 
      hotel: 'Sheraton',
      tipoHabitacion: "Doble",
      huespedes: 3,
      checkin: "18-10-2024",
      checkout: "23-10-2024"},
  ];
  res.json({
    mensaje: "Datos obtenidos con éxito",
    info: users,
});
});
module.exports = router;