const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");

const filesPayloadExists = require("../middleware/filesPayLoadExists");
const fileExtLimiter = require("../middleware/fileExtLimiter");
const fileSizeLimiter = require("../middleware/fileSizeLimiter");

const PORT = process.env.CDN_PORT || 4000;

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:4000",
      "http://localhost:4200",
    ],
    methods: "POST, DELETE, GET",
  })
);

app.get("/", (req, res) => {});

app.post(
  "/upload",
  fileUpload({ createParentPath: true }),
  filesPayloadExists,
  fileExtLimiter([".png", ".jpg", "jpeg"]),
  fileSizeLimiter,
  (req, res) => {
    const files = req.files;

    Object.keys(files).forEach((key) => {
      const filePath = path.join(
        __dirname,
        "cdn",
        `${files[key].md5}.${files[key].name.split(".")[1]}`
      );
      files[key].mv(filePath, (err) => {
        if (err) return res.status(500).json({ status: 500, message: err });
      });
    });

    return res.status(200).json({ status: 200, message: files });
  }
);

app.listen(PORT, () => console.log(`CDN Server running on port ${PORT}`));
