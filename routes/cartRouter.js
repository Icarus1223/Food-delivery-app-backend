const router = require("express").Router();
const auth = require("../middleware/auth");
const Product = require("../models/productModel");
const cart = 

router.post("/", auth, async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user
    console.log(productId, userId)
    return res.status(200).json({ success: true })
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
})

module.exports = router;