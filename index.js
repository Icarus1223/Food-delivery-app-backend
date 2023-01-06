const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// set up express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose

let url = "mongodb://localhost:27017/foods";

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

// set up routes

app.use("/users", require("./routes/userRouter"));
app.use("/products", require("./routes/productRouter"));

app.use("/menus", require("./routes/menuRouter"));
app.use("/pizzas", require("./routes/pizzaRouter"));
app.use("/doughs", require("./routes/doughRouter"));
app.use("/sauce", require("./routes/sauceRouter"));
app.use("/cheese", require("./routes/cheeseRouter"));
app.use("/topping", require("./routes/toppingRouter"));
app.use("/special", require("./routes/specialRouter"));
app.use("/chickenWingSauce", require("./routes/chickenWingSauceRouter"));
app.use("/shawarma", require("./routes/shawarmaRouter"));
app.use("/modal", require("./routes/modalRouter"));
app.use("/combo", require("./routes/comboRouter"));
app.use("/dip", require("./routes/dipRouter"));
