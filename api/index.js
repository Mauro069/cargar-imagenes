const express = require("express");
const upload = require("./libs/storage");
const app = express();
const port = 3000;

// Ruta principal
app.post(
  "/upload-img",
  upload.fields([{ name: "image", maxCount: 1 }]),
  (req, res) => {
    const { image } = req.files;
    console.log({ file: req.file });

    res.send("¡Hola mundo desde la API!");
  }
);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La API está escuchando en http://localhost:${port}`);
});
