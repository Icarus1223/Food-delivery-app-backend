const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

const chickenWingSauceSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
});

module.exports = ChickenWingSauce = mongoose.model("chickenWingSauce", chickenWingSauceSchema);