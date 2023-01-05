const router = require("express").Router();
const Combo = require("../models/comboModel");
const mongoose = require("mongoose");

router.post("/add", async (req, res) => {
  try {
    let { name, price, comboId, caption, product } = req.body.data;
    // validate

    if (!name)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newCombo = new Combo({
      name,
      price,
      comboId,
      caption,
      product
    });
    const savedCombo = await newCombo.save();
    res.json(savedCombo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/bySpecial", async (req, res) => {
  Combo.find({ comboId: req.body.data.id }, function (err, combos) {
    if(err){
        res.send(err);
    }else{
        res.send(combos);
    }
})
});

module.exports = router;