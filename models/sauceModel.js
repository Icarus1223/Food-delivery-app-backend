const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

const sauceSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  cal: { 
    type: Number,
    required: true, 
  },
  img: {
    type: String, 
    require: true
  }
});

module.exports = Sauce = mongoose.model("sauce", sauceSchema);