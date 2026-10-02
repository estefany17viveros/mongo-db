// Asegúrate de que la ruta al modelo coincida con el nombre exacto de tu archivo en "models"
const Deporte = require('../models/Deporte');

const obtenerDeportes = async (req, res) => {
  try {
    const deportes = await Deporte.find();
    res.status(200).json(deportes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los deportes', error: error.message });
  }
};

const crearDeporte = async (req, res) => {
  try {
    const nuevoDeporte = new Deporte(req.body);
    await nuevoDeporte.save();
    res.status(201).json(nuevoDeporte);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear deporte', error: error.message });
  }
};

const obtenerDeportePorId = async (req, res) => {
  try {
    const deporte = await Deporte.findById(req.params.id);
    if (!deporte) return res.status(404).json({ mensaje: 'Deporte no encontrado' });
    res.status(200).json(deporte);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error en la búsqueda', error: error.message });
  }
};

const actualizarDeporte = async (req, res) => {
  try {
    const deporte = await Deporte.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!deporte) return res.status(404).json({ mensaje: 'Deporte no encontrado' });
    res.status(200).json(deporte);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar', error: error.message });
  }
};

const eliminarDeporte = async (req, res) => {
  try {
    const deporte = await Deporte.findByIdAndDelete(req.params.id);
    if (!deporte) return res.status(404).json({ mensaje: 'Deporte no encontrado' });
    res.status(200).json({ mensaje: 'Deporte eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar', error: error.message });
  }
};

// Exportación de todas las funciones del controlador
module.exports = {
  obtenerDeportes,
  crearDeporte,
  obtenerDeportePorId,
  actualizarDeporte,
  eliminarDeporte
};