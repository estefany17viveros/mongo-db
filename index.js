const express = require('express');
const mongoose = require('mongoose');

const deporteRoutes = require('./routers/deporterouter');
const documentoRoutes = require('./routers/documentorouter');

const app = express();
const PORT = 3000;

// ⚠️ AQUÍ ESTÁ EL CAMBIO: Especifica /deporte_db al final de la URL
const MONGO_URI = 'mongodb://127.0.0.1:27017/deporte_db?authSource=admin';

app.use(express.json());

app.use('/api/deportes', deporteRoutes);
app.use('/api/documentos', documentoRoutes);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Conectado exitosamente a MongoDB en la base de datos: deporte_db');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor ejecutándose en http://127.0.0.1:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error de conexión:', err.message);
  });