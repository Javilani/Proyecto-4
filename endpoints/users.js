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
 */
router.get('/', (req, res) => {
  const users = [
    { id: 1, nombre: 'David Figueroa', hotel: "O'Higgins" },
    { id: 2, nombre: 'Ana Silva', hotel: 'Sheraton' },
    { id: 3, nombre: 'Cris Hidalgo', hotel: 'Holiday Inn' },
    { id: 4, nombre: 'Brian Herrera', hotel: 'Jaguar' },
    { id: 5, nombre: 'Beatriz Guajardo', hotel: 'La Joya del Paraíso' },
  ];
  res.json(users);
});
module.exports = router;