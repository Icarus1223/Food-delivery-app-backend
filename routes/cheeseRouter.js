const router = require("express").Router();
const Cheese = require("../models/cheeseModel");
const mongoose = require("mongoose");

router.post("/add", async (req, res) => {
  try {
    let { name, cal } = req.body.data;

    // validate

    if (!name || !cal)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newCheese = new Cheese({
      name,
      cal
    });
    const savedCheese = await newCheese.save();
    res.json(savedCheese);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  Cheese.find({}, function (err, cheese) {
    if(err){
        res.send(err);
    }else{
        res.send(cheese);
    }
})
});

module.exports = router;
