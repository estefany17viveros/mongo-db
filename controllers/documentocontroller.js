const Documento = require('../models/documento');

const obtenerDocumentos = async (req, res) => {
  try {
    const documentos = await Documento.find().populate('deporteId', 'nombre categoria');
    res.status(200).json(documentos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener documentos', error: error.message });
  }
};

const crearDocumento = async (req, res) => {
  try {
    const nuevoDocumento = new Documento(req.body);
    await nuevoDocumento.save();
    res.status(201).json(nuevoDocumento);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear documento', error: error.message });
  }
};

const obtenerDocumentoPorId = async (req, res) => {
  try {
    const documento = await Documento.findById(req.params.id).populate('deporteId', 'nombre');
    if (!documento) return res.status(404).json({ mensaje: 'Documento no encontrado' });
    res.status(200).json(documento);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error en la búsqueda', error: error.message });
  }
};

const actualizarDocumento = async (req, res) => {
  try {
    const documento = await Documento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!documento) return res.status(404).json({ mensaje: 'Documento no encontrado' });
    res.status(200).json(documento);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar', error: error.message });
  }
};

const eliminarDocumento = async (req, res) => {
  try {
    const documento = await Documento.findByIdAndDelete(req.params.id);
    if (!documento) return res.status(404).json({ mensaje: 'Documento no encontrado' });
    res.status(200).json({ mensaje: 'Documento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar', error: error.message });
  }
};

module.exports = {
  obtenerDocumentos,
  crearDocumento,
  obtenerDocumentoPorId,
  actualizarDocumento,
  eliminarDocumento
};