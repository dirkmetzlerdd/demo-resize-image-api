const express = require("express");
const multer = require("multer");
const sharp = require("sharp");

const app = express();
const upload = multer();

const supportedFormats = ["jpeg", "png", "webp"];

app.post("/api/resize-image", upload.single("image"), (req, res) => {
  const buffer = req.file.buffer;

  console.log("Request", new Date())
  let { width = 600, format = "webp" } = req.query;
  if (!supportedFormats.includes(format)) format = "webp";

  sharp(buffer)
    .resize(width ? parseInt(width) : undefined)
    .toFormat(format)
    .toBuffer()
    .then((data) => {
      res.set("Content-Type", `image/${format}`);
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("An error occurred while processing the image");
    });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
