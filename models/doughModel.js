const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

const doughSchema = new mongoose.Schema({
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

module.exports = Dough = mongoose.model("dough", doughSchema);