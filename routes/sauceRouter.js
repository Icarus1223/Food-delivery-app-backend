const router = require("express").Router();
const Sauce = require("../models/sauceModel");
const mongoose = require("mongoose");

const multer = require("multer");
const upload = multer({dest: '../pizza-store-frontend/public/uploads/pic'})

router.post('/fileupload', upload.single('pic'),  (req, res) => {
  const iPath = req.file.path;
  const sauce = new Sauce({
    name: req.body.name,
    img: iPath.substr(31),
    cal: req.body.cal
  });
  sauce.save()
    .then(
        res.json('upload is done')
      )
})

router.post("/add", async (req, res) => {
  try {
    let { name, cal } = req.body.data;

    // validate

    if (!name || !cal)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newSauce = new Sauce({
      name,
      cal
    });
    const savedSauce = await newSauce.save();
    res.json(savedSauce);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  Sauce.find({}, function (err, sauce) {
    if(err){
        res.send(err);
    }else{
        res.send(sauce);
    }
})
});

module.exports = router;
