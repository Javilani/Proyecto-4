const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene la lista de todos los usuarios
 *     description: Retorna un array de usuarios registrados.
 *     responses:
 *       200:
 *         description: Lista de usuarios
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
 *                     example: Juan
 *                   apellido:
 *                     type: string
 *                     example: Pérez
 */
router.get('/', (req, res) => {
  const users = [
    { id: 1, nombre: 'Dave', apellido: 'Grohl' },
    { id: 2, nombre: 'Ana', apellido: 'García' },
    { id: 3, nombre: 'Kurt', apellido: 'Cobain' },
    { id: 4, nombre: 'Brian', apellido: 'Johnson' },
    { id: 5, nombre: 'Sheryl', apellido: 'Crow' },
  ];
  res.json(users);
});
module.exports = router;