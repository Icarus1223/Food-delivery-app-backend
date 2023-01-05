const router = require("express").Router();
const Special = require("../models/specialModel");
const mongoose = require("mongoose");

router.post("/add", async (req, res) => {
  try {
    let { name, cal } = req.body.data;

    // validate

    if (!name || !cal)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newSpecial = new Special({
      name,
      cal
    });
    const savedSpecial = await newSpecial.save();
    res.json(savedSpecial);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  Special.find({}, function (err, special) {
    if(err){
        res.send(err);
    }else{
        res.send(special);
    }
})
});

module.exports = router;
