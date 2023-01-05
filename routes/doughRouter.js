const router = require("express").Router();
const Dough = require("../models/doughModel");
const mongoose = require("mongoose");

router.post("/add", async (req, res) => {
  try {
    let { name, cal } = req.body.data;

    // validate

    if (!name || !cal)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newDough = new Dough({
      name,
      cal
    });
    const savedDough = await newDough.save();
    res.json(savedDough);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  Dough.find({}, function (err, dough) {
    if(err){
        res.send(err);
    }else{
        res.send(dough);
    }
})
});

module.exports = router;
