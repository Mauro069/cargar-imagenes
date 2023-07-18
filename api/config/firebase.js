import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import dotenv from 'dotenv'

// Configurar variables de entorno
dotenv.config()

// Configuración de Firebase
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
}

// Inicializar la aplicación Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Obtener una referencia al servicio de almacenamiento
export const storage = getStorage(firebaseApp)
