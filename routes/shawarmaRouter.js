const router = require("express").Router();
const Shawarma = require("../models/shawarmaModel");
const mongoose = require("mongoose");

router.post("/add", async (req, res) => {
  try {
    let { name, add, price, menuId } = req.body.data;

    // validate

    if (!name || !price)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newShawarma = new Shawarma({
      name,
      add,
      price,
      menuId,
    });
    const savedShawarma = await newShawarma.save();
    res.json(savedShawarma);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  Shawarma.find({}, function (err, shawarma) {
    if(err){
        res.send(err);
    }else{
        res.send(shawarma);
    }
})
});

module.exports = router;
