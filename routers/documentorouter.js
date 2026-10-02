const express = require('express');
const router = express.Router();
const documentoController = require('../controllers/documentocontroller');

router.route('/')
  .get(documentoController.obtenerDocumentos)
  .post(documentoController.crearDocumento);

router.route('/:id')
  .get(documentoController.obtenerDocumentoPorId)
  .put(documentoController.actualizarDocumento)
  .delete(documentoController.eliminarDocumento);

// ⚠️ ESTA LÍNEA ES OBLIGATORIA
module.exports = router;