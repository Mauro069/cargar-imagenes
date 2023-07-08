const express = require('express')
const app = express()
const port = 3000

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola mundo desde la API!')
})

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La API está escuchando en http://localhost:${port}`)
})
