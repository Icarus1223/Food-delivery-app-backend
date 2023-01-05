const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

const cheeseSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  cal: { 
    type: Number,
    required: true, 
  }
});

module.exports = Cheese = mongoose.model("cheese", cheeseSchema);