require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");



const products_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("Hi, it's works ");
});

// middleware or to set router
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(5000, () => {
      console.log(`${5000} Yes I am connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
