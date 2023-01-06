const router = require("express").Router();
const path = require("path");
const multer = require("multer");
const auth = require("../middleware/auth");
const Product = require("../models/productModel");

const storage = multer.diskStorage({
  destination: "./public/uploads/product/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage }).single("file")

router.post("/", auth, upload, async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newProduct = new Product({
      name: name,
      description: description,
      price: price,
      img: `uploads/product/${req.file.filename}`
    })
    await newProduct.save();
    return res.status(200).json({ success: true })
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
})

module.exports = router;
