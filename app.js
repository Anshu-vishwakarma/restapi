require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const Product = require("./models/product");

const products_routes_post = require("./routes/products");

app.post("/", async (req, res) => {
  
    
    const userdata = new Product({
      name: req.body.name,
    price: req.body.price,
    company: req.body.company,
    rating: req.body.rating,
    createdAt: req.body.createdAt,
    company: req.body.company,
      
    });
  
    try {
      const savedUserdata = await userdata.save();
      res.send(savedUserdata);
    } catch (error) {
      res.status(400).send(error);
    }
  
});

// middleware or to set router
app.use("/api/products", products_routes_post);

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
