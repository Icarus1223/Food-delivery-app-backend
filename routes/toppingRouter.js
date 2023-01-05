const router = require("express").Router();
const Topping = require("../models/toppingModel");
const mongoose = require("mongoose");

const multer = require("multer");
const upload = multer({dest: '../pizza-store-frontend/public/uploads/pic'})

router.post('/fileupload', upload.array('pic'), (req, res) => {
  
  const iPath_img = req.files[0].path;
  const iPath_imgWhole = req.files[1].path;
  const iPath_Right = req.files[2].path;
  const iPath_Left = req.files[3].path;
  
  const topping = new Topping({
    name: req.body.name,
    img: iPath_img.substr(31),
    imgWhole: iPath_imgWhole.substr(31),
    imgRight: iPath_Right.substr(31),
    imgLeft: iPath_Left.substr(31),
    cal: req.body.cal,
    price: req.body.price,
    category: req.body.category
  });
  topping.save()
    .then(
        res.json('upload is done')
      )
})


router.post("/add", async (req, res) => {
  try {
    let { name, cal, price, category, img, imgWhole, imgRight, imgLeft } = req.body.data;

    // validate

    if (!name || !cal || !category || !price)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newTopping = new Topping({
      name,
      cal, 
      price,
      category,
      img,
      imgWhole,
      imgRight,
      imgLeft
    });
    const savedTopping = await newTopping.save();
    res.json(savedTopping);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  Topping.find({}, function (err, topping) {
    if(err){
        res.send(err);
    }else{
        res.send(topping);
    }
})
});

module.exports = router;
