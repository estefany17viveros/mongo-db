const mongoose = require('mongoose');

const DocumentoSchema = new mongoose.Schema({
  titulo: { type: String, required: true, trim: true },
  tipo: { type: String, enum: ['Reglamento', 'Certificado', 'Informe', 'Guía', 'Otro'], required: true },
  urlArchivo: { type: String, required: true },
  deporteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Deporte', default: null }
}, { timestamps: true });

module.exports = mongoose.model('Documento', DocumentoSchema);