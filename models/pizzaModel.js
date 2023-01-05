const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  bonus: { 
    type: String, 
  },
  bonusTopping: { 
    type: Number, 
  },
  price: { 
    type: Object, 
    required: true, 
  },
  menuId: { 
    type: ObjectId, 
    required: true, 
  },
  customize: { 
    type: Boolean, 
    required: true, 
  },
  standard: { 
    type: Array, 
    required: true, 
  }
});

module.exports = Pizza = mongoose.model("pizza", pizzaSchema);