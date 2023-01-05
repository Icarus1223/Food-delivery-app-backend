const router = require("express").Router();
const ChickenWingSauce = require("../models/chickenWingSauceModel");
const mongoose = require("mongoose");

router.post("/add", async (req, res) => {
  try {
    let { name } = req.body.data;

    // validate

    if (!name)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newChickenWingSauce = new ChickenWingSauce({ name });
    const saveChickenWingSauce = await newChickenWingSauce.save();
    res.json(saveChickenWingSauce);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  ChickenWingSauce.find({}, function (err, chickenWingSauce) {
    if(err){
        res.send(err);
    }else{
        res.send(chickenWingSauce);
    }
})
});

module.exports = router;
