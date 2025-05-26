const fs = require('fs');
const path = require('path');

// Definir la ruta al archivo JSON
const jsonFilePath = path.join(__dirname, '../Productos.json');

// Exportar una función handler que maneja la solicitud
module.exports = (req, res) => {
  // Configurar el encabezado de la respuesta para JSON
  res.setHeader('Content-Type', 'application/json');

  // Leer el archivo JSON
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      // Manejo de errores
      res.status(500).json({ error: 'Error al leer el archivo JSON' });
    } else {
      // Devolver el contenido del archivo JSON
      res.status(200).send(data);
    }
  });
};