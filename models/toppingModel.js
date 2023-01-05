const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

const toppingSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  img: {
    type: String,
    required: true
  },
  imgWhole: {
    type: String,
    required: true
  },
  imgRight: {
    type: String,
    required: true
  },
  imgLeft: {
    type: String,
    required: true
  },
  cal: { 
    type: Number, 
  },
  price: { 
    type: Number, 
    required: true, 
  },
  category: {
    type: String,
    required: true,
  }
});

module.exports = Topping = mongoose.model("topping", toppingSchema);