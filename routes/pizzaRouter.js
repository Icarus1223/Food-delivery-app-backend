const router = require("express").Router();
const Pizza = require("../models/pizzaModel");
const mongoose = require("mongoose");

router.post("/add", async (req, res) => {
  try {
    let { name, bonus, bonusTopping, price, menuId, customize, standard } = req.body.data;

    // validate

    if (!name)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newPizza = new Pizza({
      name,
      bonus,
      bonusTopping,
      price,
      menuId,
      customize,
      standard
    });
    const savedPizza = await newPizza.save();
    res.json(savedPizza);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/byMenu", async (req, res) => {
  Pizza.find({ menuId: req.body.data.id }, function (err, pizzas) {
    if(err){
        res.send(err);
    }else{
        res.send(pizzas);
    }
})
});

module.exports = router;
