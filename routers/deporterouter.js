const express = require('express');
const router = express.Router();
const deporteController = require('../controllers/deportecontroller');

router.route('/')
  .get(deporteController.obtenerDeportes)
  .post(deporteController.crearDeporte);

router.route('/:id')
  .get(deporteController.obtenerDeportePorId)
  .put(deporteController.actualizarDeporte)
  .delete(deporteController.eliminarDeporte);

module.exports = router;