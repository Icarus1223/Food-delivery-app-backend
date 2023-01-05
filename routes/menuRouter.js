const router = require("express").Router();
const Menu = require("../models/menuModel");

const multer = require("multer");
const upload = multer({dest: '../pizza-store-frontend/public/uploads/pic'})

router.post('/fileupload', upload.single('pic'),  (req, res) => {
  const iPath = req.file.path;
  const menu = new Menu({
    name: req.body.name,
    img: iPath.substr(31)
  });
  menu.save()
    .then(
        res.json('upload is done')
      )
})

router.post("/add", async (req, res) => {
  try {
    let { name, img } = req.body.data;

    validate

    if (!name || !img)
      return res.status(400).json({ msg: "Not all fields have been entered." });
    
    const existingMenu = await Menu.findOne({ name: name });
    if (existingMenu)
      return res
        .status(400)
        .json({ msg: "A menu already exists." });

    const newMenu = new Menu({
      name,
      img
    });
    const savedMenu = await newMenu.save();
    res.json(savedMenu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  Menu.find({}, function (err, menus) {
    if(err){
        res.send(err);
    }else{
        res.send(menus);
    }
  })
});


module.exports = router;
