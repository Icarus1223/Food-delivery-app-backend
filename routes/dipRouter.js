const router = require("express").Router();
const Dip = require("../models/dipModel");
const mongoose = require("mongoose");

router.post("/add", async (req, res) => {
  try {
    let { name, price, img } = req.body.data;
    // validate

    if (!name || !price || !img)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newDip = new Dip({
      name,
      price,
      img
    });
    const savedDip = await newDip.save();
    res.json(savedDip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  Dip.find({}, function (err, dip) {
    if(err){
        res.send(err);
    } else{
        res.send(dip);
    }
})
});

module.exports = router;
