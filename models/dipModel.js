const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

const dipSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  price: { 
    type: Number,
    required: true, 
  },
  img: { 
    type: String,
    required: true, 
  }
});

module.exports = Dip = mongoose.model("dip", dipSchema);