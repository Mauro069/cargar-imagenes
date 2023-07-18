const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const { mimetype } = file;

    if (mimetype.includes("jpeg" || "png" || "webp")) {
      cb(null, "./storage");
    }
  },
  filename: function (req, file, cb) {
    const { mimetype } = file;

    const fileType = mimetype.split("/")[1];

    cb(null, `${file.fieldname}-${Date.now()}.${fileType}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
