import { uploadFile } from './utils/uploadFile.js'
import { connectToDatabase } from './utils/db.js'
import { upload } from './config/multer.js'
import { User } from './models/User.js'
import express from 'express'
import cors from 'cors'

connectToDatabase()
const app = express()
const port = 3000

// Configurar CORS
app.use(
  cors({
    origin: 'http://localhost:5173'
  })
)

// Ruta principal
// prettier-ignore
app.post('/upload-img', upload.fields([{ name: 'image', maxCount: 1 }]), async (req, res) => {
    const body = req.body
    const image = req.files.image
    
    if (image && image.length > 0) {
      const { downloadURL } = await uploadFile(image[0])

      const newUser = await new User({
        image: downloadURL,
        firstname: body.firstname,
        lastname: body.lastname
      }).save()

      return res.status(200).json({ newUser, message: 'Usuario creado correctamente' })
    }

    return res.status(400).json({message: 'Debes enviar una imagen'})
  }
)

app.get('/users', async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json({ users })
  } catch (error) {
    res.status(400).json({ message: 'Ocurrio un error al traer los usuarios' })
  }
})

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La API está escuchando en http://localhost:${port}`)
})
