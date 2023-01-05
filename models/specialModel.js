const mongoose = require("mongoose");

const specialSchema = new mongoose.Schema({
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

module.exports = Special = mongoose.model("special", specialSchema);