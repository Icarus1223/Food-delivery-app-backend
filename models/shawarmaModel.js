const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

const shawarmaSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  add: { 
    type: String, 
  },
  price: { 
    type: Object, 
    required: true, 
  },
  menuId: { 
    type: ObjectId, 
    required: true, 
  }
});

module.exports = Shawarma = mongoose.model("shawarma", shawarmaSchema);