import mongoose from 'mongoose'

const urlConnection = 'mongodb://127.0.0.1/cargar-imagenes'

export function connectToDatabase () {
  mongoose
    .connect(urlConnection)
    .then(() => console.log('Database Connected'))
    .catch(error => console.error('Database ERROR', error))
}
