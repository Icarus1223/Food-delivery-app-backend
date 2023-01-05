const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

const comboSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  price: { 
    type: Number, 
    required: true, 
  },
  comboId: { 
    type: ObjectId, 
    required: true, 
  },
  caption: { 
    type: String, 
    required: true, 
  },
  product: {
    type: Array, 
    required: true,
  }
});

module.exports = Combo = mongoose.model("combo", comboSchema);